import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import Auth from "../services/AuthApiService";

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.auth = new Auth();
  }

  login() {
    this.props.navigation.navigate('Container');/*
    let data = this.auth.login({
      email: 'orz@google.com',
      password: '123456'
    });

    data.then((res) => res.json())
    .then((res) => {
      if (res.token) {
        this.props.navigation.navigate('MainStack');
      } else {
        alert("Bad details");
      }
    })*/

  }

  render () {
    return (
      <View style={styles.container}>
          <Text style={styles.logo}>new New(Blockchain());</Text>
          <View style={styles.login}>
                     <TextInput
                       placeholder="Enter email"
                       placeholderTextColor="rgba(255,255,255,0.7)"
                       underlineColorAndroid="transparent"
                       onChangeText={(text) => this.setState({email:text})}
                       style={styles.input}/>
                     <TextInput
                       placeholder="Enter password"
                       underlineColorAndroid="transparent"
                       placeholderTextColor="rgba(255,255,255,0.7)"
                       secureTextEntry
                       onChangeText={(text) => this.setState({password:text})}
                       style={styles.input}/>
                       <TouchableOpacity
                        onPress= {()=>
                          this.login()}
                        style={styles.loginButton}>
                         <Text style={styles.loginText}>Login</Text>
                       </TouchableOpacity>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2C3E50',
  },
  logo: {
    textAlign: 'center',
    color: 'white',
    fontSize: 35,
    marginBottom: 50
  },
  login: {
    justifyContent: 'space-around',
    padding: 10,
    width: 300
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    color: '#fff',
    marginBottom: 5,
    borderRadius: 2,
    paddingHorizontal: 15,
    textAlign: 'center'
  },
  loginButton: {
    backgroundColor: 'rgba(255, 213, 0, 0.78)',
    paddingVertical: 15
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
});
