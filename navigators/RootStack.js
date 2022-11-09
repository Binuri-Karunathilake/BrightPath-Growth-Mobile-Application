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
import AdvisorsRequests from '../componenets/AdvisorsRequests'
import LoanRequest from '../componenets/LoanRequest'
import LeaseRequest from '../componenets/LeaseRequest'
import LoanLeaseInfo from '../componenets/LoanLeaseInfo'
import FinancialInstitutions from '../componenets/FinancialInstitutions'
import CofounderList from '../screens/Co-founder/Co-founderList'
import profile from '../componenets/profile'
import LoanListView from '../componenets/LoanListView'




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
                <Stack.Screen name="Sign up" component={Signup} />
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
                <Stack.Screen name="FinancialInstitutions" component={FinancialInstitutions} />
                <Stack.Screen name="CofounderList" component={CofounderList} />
                <Stack.Screen name="profile" component={profile} />
                <Stack.Screen name="LoanListView" component={LoanListView} />

                
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;