import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet
} from 'react-native'

export default class ImageUpload extends Component {
  render(){
    return(
      <View style={styles.container}>
       <Text style={styles.welcome}>
         Image  Upload
       </Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  row: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#fff',
    flex: 1
  },
  text: {
    flex: 1,
    fontSize: 20
  }
})
