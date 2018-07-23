import React from 'react';
import { ScrollView, StyleSheet, KeyboardAvoidingView, Text, View, ImageBackground } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Icon, Header, Card } from 'react-native-elements'






export default class TreatmentScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <KeyboardAvoidingView style={styles.container}  enabled>
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
        <Card>
            <View>
              <Text>Treatment History</Text>
            </View>
        </Card>
        <View style={{ marginTop: 10}}>
            <Button 
              backgroundColor= '#2f95dc'
              raised
              onPress={() =>navigate('Treatmentform')}
              title='Add Treatment' />
        </View>
      </ImageBackground>
      </KeyboardAvoidingView>
    );
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
