import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'
import Item from './items'


import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native'

export default class Posts extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dataSource: new ListView.DataSource({rowHasChanged: (row1, row2) => row1 !== row2}),
    }
  }

  // dataSource = [];
  componentWillMount() {
    // firebase data
    firebase.database().ref('items').on('value', (data) => {
      console.log(data.val());
      var items = []
      this.setState = {
        dataSource: this.state.dataSource.cloneWithRows(data.val())
      }
    })
  }

  renderRow(data) {
    console.log(data);
    return (
      <Item title={data.title}
            removable={this.props.connected}
            />
    )
  }

  render(){
    const goToPostForm = () => Actions.postform();
    return(
      <View style={styles.container}>
      <View style={styles.inputcontainer}>

       <Text onPress={goToPostForm} style={styles.text}>Create post</Text>
       <Text  style={styles.text}>Create post</Text>
       <Text style={styles.text}>Create post</Text>
       <Text style={styles.text}>Create post</Text>

       <ListView
        style={styles.list}
        dataSource={ this.state.dataSource }
        renderRow={ this.renderRow.bind(this) }
        enableEmptySections={true}
        />
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
  inputcontainer: {
    marginTop: 60,
    padding: 10,
    marginLeft:20,
  },
  list: {
    padding: 10,
    backgroundColor: '#d9d9d9',
    flex: 1
  }
})
