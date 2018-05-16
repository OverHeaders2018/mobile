import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  AsyncStorage
} from 'react-native';
import { DrawerActions } from 'react-navigation';

import MenuItem from './MenuItem';

export default class Menu extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "Client"
    }

  }

  async logout() {
    try {
      await AsyncStorage.removeItem("token");

      this.props.navigation.navigate("login");
      this.props.navigation.dispatch(DrawerActions.toggleDrawer());
    } catch (e) {
      alert(e);
    }
  }

  navigate(screen) {
    if (screen == "Logout") {
      this.logout();
      return;
    }
    this.props.navigation.navigate(screen);
    this.props.navigation.dispatch(DrawerActions.toggleDrawer());
  }

  render () {
    let menu = [
      {
        name: "Home",
        screen: "Home",
        icon: require("../imgs/home.png")
      },
      {
        name: "Open Contracts",
        screen: "Open",
        icon: require("../imgs/open.png")
      },
      {
        name: "Signed Contracts",
        screen: "Closed",
        icon: require("../imgs/close.png")
      },
      {
        name: "Logout",
        screen: "Logout",
        icon: require("../imgs/logout.png")
      }
    ];
    return (
      <View style={styles.container}>
        <ScrollView style={styles.wrapper}>
          <View style={styles.avatarBox}></View>
          <Text style={styles.header}>Hello, {this.state.name}</Text>
          {
            menu.map((item, key) =>
                <MenuItem item={item} navigate={this.navigate.bind(this)} key={key}/>
            )
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#21e4e5',
  },
  wrapper: {
    marginTop: 40,
  },
  header: {
    paddingLeft: 5,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10
  },
  avatarBox: {
    width: 180,
    height: 180,
    borderRadius: 100,
    marginLeft: 50,
    backgroundColor: '#252cff'
  }
});
