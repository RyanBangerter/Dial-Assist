import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Text, View, ImageBackground } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements'
import { Header } from 'react-native-elements';




export default class TreatmentScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} behavior= 'padding' enabled>
        <Header
          backgroundColor= '#2f95dc'
          leftComponent={
           <Icon name='home'
            color='white'
            onPress={() => navigate('Home')}
            />
          }
          centerComponent={{ text: 'Treatment Log', style: { color: '#fff' } }}
          rightComponent={ 
          <Icon
            name="exit-to-app"
            color='white'
            onPress={() => navigate('Auth')}
          />} 
        />
        <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
        <View>
          <Text style = {{textAlign: 'center'}}>Before Dialysis</Text>
        </View>
        {/* Before Treatment */}
        {/* Suggested fluid to remove field */}
        <FormLabel>Suggested Fluid To Remove</FormLabel>
          <FormInput onChangeText={_Sfluid}  placeholder='Fluid in L' />
          <FormValidationMessage></FormValidationMessage>

         {/*Actual fluid to remove field  */}
        <FormLabel>Actual Fluid To Remove</FormLabel>
          <FormInput onChangeText={_Afluid}  placeholder='Fluid in L' />
          <FormValidationMessage></FormValidationMessage>
        <View>
          <Text style = {{textAlign: 'center'}}>After Dialysis</Text>
        </View>
        {/* After Treatment */}
        {/* Blood volume processed */}
        <FormLabel>Blood Volume Processed</FormLabel>
          <FormInput onChangeText={_BVP}  placeholder='Volume in L' />
          <FormValidationMessage></FormValidationMessage>
        
        {/* Total fluid removed */}
        <FormLabel>Total Fluid Removed</FormLabel>
          <FormInput onChangeText={_Tfluid}  placeholder='Fluid in L' style={{marginLeft: 50}} />
          <FormValidationMessage></FormValidationMessage>
          <Button 
          backgroundColor= '#2f95dc'
          raised
          title='Submit' />
      </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
  _Sfluid = () => {
  };
  _Afluid = () => {
  };
  _BVP = () => {
  };
  _Tfluid = () => {
  };

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
