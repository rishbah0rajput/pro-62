import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View>
        <TouchableOpacity style={styles.header}>
          <Text style={styles.text}>School Attendance App</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  header: { 
    backgroundColor: '#ffaa23',  
    borderWidth: 4,
    borderColor: 'black',
  
  },
  text: {
    fontFamily: 'Rockwell',
    fontWeight: 2,
    fontSize: 27,
    padding: 8,
  },
});
