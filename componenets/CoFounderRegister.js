import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper'
import { Dropdown } from 'react-native-element-dropdown';
import { Entypo } from '@expo/vector-icons';
import Input from './Input';
import SelectList from 'react-native-dropdown-select-list'


//formik
import { Formik } from "formik";

//icons
import {Octicons,Ionicons, Fontisto} from '@expo/vector-icons';

//styles
import {
  StyledFormArea,
  LeftIcon, 
  StyledInputLabel,
  ButtonText,
  MsgBox,
  StyledTextInput1,
  StyleButton1,
  StyleButton2,
  StyledTextInput3,
  StyledInputLabel1,
  StyledTextInput4
}from './styles';
import COLORS from './Colors';

//====================dev Data ignore
const SPACING = 20
const AVATAR_SIZE = 70;
const BUTTON_CONTAINER_SIZE = 38
const ITEM_SIZE = AVATAR_SIZE + BUTTON_CONTAINER_SIZE + SPACING * 6 + 5


const item = {
  name: 'Author Morgan',
  jobTitle: 'Operations Specialist',
  address: 'abc rd',
  email: 'authorm@gmail.com',
  
}
//===============================

const CoFounderRegister = () => {

  const [selected, setSelected] = React.useState("");
  
  const idea = [
    { label: "I have an idea for a startup and I'm looking for a co-founder", value: 'Startup' },
    { label: "I am looking to partner up on someone else's idea as a co-founder", value: "Partnership" },
  ];

  const ideaIndustry = [
    { label: 'Finance/Fintech', value: 'Finance/Fintech' },
    { label: 'Retail', value: 'Retail' },
    { label: 'E-commerce', value: 'E-commerce' },
    { label: 'Construction/trade', value: 'Construction/trade' },
    { label: 'Agency-digital(marketing/web...)', value: 'Agency-digital' },
    { label: 'Agency-other(real estate, recruitment)', value: 'Agency-other' },
    { label: 'Consulting', value: 'Consulting' },
    { label: 'Manufacturing', value: 'Manufacturing' },
    { label: 'Wholesale', value: 'Wholesale' },
    { label: 'Web or Mobile app', value: 'Web or Mobile app' },
    { label: 'Website', value: 'Website' },
    { label: 'other', value: 'other' },

  ];

  const duration = [
    { label: '0-10 hours per week', value: '0-10' },
    { label: '10-20 hours per week', value: '10-20' },
    { label: '20-30 hours per week', value: '20-30' },
    { label: '30+ hours per week', value: '30+' },

  ];

    const [value, setValue] = useState(null);
    const [isFocus1, setIsFocus1] = useState(false);
    const [isFocus2, setIsFocus2] = useState(false);
    const [isFocus3, setIsFocus3] = useState(false);

    
    const [myidea, setIdea ] = useState('');
    const [industry, setIndustry] = useState('');
    const [hours, setDuration] = useState('');
    // const [myidea, setIdea ] = useState('');
    // const [myidea, setIdea ] = useState('');
    
    // const renderLabel = () => {
    //   if (value || isFocus) {
    //     return (
    //       <Text style={[styles.label, isFocus && { color: '#00b300' }]}>
    //         Dropdown label
    //       </Text>
    //     );
    //   }
    //   return null;
    // };


  return (
    <KeyboardAvoidingWrapper>
    <View>
      <ScrollView>
          <View style={styles.updateform}>
          <View>

            <View style={styles.container1}>

              <Formik
                    initialValues={{name:'', jobTitle: '', address: '',email: '', reason: '', myskills: '', wantskills: ''}}
                    onSubmit={(values) =>{
                        console.log(values);
                        console.log("My idea " + myidea );
                        console.log("Idea Industr " + industry );
                        console.log("Hours per week " + hours);
                    }}>
                      
                      {({handleChange, handleBlur, handleSubmit, values}) => (
                        
                    <StyledFormArea>
                      <View style={styles.container2}>
                        <View style={styles.imageView1}>
                          <View style={styles.updatedetailsContainer}>
                            <Image 
                              source={{
                                  uri: 'https://images.pexels.com/photos/14208380/pexels-photo-14208380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                              }}
                              style={styles.image}
                            />
                              <View>
                                <TextInput3 
                                    label= "Name"
                                    placeholder="name "
                                    placeholderTextColor={COLORS.darkLight}   
                                    onChangeText={handleChange('name')}
                                    onBlur={handleBlur('name')}
                                    value={values.name}                  
                                />
                                    <TextInput3 
                                    label= "job Title"
                                    placeholder="jobTitle "
                                    placeholderTextColor={COLORS.darkLight}   
                                    onChangeText={handleChange('jobTitle')}
                                    onBlur={handleBlur('jobTitle')}
                                    value={values.jobTitle}                  
                                />
                                    <TextInput3 
                                    label= "Address"
                                    placeholder="address "
                                    placeholderTextColor={COLORS.darkLight}   
                                    onChangeText={handleChange('address')}
                                    onBlur={handleBlur('address')}
                                    value={values.address}                  
                                />
                                    <TextInput3 
                                    label= "Email"
                                    placeholder="email "
                                    placeholderTextColor={COLORS.darkLight}   
                                    onChangeText={handleChange('email')}
                                    onBlur={handleBlur('email')}
                                    value={values.email}                  
                                />
                              </View>
                          </View>
                        </View>
                      </View>
                      <View style={styles.container3}>
                  <StyledInputLabel>My Idea</StyledInputLabel>
                     <Dropdown
                        style={[styles.dropdown, isFocus1 && { borderColor: '#00b300' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={idea}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus1 ? 'Select' : '...'}
                        searchPlaceholder="Search..."
                        value={myidea}
                        onFocus={() => setIsFocus1(true)}
                        onBlur={() => setIsFocus1(false)}
                        onChange={item => {
                          setIdea(item.value);
                          setIsFocus1(false);
                        }}
                        renderLeftIcon={() => (
                          <Octicons name='multi-select' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                        )}
                      /> 
                     
                      <TextInput2 
                            label= "Why join with me ... "
                            icon= "person-add"
                            placeholderTextColor={COLORS.darkLight}   
                            onChangeText={handleChange('reason')}
                            onBlur={handleBlur('reason')}
                            value={values.reason}
                            multiline = {true}
                            numberOfLines = {4}                
                        />

                      <StyledInputLabel>Idea Industry</StyledInputLabel>
                          <Dropdown
                            style={[styles.dropdown, isFocus2 && { borderColor: '#00b300' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={ideaIndustry}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus2 ? 'Select Industry' : '...'}
                            searchPlaceholder="Search..."
                            value={industry}
                            onFocus={() => setIsFocus2(true)}
                            onBlur={() => setIsFocus2(false)}
                            onChange={item => {
                              setIndustry(item.value);
                              setIsFocus2(false);
                            }}
                            renderLeftIcon={() => (
                              <Octicons name='multi-select' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                            )}
                          />

                          <StyledInputLabel>Hours per week available to work</StyledInputLabel>
                          <Dropdown
                            style={[styles.dropdown, isFocus3 && { borderColor: '#00b300' }]}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            iconStyle={styles.iconStyle}
                            data={duration}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus3 ? 'Select hours' : '...'}
                            searchPlaceholder="Search..."
                            value={hours}
                            onFocus={() => setIsFocus3(true)}
                            onBlur={() => setIsFocus3(false)}
                            onChange={item => {
                              setDuration(item.value);
                              setIsFocus3(false);
                            }}
                            renderLeftIcon={() => (
                              <Octicons name='clock' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                            )}
                          />
                          <TextInput2 
                            label= "My Skills ... "
                            placeholderTextColor={COLORS.darkLight} 
                            icon= "checklist"  
                            onChangeText={handleChange('myskills')}
                            onBlur={handleBlur('myskills')}
                            value={values.myskills}
                            multiline = {true}
                            numberOfLines = {4}                 
                        />
                          <TextInput2 
                            label= "Want Skills ... "
                            placeholderTextColor={COLORS.darkLight} 
                            icon= "checklist"  
                            onChangeText={handleChange('wantskills')}
                            onBlur={handleBlur('wantskills')}
                            value={values.wantskills}
                            multiline = {true}
                            numberOfLines = {4}                 
                        />
                          </View>


                        <MsgBox>...</MsgBox>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <StyleButton1 onPress={handleSubmit}>
                            <ButtonText>Save</ButtonText>
                        </StyleButton1>
                        </View>
                        <View style={{flexDirection: 'row', color: '#000000' , justifyContent: 'flex-end'}}>
                        <StyleButton2 onPress={handleSubmit}>
                            <ButtonText>Cancel</ButtonText>
                        </StyleButton2>
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
              </KeyboardAvoidingWrapper>
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

const TextInput3 =({label, icon, ...props}) =>{
  return (
      <View>
                
          <StyledInputLabel1> {label}</StyledInputLabel1>
  
          <StyledTextInput4 {...props} />

      </View>
  )
}


export default CoFounderRegister

const styles = StyleSheet.create({
  inputField: {

  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: SPACING/2,
    
  },
  
  updatedetailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: SPACING/80,
    
  },

  container: {
    backgroundColor: '#E3E9E2'
  },
  container2: {
    backgroundColor: '#E3E9E2',
    borderRadius: 20
  },

  container3: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginTop:20
  },
  form: {
    opacity: 5,
    backgroundColor: '#F2F2F2',
    padding: 20,
  },
  updateform: {
    opacity: 5,
    backgroundColor: '#F2F2F2',
    padding: 20,
    marginTop:30,
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
imageView1: {
  padding: SPACING,
  marginTop: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.0)',
  borderRadius: 12,
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