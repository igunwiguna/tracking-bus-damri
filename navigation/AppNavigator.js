import React from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react';
import { createSwitchNavigator } from '../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-navigation';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../screens/LoginScreen';

// import * as firebase from 'firebase'

// firebase.initializeApp({
//   apiKey: "AIzaSyDqRxCkr63fpFECRPqx-54c4ZW0r9aGGKw",
//   authDomain: "monitoringbus-reactnative.firebaseapp.com",
//   databaseURL: "https://monitoringbus-reactnative.firebaseio.com",
//   projectId: "monitoringbus-reactnative",
//   storageBucket: "monitoringbus-reactnative.appspot.com",
//   messagingSenderId: "822855793606"
// });

// const config = {
//   apiKey: "AIzaSyDqRxCkr63fpFECRPqx-54c4ZW0r9aGGKw",
//   authDomain: "monitoringbus-reactnative.firebaseapp.com",
//   databaseURL: "https://monitoringbus-reactnative.firebaseio.com",
//   projectId: "monitoringbus-reactnative",
//   storageBucket: "monitoringbus-reactnative.appspot.com",
//   messagingSenderId: "822855793606"
// }

// const Firebase = firebase.initializeApp(config);
// export default Firebase;

export default createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Login: {
    screen: LoginScreen
  },  
  Main: MainTabNavigator,
});



