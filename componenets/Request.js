import React from 'react';
import { StyleSheet, Text, View,TextInput, TouchableOpacity } from 'react-native';
//import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-modern-datepicker';
export default class Requst extends React.Component {
  render() {
    return (
        <View style ={styles.Requst}>
            <Text style={styles.header}>Request a new advisor</Text>
            <Text style={styles.text}>Want advisor name</Text>
            <TextInput style={styles.textinput} placeholder="Lalith de silva"
            underlineColorAndroid={'transparent'}/>
            <Text style={styles.text}>Want advisor name</Text>

            <TextInput style={styles.textinput} placeholder="Select Category"
            underlineColorAndroid={'transparent'}/>

<Text style={styles.text}>Date Want</Text>

            <TextInput style={styles.textinput} placeholder="mm/dd/yyyy"
            underlineColorAndroid={'transparent'}/>



            <TouchableOpacity style={styles.button}>
                <Text style={styles.btntext}>Request</Text>
            </TouchableOpacity>

        </View>
    );

  }

  
}
const BasicUsage = () => {
    const [selectedDate, setSelectedDate] = useState('');
  
    return (
      <DatePicker
        onSelectedChange={date => setSelectedDate(date)}
      />
    );
  };
const styles = StyleSheet.create({
  Request:  {
    alignSelf: 'stretch',
    
  },
  header: {
    fontSize:24,
    color:'#1E1E1E',
    fontWeight: "bold",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: '#199187',
    borderBottomWidth: 1,
  },
  textinput: {
    color: '#9B9B9B',
    alignSelf: 'stretch',
    height: 40,
    marginBottom: 30,
    color:'#fff',
    paddingLeft: 20,
    borderBottomColor: '#f8f8f8',
    borderBottomWidth: 1,

    
  },

  button: {
    alignself:'stretch',
    alignItems: 'center',
    padding: 20,
    backgroundColor:'#0BCE83',
    marginTop: 30,
  },
  btntext: {
    color: '#fff',
    fontWeight: 'bold'
  }

});
