import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux'
import shuffle from 'shuffle-array'
import Card from "./Card";

class Quiz extends Component{
    render() {
        const {deck} = this.props;
        const cards = deck.cards
        shuffle(cards);
        return(
            <View>
                <Text>
                    {cards.map(card => <Card key={card.id} deckID={deck.id} cardID={card.id}/>)}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state, {route}){
    const {deckID} = route.params;
    const deck = state[deckID];
    return {
        deck
    }
}

export default connect(mapStateToProps)(Quiz);
