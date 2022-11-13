import React from 'react';
import {Colors} from '../componenets/styles';
const {primary, tertiary} =Colors;

// React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Screens
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Welcome from '../screens/Welcome';
import Admindashboard from '../screens/Admindashboard'
import AdvisersList from '../screens/AdvisersList';
import HomeScreen from '../screens/HomeScreen';
import AdvisorsRequests from '../componenets/AdvisorsRequests';
import LoanRequest from '../componenets/LoanRequest';
import LeaseRequest from '../componenets/LeaseRequest';
import LoanLeaseInfo from '../componenets/LoanLeaseInfo';
import FinancialInstitutions from '../componenets/FinancialInstitutions';
import CofounderList from '../screens/Co-founder/Co-founderList';
import CoFounderRegister from '../componenets/CoFounderRegister';
import profile from '../componenets/profile';
import LoanListView from '../componenets/LoanListView';
import Request from '../componenets/Request';
import CoFounderProfile from '../componenets/Co-founderProfile';
import Advisorprofile from '../componenets/Advisorprofile'
import UserLoanLeaseRequests from '../componenets/UserLoanLeaseRequests';
import Calculator from '../componenets/Calculator';
import LeaseListView from '../componenets/LeaseListView';
import LoanLeaseDetails from '../componenets/LoanLeaseDetails';
import InquiresList from '../componenets/InquiresList';
import Inspectionform from '../componenets/InspectionForm';
import Inseptionlist from '../componenets/InspectionList2'
import Advisorprofile2 from '../componenets/Advisorprofile2'
import Advisorprofile3 from '../componenets/Advisorprofile3'
import Advisorprofile4 from '../componenets/Advisorprofile4'
import Advisorprofile5 from '../componenets/Advisorprofile5'
import Advisorprofile6 from '../componenets/Advisorprofile6'


const Stack = createNativeStackNavigator();

const RootStack = () =>{
    return(
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerStyle:{
                        backgroundColor: 'transparent'
                    },
                    headerTintColor: tertiary,
                    headerTransparent: true,
                    headerTitle: '',
                    headerLeftContainerStyle: {
                        paddingLeft: 20
                    }
                }}
                initialRouteName="Login"
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Signup" component={Signup} />
                <Stack.Screen 
                // options={{headerTintColor: primary}}
                name="Welcome" component={Welcome} />
                <Stack.Screen 
                // options={{headerTintColor: primary}}
                name="Admindashboard" component={Admindashboard} />
                <Stack.Screen name="AdvisersList" component={AdvisersList} />
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="AdvisorsRequests" component={AdvisorsRequests} />
                <Stack.Screen name="LoanRequest" component={LoanRequest} />
                <Stack.Screen name="LeaseRequest" component={LeaseRequest} />
                <Stack.Screen name="LoanLeaseInfo" component={LoanLeaseInfo} />
                <Stack.Screen name="LoanLeaseDetails" component={LoanLeaseDetails} />
                <Stack.Screen name="FinancialInstitutions" component={FinancialInstitutions} />
                <Stack.Screen name="CofounderList" component={CofounderList} />
                <Stack.Screen name="CoFounderRegister" component={CoFounderRegister} />
                <Stack.Screen name="profile" component={profile} />
                <Stack.Screen name="LoanListView" component={LoanListView} />
                <Stack.Screen name="LeaseListView" component={LeaseListView} />
                <Stack.Screen name="Request" component={Request} />
                <Stack.Screen name="Advisorprofile" component={Advisorprofile} />
                <Stack.Screen name="UserLoanRequests" component={UserLoanLeaseRequests} />
                <Stack.Screen name="Calculator" component={Calculator} />
                <Stack.Screen name="CoFounderProfile" component={CoFounderProfile} />
                <Stack.Screen name="InquiresList" component={InquiresList} />
                <Stack.Screen name="Inspectionform" component={Inspectionform} />
                <Stack.Screen name="Inseptionlist" component={Inseptionlist} />
                <Stack.Screen name="Advisorprofile2" component={Advisorprofile2} />
                <Stack.Screen name="Advisorprofile3" component={Advisorprofile3} />
                <Stack.Screen name="Advisorprofile4" component={Advisorprofile4} />
                <Stack.Screen name="Advisorprofile5" component={Advisorprofile5} />
                <Stack.Screen name="Advisorprofile6" component={Advisorprofile6} />


                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;