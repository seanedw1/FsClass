import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

import Actions from 'react-native-router-flux'

export default class Feed extends Component {
  render(){
    return(
      <View style={styles.container}>
       <Text style={styles.welcome}>
        List view will be here!!!
       </Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#d9d9d9',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
