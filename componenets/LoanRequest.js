import { Button, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import KeyboardAvoidingWrapper from './KeyboardAvoidingWrapper'
import { Dropdown } from 'react-native-element-dropdown';
import { Entypo } from '@expo/vector-icons';
import Input from './Input';

//formik
import { Formik } from "formik";

//icons
import {Octicons,Ionicons, Fontisto} from '@expo/vector-icons';

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



const LoanRequest = () => {

  const [selected, setSelected] = React.useState("");
  
  const data = [
    { label: 'Loan', value: 'Loan' },
    { label: 'Lease', value: 'Lease' },
  ];

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

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
                {renderLabel()}
                <Dropdown
                  style={[styles.dropdown, isFocus && { borderColor: '#00b300' }]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  iconStyle={styles.iconStyle}
                  data={data}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select item' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                  }}
                  renderLeftIcon={() => (
                    <Entypo name='shop' size={24} color='black' style={{ marginHorizontal: 10 }} />
                  )}
                />
              </View>
              <View style={styles.container}>

                      <View >
                        <TextInput
                          style={styles.input}
                          // onChangeText={onChangeNumber}
                          // value={number}
                          placeholder="useless placeholder"
                          keyboardType="numeric"
                        />
                      </View>


              </View>
          </View>

          </View>

          </ScrollView>
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
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
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