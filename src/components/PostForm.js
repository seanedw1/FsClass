import React, {Component} from 'react'
import { Actions } from 'react-native-router-flux'
import {initializeApp} from 'firebase'
import config from '../util/config'

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native'


const firebaseApp = initializeApp({
  apiKey: config.API_KEY,
  authDomain: config.AUTH_DOMAIN,
  databaseURL: config.DATABASE_URL,
  storageBucket: config.STORAGE_BUCKET
})


export default class PostForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      newItem: ''
    }
  }

  render(){
    return(
      <View style={styles.container}>

      <TextInput placeholder="Title"
      style={styles.input}
      />

      <TextInput placeholder="Location"
    style={styles.input}
   />

      <TextInput placeholder="$price"
      style={styles.input}
      />

   <TextInput placeholder="Category"
 style={styles.input}
/>

<TextInput placeholder="Description"
style={styles.input}
/>

  <TouchableHighlight
          style={styles.button}>
          <Text style={styles.btnText}>Add item</Text>
        </TouchableHighlight>
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
  },
  input: {
    height: 50,
    width: 300,
    color: 'black',
    marginBottom: 10,
    padding: 4,
    marginRight: 1,
    marginTop: 5,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#E6E5ED',
    backgroundColor: '#F8F8F9',
  },
btnText: {
  fontSize: 18,
  color: 'white',
  marginTop: 6,
}
})
