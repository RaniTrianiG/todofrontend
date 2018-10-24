import React, { Component } from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Icon } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class register extends Component {
  static navigationOptions = {
    title: 'Sign Up',
    headerTitleStyle :{ flexGrow: 1, color:'black', fontSize: 16},
    headerTintColor: 'black',
    headerStyle: {
        color: 'black'
    }
}

  render() {
    return (
      <Container>
        <Content>
        <Image source = {require ('../images/todoapp.png')} style={{height: 110, width: null, flex: 1}}/>
          <Form  style={{paddingTop: 50}}>
          <Item rounded >
            <FontAwesome style={style.icon} active name='user' />
              <Input style={style.input} placeholder='Username'/>
          </Item>
          <View style={{paddingTop: 18}}>
            <Item rounded style={style.item}>
              <FontAwesome style={style.icon} active name='envelope-o' />
                <Input style={style.input} placeholder='Email'/>
            </Item>
          </View>
          <View style={{paddingTop: 15}}>
            <Item rounded style={style.item}>
              <FontAwesome style={style.icon} active name='key' />
                <Input style={style.input} placeholder='Password'/>
            </Item>
          </View>
          <View style={{paddingTop: 20}}>
            <Item rounded style={style.item}>
              <FontAwesome style={style.icon} active name='unlock-alt' />
                <Input style={style.input} placeholder='Confirm Password'/>
            </Item>
          </View>
          <View  style={style.buton}>
            <Button rounded block style={{backgroundColor: 'orange'}}>
              <Text style={{color: 'white', fontSize: 17}}>Sign Up</Text>
            </Button>
          </View>
           <Text style={{left: 70, top: 18}}>Already have an account. </Text>
           <Text style={{color: 'orange', left: 230}}>Login Here</Text>
          </Form>
        </Content>
      </Container>
    );
  }
}

const style = StyleSheet.create({
  icon:{
    left: 15,
    fontSize: 15
  },
  input : {
    left: 15,
    top: 1
  },
  item: {
    paddingTop: 5
  },
  buton:{
    paddingTop: 30
  },
  text: {
    textAlign: 'center',
    paddingTop: 30
  }
})