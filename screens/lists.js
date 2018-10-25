import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Icon, Button, Container, Header, Content, Left, Title, Right, Card, CardItem, Fab, Thumbnail, Body, Item, Input} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {connect} from 'react-redux';

class Lists extends Component{


    renderItem = ({item, index}) => (
        <View>
            <ListItem>
                <Text style={{color:'black', top:10}}>{item.name}</Text>
                <Text style={{color:'black', top: 5}}>{item.age}</Text>
            </ListItem>
        </View>
      );

  render() {

    const searchFilter = this.props.todos.filter((filter) => {
        return(filter.name.toLowerCase().indexOf(this.state.val.toLowerCase())!==-1)    
    })

    return (
      <Container>
        <Header style={{backgroundColor: '#293A4E'}} searchBar rounded>
          <Left>
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon style={{color: 'white'}} name="ios-menu" />
            </Button>
          </Left>
          <Item style={{right:40}}>
            <Icon name="ios-search" />
            <Input value={this.state.val} onChangeText={(text)=> this.setState({val:text})} placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Body>
              <FlatList
                    data={searchFilter}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem}
                /> 
                  <Text style={{fontWeight:'bold', fontSize: 20}}>Title List TodoApp</Text>
                <Text>
                  Description
                </Text>
                <Button success style={{left: 200, top:44}}>
                    <Icon type="FontAwesome" name="pencil-square" />
                </Button>
                <Button danger style={{left:270}}>
                    <Icon name="trash" />
                </Button>
              </Body>
            </CardItem>
          </Card>
        </Content>
        <Fab style={{ backgroundColor: '#3E495B' }}
                    onPress={() => this.props.navigation.navigate('create')}>
                    <Icon type="FontAwesome" name="plus" style={{ backgroundColor: '#3E495B' }}/>
                </Fab>
      </Container>
    )
  }
}
const mapStateToProps = (state) => {
    return{
        todoapps : state.todoapps.todoapps
    }
}
export default connect(mapStateToProps)(Lists);
