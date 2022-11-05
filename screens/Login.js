import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';

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

const Login = ({navigation}) =>{
    const[hidePassword, setHidePassword] = useState(true);

    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>
                <PageLogo resizeMode="cover" source={require('../assets/img/UEE_logo_2.png')}/>
                <PageTitle>Sign In</PageTitle>
                {/* <SubTitle>Sign In</SubTitle> */}
 
                <Formik
                    initialValues={{email: '', password: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                        navigation.navigate('Welcome');
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
                            onChangeText={handleChange('Password')}
                            onBlur={handleBlur('Password')}
                            value={values.Password}
                            secureTextEntry={hidePassword}
                            isPassword={true}    
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}                     
                        />
                        <MsgBox>...</MsgBox>
                        <StyleButton onPress={handleSubmit}>
                            <ButtonText>Sign In</ButtonText>
                        </StyleButton>
                        <Line />
                        <StyleButton google={true} onPress={handleSubmit}>
                            <Fontisto name="google" color={primary} size={25} />
                            <ButtonText>   Sign In With Google</ButtonText>
                        </StyleButton>
                        <ExtraView>
                            <ExtraText>Don't have an account already?</ExtraText>
                            <TextLink onPress={() => navigation.navigate('Sign up')}>
                                <TextLinkContent> Sign Up</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                        <ExtraView>
                            <TextLink>
                                <TextLinkContent>Continue Without Sign In</TextLinkContent>
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