import React, { Component } from 'react';
import DrawerNavigator from './app/screens/drawerNavigator';

//============== useless -- delete aja
// import login from './screens/login';
// import splash from './screens/splash';
// import register from './screens/register';
// import dashboard from './app/screens/dashboard';

// const Root = createStackNavigator ({  
//   splash: splash,
//   login: login, 
//   register: register,
//   dashboard: dashboard,
//   ini: ini
// },{
//   initialRouteName: 'splash'
// })
//============ useless
//
// Note: btw stackNavigator digunakan untuk perpindahan screen.
//       jadi kalo tombol B ditekan, maka muncul seperti layer / screen baru yang menyelimuti screen A..
//       beda dengan drawerNavigator, dia cuman berganti content, letak header & drawer tetap sama... 

class App extends Component {
  render() {
    return (
      <DrawerNavigator />
    );
  }
}

export default App;
