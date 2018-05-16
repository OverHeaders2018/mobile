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
import PushNotification from 'react-native-push-notification';

import PushNotificationsController from '../PushNotifications/PushNotificationsController';


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

  sentPush() {
    PushNotification.localNotificationSchedule({
      message: "You have new contract awaiting.", // (required)
      date: new Date(Date.now() + (10 * 1000)) // in 60 secs
    });
  }

  render () {
    this.sentPush();
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Welcome !</Text>
        <Image source={require('../imgs/logo.png')} />
        <Text style={styles.header}>Contracts awaiting your signature: </Text>
        <Text style={styles.subtitle}>6</Text>
        <Text style={styles.header}>Signed sontracts: </Text>
        <Text style={styles.subtitle}>10</Text>
        <PushNotificationsController />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
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
  header: {
    textAlign: 'left',
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold'
  },
  logo: {
    fontSize: 30
  },
  subtitle: {
    textAlign: 'center',
    color: '#f4511e',
    fontSize: 35
  },
});
