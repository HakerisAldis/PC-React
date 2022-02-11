import { Text, StyleSheet, View } from 'react-native';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{ title }</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    alignSelf: 'stretch',
    padding: 15
  },
  text: {
    fontSize: 30
  }
});

export default Header;
