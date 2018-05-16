import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
   Image
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import MenuOpen from '../components/MenuOpen';
import PushNotificationController from '../PushNotification/PushNotificationController';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerLeft: null,
      headerTintColor: "#fff",
      headerStyle: {
       backgroundColor: '#f4511e',
      },
      headerTitleStyle: {
         fontWeight: 'bold',
      },
      headerRight: (<MenuOpen navigation={navigation}/>),
    }
  }

  state = {
    balance: null
  };

  render () {
    return (
      <View style={styles.container}>
        <PushNotificationController/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  balanceButton: {
    backgroundColor: '#0dab7f',
    padding: 10,
    width: 200,
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5
  },
  icon: {
     width: 60,
     height: 60,
  },
  balanceText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
});
