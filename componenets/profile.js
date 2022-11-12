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



const text = {title: 'What is a loan?', description: 'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ',
                type: 'Lease',
                financialInstitute: 'Bank of Ceylon',
                interestRate: 22.9,
                period: 24,
                amount: 1200000,
                history: 'Village did removed enjoyed explainer man feelings own shy. Request norland neither ssured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe'}
const user = {
  name: 'Author Morgan', 
  jobTitle: "Architect", 
  email: 'authormorgan@gmail.com', 
  address: 'somewhere and nowhere', 
  idea: "I have an idea for a startup and I'm looking for a co-founder",
  ideaIndustry: "Retail", 
  reason: "T shirt printing.Print t shirts with the skills of own designing skills.Need a co-founder who has experience and knowledge on retail industry and job market.",
  hours: "0-10 hours per week"}


const Profile = () => {

  return (
    <View>
      <StatusBar hidden />
      <ScrollView style={styles.container}>

          <View style={styles.imageView}>
              <View style={styles.detailsContainer}>
                  <Image
                      source={{
                          uri: 'https://images.pexels.com/photos/14208380/pexels-photo-14208380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                      }}
                      style={styles.image}
                      />
                      <View style={styles.details}>
                              <Text style={styles.title}>{user.name}</Text>
                          <Text style={styles.subtitle}>{user.jobTitle}</Text>
                          <Text style={styles.subtitle}>{user.address}</Text>
                          <Text style={styles.description}>{user.email}</Text>
                      </View>
              </View>
          </View>

          <View style={styles.form}>
          <View>

            <View style={styles.container1}>

            <View>
                            <Text style={styles.questions}>My Idea :</Text>
                            <Text style={styles.features}>{user.idea}</Text>
                            <Text style={styles.questions}>Why join with me : </Text>
                            <Text style={styles.paragraph}>{user.reason}</Text>
                            <Text style={styles.questions}>Idea Industry : </Text>
                            <Text style={styles.paragraph}>{user.ideaIndustry}</Text>
                            <Text style={styles.questions}>Hours per week available to work : </Text>
                            <Text style={styles.paragraph}>{user.hours}</Text>
                        </View>
                        
        

                        <MsgBox>...</MsgBox>
                        
                        <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                        <StyleButton1>
                            <ButtonText>Request</ButtonText>
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

export default Profile

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