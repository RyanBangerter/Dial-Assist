import React, { Component } from 'react'
import { StyleSheet, View, Image, KeyboardAvoidingView, ImageBackground} from 'react-native'
import Loginform from '../components/Loginform';
export default class Login extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
          <View style={styles.logoContainer}>
              <Image 
              style={styles.logo}
              source={require('../assets/images/logo3.png')}
              />
          </View>
          <View style={styles.formContainer}>
          <Loginform/>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  },
  mainwallpaper:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo:{
    width: 350,
    height: 350
  },
  title:{
    color: '#ffffff',
    marginTop: 10,
    width: 200,
    textAlign: 'center',
    opacity: 0.6
  },
  formContainer:{
    // backgroundColor: 'rgba(0, 43, 163, 0.73)',
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  }
});