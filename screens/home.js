import React, {Component} from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Title, Button, Icon, Left, Right, Body} from 'native-base';
 class Home extends Component{
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#293A4E'}}>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={{color: 'white'}} name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Home TodoApp</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          backgroundColor: '#293A4E'
        }}>
          <Image
          source={require('../images/todo.png')}
          />
            <Button bordered dark style={{width:170, height: 70, top:20, left: 5}}>
              <Text style={{color:'#BFEF89', left: 40}}>USER TRENDS</Text>
            </Button>
            <Button bordered dark style={{width:170, height:70, left: 185, top: -50}}>
              <Text style={{left:40, color:'#BFEF89'}}>USER TYPES</Text>
            </Button>
            <Text style={{fontSize:50, color:'white', right:90, top: -40}}>465</Text>
            <Text style={{fontSize:50, color:'white', top: -105, left: 100}}>45 %</Text>
            <Text style={{top:-120, color:'white', right:88}}>Daily Views</Text>
            <Text style={{top:-138, color:'white', left:90}}>User Increase</Text>
        </Content>
      </Container>
    )
  }
}
 export default Home;
