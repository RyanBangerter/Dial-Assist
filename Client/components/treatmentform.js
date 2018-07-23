import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Text, View, ImageBackground } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Icon } from 'react-native-elements'





export default class treatmentform extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container} enabled>
        <View style = {{marginTop: 50}}>
            <Text style = {{textAlign: 'center', fontSize: 20}}>Date Of Dialysis</Text>
        </View>
        <FormLabel>Treatment Date</FormLabel>
          <FormInput onChangeText={_Tdate}  placeholder='mm/dd/yyyy' />
          <FormValidationMessage></FormValidationMessage>
        <View>
          <Text style = {{textAlign: 'center', fontSize: 20}}>Before Dialysis</Text>
        </View>
        {/* Before Treatment */}
        {/* Suggested fluid to remove  */}
        <View style={{flexDirection: 'row', justifyContent:'center', marginTop: 5}}>
            <Text style={{color: 'rgb(3, 189, 196)'}}>Suggested Fluid To Remove = </Text>
            <Text style={{color: 'rgb(3, 189, 196)'}}>3L</Text>
        </View>

         {/*Actual fluid to remove field  */}
        <FormLabel>Actual Fluid To Remove</FormLabel>
          <FormInput onChangeText={_Afluid}  placeholder='Fluid in L' />
          <FormValidationMessage></FormValidationMessage>
        <View>
          <Text style = {{textAlign: 'center', fontSize: 20}}>After Dialysis</Text>
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
          onPress={() =>navigate('Treatment')}
          raised
          title='Submit' />
      </KeyboardAvoidingView>
    );
  }
}
  _Tdate = () => {
  };
  _Afluid = () => {
  };
  _BVP = () => {
  };
  _Tfluid = () => {
  };
  _Sfluid=()=>{

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
