import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoanRequest from './componenets/CoFounderRegister';
import LoanListView from './componenets/LoanListView';
import Request from './componenets/Request'
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';


//React navigation stack
import RootStack from './navigators/RootStack';
import CofounderList from './screens/Co-founder/Co-founderList';
import CofounderRegistration from './screens/Co-founder/Register';


export default function App() {
  return (
    <LoanRequest />
  );
  
}


