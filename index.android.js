import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from './srcs/pages/HomeScreen';

const RootStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  {
    initialRouteName: 'Home',
  }
);

AppRegistry.registerComponent('mobile', () => RootStack);
