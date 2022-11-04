import React from "react";
import { StatusBar } from 'expo-status-bar';

import {
    StyledContainer,
    InnerContrainer,
    PageLogo,
    PageTitle
}from '../componenets/styles'

const Login = () =>{
    return(
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>
                <PageLogo resizeMode="cover" source={require('../assets/img/UEE_logo_2.png')}/>
                <PageTitle>Bright Path Growth</PageTitle>
            </InnerContrainer>
        </StyledContainer>
    );
}

export default Login;