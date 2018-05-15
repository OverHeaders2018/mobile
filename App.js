import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './global';
const Web3 = require('web3');

export default class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text : 'blbl'
        }
    }
  render() {
      const web3 = new Web3(
          new Web3.providers.HttpProvider('http://localhost:8545')
      );

        web3.eth.getBlock('latest').then((res)=> {this.state.text = res;}).catch((res)=> {this.state.text = 'error:' + res;));
    return (
      <View style={styles.container}>
        <Text>OverHeader project for 2018 BIU Hackton</Text>
        <Text>{this.state.text}</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
