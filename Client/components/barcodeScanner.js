import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, ImageBackground } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class barcodeScanner extends React.Component {
  state = {
    hasCameraPermission: null,
  }

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({hasCameraPermission: status === 'granted'});
    }

  render() {
    const { navigate } = this.props.navigation;
    const { hasCameraPermission } = this.state;

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1, marginTop: 50 }}>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: 50}}>
              <Text style={{fontSize: 20}}>Scan Barcode</Text>
          </View>
         <ImageBackground 
          source={require('../assets/images/background.jpg')}
          style ={styles.mainwallpaper}>
          <BarCodeScanner
            onBarCodeRead={this._handleBarCodeRead}
            style={styles.scanner}
          />
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 20}}>
                <TouchableHighlight
                        style={styles.buttonContainer}
                        onPress={() => navigate('Journal')}>
                        <Text style={styles.buttonText}>Done</Text>
                </TouchableHighlight>
            </View>
          </ImageBackground>
        </View>
      );
    }
  }
  
// use data from barcode read and look up using API
  _handleBarCodeRead = ({ type, data }) => {
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }
}
const styles = StyleSheet.create({
    scanner: {
        height: 400,
        width: 600
    },
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