import React from "react";
import { StatusBar } from 'expo-status-bar';

import {
    InnerContrainer,
    PageTitle,
    StyledFormArea,
    StyleButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar
}from '../componenets/styles';


const Welcome = ({navigation}) =>{

    return(
        <>
            <StatusBar style="light" />
            <InnerContrainer>
            <WelcomeImage resizeMode="cover" source={require('../assets/img/Welcome.jpg')}/>
                <WelcomeContainer>
                <PageTitle Welcome={true}>Welcome !</PageTitle>
                {/* <SubTitle Welcome={true}>Welcome !</SubTitle> */}
 
                    <StyledFormArea>
                    <Avatar resizeMode="cover" source={require('../assets/img/UEE_logo_2.png')}/>
                        <Line />
                        <StyleButton onPress={() => {navigation.navigate('Login')
                    }}>
                            <ButtonText>Logout</ButtonText>
                        </StyleButton>
                    </StyledFormArea>
                    
                </WelcomeContainer>
            </InnerContrainer>
        </>
    );
};


export default Welcome;