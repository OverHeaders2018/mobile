import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import HomeScreen from './srcs/pages/HomeScreen';
import LoginScreen from './srcs/pages/LoginScreen';
import ClosedContracts from './srcs/pages/ClosedContracts';
import OpenContracts from './srcs/pages/OpenContracts';

import Menu from './srcs/components/Menu';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen,
    Open: OpenContracts,
    Closed: ClosedContracts
  },
  {
    initialRouteName: 'Login',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#062743',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

const MyApp = createDrawerNavigator({
  Home: {
    screen: RootStack,
  },
  Notifications: {
    screen: Menu,
  },
},
{
  drawerWidth: 300,
  contentComponent: props => <Menu {...props}/>
});

AppRegistry.registerComponent('mobile', () => MyApp);
