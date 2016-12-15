import React, {Component} from 'react'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'
import config from '../util/config'

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  ListView
} from 'react-native'


export default class EditForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: '',
      location: '',
      price: '',
      category: '',
      description: '',
    }

  }

  componentWillMount() {
    // firebase data
    firebase.database().ref('items').on('value', (snapshot) => {
      let data = snapshot.val()
      console.log(data)
      for(let i in data) {
      }
      this.setState({items: this.state.items});
      console.log(this.state.items);
    })
  }

  update(id){
    const itemRef = firebase.database().ref('items').set({
          title: this.state.title,
          location: this.state.location,
          price: this.state.price,
          Category: this.state.category,
          Description: this.state.description,
          time: new Date().getTime()
        });
        }


  render(data){
    return(
      <View style={styles.container}>

      <View style={styles.inputcontainer}>

      <TextInput placeholder="Title"
      style={styles.input}
      ref="title"
      value={this.state.title}
      onChangeText={(title)=> this.setState({title})}
      />

      <TextInput placeholder="Location"
      style={styles.input}
      ref="location"
      value={this.state.location}
      onChangeText={(location)=> this.setState({location})}
      />

      <TextInput placeholder="$ price"
      style={styles.input}
      ref="price"
      value={this.state.price}
      onChangeText={(price)=> this.setState({price})}
      />

      <TextInput placeholder="Category"
      style={styles.input}
      ref="category"
      value={this.state.category}
      onChangeText={(category)=> this.setState({category})}
      />

      <TextInput placeholder="Description"
      style={styles.input}
      ref="description"
      value={this.state.description}
      onChangeText={(description)=> this.setState({description})}
      />
      <TouchableHighlight
              style={styles.button}
              onPress={()=> this.update(data.id)}
              >
              <Text style={styles.btnText}>Update</Text>
            </TouchableHighlight>
      </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#d9d9d9',
    flex: 1
  },
  text: {
    fontSize: 20
  },
  input: {
    textAlign: 'center',
    color: 'black',
    height: 40,
    width: 300,
    marginBottom: 5,
    marginTop: 3,
    fontSize: 18,
    borderWidth: 3,
    borderRadius: 3,
    borderColor: '#f19f4d',
    backgroundColor: '#F8F8F9',
  },
  inputcontainer: {
    marginTop: 60,
    padding: 10,
    marginLeft:20,
  },
  button: {
    height: 36,
    width: 300,
    backgroundColor: '#48afdb',
    borderRadius: 4,
  },
btnText: {
  textAlign: 'center',
  fontSize: 18,
  color: 'white',
  marginTop: 6,
}
})
