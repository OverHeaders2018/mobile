import React, { Component } from 'react';
import {
  AppRegistry,
  AsyncStorage,
  Alert,
} from 'react-native';
import PushNotification from 'react-native-push-notification';

import Auth from "../services/AuthApiService";

export default class PushNotificationsController extends Component {
  constructor() {
    super();

    this.userEndPoint = null;
    this.userToken = null;
    this.authAPI = new Auth();

    this.getUserToken();
  }

  registerEndPoint(token) {
    let data = this.authAPI.registerDevice(this.userToken, token);

    data.then((res) => res.json())
    .then((res) => {
      if (!res.result)
        alert("register error")
    })
    .catch((e) => alert(e));
  }

  async getUserToken() {
    try {
      this.userToken = await AsyncStorage.getItem("token");
    } catch (e) {
        console.log("error getting token ", e);
    }
  }

  componentDidMount() {
    let pushCont = this;

    PushNotification.configure({

        // (optional) Called when Token is generated (iOS and Android)
        onRegister: function(token) {
            console.log( 'TOKEN:', token );
            //pushCont.registerEndPoint(token.token);
        },

        // (required) Called when a remote or local notification is opened or received
        onNotification: function(notification) {
            console.log( 'NOTIFICATION:', notification );
            Alert.alert("Notification:", notification.message);
        },

        // ANDROID ONLY: GCM Sender ID (optional - not required for local notifications, but is need to receive remote push notifications)
        senderID: "248223894140",

        // IOS ONLY (optional): default: all - Permissions to register.
        permissions: {
            alert: true,
            badge: true,
            sound: true
        },

        // Should the initial notification be popped automatically
        // default: true
        popInitialNotification: true,

        /**
          * (optional) default: true
          * - Specified if permissions (ios) and token (android and ios) will requested or not,
          * - if not, you must call PushNotificationsHandler.requestPermissions() later
          */
        requestPermissions: true,
    });
  }

  render() {
    return null;
  }
}
