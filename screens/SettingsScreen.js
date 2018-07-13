import React from 'react';
import { Avatar, Card } from 'react-native-elements';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <ScrollView>
        <View style={{marginLeft: 10, marginTop: 10}}>
          <Avatar
            xlarge
            rounded
            title="PIC"
            onPress={() => alert("Works!")}
            activeOpacity={0.7}
          />
        </View>
        <View>
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
      </ScrollView>
   )
  }
}
