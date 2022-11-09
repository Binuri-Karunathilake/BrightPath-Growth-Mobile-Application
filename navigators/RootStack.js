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

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootStack;