import React, {Component} from 'react';
import {Platform, View, Text, Image, StyleSheet} from 'react-native';
import {createStackNavigator, DrawerItems} from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import {Container, Content, Header, Body, Icon} from 'native-base';


import login from './screens/login';
import splash from './screens/splash';
import register from './screens/register';
import dashboard from './screens/dashboard';
import lists from './screens/lists';
import ini from './screens/ini';

class App extends Component {
  render() {
    return (
      <Root />
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

// const CustomDrawerContentComponent = (props) => (
//   <Container>
//     <Header
//     style={{height:200, backgroundColor: 'white'}}>
//       <Body>
//         <Image 
//         style={style.drawerImage}
//         source={require('./images/todoapp.png')} />
//       </Body>
//     </Header>
//     <Content>
//       <DrawerItems {...props} />
//     </Content>
//   </Container>
// )

// const MyApp = DrawerNavigator({
//   lists: {
//     screen: lists
//   },
//   ini: {
//     screen: ini
//   }
// }, {
//   contentComponent: CustomDrawerContentComponent,
//   drawerCloseRoute: 'DrawerClose',
//   drawerToggleRoute: 'DrawerToggle'
// })

export default Root;

// const style = StyleSheet.create({
//   drawerImage: {
//     height: 150,
//     width: 150,
//     borderRadius: 75
//   }
// })