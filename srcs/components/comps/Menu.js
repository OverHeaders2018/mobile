import React, { Component } from 'react';
import {
  AppRegistry,
  ActivityIndicator,
  AsyncStorage,
  StyleSheet,
  Text,
  Image,
  View,
  Alert,
  ScrollView} from 'react-native';

const GLOBALS = require('../Globals');

import { DrawerItems } from 'react-navigation';

import MenuItem from './MenuItem';

export default class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      activeScreen: [],
      activeIndex: 0,
      firstRun: true,
    }
  }

  async fetchData() {
    try {
      let name = await AsyncStorage.getItem("name");

      this.setState({
        name: name,
      });
    } catch(e) {
      this.setState({
        name: "לקוח .",
      });
    }
  }

  getActiveScreen() {
    if (this.state.firstRun) {
      return "MainScreen";
    }

    return this.state.activeScreen[this.state.activeIndex];
  }

  popScreen() {
    var tmpArr = this.state.activeScreen;

    tmpArr.pop();

    this.setState({
      activeScreen: tmpArr,
      activeIndex: this.state.activeIndex - 1,
    });
  }

  changeActiveScreen(screen) {
    var tmpArr = this.state.activeScreen;

    tmpArr.push(screen);

    this.setState({
      firstRun: false,
      activeScreen: tmpArr,
      activeIndex: this.state.activeIndex + 1,
    });
  }

  componentDidMount() {
    this.fetchData();
    // bind chagnge active screen function for all app
    GLOBALS.changeActiveScreen = this.changeActiveScreen.bind(this);
    GLOBALS.popActiveScreen = this.popScreen.bind(this);
    GLOBALS.getActiveScreen = this.getActiveScreen.bind(this);
  }

  render() {
    const menu = [{
      id: 1,
      name: "מסך ראשי",
      screen: 'MainScreen',
      img: require('../../imgs/main.png')
    },
    {
      id: 2,
      name: "לידים שקיבלתי",
      screen: "Leads",
      img: require('../../imgs/lead.png')
    },
    {
      id: 3,
      name: "רכישות אחרונות",
      screen: "Purchase",
      img: require('../../imgs/purchase.png')
    },
    {
      id: 4,
      name: "בחירת ערים לשירות",
      screen: "Cities",
      img: require('../../imgs/cities.png')
    },
    {
      id: 5,
      name: "התנתקות",
      screen: "LoginScreen",
      img: require('../../imgs/logout.png')
    },
  ];

  console.log(this.state);

    return (
      <View style={styles.container}>
        <View style={styles.profile}>
          <View style={styles.logoView}>
            <Image
            style = {styles.logo}
            source = {require('../../imgs/logo.png')}
             />
          </View>
          <Text style={styles.header}>שלום, {this.state.name}.</Text>
          <Text style={styles.subHeader}>מספר לקוח : {GLOBALS.userID}</Text>
        </View>
        <View style={styles.mainMenu}>
          {
            menu.map((item)=> {return(
              <MenuItem
                key={item.id}
                navigation={this.props.navigation}
                changeScreen={this.changeActiveScreen.bind(this)}
                navigate={this.props.navigation.navigate}
                isActive={(this.getActiveScreen() == item.screen) ? true : false}
                text={item.name} screen={item.screen}
                icon={item.img} />
            )})
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderColor: "#d0d0d0",
    borderWidth: 1
  },
  logoView: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    height: 100,
    width: 150,
  },
  profile: {
    flex: 2,
    backgroundColor: "#e5e5e5",
    justifyContent: 'center',
    borderBottomColor: "#d0d0d0",
    borderBottomWidth: 1
  },
  mainMenu: {
    flex: 5,
    backgroundColor: "#f1f1f1"
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'OpenSansHebrewRegular',
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
    fontFamily: 'OpenSansHebrewRegular',
  }
});
