import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator, DrawerNavigator } from 'react-navigation';

import HomeScreen from './srcs/pages/HomeScreen';
import LoginScreen from './srcs/pages/LoginScreen';
import ClosedContracts from './srcs/pages/ClosedContracts';
import OpenContracts from './srcs/pages/OpenContracts';

import Menu from './srcs/components/Menu';
/*
const menu = StackNavigator({
  Home: {screen: HomeScreen},
  Open: {screen: OpenContracts},
  Closed: {screen: ClosedContracts},
},
{
  headerMode: "float"
})

const mainNavigator = DrawerNavigator({
  menu: menu
},
{
  // drawer config
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: (props) => <Menu {...props} />,
});

const nav = StackNavigator({
  login: LoginScreen,
  drawer: mainNavigator
}, {
  headerMode: 'none',
  title: 'Main',
});*/


const app = DrawerNavigator({
  // routing
  HomeScreen: {screen: HomeScreen},
  ClosedContracts: {screen: ClosedContracts},
  OpenContracts: {screen: OpenContracts},
},
{
  // drawer config
  drawerWidth: 300,
  drawerPosition: 'left',
  initialRouteName: 'HomeScreen',
  headerMode: 'float',
  contentComponent: (props) => <Menu {...props} />,
});

const mainNavigator = StackNavigator({
  login: {screen: LoginScreen},
  Container: {screen:app},
},
{
  headerMode: 'float',
});

AppRegistry.registerComponent('mobile', () => mainNavigator);
