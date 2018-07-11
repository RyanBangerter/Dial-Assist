import React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import { Card } from 'react-native-elements';


export default class Foodcardscreen extends React.Component {
  static navigationOptions = {
    title: 'Foodcard',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView style={styles.container}>
        <View>
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
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});