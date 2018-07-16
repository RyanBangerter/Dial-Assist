import React from 'react';
import { Card } from 'react-native-elements';
import {ScrollView, View, TouchableOpacity, Text, StyleSheet,ImageBackground} from 'react-native';
import { WebBrowser } from 'expo';
import { Header } from 'react-native-elements';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header
          backgroundColor= '#2f95dc'
          leftComponent={{ icon: 'home', color: '#fff' }}
          centerComponent={{ text: 'Links', style: { color: '#fff' } }}
          rightComponent={{icon: 'exit-to-app', color: '#fff'}}
        />
        <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
        <View style={{marginBottom: 160}}>
          <Card title="Problems During Dialysis?">
                <View>
                  <TouchableOpacity onPress={_handleProblems}>
                      <Text>Help</Text>
                  </TouchableOpacity>  
                </View>
          </Card>
          <Card title="Transplant Questions?">
                <View>
                  <TouchableOpacity onPress={_handleTransplant}>
                      <Text>Help</Text>
                  </TouchableOpacity>  
                </View>
          </Card>
          <Card title="Medication Questions?">
                <View>
                  <TouchableOpacity onPress={_handleMedication}>
                      <Text>Help</Text>
                  </TouchableOpacity>  
                </View>
          </Card>
          <Card title="General Dialysis Questions?">
                <View>
                  <TouchableOpacity onPress={_handleGeneral}>
                      <Text>Help</Text>
                  </TouchableOpacity>  
                </View>
          </Card>
        </View>
      </ImageBackground>
      </ScrollView>
   )
  }
}
  _handleProblems = () => {
    WebBrowser.openBrowserAsync('http://www.wisconsindialysis.org/kidney-health/');
  };
  _handleTransplant = () => {
    WebBrowser.openBrowserAsync('https://www.kidney.org/atoz/atozTopic_Transplantation');
  };
  _handleMedication = () => {
    WebBrowser.openBrowserAsync('https://www.rxlist.com/pill-identification-tool/article.htm');
  };
  _handleGeneral = () => {
    WebBrowser.openBrowserAsync('https://www.kidney.org/kidneydisease');
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    mainwallpaper:{
      flex: 1,
      width: undefined,
      height: undefined,
      backgroundColor:'transparent',
    },
  });
  

