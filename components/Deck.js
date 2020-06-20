import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import {gray, white} from "../utils/colors";

class Deck extends Component{
    render() {
        const {deck} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.deckName}>
                    {deck.title}
                </Text>
                <Text style={styles.subText}>
                    {deck.cards.length}
                </Text>
            </View>
        )
    }
}

function mapStateToProps(state, {id}){
    return{
        deck: state[id],
    }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginLeft:15,
        marginRight: 15,
        backgroundColor: white,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    deckName: {
        fontSize: 25,
        flex:1,
        alignSelf: 'center'
    },
    subText: {
        fontSize: 20,
        flex: 1,
        color: gray,
        alignSelf: 'center',
    }
})
