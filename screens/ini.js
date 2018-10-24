import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Button, Container, Header, Content, Left} from 'native-base';

class ini extends Component{

    static navigationOptions = {
        drawerIcon :(
          <Image source={require('./images/home.png')}
          style={{height:24, width: 24}} />
        )
      }

    render() {
        return (
            <Container>
              <Header>
                  <Left>
                    <Icon name="ios-menu" onPress={() => this.props.navigation.openDrawer()}/>
                  </Left>
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