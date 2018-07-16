import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text,ImageBackground} from 'react-native';
import { Card, SearchBar, Header, Icon} from 'react-native-elements';


export default class Foodcardscreen extends React.Component {
  static navigationOptions = {
    title: 'Foodcard',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
       <Header
          leftComponent={{ icon: 'home', color: '#fff' }}
          backgroundColor= '#2f95dc'
          centerComponent={{ text: 'Home', style: { color: '#fff' } }}
          rightComponent={{icon: 'exit-to-app', color: '#fff'}}
        />
        <ImageBackground 
        source={require('../assets/images/background.jpg')}
        style ={styles.mainwallpaper}>
        <View>
          <View>
            <SearchBar
              lightTheme
              // onChangeText={someMethod}
              // onClearText={someMethod}
              placeholder='Type Here...' />
          </View>
          <View style = {{flexDirection: 'row', justifyContent: 'space-evenly'}}>
              <Card title="Scan Barcode">
                  <View style={{width: 110}}>
                    <TouchableOpacity onPress={() =>navigate('')}>
                        <Icon name='camera-alt' />
                    </TouchableOpacity>  
                  </View>
              </Card>
              <Card title="Categories">
                  <View style={{width: 110}}>
                    <TouchableOpacity onPress={() =>navigate('')}>
                        <Icon name='list'/>
                    </TouchableOpacity>  
                  </View>
              </Card>
          </View>
            <Card title="Other Tracking Methods">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Journal')}>
                      <Text>Recent</Text>
                      <Text>Frequent</Text>
                      <Text>Favorites</Text>
                      <Text>Create New</Text>
                  </TouchableOpacity>  
                </View>
            </Card>
        </View>
      </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mainwallpaper:{
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
});