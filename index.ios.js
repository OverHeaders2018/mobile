import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import {StackNavigator, DrawerNavigator} from 'react-navigation';

import Menu from './components/comps/Menu';

const Web3 = require('web3');
const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('http://localhost:8545'));

const mainNavigator = StackNavigator({
  MainScreen: {screen: MainScreen},
  Leads: {screen: LeadScreen},
  Purchase: {screen: PurchaseScreen},
  Cities: {screen: CityScreen},
},
{
  headerMode: 'screen',
});

const newBlockchain = DrawerNavigator({
  // routing
  LoginScreen: {screen: LoginScreen,
                navigationOptions: {
                  drawerLockMode: 'locked-closed'
                }},
  Container: {screen: mainNavigator},
},
{
  // drawer config
  drawerWidth: 300,
  drawerPosition: 'left',
  contentComponent: (props) => <Menu {...props} />,
});

AppRegistry.registerComponent('newBlockchain', () => newBlockchain);
