import React, {Component} from 'react'
import { Actions } from 'react-native-router-flux'
import firebase from 'firebase'

import {
  View,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet,
  ListView
} from 'react-native'


export default class editform extends Component {
  constructor(props){
    super(props)
    console.log(this.props);
    this.state = {
      title: this.props.title,
      location: this.props.location,
      price: this.props.price,
      Category: this.props.Category,
      Description: this.props.Description,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState = {
      title: this.state.title,
      location: this.state.location,
      price: this.state.price,
      Category: this.state.Category,
      Description: this.state.Description,
      time: new Date().getTime()
    }
  }
  update(){
    let itemRef = firebase.database().ref('items/' + this.props.id).update({
          title: this.state.title,
          location: this.state.location,
          price: this.state.price,
          Category: this.state.Category,
          Description: this.state.Description,
          time: new Date().getTime()
        });
        this.setState({title: '', location: '', price: '', Category: '', Description: ''})
        Actions.post();
      }


  render(){
    console.log("in render", this.props);
    console.log("state in render", this.state);
    return(
      <View style={styles.container}>
      <View style={styles.inputcontainer}>
      <TextInput placeholder="title"
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
      maxLength = {5}
      value={this.state.price}
      onChangeText={(price)=> this.setState({price})}
      />

      <TextInput placeholder="Category"
      style={styles.input}
      ref="category"
      value={this.state.Category}
      onChangeText={(Category)=> this.setState({Category})}
      />

      <TextInput placeholder="Description"
      style={styles.input}
      ref="description"
      value={this.state.Description}
      onChangeText={(Description)=> this.setState({Description})}
      />
      <TouchableHighlight
              style={styles.button}
              onPress={()=> this.update()}
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
