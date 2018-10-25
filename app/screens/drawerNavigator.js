import { View, Text, Image } from 'react-native';
import { DrawerItems } from 'react-navigation';
import { DrawerNavigator } from 'react-navigation';
import { Container, Content, Header, Body, Icon, Thumbnail } from 'native-base';
import Home from './home';
import Account from './account';

const MyDrawer = (props) => (
  <Container>
    <Header style={{height:163, backgroundColor: 'white'}}>
      <Body>
        <View style={{right: 10}}>
          <Image source={require('./app/images/logo.jpg')} />
          <View style={{position: 'absolute', top: 80, left: 10}}>
            <Thumbnail style={{width:70, height:70}} source={require('./app/images/todo-app.png')} />
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

const drawerNavigator = DrawerNavigator({
  home: {
    screen: Home,
    navigationOptions: {
      drawerIcon: () => (<Icon name="home" size={18} style={{ color: "black" }} />) // icon pada drawer item
    }
  },
  account: {
    screen: Account,
    navigationOptions: {
      drawerIcon: () => (<Icon name="person" size={18} style={{ color: "black" }} />) // icon pada drawer item 
    }
  }
}, {
  initialRouteName: 'home', // screen yang di load pertama kali
  contentComponent: MyDrawer,
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle'
})

export default drawerNavigator;
