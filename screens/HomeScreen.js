import React from 'react';
import {Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View,Image,ImageBackground,KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';
import WeeklyLabs from '../components/Labs';
import Weeklyfluid from '../components/WeeklyFluid';
import DailyFluid from '../components/Dailyfluid';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home' ,
  };

  render() {

    return (
      <ScrollView>
            {/* Daily fluid intake graph */}
            <View style = {{marginTop: 10}}>
              <Text style = {{textAlign: 'center'}}>Daily Fluid Intake In Liters</Text>
            </View>
            <DailyFluid/>
          

        {/* monthly fluid intake graph */}
        <View  style = {{marginTop: 10}}>
          <Text style = {{textAlign: 'center'}}>Weekly Fluid Intake In Liters</Text>
        </View>
        <Weeklyfluid/>
        
        <View style = {{marginTop: 10}}>
          <Text style = {{textAlign: 'center'}}>Weekly Labs</Text>
        </View>
        <WeeklyLabs/>
      </ScrollView>
    )
}


    // return (
    //   // <Login/>
    //   <KeyboardAvoidingView behavior='padding' style={styles.container}>
    //     <ImageBackground 
    //     source={require('../assets/images/background.jpg')}
    //     style ={styles.mainwallpaper}>
    //       <View style={styles.logoContainer}>
    //           <Image 
    //           style={styles.logo}
    //           source={require('../assets/images/logo3.png')}
    //           />
    //       </View>
    //       <View>

    //       </View>
    //     </ImageBackground>
    //   </KeyboardAvoidingView>
    // );
  }

  

  _handleLearnMorePress = () => {
    WebBrowser.openBrowserAsync('https://play.google.com/store?hl=en');
  };

  _handleHelpPress = () => {
    WebBrowser.openBrowserAsync(
      'https://healthcare.utah.edu/dialysis/'
    );
  };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logo:{
    width: 350,
    height: 350
  },
  mainwallpaper:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
