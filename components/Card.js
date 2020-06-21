import React,{Component} from 'react';
import {View, Text, StyleSheet} from "react-native";
import {connect} from 'react-redux'

class Card extends Component{
    render() {
        const {card} = this.props;
        return(
            <View>
                <Text>
                    Card
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state, {deckID, cardID}){
    const card = state[deckID].cards[cardID];
    return{
        card,
    }
}

export default connect(mapStateToProps)(Card)
