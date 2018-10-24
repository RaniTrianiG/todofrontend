import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';

class lists extends Component{
    render() {
        return (
            <Container>
              <Header>
                  <Left>
                    <Icon style={{color: 'white', right: 100}} name="ios-menu" 
                    onPress={() => this.props.navigation.openDrawer()}/>
                  </Left>
              </Header>
                <Content contentContainerStyle={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Text>Ini menu lists</Text>
                </Content>
            </Container>
        )
    }
}

export default lists;