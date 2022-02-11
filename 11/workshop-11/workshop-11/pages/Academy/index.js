import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TextInput, FlatList, Text, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/Header';

const Academy = () => {

  const [data, setData] = useState([]);
  const [newData, setNewData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const json = await response.json();
      setData(json);
    }
    getData();
  }, []);

  const renderItem = (item) => {
    const { title, body } = item.item;
    return (
      <View>
        <Text>{ title }</Text>
        <Text>{ body }</Text>
      </View>
    )
  }

  const searchTitle = (value) => {
    const newRecord = data.filter(item => item.title.includes(value));
    if (value === '') {
      setNewData(data);
    } else {
      setNewData(newRecord);
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={searchTitle} placeholder='Filter'></TextInput>
              <FlatList
          data={newData || data} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    fontSize: 20,
    padding: 15,
    borderWidth: 1,
    marginVertical: 5,
    alignSelf: 'stretch'
  }
});

export default Academy;
