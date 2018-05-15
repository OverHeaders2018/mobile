import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

export default class LoginScreen extends Component {
  static navigationOptions = {
   title: 'Login',
  };

  constructor(props) {
    super(props);

    this.state = {
      t: "a"
    }
  }

  render () {
    return (
      <View style={styles.container}>
          <Text>{this.state.t}</Text>
          <TouchableOpacity onPress={()=> this.props.navigation.toggleDrawer()}>
            <Text>miao</Text>
          </TouchableOpacity>
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
  balanceText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 16
  },
});
