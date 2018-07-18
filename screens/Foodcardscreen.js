import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text,ImageBackground} from 'react-native';
import { Card, SearchBar, Header, Icon, Button} from 'react-native-elements';



export default class Foodcardscreen extends React.Component {
  static navigationOptions = {
    title: 'Foodcard',
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
          centerComponent={{ text: 'Add Food', style: { color: '#fff' } }}
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
        <View style={{marginBottom: 320}}>
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
                    <TouchableOpacity >
                        <Barcodescanner/>
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
                  <TouchableOpacity onPress={() =>navigate('')}>
                      <Text>Recent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>navigate('')}>
                      <Text>Frequent</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>navigate('')}>
                      <Text>Favorites</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() =>navigate('')}>
                      <Text>Create New</Text>
                  </TouchableOpacity>  
                </View>
            </Card>
            <View style= {{flexDirection: 'row', justifyContent: 'center',marginTop: 10}} >
            <Button
              onPress={() =>navigate('Journal')}
              icon={{
                name: 'arrow-back',
                size: 15,
                color: 'white'
              }}
              buttonStyle={{
                backgroundColor: "#2f95dc",
                width: 320,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              title='Go Back'
            />
          </View>
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