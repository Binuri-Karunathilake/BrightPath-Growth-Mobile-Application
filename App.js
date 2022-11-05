import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Request from './componenets/Request';
export default class App extends React.Component {
  render()   {
  return (
      
      <Request />
    
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    jestifyContent: 'center',
    backgroundColor: '#F2F2F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
