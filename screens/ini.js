import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';

class ini extends Component{
    render() {
        return (
            <Container>
              <Header>
                  <Left>
                    <Icon style={{color: 'white', right: 0}} name="ios-menu" 
                    onPress={() => this.props.navigation.openDrawer()}/>
                  </Left>
                  <Text style={{color:'white'}}>Todo App</Text>
              </Header>
                <Content contentContainerStyle={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text>Ini menu ini</Text>
                </Content>
            </Container>
        )
    }
}

export default ini;