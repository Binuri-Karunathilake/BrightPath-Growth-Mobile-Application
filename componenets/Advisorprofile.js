import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View, StatusBar } from 'react-native'
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




const user = {
  name: '      Author Morgan', 
  
  email: 'authormorgan@gmail.com', 
  address: '       somewhere and nowhere', 



  details: "Experienced and driven Financial Advisor with over five years of experience providing clients with optimal assistance with retirement planning, estate planning, investment advice, tax strategies, and overall support managing their finances. Proven track record of competitive market share expansion and assisting corporations in reaching goals. Driven and detail-oriented with the ability to thrive in high pressure environments. Adept at developing key relationships and furthering business development.",

  Category: "       financial advisor",
  phonenumber:"       0779814934",
  Availabledays:"       Monday and saturday"
}


const Advisorprofile = () => {

  return (
    <View>
      <StatusBar hidden />
      <ScrollView style={styles.container}>

          <View style={styles.imageView}>
          <Text>

{"\n"}
</Text>
              <View style={styles.detailsContainer}>
                
                  <Image
                      source={{
                          uri: 'https://images.pexels.com/photos/13747843/pexels-photo-13747843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      }}
                      style={styles.image}
                      />
                      <View style={styles.details}>
                      <Text>
{"\n"}

</Text>
                              <Text style={styles.title}>{user.name}</Text>
                          <Text style={styles.subtitle}>{user.Category}</Text>
                          <Text style={styles.subtitle}>{user.address}</Text>
                          <Text style={styles.subtitle}>{user.phonenumber}</Text>
                          <Text style={styles.subtitle}>{user.Availabledays}</Text>


                          
                      </View>
              </View>
          </View>

          <View style={styles.form}>
            
          <View>

            <View style={styles.container1}>

            <View>
                            <Text> {"\n"} </Text>
                            
                            <Text style={styles.questions}>Details :</Text>
                            <Text style={styles.features}>{user.details}</Text>
                            <Text> {"\n"} </Text>


                        </View>
                        
        

                        <MsgBox>...</MsgBox>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <StyleButton1>
                            <ButtonText>+ Contact</ButtonText>
                        </StyleButton1>
                        </View>
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

export default Advisorprofile

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
  icon: {
    marginRight: 5,
  },


  featuredImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
    marginRight: 20,
    borderRadius: 10,
},
calcs: {
    padding: 20,
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#ffff',
    margin: 15,
    minHeight: 200,
},
bottomActions: {
    height: 80,
    backgroundColor: '#e5a865',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 20,
    paddingBottom: 30
},
heading: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 30,
},
paragraph: {
    flex: 1,
    marginBottom: 10,
    // fontFamily: 'Georgia'
    fontSize: 14,
    lineHeight: 16 * 1.5,
    textAlign: 'justify'
},
questions: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 8
},
features: {
    fontWeight: '500',
    fontSize: 15,
    marginBottom: 15,
    color: '#1d1f1e',

},
})