import React from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoanListView from './componenets/LoanListView';
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';
import InquiresList from './componenets/InquiresList';
import InspectionList from './componenets/InspectionList';
//React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <InspectionList />

  );
  
}


