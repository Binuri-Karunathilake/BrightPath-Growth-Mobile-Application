import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import FinancialInstitutions from './componenets/FinancialInstitutions';
import LoanListView from './componenets/LoanListView';
import UserLoanLeaseRequests from './componenets/UserLoanLeaseRequests';

export default function App() {
  return (
    <View>
      <UserLoanLeaseRequests/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
