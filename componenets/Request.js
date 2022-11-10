import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
//import DatePicker from 'react-native-modern-datepicker';
import { Dropdown } from 'react-native-element-dropdown';
import { StyleSheet } from "react-native";
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

import COLORS from './Colors';


import { View,Text, TouchableOpacity } from "react-native";
//colors
const {brand,darkLight,primary,dark} = Colors;
import {Octicons,Ionicons, Fontisto} from '@expo/vector-icons';

//keyboard avoiding view
import KeyboardAvoidingWrapper from "../componenets/KeyboardAvoidingWrapper";

const Request = ({navigation}) =>{
    const[hidePassword, setHidePassword] = useState(true);
    const [selectedDate, setSelectedDate] = useState('');
    const [show, setShow] = useState('false');
    const [date, setDate] = useState(new Date(2022,11,12));
    const [dob, setDob] = useState();

    const [value, setValue] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    //const [isFocus3, setIsFocus3] = useState(false);

    const [condition, setCondition] = useState('');
    const [leaseType, setLeaseType] = useState('');
    const conditionTypes = [
        { label: 'financial advisor', value: 'financial advisor' },
        { label: 'Marketing advisor', value: 'Marketing advisor' },
      ];


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
            <Text> {"\n"} </Text>
            <Text> {"\n"} </Text>
                <PageTitle >Request a new Adviser</PageTitle>
                
                <Text> {"\n"} </Text>
                <Text> {"\n"} </Text>






                

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
                            placeholderTextColor={dark}   
                            onChangeText={handleChange('adviser')}
                            onBlur={handleBlur('adviser')}
                            value={values.adviser}
                        />
            <Text> {"\n"} </Text>


                      
                      <StyledInputLabel>Category</StyledInputLabel>
                          <Dropdown
                           style={[styles.dropdown, isFocus1 && { borderColor:{darkLight}    }]}
                           placeholderStyle={styles.placeholderStyle}
                           selectedTextStyle={styles.selectedTextStyle}
                           inputSearchStyle={styles.inputSearchStyle}
                           iconStyle={styles.iconStyle}
                           
                            data={conditionTypes}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus2 ? '  Select Category' : '...'}
                            searchPlaceholder="Search..."
                            value={condition}
                            onFocus={() => setIsFocus2(true)}
                            onBlur={() => setIsFocus2(false)}
                            onChange={item => {
                              // handleChange('condition', item.value)
                              setCondition(item.value)
                              setIsFocus2(false);
                            }}
                            renderLeftIcon={() => (
                              <Octicons name='multi-select' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                            )}
                          />

<Text> {"\n"} </Text>

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
            <Text> {"\n"} </Text>

                        
                        <MsgBox>...</MsgBox>
                        
                        <StyleButton onPress={handleSubmit}>
                            <ButtonText>Request</ButtonText>
                        </StyleButton>
                    
                        <Line />
                    
                        
                        <Text> {"\n"} </Text>
                        <Text> {"\n"} </Text>
                        <Text> {"\n"} </Text>

                        

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





const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        borderColor:  COLORS.grey,
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 8,
        color: COLORS.black,
        backgroundColor: COLORS.grey,

        
      },

      placeholderStyle: {
        fontSize: 16,
        color: COLORS.darkLight,
      },
      selectedTextStyle: {
        fontSize: 8,
        color: COLORS.grey,

      },
      iconStyle: {
        width: 20,
        height: 20,

      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
        
      },
    })