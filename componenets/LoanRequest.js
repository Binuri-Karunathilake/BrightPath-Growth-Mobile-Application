import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper'
import { Dropdown } from 'react-native-element-dropdown';
import { Entypo } from '@expo/vector-icons';
import Input from './Input';

//formik
import { Formik } from "formik";

//icons
import {Octicons,Ionicons, Fontisto} from '@expo/vector-icons';

//styles
import {
  StyledContainer,
  InnerContrainer,
  PageTitle,
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
  TextLinkContent,
  StyledTextInput1,
  StyleButton1,
  StyledTextInput2,
  StyledTextInput3
}from './styles';
import COLORS from './Colors';
import axios from 'axios';
import { API_URL } from '../assets/constant/commonConstants';

//====================dev Data ignore
const SPACING = 20
const AVATAR_SIZE = 70;
const BUTTON_CONTAINER_SIZE = 38
const ITEM_SIZE = AVATAR_SIZE + BUTTON_CONTAINER_SIZE + SPACING * 6 + 5
const stage = 'approved'

const item = {
  name: 'Author Morgan',
  email: 'boi@gmail.com',
  jobTitle: 'Operations Specialist',
  purpose: 'Business Improvements'
}
//===============================



const LoanRequest = ({navigation}) => {

  const [institute, setInstitute] = React.useState("");
  
  const type = [
    { label: 'Machinery', value: 'Machinery' },
    { label: 'Vehicle', value: 'Vehicle' },
  ];

  const conditionTypes = [
    { label: 'New', value: 'New' },
    { label: 'Used', value: 'Used' },
  ];

  const institutes = [
    { label: 'BOC', value: 'BOC' },
    { label: "Peoples' bank", value: "Peoples' bank" },
    { label: "Reaching", value: "Reaching" }
  ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const [bankName, setBankName] = useState('');

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: '#00b300' }]}>
            Dropdown label
          </Text>
        );
      }
      return null;
    };


  return (
    <View>
                              <Text> {"\n"} </Text>
                              <View style={{ width: "80%", marginVertical:5 }}>
            <Text
                style={{
                color: 'black',
                fontSize: 24,
                fontWeight: "600",
                paddingLeft: 88,

                }}
            >
                Loan Requests

            </Text>
        </View>

      <ScrollView style={styles.container}>
          <View style={styles.imageView}>
              <View style={styles.detailsContainer}>
                
                  <Image
                      source={{
                          uri: 'https://images.pexels.com/photos/6206971/pexels-photo-6206971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      }}
                      style={styles.image}
                      />
                      <View style={styles.details}>
                              <Text style={styles.title}>{item.name}</Text>
                          <Text style={styles.subtitle}>{item.email}</Text>
                          <Text style={styles.description}>{item.jobTitle}</Text>
                          <Text style={styles.description}>{item.purpose}</Text>
                      </View>
              </View>
              <TouchableOpacity style={styles.calButton2} onPress={() => {navigation.navigate('UserLoanRequests')}}>
                <Text style={styles.btntext2}>Current Loans/Leases</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.form}>
          <View style={styles.calButtonView}>
            <TouchableOpacity style={styles.calButton} onPress={() => {navigation.navigate('Calculator')}}>
                <Text style={styles.btntext}>Loan/Lease Calculator</Text>
            </TouchableOpacity>
          </View>
          <View>

            <View style={styles.container1}>

              <Formik
                    initialValues={{ amount: '', reason: '', history: ''}}
                    onSubmit={ async (values) =>{
                      try {
                        const newRequest = await axios.post(API_URL + 'api/loan/loan', {values});
                        console.log(newRequest);
                        navigation.navigate('UserLoanRequests');
                      } catch (error) {
                        console.log(error);
                      }
                    }}>
                      
                      {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>

                        
                          <TextInput 
                            label= "Loan Amount"
                            icon= "database"
                            placeholder="Rs. "
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('amount')}
                            onBlur={handleBlur('amount')}
                            value={values.amount}                  
                        />
                      
                        <StyledInputLabel>Financial Institution</StyledInputLabel>
                          <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: '#00b300' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={institutes}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={bankName}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                              setBankName(item.value);
                              setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                              <Octicons name='organization' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                            )}
                          />

                          <TextInput2 
                            label= "How it will help you..."
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('reason')}
                            onBlur={handleBlur('reason')}
                            value={values.reason}
                            multiline = {true}
                            numberOfLines = {4}
                            // secureTextEntry={hidePassword}
                            // isPassword={true}    
                            // hidePassword={hidePassword}
                            // setHidePassword={setHidePassword}                     
                        />  

                          <TextInput2 
                            label= "Have you obtained a loan before?"
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('history')}
                            onBlur={handleBlur('history')}
                            value={values.history}
                            multiline = {true}
                            numberOfLines = {4}
                            // secureTextEntry={hidePassword}
                            // isPassword={true}    
                            // hidePassword={hidePassword}
                            // setHidePassword={setHidePassword}                     
                        />


                        <MsgBox>...</MsgBox>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <StyleButton1 onPress={handleSubmit}>
                            <ButtonText>Request</ButtonText>
                        </StyleButton1>
                        </View>

                    </StyledFormArea>
                    )
                }
                </Formik>


              </View>

          
          </View>

          </View>

          </ScrollView>
              </View>
  )
}

const TextInput =({label, icon, ...props}) =>{
  return (
      <View>
          <LeftIcon>
              <Octicons name={icon} size={20} color={COLORS.brand}/>
          </LeftIcon>
          
          <StyledInputLabel> {label}</StyledInputLabel>
  
          <StyledTextInput1 {...props} />

      </View>
  )
}

const TextInput2 =({label, icon, ...props}) =>{
  return (
      <View>
          <LeftIcon>
              <Octicons name={icon} size={20} color={COLORS.brand}/>
          </LeftIcon>
          
          <StyledInputLabel> {label}</StyledInputLabel>
  
          <StyledTextInput3 {...props} />

      </View>
  )
}

export default LoanRequest

const styles = StyleSheet.create({
  inputField: {

  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: SPACING/2,
    
  },
  container: {
    backgroundColor: '#E3E9E2',
    marginVertical: 20,
    marginBottom: 80
  },
  form: {
    opacity: 5,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  imageView: {
    padding: SPACING,
    marginTop: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.0)',
    borderRadius: 12,
    marginBottom: SPACING,
    shadowColor: 'black',
    shadowOffset: {
        width: 0,
        height: 10
    },
    shadowOpacity: 1,
    shadowRadius: 20,
},
  image: {
      width: 120,
      height: 120,
      borderRadius: AVATAR_SIZE,
      backgroundColor: 'red',
      marginEnd: 20
  },
  calButtonView: {
    flexDirection: 'row',
    justifyContent: "flex-end",
    marginBottom: 15
  },
  calButton: {
    backgroundColor: '#8A938F',
    padding: 8,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginEnd: 20,
  },
  calButton2: {
    paddingHorizontal: 20,
    borderRadius: 20,
    marginEnd: 20,
    marginLeft: '40%'
  },
  btntext: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  btntext2: {
    color: 'grey',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  root: {
      flex: 1,
      backgroundColor: '#fff'
  },
  title: {
      fontSize: 18,
      fontWeight: '700',
      maxWidth: '70%',
      marginBottom: 5
  },
  subtitle: {
      fontSize: 14,
      opacity: .7
  },
  description: {
      fontSize: 12,
      opacity: .8,
      color: '#0099cc'
  },
  details: {
      flexShrink: 1,
      width: 200
  },
  container1: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10
  },
  dropdown: {
    height: 50,
    borderColor: '#808080',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
    color: COLORS.grey,
    marginBottom: 8
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
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