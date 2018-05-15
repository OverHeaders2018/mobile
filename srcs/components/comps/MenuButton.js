import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  TouchableOpacity} from 'react-native';

export default class MenuButton extends Component {
  constructor(props) {
    super(props);
  }

  toggleOpen() {
      this.props.navigate('DrawerOpen');
  }

  render() {
    return (
        <TouchableOpacity onPress={() => this.toggleOpen()}>
          <View style={styles.iconBox}>
            <Image
            style = {styles.icon}
            source = {require("../../imgs/menu.png")}
             />
          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  iconBox: {
    width: 40,
    padding: 4,
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 300,
  },
  icon: {
    width: 30,
    height: 30,
  },
});
