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
import { DrawerActions} from 'react-navigation';

export default class MenuOpen extends Component {
  constructor(props) {
    super(props);
  }


  render () {
    return (

        <TouchableOpacity onPress={()=> this.props.navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Image style = {[styles.icon]} source = {require ("../imgs/menu.png")}/>
        </TouchableOpacity>

    );
  }
}

const styles = StyleSheet.create({

  icon: {
    width: 40,
    height: 50,
  }
});
