import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  AsyncStorage,
  ImageBackground,
  ActivityIndicator
} from 'react-native';
import { DrawerActions } from 'react-navigation';
import MenuOpen from '../components/MenuOpen';
import BlockAPI from "../services/BlockApiService";
import CardUI from '../components/CardUI';

export default class ClosedContracts extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Close Contracts',
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

      data = data.json()

      this.setState({
        data: data,
        isLoading: false
      });
    } catch (e) {
      alert(e);
    }
  }

  getData() {
    const expire ='15.05.19 23:00';
    const Cards = [
        {text: 'Tomato',    type: 'red', sellers: ['jian Young'], buyers: ['Amos Maimon'], create_date:'15.05.19 14:00', expire :expire},
        {text: 'Aubergine', type: 'purple', sellers: ['Erlich Bachman'], buyers: ['jian young'], create_date:'14.05.09 23:00', expire :expire},
        {text: 'Courgette', type: 'green', sellers: ['Alon Aviv', 'Or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.13 23:00', expire :expire},
        {text: 'Blueberry', type: 'blue', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.02.19 21:00', expire :expire},
        {text: 'Umm...',    type: 'cyan', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.19 20:00', expire :expire},
        {text: 'orange',    type: 'orange', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.19 23:01', expire :expire},
    ];

    this.setState({
      data: Cards,
      isLoading: false
    });
  }

  componentDidMount() {
    //this.getContracts();
    this.getData();
  }

  render () {
    if (this.state.isLoading) {
      return (<View style={styles.container}>
                <ActivityIndicator color="#2C3E50" size="large" style={styles.loader}/>
            </View>);
    }

    let data = this.state.data;
    return (
      <ScrollView style={styles.container}>
        <View style={styles.wrapper}>
          {data.map((item, key) =>
              <CardUI key={key} type={item.type}
               text ={item.text}
               sellers={item.sellers}
               buyers={item.buyers}
               create_date={item.create_date}
               expire={item.expire}/>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  wrapper: {
    justifyContent: 'space-around',
    alignItems: 'center'
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
