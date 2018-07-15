import React from 'react';
import { Avatar, Card } from 'react-native-elements';
import {ScrollView, View, TouchableOpacity, Text, StyleSheet, ImageBackground} from 'react-native';
import { Header } from 'react-native-elements';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
         <Header
          backgroundColor= '#2f95dc'
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Settings', style: { color: '#fff' } }}
          rightComponent={{icon: 'exit-to-app', color: '#fff'}}
        />
        <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
        <View style={{marginLeft: 10, marginTop: 10}}>
          <Avatar
            xlarge
            rounded
            title="PIC"
            onPress={() => alert("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <View style={{marginBottom: 120}}>
          <Card title="Profile Name">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Foodcard')}>
                      <Text>Change Profile Name</Text>
                  </TouchableOpacity>  
                </View>
          </Card>
          <Card title="User Name">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Foodcard')}>
                      <Text>Change User Name</Text>
                  </TouchableOpacity>  
                </View>
          </Card>
          <Card title="Password">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Foodcard')}>
                      <Text>Change Password</Text>
                  </TouchableOpacity>  
                </View>
          </Card>
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