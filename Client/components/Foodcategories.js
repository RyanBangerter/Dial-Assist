import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, ScrollView, ImageBackground, StyleSheet} from 'react-native';
import {Card, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
class Foodcategories extends Component {
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
            <Text style={{textAlign: 'center', fontSize: 20}}>Food Categories</Text>
          </View>
          <Card style={{marginTop: 10}}>
            <View style={{flexDirection: 'column', justifyContent: 'space-between'}}>
                <Text>Potassium</Text>
                <Text>Phosphorus</Text>
                <Text>Albumen</Text>
            </View>
          </Card>
          <Card>
                    <Text style={{ textAlign: 'center', marginTop: 1, fontSize: 15}}>Albumen -  
                    It provides the body with the protein needed to both maintain growth and repair tissues. During a dialysis treatment, the albumin in your blood also helps with fluid removal. 
                    It helps "pull" extra fluid from swollen tissues back into the blood, where it can then be removed by the dialyzer.
                    </Text>
                    <Text style={{ textAlign: 'center', marginTop: 5, fontSize: 15}}>
                    Phosphorus - High levels in the blood can cause, Bone and heart problems that lead to hospital stays and in some cases death
                    Calcification or hardening of tissues when phosphorus and calcium form hard deposits in the heart, arteries, joints, skin or lungs that can be painful and lead to serious health problems
                    Bone pain and itching.
                    </Text>
                    <Text style={{textAlign: 'center', marginTop: 5, fontSize: 15}}>
                    Potassium - When kidneys fail they can no longer remove potassium, so the level builds up in the body. High potassium in the blood is called hyperkalemia, which may occur 
                    in people with advanced stages of chronic kidney disease (CKD). Some of the effects of 
                    high potassium are nausea, weakness, numbness and slow pulse.
                    </Text>
          </Card>
          <View style= {{marginTop: 30, marginBottom: 15}}>
            <Button 
                    backgroundColor= '#2f95dc'
                    raised
                    title='Go Back'
                    onPress={() =>navigate('Foodcard')}/>
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
  
export default Foodcategories