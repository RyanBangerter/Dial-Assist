import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, StyleSheet, ImageBackground} from 'react-native';
import {Card, Button} from 'react-native-elements'
import WeeklyLabs from './Labs';
class Weeklylabmodal extends Component {
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
            <View>
                <Text style={{textAlign: 'center', marginTop: 10, fontSize: 25}}>Weekly Labs</Text>
            </View>
                <View>
                    <WeeklyLabs/>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 40, paddingRight: 40}}>
                    <Text>High Level</Text>
                    <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 66, 66)'}}></View>
                    <Text>Perfect Level</Text>
                    <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 223, 65)'}}></View>
                    <Text>Low Level</Text>
                    <View style={{width: 15, height: 15, backgroundColor: 'rgb(244, 160, 65)'}}></View>
                </View>
                <View>
                    <Text style={{textAlign: 'center', fontSize: 20, marginTop: 3}}>Why Are We Showing You This?</Text>
                    <Text style={{ textAlign: 'center', marginTop: 1, fontSize: 15}}>Albumen, 
                    It provides the body with the protein needed to both maintain growth and repair tissues. During a dialysis treatment, the albumin in your blood also helps with fluid removal. 
                    It helps "pull" extra fluid from swollen tissues back into the blood, where it can then be removed by the dialyzer.
                    </Text>
                    <Text style={{ textAlign: 'center', marginTop: 1, fontSize: 15}}>
                    High levels of phosphorus in the blood can cause, Bone and heart problems that lead to hospital stays and in some cases death
                    Calcification or hardening of tissues when phosphorus and calcium form hard deposits in the heart, arteries, joints, skin or lungs that can be painful and lead to serious health problems
                    Bone pain and itching.
                    </Text>
                    <Text style={{textAlign: 'center', marginTop: 1, fontSize: 15}}>
                    When kidneys fail they can no longer remove excess potassium, so the level builds up in the body. High potassium in the blood is called hyperkalemia, which may occur 
                    in people with advanced stages of chronic kidney disease (CKD). Some of the effects of 
                    high potassium are nausea, weakness, numbness and slow pulse.
                    </Text>
                </View>
                <View style={{marginTop: 1}}>
                    <Button 
                        backgroundColor= '#2f95dc'
                        raised
                        title='Go Back'
                        onPress={() => {
                            this.setModalVisible(!this.state.modalVisible);
                        }} />
                </View>
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
export default Weeklylabmodal