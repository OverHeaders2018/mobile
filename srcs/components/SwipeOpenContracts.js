import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import CardUI from './CardUI';

const NoMoreContracts = () => {
    return (
        <View>
            <Text style={styles.noMoreCardsText}>No more Contracts</Text>
        </View>
    )
};

const Card = (props) => {
  return (
    <View style={styles.card}>
      <CardUI type={props.type} text ={props.text} sellers={props.sellers} buyers={props.buyers} create_date={props.create_date} expire={props.expire}/>
    </View>
  )
}

export default class SwipeOpenContracts extends Component {
    constructor(props) {
      super(props);
    }

    onRightSwipe (card) {
        console.log(`Right for ${card.text}`)
    }

    onLeftSwipe (card) {
        console.log(`Left for ${card.text}`)
    }

    onUpSwipe (card) {
        console.log(`Up for ${card.text}`)
    }

    render() {
        return (
            <SwipeCards
                cards={this.props.data}
                renderCard={(cardData) => <Card type={cardData.type} text ={cardData.text} sellers={cardData.sellers} buyers={cardData.buyers} create_date={cardData.create_date} expire={cardData.expire}/>}
                renderNoMoreCards={() => <NoMoreContracts />}
                onRightSwipe={this.onRightSwipe}
                onLeftSwipe={this.onLeftSwipe}
                onUpSwipe={this.onUpSwipe}
                hasUpAction
                // If you want a stack of cards instead of one-per-one view, activate stack mode
                // stack={true}
            />
        )
    }
}

const styles = StyleSheet.create({
  card: {
      flex: 1,
      height: 300,
      marginTop: 5,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth:1,
      backgroundColor: "#E74C3C",
      width: 300
  },
  noMoreCardsText: {
      fontSize: 22
  }});
