import React, {Component} from 'react'

import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

import ImagePicker from 'react-native-image-crop-picker';


export default class ImageUpload extends Component {



  render(){
    return(
      <View style={styles.container}>
       <Text style={styles.welcome}>
       </Text>
       <Button
title="Camera"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/>
<Button
title="Select image"
color="#841584"
accessibilityLabel="Learn more about this purple button"
/>
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
  input: {
    backgroundColor: 'white',
    padding: 5,
    height: 100,
    width: 200,
    color: 'black'
  }
});
