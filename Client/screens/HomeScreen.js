import React from 'react';
import {Alert,ScrollView,StyleSheet,Text,TouchableOpacity,View,Image,ImageBackground,KeyboardAvoidingView,
} from 'react-native';
import {navigate} from 'react-navigation'
import DailyFluid from '../components/Dailyfluid';
import { Header, Icon } from 'react-native-elements';
import WeeklyFluidmodal from '../components/WeeklyFluidmodal';
import Weeklylabmodal from '../components/Weeklylabmodal';
import API from '../utils/API';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    user: 'defaultUser'
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = () => {
    API.getPatient(1).then(response => this.setState({
      user: response[0].username
    }));
  }

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
              <Text style={{fontSize: 25, textAlign: 'center', fontFamily: 'serif'}}>Welcome To Dial-Assist!, {this.state.user}</Text>
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
            <WeeklyFluidmodal/>
            


            {/* weeklyLabs graph */}
            <View style = {{marginTop: 20}}>
              <Text style = {{textAlign: 'center', fontSize: 20, fontFamily: 'Roboto'}}>Weekly Labs Average</Text>
            </View>
            <Weeklylabmodal/>
            <View style= {{marginBottom: 55}}></View>
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

  

 