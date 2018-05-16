import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AsyncStorage,
  ActivityIndicator
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

  async checkIfUserExists() {
    try {
      let token = await AsyncStorage.getItem("token");

      if (token) {
        this.props.navigation.navigate('drawer');
      }
    } catch (e) {
      alert(e);
    }
  }

  componentDidMount() {
    this.checkIfUserExists();
  }

  async signIn(token) {
    try {
      await AsyncStorage.setItem("token", token);
    } catch (e) {
      alert(e);
    }
  }

  login() {
    let data = this.auth.login({
      email: this.state.email,
      password: this.state.password
    });
    this.setState({
      isLoading: true
    })
    data.then((res) => res.json())
    .then((res) => {
      if (res.token) {
        this.signIn(res.token);
        this.props.navigation.navigate('drawer');
      } else {
        alert("Bad details");
        this.setState({
          isLoading: false
        })
      }
    })
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
                       <TouchableOpacity
                        onPress= {()=>
                          this.login()}
                        style={styles.registerButton}>
                         <Text style={styles.loginText}>Register</Text>
                       </TouchableOpacity>
         </View>
         {this.state.isLoading && <ActivityIndicator color="#2C3E50" size="large" />}
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
  registerButton: {
    backgroundColor: '#F39C12',
    paddingVertical: 15,
    marginTop: 75
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#fff'
  }
});
