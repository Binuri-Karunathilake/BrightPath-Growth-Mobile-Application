import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FinancialInstitutions from './componenets/FinancialInstitutions';
import LoanListView from './componenets/LoanListView';
import Request from './componenets/Request'
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';
import LoanLeaseDetails from './componenets/LoanLeaseDetails';


//React navigation stack
import RootStack from './navigators/RootStack';
import Requst from './componenets/Request';
import LoanRequest from './componenets/LoanRequest';
import LoanLeaseInfo from './componenets/LoanLeaseInfo';
import CofounderList from './screens/Co-founder/Co-founderList';

export default function App() {
  return (
      <RootStack />
  );
  
}


