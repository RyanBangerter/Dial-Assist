const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ]
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Dailyfluid from '../components/Dailyfluid';
import { Header } from 'react-native-elements';




export default class JournalScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
       <Header
          backgroundColor= '#2f95dc'
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Journal', style: { color: '#fff' } }}
          rightComponent={{icon: 'exit-to-app', color: '#fff'}}
        />
       <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
        {/* Daily fluid intake graph */}
            <View style = {{marginTop: 10}}>
                <Text style = {{textAlign: 'center', fontSize: 20}}>Daily Fluid Intake In Liters</Text>
            </View>
            <Dailyfluid/>
            <View style = {{paddingBottom: 50}}>
                <Text style = {{textAlign: 'center'}}>Fluid Goal = 1L or 32FLoz</Text>
            </View>
        {/* Labs */}
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50}}>
              <Text style = {styles.labs} >6</Text>
              <Text style = {styles.labs} >7</Text>
              <Text style = {styles.labs} >8</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50}}>
              <Text >K</Text>
              <Text >P</Text>
              <Text >A</Text>
            </View>

        {/* Cards */}
            <Card title="Food">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Foodcard')}>
                      <Text>Add Food </Text>
                  </TouchableOpacity>  
                </View>
            </Card>
          <View style= {{marginBottom: 50}}>
            <Card title="Fluid">
                <View style={{marginBottom: 10}}>
                  <TouchableOpacity onPress={() =>navigate('Fluidcard')}>
                      <Text>Add Fluid </Text>
                  </TouchableOpacity>  
                </View>
            </Card>
          </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}
// _addFood = () => {this.props.navigation.navigate('Foodcard')};
// _addFluid = () => {this.props.navigation.navigate('Fluidcard')}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  labs: {
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },
  mainwallpaper:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
});
