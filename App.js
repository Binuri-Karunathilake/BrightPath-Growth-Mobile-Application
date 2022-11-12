import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FinancialInstitutions from './componenets/FinancialInstitutions';
import LoanListView from './componenets/LoanListView';
import Request from './componenets/Request'
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';
import LoanLeaseDetails from './componenets/LoanLeaseDetails';
import InquiresList from './componenets/InquiresList';
import InspectionList from './componenets/InspectionList';
import InquiryProfile from './componenets/InquiryProfile';
import Inspection from './componenets/InspectionForm';

//React navigation stack
import RootStack from './navigators/RootStack';

export default function App() {
  return (
    <RootStack />

  );
  
}


