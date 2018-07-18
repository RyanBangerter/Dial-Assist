import React from 'react';
import {Alert,ScrollView,StyleSheet,Text,TouchableOpacity,View,Image,ImageBackground,KeyboardAvoidingView,
} from 'react-native';
import {navigate} from 'react-navigation'
import WeeklyLabs from '../components/Labs';
import Weeklyfluid from '../components/WeeklyFluid';
import DailyFluid from '../components/Dailyfluid';
import { Header, Icon } from 'react-native-elements';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <Header
          backgroundColor= '#2f95dc'
          centerComponent={{ text: 'Home', style: { color: '#fff' }}}
          rightComponent={ <Icon
            name="exit-to-app"
            color='white'
            onPress={() => navigate('Auth')}
          />} 
         
        />
        <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
            {/* Daily fluid intake graph */}
            <View>
              <Text style={{fontSize: 25, textAlign: 'center', fontFamily: 'serif'}}>Welcome To Dial-Assist!</Text>
            </View>
            <View style = {{marginTop: 20}}>
              <Text style = {{textAlign: 'center', fontSize: 20}}>Daily Fluid Intake In Liters</Text>
            </View>
            <DailyFluid/>
            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style = {{color: 'rgb(3, 189, 196)', fontSize: 17}}>Current Fluid Consumed = .7L</Text>
            </View>
            <View style = {{paddingBottom: 20}}>
                <Text style = {{textAlign: 'center'}}>Fluid Goal = 1L or 32FLoz</Text>
            </View>
          

            {/* weeklyfluid fluid intake graph */}
            <View  style = {{marginTop: 10}}>
              <Text style = {{textAlign: 'center', fontSize: 20, fontFamily: 'Roboto'}}>Weekly Fluid Intake In Liters</Text>
            </View>
            <Weeklyfluid/>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between',paddingLeft: 10, paddingRight: 15}}>
              <Text>Mon</Text>
              <Text>Tue</Text>
              <Text>Wed</Text>
              <Text>Thu</Text>
              <Text>Fri</Text>
              <Text>Sat</Text>
              <Text>Sun</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40}}>
              <Text>High Level</Text>
              <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 66, 66)'}}></View>
              <Text>Perfect Level</Text>
              <View style={{width: 15, height: 15, backgroundColor: 'rgb(27, 51, 145)'}}></View>
            </View>
        

            {/* weeklyLabs graph */}
            <View style = {{marginTop: 50}}>
              <Text style = {{textAlign: 'center', fontSize: 20, fontFamily: 'Roboto'}}>Weekly Labs Average</Text>
            </View>
            <WeeklyLabs/>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40}}>
              <Text>High Level</Text>
              <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 66, 66)'}}></View>
              <Text>Perfect Level</Text>
              <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 223, 65)'}}></View>
              <Text>Low Level</Text>
              <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 160, 65)'}}></View>
            </View>
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

  

 