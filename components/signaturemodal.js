import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View} from 'react-native';
import {Card, Button, FormLabel, FormInput, FormValidationMessage} from 'react-native-elements'
class Signaturemodal extends Component {
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
          <View style={{marginTop: 22}}>
            <View>
            <FormLabel>Signature</FormLabel>
            <FormInput placeholder='First And Last Name'/>
            <FormValidationMessage>Please provide correct First and Last Name</FormValidationMessage>

              
                <Button 
                    backgroundColor= '#2f95dc'
                    raised
                    title='Submit'
                    onPress={() => {
                        this.setModalVisible(!this.state.modalVisible);
                      }} />
              
            </View>
          </View>
        </Modal>
        <Card>
            <View>
                <TouchableHighlight
                onPress={() => {
                    this.setModalVisible(true);
                }}>
                <Text>Sign Document</Text>
                </TouchableHighlight>
            </View>
        </Card>
      </View>
    );
  }
}
export default Signaturemodal