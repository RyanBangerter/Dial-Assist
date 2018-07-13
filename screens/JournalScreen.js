const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ]
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Dailyfluid from '../components/Dailyfluid';




export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: 'Journal',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
       
        {/* Daily fluid intake graph */}
            <View style = {{marginTop: 10}}>
                <Text style = {{textAlign: 'center', fontSize: 20}}>Daily Fluid Intake In Liters</Text>
            </View>
            <Dailyfluid/>
            <View style = {{paddingBottom: 50}}>
                <Text style = {{textAlign: 'center'}}>Fluid Goal = 1L or 32FLoz</Text>
            </View>
        {/* Labs */}
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 45, paddingRight: 50}}>
              <Text >__</Text>
              <Text >__</Text>
              <Text >__</Text>
            </View>
            <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50}}>
              <Text >K</Text>
              <Text >P</Text>
              <Text >AL</Text>
            </View>

        {/* Cards */}
            <Card title="Food">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Foodcard')}>
                      <Text>Add Food </Text>
                  </TouchableOpacity>  
                </View>
            </Card>
            <Card title="Fluid">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Fluidcard')}>
                      <Text>Add Fluid </Text>
                  </TouchableOpacity>  
                </View>
            </Card>
      </ScrollView>
    );
  }
}
// _addFood = () => {this.props.navigation.navigate('Foodcard')};
// _addFluid = () => {this.props.navigation.navigate('Fluidcard')}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
