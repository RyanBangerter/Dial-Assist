import React, { Component } from 'react'
import { StyleSheet, View, Image, KeyboardAvoidingView, ImageBackground, StatusBar, Text, TouchableOpacity} from 'react-native'
import Expo from 'expo';

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      signedIn: false,
      name: "",
      photoUrl: ""
    }
  }

  async signInWithGoogleAsync() {
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId: '51775336410-0uf8ntodrf52ktdph79cr7d34lvebj69.apps.googleusercontent.com',
        iosClientId: '51775336410-bd1vprc4vlc9m3ba2tusn9e223ano9i7.apps.googleusercontent.com',
        scopes: ['profile', 'email'],
      });

      if (result.type === 'success') {
        this.setState({
          signedIn: true,
          name: result.user.name,
          photoUrl: result.user.photoUrl
        });
        console.log("photoUrl: " + this.state.photoUrl + "\n name: " + this.state.name);
        this.props.navigation.navigate('Main');
        return result.accessToken;        
      } else {
        return {cancelled: true};
      }
    } catch(e) {
      return {error: true};
    }
  }


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

              {/* <TouchableOpacity style={styles.buttonContainer}>                
                {this.state.signedIn ? (
                  <Text 
                    style={styles.buttonText} 
                    onPress={() =>navigate('Main')}>Welcome {this.state.name}                    
                  </Text>                      
                ) : (
                  <Text 
                    style={styles.buttonText} 
                    onPress={this.signInWithGoogleAsync.bind(this)}>Sign In With Google</Text>
                )}                    
              </TouchableOpacity> */}
              <TouchableOpacity style={styles.buttonContainer}>
                    <Text 
                      style={styles.buttonText} 
                      onPress={this.signInWithGoogleAsync.bind(this)}>Sign In With Google
                    </Text>
              </TouchableOpacity>
              

              <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() =>navigate('signupscreen')}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.text}>Got a Dial-Assist account?</Text>
              <TouchableOpacity style={styles.buttonContainer}>
                  <Text style={styles.buttonText} onPress={() =>navigate('Main')}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );

    
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
    borderRadius: 100
},
  buttonText:{
    textAlign: 'center',
    color: 'white',
    fontWeight: '700'
},
  text:{
    textAlign: 'center',
    marginBottom: 3
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