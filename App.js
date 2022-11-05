import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoanListView from './componenets/LoanListView';
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';

//Screens
import Login from './screens/Login';
import Signup from './screens/Signup';
import Welcome from './screens/Welcome';

export default function App() {
  return (
    <View>
      <UserLoanLeaseRequests/>
    </View>

  );
  
}


