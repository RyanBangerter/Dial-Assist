import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Text, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button } from 'react-native-elements'




export default class TreatmentScreen extends React.Component {
  static navigationOptions = {
    title: 'Dialysis Treatment',
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
