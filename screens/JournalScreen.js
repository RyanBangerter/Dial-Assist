const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ]
 
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';
import Dailyfluid from '../components/Dailyfluid';
import { Icon } from 'react-native-elements';



export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: 'Journal',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Daily fluid intake graph */}
            <View style = {{marginTop: 10}}>
                <Text style = {{textAlign: 'center', fontSize: 20}}>Daily Fluid Intake In Liters</Text>
            </View>
            <Dailyfluid/>
            <View style = {{paddingBottom: 90}}>
                <Text style = {{textAlign: 'center'}}>Fluid Goal = 1L or 32FLoz</Text>
            </View>
            <Card title="Food">
                <View>
                    <Text>Add Food</Text>
                </View>
            </Card>
            <Card title="Fluid">
                <View>
                    <Text>Add Fluid </Text>
                    <Icon name='local-drink'/>
                </View>
            </Card>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
