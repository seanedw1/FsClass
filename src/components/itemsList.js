import React, {Component} from 'react'

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

  renderRows = (data) => {
      return (
        <TouchableHighlight
     underlayColor='#dddddd'>
     <View>
       <View style={styles.row}>
         <Text style={styles.todoText}>{data.title}</Text>
         <Text style={styles.todoText}>{data.location}</Text>
         <Text style={styles.todoText}>{data.price}</Text>
         <Image
              style={{width: 20, height: 20, marginLeft:5}}
              source={require('../images/delete.png')}
              onPress={()=> this.remove()}


            />
       </View>
       <View style={styles.separator} />
     </View>
   </TouchableHighlight>
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
    padding: 10,
    backgroundColor: '#fff',
    flex: 1
  },
  text: {
    flex: 1,
    fontSize: 20
  },
  separator: {
    height: 1,
    backgroundColor: '#CCCCCC',
  },
  todoText: {
    flex: 1,
  }
})
