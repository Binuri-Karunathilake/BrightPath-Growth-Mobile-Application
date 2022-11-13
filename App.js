import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <RootStack />

  );
  
}


