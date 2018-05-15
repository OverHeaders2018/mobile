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
          <Text style={styles.logo}>new New Blockchain</Text>
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
    fontSize: 35
  },
  login: {
    flex: 2,
    justifyContent: 'center'
  },
  input: {
    width: 100,
    backgroundColor: "#34495E"
  }
});
