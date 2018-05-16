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
    //this.getContracts();
    this.setState({
      isLoading: false
    })
  }

  render () {
    if (this.state.isLoading) {
      return (<View style={styles.container}>
                <ActivityIndicator color="#2C3E50" size="large" style={styles.loader}/>
            </View>);
    }

    const expire ='15.05.19 23:00';
    const Cards = [
        {text: 'Tomato',    type: 'red', sellers: ['Alon Aviv', 'Or Zipori'], buyers: ['jian young'], create_date:'1.1.18 15:00', expire :expire},
        {text: 'Aubergine', type: 'purple', sellers: ['Alon Aviv', 'Or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.09 23:00', expire :expire},
        {text: 'Courgette', type: 'green', sellers: ['Alon Aviv', 'Or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.13 23:00', expire :expire},
        {text: 'Blueberry', type: 'blue', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.02.19 21:00', expire :expire},
        {text: 'Umm...',    type: 'cyan', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.19 20:00', expire :expire},
        {text: 'orange',    type: 'orange', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.19 23:01', expire :expire},
    ];

    return (

      <View style={styles.container}>
          <SwipeOpenContracts data={Cards} />
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
