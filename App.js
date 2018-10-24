import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator, DrawerItems} from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import {Container, Content, Header, Body, Icon, Thumbnail} from 'native-base';


import login from './screens/login';
import splash from './screens/splash';
import register from './screens/register';
import dashboard from './screens/dashboard';
import lists from './screens/lists';
import ini from './screens/ini';

class App extends Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const Root = createStackNavigator ({  
  splash: splash,
  login: login, 
  register: register,
  dashboard: dashboard,
  ini: ini
},{
  initialRouteName: 'splash'
})

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
    <Content>
      <DrawerItems {...props} />
    </Content>
  </Container>
)

const MyApp = DrawerNavigator({
  lists: {
    screen: lists
  },
  ini: {
    screen: ini
  }
}, {
  initialRouteName: 'ini',
  contentComponent: CustomDrawerContentComponent,
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

export default App;
