import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Title, Body} from 'native-base';

class Account extends Component{
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={{color: 'white'}} name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Title</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <Text>Ini halaman Account</Text>
        </Content>
      </Container>
    )
  }
}

export default Account;