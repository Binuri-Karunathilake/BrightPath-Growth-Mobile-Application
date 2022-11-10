import styled from 'styled-components'
import { View, Text, Image, TextInput,Dropdown, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;
//colors
export const Colors = {
    primary: "#ffffff",
    secondary: "#E5E7EB",
    tertiary: "#1F2937",
    darkLight: "#9CA3AF",
    brand: "#0BCE83",
    green: "#10B981",
    red: "#EF4444",
    kkk:"#16537e"
};

const {primary, secondary, tertiary,darkLight, brand, green, red, kkk }= Colors;

export const StyledContainer = styled.View`
    flex: 1;
    padding: 50px;
    padding-top: ${StatusBarHeight +30}px;
    background-color: ${primary};
`
export const CardViewContainer = styled.View`
    flex: 1;
    padding: 2px;
    padding-top: ${StatusBarHeight +30}px;
    background-color: ${primary};
`;

export const InnerContrainer = styled.View`
    flex: 1;
    width: 100%;
    align-items: center;
`;

export const WelcomeContainer = styled(InnerContrainer)`
    padding: 25px;
    padding-top: 10px;
    justify-content: center;
`;

export const PageLogo = styled.Image`
    width: 150px;
    height: 150px;
`;

export const Avatar = styled.Image`
    width: 100%;
    height: 60%;
    margin: auto;
    border-radius: 50px;
    border-width: 2px;
    border-color: ${secondary};
    margin-bottom: 10px;
    margin-top: 5px;
`;

export const WelcomeImage = styled.Image`
    height: 20%;
    min-width: 100%;
`;

export const PageTitle = styled.Text`
    font-size: 35px;
    text-align: center;
    font-weight: bold;
    

    color: ${kkk};
    padding: 10px;

    ${(props) => props.Welcome &&`
        margin-top: 5px;
        font-weight: normal;
        font-size: 35px;
    `}
`;


export const SubTitle = styled.Text`
    font-size: 18px;
    margin-bottom: 20px;
    letter-spacing: 1px;
    font-weight: bold;
    color: ${tertiary};

    ${(props) => props.Welcome &&`
    margin-top: 5px;
    font-weight: normal;
`}
`;


export const StyledFormArea = styled.View`
    width: 100%;    
`;

export const StyledTextInput = styled.TextInput`
    background-color: ${secondary};
    padding: 15px;
    padding-left: 55px;
    padding-top:15px;
    padding-right: 55px;
    border-radius: 8px;
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 8px;
    color: ${tertiary};
`;

export const StyledTextInput2 = styled.TextInput`
    background-color: "white";
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 8px;
    border: 0.5px;
    border-color: '#808080';
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
    width: 150px;
`;

export const StyledTextInput3 = styled.TextInput`
    background-color: "white";
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 8px;
    border: 0.5px;
    border-color: '#808080';
    font-size: 16px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledTextInput4 = styled.TextInput`
    background-color: "white";
    padding: 1px;
    padding-left: 30px;
    padding-right: 30px;
    border-radius: 8px;
    border: 0.5px;
    border-color: '#808080';
    font-size: 12px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};
`;

export const StyledTextInput1 = styled.TextInput`
    background-color: "white";
    padding: 10px;
    padding-left: 55px;
    padding-right: 55px;
    border-radius: 8px;
    border: 0.5px;
    border-color: '#808080';
    font-size: 16px;
    height: 50px;
    margin-vertical: 3px;
    margin-bottom: 10px;
    color: ${tertiary};

`;

export const StyledInputLabel = styled.Text`
    color: ${tertiary};
    font-size: 15px;
    fontWeight: bold;
    text-align: left;
`;
export const StyledInputLabel1 = styled.Text`
    color: ${tertiary};
    font-size: 13px;
    fontWeight: bold;
    text-align: left;
`;

export const LeftIcon = styled.View`
    left: 15px;
    top:38px;
    position: absolute;
    z-index: 1;
`;

export const RightIcon = styled.TouchableOpacity`
    right: 15px;
    top:38px;
    position: absolute;
    z-index: 1;
`;


export const StyleButton = styled.TouchableOpacity`
    padding: 15px;
    background-color: ${brand};
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    height: 60px;

    ${(props) => props.google == true &&`
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const StyleButton1 = styled.TouchableOpacity`
    padding: 8px;
    background-color: ${green};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-vertical: 5px;
    height: 40px;
    width: 120px

    ${(props) => props.google == true &&`
        background-color: ${green};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const StyleButton2 = styled.TouchableOpacity`
    padding: 8px;
    background-color: ${red};
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    margin-vertical: 5px;
    height: 40px;
    width: 120px

    ${(props) => props.google == true &&`
        background-color: ${red};
        flex-direction: row;
        justify-content: center;
    `}
`;

export const ButtonText = styled.Text`
    color: ${primary};
    font-size: 16px;
    fontWeight: bold;
    ${(props) => props.google == true &&`
    padding: 25px;

    `}
`;

export const MsgBox = styled.Text`
    text-align: center;
    font-size: 13px;
`;

export const Line = styled.View`
    height: 1px;
    width: 100%;
    background-color: ${darkLight};
    margin-vertical: 10px;
`;

export const ExtraView = styled.View`
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 10px;
`;

export const ExtraText = styled.Text`
    justify-content: center;
    align-content: center;
    color: ${tertiary};
    font-size: 15px;
`;

export const TextLink = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextLinkContent =styled.Text`
    color: ${brand};
    font-size: 15px;
`;


























