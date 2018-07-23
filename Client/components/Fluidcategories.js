import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, ScrollView, ImageBackground, StyleSheet} from 'react-native';
import {Card, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
class Fluidcategories extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <ImageBackground 
            source={require('../assets/images/background.jpg')}
            style ={styles.mainwallpaper}>
          <View style={{marginTop: 50}}>
            <Text style={{textAlign: 'center', fontSize: 20}}>Fluid Categories</Text>
          </View>
          <Card style={{marginTop: 10}}>
            <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <Text>Drinks</Text>
                <Text>ICE</Text>
                <Text>Popsicles</Text>
                <Text>Food With Fluid</Text>
            </View>
          </Card>
          <Card>
                    <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>Long-term effects of fluid gain for dialysis patients
                            Large fluid gains between hemodialysis treatments can be hard on a person's heart and lungs. 
                            Short-term effects of fluid overload include cramps at dialysis, headaches and breathing difficulties and serve as warnings for potential problems in the future.
                            That’s why it’s important to monitor and keep fluid gain in check between dialysis treatments. Your efforts in limiting fluid intake can affect your immediate well-being and your long-term health.

                            By keeping fluid gains as low as possible between dialysis treatments, you can help minimize the risk of serious health problems. Repeatedly overloading your system with fluid makes
                             your heart work harder and may lead to heart problems.</Text>
          </Card>
          <View style= {{marginTop: 30, marginBottom: 100}}>
            <Button 
                    backgroundColor= '#2f95dc'
                    raised
                    title='Go Back'
                    onPress={() =>navigate('Fluidcard')}/>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}
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
  
export default Fluidcategories