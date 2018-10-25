import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator, DrawerItems} from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import {Container, Content, Header, Body, Icon, Thumbnail} from 'native-base';


import login from './screens/login';
import splash from './screens/splash';
import register from './screens/register';
import Home from './screens/home';
import Lists from './screens/lists';
import Settings from './screens/settings';
import create from './screens/create';

import store from './components/store/store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MyApp />
      </Provider>
    );
  }
}

const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header
    style={{height:163, backgroundColor: 'white'}}>
      <Body>
      <View style={{right: 10}}>
		    <Image
		      source={require('./images/logo.jpg')} 
		    />
        <View style={{position: 'absolute', top: 80, left: 10}}>
          <Thumbnail style={{width:70, height:70}}
          source={require('./images/todo-app.png')} />
        </View>
        <View style={{position: 'absolute', top: 110, left: 90, fontSize: 30}}>
          <Text style={{color:'white'}}>Application Todo App</Text>
        </View>
      </View>
      </Body>
    </Header>
    <Content style={{backgroundColor: '#4B5E65', color: 'white'}}>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const MyApp = DrawerNavigator({
  home: {
    screen: Home,
    navigationOptions: {
    drawerLabel: () =>(<Text style={{color: 'white'}}>Home</Text>),
    drawerIcon: () => (<Icon name="home" size={18} style={{ color: "white" }} />) 
    }
  },
  lists: {
    screen: Lists,
    navigationOptions: {
      drawerLabel: () => (<Text style={{color: 'white'}}>Lists</Text>),
      drawerIcon: () => (<Icon name="list" size={18} style={{ color: "white" }} />) 
    }
  },
  settings: {
    screen : Settings,
    navigationOptions: { 
      drawerLabel: () => (<Text style={{color: 'white'}}>Settings</Text>),
      drawerIcon: () => (<Icon name="settings" size={18} style={{color: "white"}} />)
    }
  },
  create: {
    screen: create,
  }
}, {
  initialRouteName: 'home',
  contentComponent: CustomDrawerContentComponent,
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

export default App;
