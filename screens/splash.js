import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import login from './login'

export default class splash extends Component {

  static navigationOptions = {
    header: null
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                {/* <Thumbnail source = {require ('../images/todoapp.png')} /> */}
                <Body>
                  <Text style={{color: 'black'}} note>Organize Your Todo List Here!</Text>
                </Body>
              </Left>
            </CardItem>
          <CardItem>
            <Image source = {require ('../images/ini.jpeg')} style={{height: 470, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
                <Button onPress={() => navigate('login')} primary>
                <FontAwesome style={{color:'white', fontSize: 25, left: 12}} name="user" />
                  <Text>Sign In</Text>
                </Button>
            </Left>
            <Right>
                <Button onPress={() => navigate('register')} danger>
                <FontAwesome style={{color:'white', fontSize: 25, left: 12}} name="plus-circle" />
                  <Text style={{textAlign:'center'}}>Create New Account</Text>
                </Button>
            </Right>
          </CardItem>
        </Card>
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  splash:{
    resizeMode : 'stretch',
    height: '30%',
    width: '100%'
  }
})