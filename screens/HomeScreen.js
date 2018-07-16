import React from 'react';
import {Platform,ScrollView,StyleSheet,Text,TouchableOpacity,View,Image,ImageBackground,KeyboardAvoidingView,
} from 'react-native';
import { WebBrowser } from 'expo';
import WeeklyLabs from '../components/Labs';
import Weeklyfluid from '../components/WeeklyFluid';
import DailyFluid from '../components/Dailyfluid';
import { Header } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          backgroundColor= '#2f95dc'
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{icon: 'exit-to-app', color: '#fff'}}
        />
        <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
            {/* Daily fluid intake graph */}
            <View style = {{marginTop: 10}}>
              <Text style = {{textAlign: 'center'}}>Daily Fluid Intake In Liters</Text>
            </View>
            <DailyFluid/>
          

            {/* weeklyfluid fluid intake graph */}
            <View  style = {{marginTop: 10}}>
              <Text style = {{textAlign: 'center'}}>Weekly Fluid Intake In Liters</Text>
            </View>
            <Weeklyfluid/>
        

            {/* weeklyLabs graph */}
            <View style = {{marginTop: 10}}>
              <Text style = {{textAlign: 'center'}}>Weekly Labs</Text>
            </View>
            <WeeklyLabs/>
      </ImageBackground>
      </ScrollView>
    )
}

  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    mainwallpaper:{
      flex: 1,
      width: undefined,
      height: undefined,
      backgroundColor:'transparent',
    },
  });

  

 