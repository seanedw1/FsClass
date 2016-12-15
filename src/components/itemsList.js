import React, {Component} from 'react'
import {Actions} from 'react-native-router-flux'
import firebase from 'firebase'


import {
  View,
  Text,
  StyleSheet,
  ListView,
  TouchableHighlight,
  Image
} from 'react-native'


export default class ItemList extends Component {
  constructor(props) {
     super(props);
     this.state = {
       dataSource: new ListView.DataSource({
           rowHasChanged: (row1, row2) => row1 !== row2,
         })

     };
  }

  getDataSource(items: Array<any>): ListView.DataSource {
     if(!items) return;
     return this.state.dataSource.cloneWithRows(items);
  }

  componentDidMount(){
   this.setState({dataSource: this.getDataSource(this.props.items)});
}

componentWillReceiveProps(props) {
   this.setState({dataSource: this.getDataSource(props.items)});
}


remove(id){
  firebase.database().ref('items')
.child(id).remove()
}

  renderRows = (data) => {
    const goToEditForm = () => Actions.editform();
      return (
     <View>
       <View style={styles.row}>
         <Text style={styles.todoText}>{data.title}</Text>
         <Text style={styles.todoText}>{data.location}</Text>
         <Text style={styles.price}>${data.price}</Text>

         <View style={{flex: 1, flexDirection: 'row'}}>
         <TouchableHighlight onPress={goToEditForm} style={{width: 30, height: 30, marginRight: 5,  justifyContent: 'flex-end'}}>
         <Image
              style={{width: 30, height: 30}}
              source={require('../images/edit.png')}
            />
        </TouchableHighlight>
         <TouchableHighlight onPress={()=> this.remove(data.id)} style={{width: 30, height: 30}}
>
         <Image
              style={{width: 30, height: 30}}
              source={require('../images/delete.png')}
            />
        </TouchableHighlight>
        </View>
       </View>
       <View style={styles.separator} />
     </View>
      )
  }

  render() {
      return(
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(data) => this.renderRows(data)}
              enableEmptySections={true}
          />
      )
  }
}


const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    flex: 1
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
  },
  price: {
    flex: 1,
    color: 'green'
  }
})
