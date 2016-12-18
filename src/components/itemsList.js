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

    console.log("itemslist data", data);

    const goToEditForm = () => Actions.editform({
      title: data.title,
      location: data.location,
      price: data.price,
      Category: data.Category,
      Description: data.Description,
      id: data.id
    });

      return (
     <View>
       <View style={styles.row}>
         <Text style={styles.title}>{data.title}</Text>
         <Text style={styles.locate}>{data.location}</Text>
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
    const gotoform = () => Actions.editform({test:'data'});
      return(
        <View>
          <ListView
              dataSource={this.state.dataSource}
              renderRow={(data) => this.renderRows(data)}
              enableEmptySections={true}
          />
          </View>
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
  title: {
    flex: 1,
  },
  locate: {
    flex: 1,
  },
  price: {
    flex: 1,
    color: 'green'
  }
})
