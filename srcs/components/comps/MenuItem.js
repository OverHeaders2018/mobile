import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  AsyncStorage,
  Text,
  Alert,
  Image,
  TouchableOpacity,
  View} from 'react-native';

const GLOBALS = require('../Globals');

export default class MenuItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isActive: this.props.isActive,
    }
  }

  async logOut() {
    console.log('logout');
    try {
      await AsyncStorage.removeItem('loginToken');
      console.log('finish logging out');
    } catch (e) {
      Alert.alert("שגיאת התנתקות");
    }
  }

  navigateTo() {
    if (this.props.screen == "LoginScreen") {
      this.logOut();
      this.props.navigate(this.props.screen);
    }

    if (this.props.screen != GLOBALS.getActiveScreen()) {
      this.props.navigate(this.props.screen);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <TouchableOpacity onPress={()=> this.navigateTo()}>
            <Text style={styles.itemText}>{this.props.text}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.iconBox, {backgroundColor: (this.props.isActive) ? "#ffd500" : "#f1f1f1"}]}>
          <Image
          style = {[styles.icon, {opacity: (this.state.isActive) ? 1 : 0.7}]}
          source = {this.props.icon}
           />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderColor: "#d0d0d0",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    height: 70,
  },
  iconBox: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: -5,
    borderLeftWidth: 1,
    borderLeftColor: "#d0d0d0"
  },
  icon: {
    width: 60,
    height: 50,
  },
  itemText: {
    textAlign: 'right',
    fontFamily: 'OpenSansHebrewRegular',
    fontSize: 20,
    color: '#444444',
    paddingRight: 12,
    paddingTop: 17
  },
  textBox: {
    width: 200,
  }
});
