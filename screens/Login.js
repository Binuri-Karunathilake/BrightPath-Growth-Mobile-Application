import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';

//API client
import axios from "axios";

//formik
import { Formik } from "formik";

//icons
import {Octicons,Ionicons, Fontisto} from '@expo/vector-icons';


import {
    StyledContainer,
    InnerContrainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon, 
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyleButton,
    ButtonText,
    Colors,
    Line,
    MsgBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent
}from '../componenets/styles';

import { View,Text } from "react-native";
//colors
const {brand,darkLight,primary} = Colors;


//keyboard avoiding view
import KeyboardAvoidingWrapper from "../componenets/KeyboardAvoidingWrapper";
import { API_URL } from "../assets/constant/commonConstants";

const Login = ({navigation}) =>{
    const[hidePassword, setHidePassword] = useState(true);

    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>
            <Text> {"\n"} </Text>

                <PageLogo resizeMode="cover" source={require('../assets/img/UEE_logo_2.png')}/>
                <Text> {"\n"} </Text>

                <PageTitle>Login</PageTitle>
                {/* <SubTitle>Sign In</SubTitle> */}
 
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={async (values) =>{

                        if(values.email === 'Admin1234' && values.password === 'Admin1234') {
                            navigation.navigate("Admindashboard");
                        }

                        try {
                            console.log(API_URL + 'api/user');
                            const newRequest = await axios.post(API_URL + 'api/user', {username: values.email, password: values.password});
                            console.log(newRequest.data);
                            navigation.navigate('HomeScreen');
                          } catch (error) {
                            console.log(error);
                          }

                        // console.log(values);
                        // navigation.navigate('Admindashboard');
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <TextInput 
                            label= "Email address"
                            icon= "mail"
                            placeholder="abc@gmail.com"
                            placeholderTextColor={darkLight}   
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardTypes="email-address"
                        />

                        <TextInput 
                            label= "Password"
                            icon= "lock"
                            placeholder="*************"
                            placeholderTextColor={darkLight}   
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.Password}
                            secureTextEntry={hidePassword}
                            isPassword={true}    
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}                     
                        />
                                    <Text> {"\n"} </Text>

                        <MsgBox>...</MsgBox>
                        <StyleButton onPress={handleSubmit}>
                            <ButtonText>Login</ButtonText>
                        </StyleButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Don't have an account already?</ExtraText>
                            <TextLink onPress={() => navigation.navigate('Signup')}>
                                <TextLinkContent> Sign Up</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>
                    )
                }
                </Formik>
            </InnerContrainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const TextInput =({label, icon, isPassword,hidePassword,setHidePassword, ...props}) =>{
    return (
        <View>
            <LeftIcon>
                <Octicons name={icon} size={30} color={brand}/>
            </LeftIcon>
            
            <StyledInputLabel> {label}</StyledInputLabel>
    
            <StyledTextInput {...props} />
            {isPassword && (
                    <RightIcon onPress={() => setHidePassword(!hidePassword)}>
                        <Ionicons name={hidePassword ? 'md-eye-off' : 'md-eye' }size={30} color={darkLight} />
                    </RightIcon>
            )}
        </View>
    )
}

export default Login;