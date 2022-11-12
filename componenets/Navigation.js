import Icon from 'react-native-ico-material-design';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';


var iconHight = 26;
var iconWidth = 26;

export default class App extends React.Component{
    state = {
        screenText: 'Press a button'
    }

    changeText = (text) => {
        console.log(text + 'has been passed')
        this.setState({

        })
    }

    render() {
        return (
            <View style={StyleSheet.container}>

            <StatusBar style="auto"/>

           
<View style={styles.NavContainer}>
    <View style={styles.NavBar}>
        <Pressable onPress={() => this.changeText('fovourites')} style={styles.IconeBehave}
        android_ripple={{borderless:true, radius:50}}>
            <Icon name="favorite-heart-button" height={iconHight} width={iconWidth} color='#5E5E5E'/>
        </Pressable>


    </View>
</View>
</View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    NavContainer: {
        position: 'absolute',
        alignItems: 'center',
        bottom: 20,
    },

    NavBar: {
        flexDirection:'row',
        backgroundColor:'#eee',
        width: '90%',
        justifyContent: 'space-evenly',
        borderRadius: 40
    },
    IconeBehave: {
        padding: 14
    }

});