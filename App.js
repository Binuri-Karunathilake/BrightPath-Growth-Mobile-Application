import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoanListView from './componenets/LoanListView';
import Request from './componenets/Request'
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';

import HomeScreen from './screens/HomeScreen';
//React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <HomeScreen />

  );
  
}


