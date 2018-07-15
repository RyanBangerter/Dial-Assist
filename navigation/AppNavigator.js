import React from 'react';
import { createSwitchNavigator } from 'react-navigation';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem('userToken');

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'App' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

import MainTabNavigator from './MainTabNavigator';
import Login from '../screens/LoginScreen';
import Fluidcardscreen from '../screens/Fluidcardscreen';
import Foodcardscreen from '../screens/Foodcardscreen';
import generaluseragreement from '../screens/generaluseragreementscreen';
import HIPPAuseragreement from '../screens/HIPPAagreementscreen';
import signupscreen from '../screens/signupscreen';

export default createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  Main: MainTabNavigator,
  Auth: Login,
  Fluidcard: Fluidcardscreen,
  Foodcard: Foodcardscreen,
  Generalagreement: generaluseragreement,
  HIPPAagreement: HIPPAuseragreement,
  signupscreen: signupscreen
},
{
   initialRouteName: 'Auth',

});
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: 'white'
  }
});