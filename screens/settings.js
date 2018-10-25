import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Title, Body} from 'native-base';

class Settings extends Component{
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
            <Title>Settings TodoApp</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>Ini halaman Settings</Text>
        </Content>
      </Container>
    )
  }
}
 export default Settings; 
