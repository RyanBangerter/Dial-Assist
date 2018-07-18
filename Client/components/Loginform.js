import React, { Component } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, StatusBar, Alert } from 'react-native'
import LinksScreen from '../screens/LinksScreen';
import {createStackNavigator} from 'react-navigation';
const Signup = createStackNavigator({
    Home: { screen: LinksScreen }
  });

export default class Loginform extends Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true}/>
        <TouchableOpacity style={styles.buttonContainer}onPress={this._handleSignup}>
              <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Got a Dial-Assist account?</Text>
        <TouchableOpacity style={styles.buttonContainer}>
            <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
  _handleSignup = () => {
   navigate('Home');
  };
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    helpLinkText:{
        color: 'rgba(0, 0, 0, 0.48)'
    },
    text:{
        textAlign: 'center',
        fontWeight: '700'
    },
    input:{
        height: 40,
        width: 300,
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 10,
        color: 'rgba(0, 0, 0, 0.68)'
    },
    buttonContainer:{
        backgroundColor:'rgb(0, 165, 211)',
        paddingVertical: 20,
        width: 300,
        marginBottom: 20,
        borderRadius:100
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    }
});