import React, { Component } from 'react'
import { StyleSheet, View, Image, KeyboardAvoidingView, ImageBackground, StatusBar, Text, TouchableOpacity} from 'react-native'
export default class Login extends Component {
  render() {
    const { navigate } = this.props.navigation;
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
            <View>
              <StatusBar hidden={true}/>
              <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() =>navigate('Generalagreement')}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Got a Dial-Assist account?</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText} onPress={() =>navigate('Main')}>Login</Text>
              </TouchableOpacity>
            </View>
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