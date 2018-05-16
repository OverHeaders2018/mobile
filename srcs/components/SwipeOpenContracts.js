import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';

class Contract extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.card}>
                <Text>sellers :</Text>
                <View>
                    {this.props.sellers.map((seller) =>
                    <Text>{seller}</Text>
                )}
                </View>

                <Text>buyers: </Text>
                <View>
                    {this.props.buyers.map((buyer) =>
                        <Text>{buyer}</Text>
                    )}
                </View>
                <Text>view Contract file {this.props.type}</Text>
                <Text>create date {this.props.create_date}</Text>
                <Text>expire date {this.props.expire}</Text>
            </View>
        )
    }
}

const NoMoreContracts = () => {
    return (
        <View>
            <Text style={styles.noMoreCardsText}>No more Contracts</Text>
        </View>
    )
};
const expire ='15.05.19 23:00';
const Cards = [
    {text: 'Tomato',    type: 'red', sellers: ['Alon Aviv', 'Or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.19 23:00', expire :expire},
    {text: 'Aubergine', type: 'purple', sellers: ['Alon Aviv', 'Or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.09 23:00', expire :expire},
    {text: 'Courgette', type: 'green', sellers: ['Alon Aviv', 'Or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.13 23:00', expire :expire},
    {text: 'Blueberry', type: 'blue', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.02.19 21:00', expire :expire},
    {text: 'Umm...',    type: 'cyan', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.19 20:00', expire :expire},
    {text: 'orange',    type: 'orange', sellers: ['koko bozaglo', 'or Zipori'], buyers: ['daniel hermon', 'Amos Maimon'], create_date:'15.05.19 23:01', expire :expire},
];

export default class extends Component {
    state = {
        cards: Cards
    };

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
                cards={this.state.cards}
                renderCard={(cardData) => <Contract type={cardData.type} text ={cardData.text} sellers={cardData.sellers} buyers={cardData.buyers} create_date={cardData.create_date} expire={cardData.expire}/>}
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
        justifyContent: 'center',
        alignItems: 'center',
        width: 300,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: '#20da3d',
        fontSize: 14,
        backgroundColor: '#b1eea1',
        height: 80
    },
    noMoreCardsText: {
        fontSize: 22
    }});