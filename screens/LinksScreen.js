import React from 'react';
import { Card } from 'react-native-elements';
import {ScrollView, View, TouchableOpacity, Text, StyleSheet,ImageBackground} from 'react-native';
import { WebBrowser } from 'expo';
import { Header, Icon } from 'react-native-elements';

export default class LinksScreen extends React.Component {
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
        <View style={{marginBottom: 160}}>
        <TouchableOpacity onPress={_handleProblems}>
          <Card title="Problems During Dialysis?">
                <View>
                      <Text>Help</Text> 
                </View>
          </Card>
        </TouchableOpacity> 
        <TouchableOpacity onPress={_handleTransplant}>
          <Card title="Transplant Questions?">
                <View>
                      <Text>Help</Text>  
                </View>
          </Card>
        </TouchableOpacity>
        <TouchableOpacity onPress={_handleMedication}>
          <Card title="Medication Questions?">
                <View>
                      <Text>Help</Text>
                </View>
          </Card>
        </TouchableOpacity>  
        <TouchableOpacity onPress={_handleGeneral}>
          <Card title="General Dialysis Questions?">
                <View>
                      <Text>Help</Text> 
                </View>
          </Card>
        </TouchableOpacity> 
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
  

