import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet,ImageBackground} from 'react-native';
import {Card, Button} from 'react-native-elements'
import Weeklyfluid from './WeeklyFluid';
class WeeklyFluidmodal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View>
        <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
                alert('Modal has been closed.');
        }}>
            <ImageBackground
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
            <View>
                <Text style={{textAlign: 'center', marginTop: 20, fontSize: 25}}>Weekly Fluid</Text>
            </View>
            <Weeklyfluid/>
            <View style={{marginTop: 5}}>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between',paddingLeft: 10, paddingRight: 15}}>
                    <Text>Mon</Text>
                    <Text>Tue</Text>
                    <Text>Wed</Text>
                    <Text>Thu</Text>
                    <Text>Fri</Text>
                    <Text>Sat</Text>
                    <Text>Sun</Text>
                    </View>
                <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40}}>
                <Text>High Level</Text>
                <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 66, 66)'}}></View>
                <Text>Perfect Level</Text>
                <View style={{width: 15, height: 15, backgroundColor: 'rgb(27, 51, 145)'}}></View>
                </View>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 20, marginTop: 20}}>Why Are We Showing You This?</Text>
                    <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>Long-term effects of fluid gain for dialysis patients
                            Large fluid gains between hemodialysis treatments can be hard on a person's heart and lungs. 
                            Short-term effects of fluid overload include cramps at dialysis, headaches and breathing difficulties and serve as warnings for potential problems in the future.
                            That’s why it’s important to monitor and keep fluid gain in check between dialysis treatments. Your efforts in limiting fluid intake can affect your immediate well-being and your long-term health.

                            By keeping fluid gains as low as possible between dialysis treatments, you can help minimize the risk of serious health problems. Repeatedly overloading your system with fluid makes
                             your heart work harder and may lead to heart problems.</Text>
                </View>
                <View style={{marginTop: 10}}>
                    <Button 
                        backgroundColor= '#2f95dc'
                        raised
                        title='Go Back'
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }} />
                
                </View>
            </View>
            </ImageBackground>
            </Modal>
        
        
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                <TouchableHighlight
                style={styles.buttonContainer}
                onPress={() => {
                    this.setModalVisible(true);
                }}>
                <Text style={styles.buttonText}>Show Me</Text>
                </TouchableHighlight>
            </View>
       
      </View>
    );
  }
}
const styles = StyleSheet.create({
    mainwallpaper:{
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor:'transparent',
      },
    buttonContainer:{
        backgroundColor:'rgb(0, 165, 211)',
        paddingVertical: 20,
        width: 300,
        marginBottom: 20,
        borderRadius:100
    },
    buttonText:{
        textAlign: 'center',
        color: 'white',
        fontWeight: '700'
    }
});
export default WeeklyFluidmodal