import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class Profile extends Component {
  render(){
    return(
      <View style={styles.container}>
       <Text style={styles.welcome}>
         My profile
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
