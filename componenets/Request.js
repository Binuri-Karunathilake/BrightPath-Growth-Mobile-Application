import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
//import DatePicker from 'react-native-modern-datepicker';

//import DateTimePicker from '@react-native-community/datetimepicker';

//formik
import { Formik } from "formik";




import {
    StyledContainer,
    InnerContrainer,
    PageTitle,
    StyledFormArea,
    
    StyledInputLabel,
    StyledTextInput,
    
    StyleButton,
    ButtonText,
    Colors,
    Line,
    MsgBox,
    
}from '../componenets/styles';

import { View,Text, TouchableOpacity } from "react-native";
//colors
const {brand,darkLight,primary} = Colors;

//keyboard avoiding view
import KeyboardAvoidingWrapper from "../componenets/KeyboardAvoidingWrapper";

const Request = ({navigation}) =>{
    const[hidePassword, setHidePassword] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');
    const [show, setShow] = useState('false');
    const [date, setDate] = useState(new Date(2022,11,12));
    const [dob, setDob] = useState();

    const onChange= (event, selectedDate) => {
        const currentDate = selectDate ||date;
        setShow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

const showDatePicker = () => {
    setShow(true);
}
    
    
    return(
        <KeyboardAvoidingWrapper>
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContrainer>

                <PageTitle >Request a new Adviser</PageTitle>
                
                




                

                <Formik
                    initialValues={{adviser: '', catogory: '', date: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                        navigation.navigate('Welcome');
                    }}
                >{({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <TextInput 
                            label= "Want Adviser Name"
                            
                            placeholder=" Enter Name"
                            placeholderTextColor={darkLight}   
                            onChangeText={handleChange('adviser')}
                            onBlur={handleBlur('adviser')}
                            value={values.adviser}
                        />


                        <TextInput 
                            label= "Category"
                            
                            placeholder=" select category"
                            placeholderTextColor={darkLight}   
                            onChangeText={handleChange('Category')}
                            onBlur={handleBlur('Category')}
                            value={values.Category}
                        />

                        <TextInput 
                            label= "Date"
                            placeholder=" YYYY - MM -DD"
                            placeholderTextColor={darkLight}   
                            onChangeText={handleChange('date')}
                            onBlur={handleBlur('date')}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                        />

                        
                        <MsgBox>...</MsgBox>
                        
                        <StyleButton onPress={handleSubmit}>
                            <ButtonText>Request</ButtonText>
                        </StyleButton>
                    
                        <Line />
                    
                        
                        
                        

                    </StyledFormArea>
                    )
                }
                </Formik>
            </InnerContrainer>
        </StyledContainer>
        </KeyboardAvoidingWrapper>
    );
};

const TextInput =({isDate, showDatePicker,  label, ...props}) =>{
    return (
        <View>
            
            
            <StyledInputLabel> {label}</StyledInputLabel>
            
            {!isDate && <StyledTextInput {...props}/>}
            {isDate && (
                <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props}/>

                </TouchableOpacity>
            )}
            
            
        </View>
    )
}

export default Request;