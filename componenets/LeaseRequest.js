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



const LeaseRequest = () => {

  const [selected, setSelected] = React.useState("");
  
  const type = [
    { label: 'Loan', value: 'Loan' },
    { label: 'Lease', value: 'Lease' },
  ];

  const conditionTypes = [
    { label: 'New', value: 'New' },
    { label: 'Used', value: 'Used' },
  ];

  const institutes = [
    { label: 'BOC', value: 'BOC' },
    { label: "Peoples' Bank", value: "Peoples' Bank" },
  ];

    const [value, setValue] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);

    const [condition, setCondition] = useState('');
    const [leaseType, setLeaseType] = useState('');
    // const [brand, setbrand] = useState('');
    // const [model, setmodel] = useState('');
    // const [amount, setAmount] = useState(0);
    const [bankName, setBankName] = useState('');
    // const [interestRate, setInterestRate] = useState(0);
    // const [reason, setReason] = useState('');


  return (
    <View>
      <ScrollView style={styles.container}>

          <View style={styles.imageView}>
              <View style={styles.detailsContainer}>
                  <Image
                      source={{
                          uri: 'https://loremflickr.com/cache/resized/65535_52440891686_c2b21da412_c_640_480_nofilter.jpg'
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
          </View>

          <View style={styles.form}>
          <View style={styles.calButtonView}>
            <TouchableOpacity style={styles.calButton}>
                <Text style={styles.btntext}>Loan/Lease Calculator</Text>
            </TouchableOpacity>
          </View>
          <View>

            <View style={styles.container1}>

              <Formik
                    initialValues={{ brand: '', model: '', amount: '', reason: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                        console.log("type " + leaseType);
                        console.log("condition " + condition);
                        console.log("bank Name " + bankName);
                    }}>
                      
                      {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                            <StyledInputLabel>Lease or Loan</StyledInputLabel>
                      <Dropdown
                        style={[styles.dropdown, isFocus1 && { borderColor: '#00b300' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={type}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus1 ? 'Lease/Loan' : '...'}
                        searchPlaceholder="Search..."
                        value={leaseType}
                        onFocus={() => setIsFocus1(true)}
                        onBlur={() => setIsFocus1(false)}
                        onChange={item => {
                          // handleChange('leaseType')
                          setLeaseType(item.value)
                          setIsFocus1(false);
                        }}
                        renderLeftIcon={() => (
                          <Octicons name='multi-select' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                        )}
                      />


                      <StyledInputLabel>Condition</StyledInputLabel>
                          <Dropdown
                            style={[styles.dropdown, isFocus2 && { borderColor: '#00b300' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={conditionTypes}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus2 ? 'New/Old' : '...'}
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

                        <TextInput 
                            label= "Brand"
                            icon= "rocket"
                            placeholder="..."
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('brand')}
                            onBlur={handleBlur('brand')}
                            value={values.brand}
                        />

                        
                        <TextInput 
                            label= "Model"
                            icon= "id-badge"
                            placeholder="Model name - year"
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('model')}
                            onBlur={handleBlur('model')}
                            value={values.model}                  
                        />

                        <TextInput 
                            label= "Lease Amount"
                            icon= "database"
                            placeholder="Rs. "
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('amount')}
                            onBlur={handleBlur('amount')}
                            value={values.amount}                  
                        />

                          <StyledInputLabel>Financial Institution</StyledInputLabel>
                          <Dropdown
                            style={[styles.dropdown, isFocus3 && { borderColor: '#00b300' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={institutes}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus3 ? 'Select item' : '...'}
                            searchPlaceholder="Search..."
                            value={bankName}
                            // onFocus={() => setIsFocus3(true)}
                            // onBlur={() => setIsFocus3(false)}
                            onChange={item => {
                              // handleChange('bankName',)
                              setBankName(item.value)
                              setIsFocus3(false);
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

export default LeaseRequest

const styles = StyleSheet.create({
  inputField: {

  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: SPACING/2,
    
  },
  container: {
    backgroundColor: '#E3E9E2'
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