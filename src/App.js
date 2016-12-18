import React, { Component } from 'react'
import { Text } from 'react-native';
import { Router, Scene, Actions} from 'react-native-router-flux'


import Feed from './components/Feed'
import ImageUpload from './components/ImageUpload'
import Posts from './components/Posts'
import PostForm from './components/PostForm'
import editform from './components/EditForm'
import Profile from './components/Profile'
import Contact from './components/Contact'

// Simple component to render something in place of icon
const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

export default class App extends Component{

  render(){
    const filterIcon = require('./images/add.png');
    const goToPostForm = () => Actions.postform();


    return(
      <Router>
        <Scene key="root">
            <Scene key="TabBar" tabs={true}  tabBarStyle={{ backgroundColor: '#57bc90' }}>

              <Scene key="feed" component={Feed} title="Feed" initial={true} icon={TabIcon}/>

              <Scene key="contact" component={Contact} title="Messages" icon={TabIcon} />

              <Scene key="imageupload" component={ImageUpload} title="Camera" icon={TabIcon} />

              <Scene key="post" component={Posts} title="My posts" icon={TabIcon} rightButtonImage={filterIcon}
              onRight={goToPostForm}
              rightTitle={null}
              rightButtonIconStyle={{ width: 30, height: 30 }}
              />

              <Scene key="profile" component={Profile} title="My Profile" icon={TabIcon}/>

              <Scene key="postform" component={PostForm} title="Add new"/>

            </Scene>
            <Scene key="editform" component={editform} title="Update"/>
        </Scene>
      </Router>
    )
  }
}
