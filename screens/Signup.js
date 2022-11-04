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

const Signup = () =>{
    const[hidePassword, setHidePassword] = useState(true);

    return(
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>
                <PageTitle>Signup</PageTitle>
                {/* <SubTitle>Sign In</SubTitle> */}
 
                <Formik
                    initialValues={{userName: '', email: '', password: '', ConfirmPassword: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <TextInput 
                            label= "User Name"
                            icon= "person"
                            placeholder="Name"
                            placeholderTextColor={darkLight}   
                            onChangeText={handleChange('userName')}
                            onBlur={handleBlur('userName')}
                            value={values.userName}
                        />

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

                        <TextInput 
                            label= "Confirm Password"
                            icon= "lock"
                            placeholder="*************"
                            placeholderTextColor={darkLight}   
                            onChangeText={handleChange('ConfirmPassword')}
                            onBlur={handleBlur('ConfirmPassword')}
                            value={values.ConfirmPassword}
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
                    
                        <ExtraView>
                            <ExtraText>Already have an account.</ExtraText>
                            <TextLink>
                                <TextLinkContent> Sign In</TextLinkContent>
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

export default Signup;