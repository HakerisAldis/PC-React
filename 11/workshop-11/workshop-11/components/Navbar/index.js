import { Link } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';

const Navbar = () => {
  return (
    <View style={styles.header}>
      <Link to={{screen: 'Academy'}}>Academy</Link>
      <Link to={{screen: 'Home'}}>Home</Link>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    padding: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default Navbar;
