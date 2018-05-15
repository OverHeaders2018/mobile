import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import BlockChain from "../services/blockchainService";
import Auto from "../services/AuthApiService";
var blockChain= new BlockChain();

export default class HomeScreen extends Component {
  static navigationOptions = {
   title: 'Home',
   headerStyle: {
    backgroundColor: '#f4511e',
   },
   headerTintColor: '#fff',
   headerTitleStyle: {
      fontWeight: 'bold',
   },
  };

  state = {
    balance: null
  };

   getdata () {
            var data =  blockChain.getAllContracts('sss');

            data.then((res) => this.setState({balance: res.answer})).catch ((res) => this.setState({balance: res.answer}));

        }

  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.balanceButton} onPress={this.getdata.bind(this)}>
          <Text style={styles.balanceText}>Get Balance</Text>
        </TouchableOpacity>
        {this.state.balance && <Text style={styles.balance}>
          {`${this.state.balance}`}
        </Text>}
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
