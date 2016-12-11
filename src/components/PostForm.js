import React, {Component} from 'react'

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native'

export default class PostForm extends Component {
  render(){
    return(
      <View style={styles.container}>
       <Text style={styles.text}>Create Post</Text>
       <Text style={styles.text}>Edit Post</Text>
       <Text style={styles.text}>Delete Post</Text>
       <TextInput style={styles.input}/>
           <TouchableHighlight>
           <Text>Posts</Text>
           </TouchableHighlight>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'red',
    flex: 1
  },
  text: {
    fontSize: 20
  },
  input: {
    backgroundColor: 'white',
    padding: 5,
    height: 100,
    width: 200,
    color: 'black'
  },
})
