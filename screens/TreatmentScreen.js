import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'
import { Header } from 'react-native-elements';




export default class TreatmentScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
       <Header
          backgroundColor= '#2f95dc'
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Treatment', style: { color: '#fff' } }}
          rightComponent={{icon: 'exit-to-app', color: '#fff'}}
        />
        <View>
          <Text style = {{textAlign: 'center'}}>Before Dialysis</Text>
        </View>
        {/* Before Treatment */}
        {/* Suggested fluid to remove field */}
        <FormLabel>Suggested Fluid To Remove</FormLabel>
          <FormInput onChangeText={_Sfluid}  placeholder='Fluid in L' />
          <FormValidationMessage>Error message</FormValidationMessage>

         {/*Actual fluid to remove field  */}
        <FormLabel>Actual Fluid To Remove</FormLabel>
          <FormInput onChangeText={_Afluid}  placeholder='Fluid in L' />
          <FormValidationMessage>Error message</FormValidationMessage>
          <Button 
          backgroundColor= '#2f95dc'
          raised
          title='Submit' />

          
        <View style = {{marginTop: 10}}>
          <Text style = {{textAlign: 'center'}}>After Dialysis</Text>
        </View>
        {/* After Treatment */}
        {/* Blood volume processed */}
        <FormLabel>Blood Volume Processed</FormLabel>
          <FormInput onChangeText={_BVP}  placeholder='Volume in L' />
          <FormValidationMessage>Error message</FormValidationMessage>
        
        {/* Total fluid removed */}
        <FormLabel>Total Fluid Removed</FormLabel>
          <FormInput onChangeText={_Tfluid}  placeholder='Fluid in L' style={{marginLeft: 50}} />
          <FormValidationMessage>Error message</FormValidationMessage>
          <Button 
          backgroundColor= '#2f95dc'
          raised
          title='Submit' />

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
});
