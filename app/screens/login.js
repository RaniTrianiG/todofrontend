import React, { Component } from 'react';
import { View, Image, StyleSheet, Icon, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class login extends Component {

  static navigationOptions = {
    title: 'Sign In',
    headerTitleStyle :{ flexGrow: 1, color:'black', fontSize: 16},
    headerTintColor: 'black',
    headerStyle: {
        color: 'black'
    }
}

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
        <Image source = {require ('../images/todoapp.png')} style={{height: 110, width: null, flex: 1}}/>
          <Form>
            <Item floatingLabel>
                <Label>Username</Label>
                <Input />
            </Item>
            <Item floatingLabel last style={{paddingTop: 10}}>
              <Label style={{paddingTop: 10}}>Password</Label>
              <Input />
            </Item>
            <Text style={style.forgot}>Forgot Password?</Text>
          </Form>
          <View style={{paddingTop: 15}}>
            <Button block rounded style={{height:50, backgroundColor: 'orange'}}  onPress={() => navigate('dashboard')} >
              <Text>Sign In</Text>
            </Button>
              <Text style={style.conect}>------ Or Connect with ------</Text>
          <View style={style.fb}>
             <Button primary style={{height: 40}}>
             <FontAwesome style={{color:'white', fontSize: 25, left: 12}} name="facebook-square" />
                <Text>Continue With Facebook</Text>
              </Button>
            <Button danger style={{height:40, marginTop: 15}}>
            <FontAwesome style={{color:'white', fontSize: 25, left: 12}} name="google-plus-square" />
              <Text>Continue With Google +  </Text>
            </Button>
          </View>
          </View>
        </Content>
      </Container>
    );
  }
}

const style= StyleSheet.create({
  conect :{
    color: 'grey',
    textAlign: 'center',
    paddingTop: 40
  },
  forgot :{
    color: 'grey',
    paddingTop: 10,
    paddingLeft : 220
  },
  fb: {
    paddingTop: 40, 
    paddingLeft: 60
  },
})