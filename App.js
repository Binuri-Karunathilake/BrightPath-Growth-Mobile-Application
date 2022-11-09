import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoanListView from './componenets/LoanListView';
import Request from './componenets/Request'
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';
import AdvisorsRequests from './componenets/AdvisorsRequests';
import AdvisersList from './screens/Login';
import { Dropdown } from 'react-native-element-dropdown';



import HomeScreen from './screens/HomeScreen';
//React navigation stack
import RootStack from './navigators/RootStack';
//import Admindashboard from './screens/Admindashboard';

export default function App() {
  return (
    <Request />

  );
  
}


