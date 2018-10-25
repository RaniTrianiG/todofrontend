import React, { Component } from 'react';
import Drawer from 'react-native-drawer'

class dashboard extends Component {  
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };
  render () {
    return (
      <Drawer
        ref={(ref) => this._drawer = ref}
        content={<lists />}
        >
        
      </Drawer>
    )
  }
}
export default dashboard;