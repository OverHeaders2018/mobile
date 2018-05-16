import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  AsyncStorage,
  ActivityIndicator
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import MenuOpen from '../components/MenuOpen';
import SwipeOpenContracts from '../components/SwipeOpenContracts';
import BlockAPI from "../services/BlockApiService";

export default class OpenContracts extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Open Contracts',
      headerLeft: null,
      headerTintColor: "#fff",
      headerStyle: {
       backgroundColor: '#f4511e',
      },
      headerTitleStyle: {
         fontWeight: 'bold',
      },
      headerRight: (<MenuOpen navigation={navigation}/>),
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    }

    this.blockApi = new BlockAPI();
  }

  async getContracts() {
    try {
      let token = await AsyncStorage.getItem("token");
      let data = await this.blockApi.getMyContracts(token);

      data = data.json();

      this.setState({
        data: data,
        isLoading: false
      });
    } catch (e) {
      alert(e);
    }
  }

  componentDidMount() {
    this.getContracts();
  }

  render () {
    if (this.state.isLoading) {
      return (<View style={styles.container}>
                <ActivityIndicator color="#2C3E50" size="large" style={styles.loader}/>
            </View>);
    }

    return (
      <View style={styles.container}>
          <SwipeOpenContracts />
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
  loader: {
    marginTop: 250,
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
