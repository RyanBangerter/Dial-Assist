import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { Card, Header,SearchBar } from 'react-native-elements';



export default class Fluidcardscreen extends React.Component {
  static navigationOptions = {
    title: 'Fluidcard',
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
        
        <View>
          <View style = {{marginTop: 10}}>
            <SearchBar
              lightTheme
              // onChangeText={someMethod}
              // onClearText={someMethod}
              placeholder='Type Here...' />
          </View>
            <Card title="Go Back Test">
                <View>
                  <TouchableOpacity onPress={() =>navigate('Journal')}>
                      <Text>Go Back To Journal</Text>
                  </TouchableOpacity>  
                </View>
            </Card>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});