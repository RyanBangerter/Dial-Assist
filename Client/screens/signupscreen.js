import React from 'react';
import { Card } from 'react-native-elements';
import {ScrollView, View, TouchableOpacity, Text, StyleSheet, ImageBackground} from 'react-native';
import { WebBrowser } from 'expo';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements';

export default class Signup extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
      <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
        <View style= {{marginBottom: 200}}>
          <Card title="Sign Up">
            <FormLabel>Email</FormLabel>
            <FormInput  placeholder='example@example.com' />
            <FormValidationMessage>Please provide correct Email</FormValidationMessage>
            <FormLabel>Password</FormLabel>
            <FormInput placeholder='password'/>
            <FormValidationMessage>Incorrect Password</FormValidationMessage>
            <Button 
                backgroundColor= '#2f95dc'
                raised
                title='Sign Up' onPress={() =>navigate('Generalagreement')}/>
          </Card>
        </View>
      </ImageBackground>
        
      </ScrollView>
   )
  }
}
  const styles = StyleSheet.create({
    container: {
      marginTop: 200,
      flexGrow: 1,
      backgroundColor: 'white',
    },
    mainwallpaper:{
      flex: 1,
      width: undefined,
      height: undefined,
      backgroundColor:'transparent',
    },
  });
  

