import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class MenuItem extends Component {
  constructor(props) {
    super(props);
  }

  navigateTo() {
    let to = this.props.item.screen;
    this.props.navigate(to);
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.textBox}>
          <View style={[styles.iconBox]}>
            <Image
            style = {[styles.icon]}
            source = {this.props.item.icon}
             />
          </View>
          <TouchableOpacity onPress={()=> this.navigateTo()}>
            <Text style={styles.itemText}>{this.props.item.name}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#acb0b0',
    borderColor: "#090909",
    height: 70,
    borderBottomWidth: 1
  },
  iconBox: {
    width: 50,
    borderRightColor: "#040202",
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  icon: {
    width: 40,
    height: 50,
  },
  itemText: {
    fontSize: 20,
    color: '#040202',
    paddingTop: 23,
    paddingLeft: 15
  },
  textBox: {
    width:295,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  }
});
