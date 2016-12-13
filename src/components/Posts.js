import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'

import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

// import postform from './PostForm'
export default class Posts extends Component {
  render(){
    const goToPostForm = () => Actions.postform();
    return(
      <View style={styles.container}>
       <Text onPress={goToPostForm} style={styles.text}>Create post</Text>
       <Text style={styles.text}>Edit Post</Text>
       <Text style={styles.text}>Delete Post</Text>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#d9d9d9',
    flex: 1
  },
  text: {
    fontSize: 20
  }
})
