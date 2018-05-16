import React, { Component } from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import SwipeCards from 'react-native-swipe-cards';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

export default class CardUI extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
       let sellers = this.props.sellers.join(',');
       let buyers = this.props.buyers.join(',');
       let desc ='created at:' + this.props.create_date;
       desc += "\nof type:" + this.props.type;
        return (
          <Card>
            <CardTitle title="Sellers:"
              subtitle={sellers}
            />
            <CardTitle
              title="Buyers:"
              subtitle={buyers}
            />
            <CardContent text={desc} />
         </Card>
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
        marginTop:30,
        height: 100,
        backgroundColor: '#E67E22',
    },
    noMoreCardsText: {
        fontSize: 22
    }});
