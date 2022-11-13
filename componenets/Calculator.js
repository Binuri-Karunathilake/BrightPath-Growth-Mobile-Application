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

//====================dev Data ignore
const SPACING = 20
const AVATAR_SIZE = 70;
const BUTTON_CONTAINER_SIZE = 38
const ITEM_SIZE = AVATAR_SIZE + BUTTON_CONTAINER_SIZE + SPACING * 6 + 5
const stage = 'approved'

const item = {
  name: 'Author Morgan',
  email: 'authorm@gmail.com',
  jobTitle: 'Operations Specialist',
  purpose: 'for fun'
}
//===============================



const Calculator = () => {

  const [institute, setInstitute] = React.useState("");
  
  const type = [
    { label: 'Machinery', value: 'Machinery' },
    { label: 'Vehicle', value: 'Vehicle' },
  ];

  const conditionTypes = [
    { label: 'New', value: 'New' },
    { label: 'Used', value: 'Used' },
  ];

  const periods = [
    { label: '6 months', value: '6' },
    { label: '1 year', value: '12' },
    { label: '2 year', value: '24' },
    { label: '3 year', value: '36' },
    { label: '4 year', value: '48' },
    { label: '5 year', value: '60' },
  ];

  const institutes = [
    { label: 'Loan', value: 'Loan' },
    { label: "Lease", value: "Lease" },
  ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);

    const [bankName, setBankName] = useState('');
    const [requestType, setRequestType] = useState('');
    const [period, setPeriod] = useState('');
    const [interestRate1, setInterestRate1] = useState(0);
    const [rental, setRental] = useState(0);

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
      <ScrollView style={styles.container}>
      <Text
                style={{
                color: 'black',
                fontSize: 24,
                fontWeight: "800",
                marginTop: 40,
                textAlign: 'center'

                }}
            > Calculator

            </Text>
          <View style={styles.form}>
          <View>

            <View style={styles.container1}>

              <Formik
                    initialValues={{ amount: '', interestRate: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                        setInterestRate1(values.interestRate)
                        if(requestType === "Loan"){
                          const ref = values.amount/(((1 + values.interestRate)))
                        }
                    }}>
                      
                      {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>

                        <StyledInputLabel>Loan or Lease</StyledInputLabel>
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
                            value={requestType}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                              setRequestType(item.value);
                              setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                              <Octicons name='check' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                            )}
                          />

                        {/* <StyledInputLabel>Financial Institution</StyledInputLabel>
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
                          /> */}

                        
                          <TextInput 
                            label= "Interest Rate"
                            icon= "graph"
                            placeholder="Rs. "
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('interestRate')}
                            onBlur={handleBlur('interestRate')}
                            value={values.interestRate}                  
                        />
                      
                        <StyledInputLabel>Period</StyledInputLabel>
                          <Dropdown
                            style={[styles.dropdown, isFocus && { borderColor: '#00b300' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={periods}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={period}
                            onFocus={() => setIsFocus(true)}
                            onBlur={() => setIsFocus(false)}
                            onChange={item => {
                                setPeriod(item.value);
                              setIsFocus(false);
                            }}
                            renderLeftIcon={() => (
                              <Octicons name='clock' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                            )}
                          />

                        <TextInput 
                            label= "Amount (Rs.)"
                            icon= "database"
                            placeholder="Rs. "
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('amount')}
                            onBlur={handleBlur('amount')}
                            value={values.amount}                  
                        />


                        <MsgBox>...</MsgBox>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <StyleButton1 onPress={handleSubmit}>
                            <ButtonText>Calculate</ButtonText>
                        </StyleButton1>
                        </View>

                    </StyledFormArea>
                    )
                }
                </Formik>


              </View>

          
          </View>

          </View>

          <View style={styles.imageView}>
              <View style={styles.detailsContainer}>
                      <View style={styles.details}>
                            <Text style={styles.title}>Monthly Rental</Text>
                          <Text style={styles.subtitle}>Rs.{(Math.round(rental * 100) / 100).toFixed(2)}</Text>
                          <Text style={styles.title}>at {(Math.round(interestRate1 * 100) / 100).toFixed(1)} % </Text>
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

export default Calculator

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
    height: '100%',
  },
  form: {
    opacity: 5,
    backgroundColor: '#F2F2F2',
    padding: 20,
    marginTop: 10
  },
  imageView: {
    padding: SPACING,
    marginTop: 30,
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
  btntext: {
    color: '#ffff',
    fontWeight: 'bold',
  },
  root: {
      flex: 1,
      backgroundColor: '#fff'
  },
  title: {
      fontSize: 18,
      fontWeight: '700',
      marginBottom: 5,
    textAlign: 'center',
    fontFamily: 'monospace',
  },
  subtitle: {
      fontSize: 28,
      opacity: .7,
      textAlign: 'center',
      marginVertical: 10,
      fontFamily: 'monospace',
  },
  description: {
      fontSize: 12,
      opacity: .8,
      color: '#0099cc'
  },
  details: {
    flexDirection: 'column',
    justifyContent: 'center',
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