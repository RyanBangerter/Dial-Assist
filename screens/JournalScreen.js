const users = [
  {
     name: 'brynn',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
  }
 ]
 
import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { View, Text, Image } from 'react-native'
import { Card } from 'react-native-elements'



export default class JournalScreen extends React.Component {
  static navigationOptions = {
    title: 'Journal',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Card title="Add Food">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>
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
