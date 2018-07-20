const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ]
import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity,ImageBackground } from 'react-native';
import { View, Text, Image } from 'react-native';
import { Card, Icon } from 'react-native-elements';
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
          leftComponent={
           <Icon name='home'
            color='white'
            onPress={() => navigate('Home')}
            />
          }
          centerComponent={{ text: 'Journal', style: { color: '#fff' } }}
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


        {/* Daily fluid intake graph */}
            <View style = {{marginTop: 10}}>
                <Text style = {{textAlign: 'center', fontSize: 20}}>Daily Fluid Intake In Liters</Text>
            </View>
            <Dailyfluid/>
            <View style = {{flexDirection: 'row', justifyContent: 'center'}}>
                <Text style = {{color: 'rgb(3, 189, 196)', fontSize: 17}}>Current Fluid Consumed = .7L</Text>
            </View>
            <View style = {{paddingBottom: 20}}>
                <Text style = {{textAlign: 'center'}}>Fluid Goal = 1L or 32FLoz</Text>
            </View>


        {/* Labs */}
            <Card title='Your Labs'>
              <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50}}>
                <TouchableOpacity>
                  <Text style = {styles.labs} onPress={() =>alert('Potassium normal is 3.5-5.5 mEq/L')} >6</Text>
                </TouchableOpacity>
                  <Text style = {styles.labs} onPress={() =>alert('Phosporus normal is  2.5 to 4.5 mg/dL')} >7</Text>
                <TouchableOpacity>
                  <Text style = {styles.labs} onPress={() =>alert('Albumen normal is greater than 4 g/dL')} >8</Text>
                </TouchableOpacity>
              </View>
              <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 50, paddingRight: 50}}>
                <TouchableOpacity> 
                  <Text onPress={() =>alert('Potassium normal is 3.5-5.5 mEq/L')}>K</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text onPress={() =>alert('Phosporus normal is  2.5 to 4.5 mg/dL')} >P</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text onPress={() =>alert('Albumen normal is greater than 4 g/dL')}>A</Text>
                </TouchableOpacity>
              </View>
            </Card>



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
                  {/* <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={3.6}
                        readonly
                        imageSize={10}
                        onFinishRating={this.ratingCompleted}
                        style={{ paddingVertical: 10 }}
                      />  */}
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
