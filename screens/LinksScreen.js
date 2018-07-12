import React from 'react';
import { Card } from 'react-native-elements';
import {ScrollView, View, TouchableOpacity, Text} from 'react-native';
import { WebBrowser } from 'expo';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView>
        <View>
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
  

