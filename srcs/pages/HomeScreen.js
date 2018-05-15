import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { DrawerActions } from 'react-navigation';

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
      headerRight: (<TouchableOpacity onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}><Text>aa</Text></TouchableOpacity>),
    }
  }

  state = {
    balance: null
  };

  render () {
    return (
      <View style={styles.container}>

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
