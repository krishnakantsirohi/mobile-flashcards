import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import {connect} from 'react-redux';
import {gray, white} from "../utils/colors";

class Deck extends Component{
    render() {
        const {deck} = this.props;
        return(
            <View style={styles.container}>
                <TouchableOpacity onPress={()=>this.props.navigation.navigate(
                    'DeckDetails', {deckID:deck.id}
                )}>
                    <Text style={styles.deckName}>
                        {deck.title}
                    </Text>
                    <Text style={styles.subText}>
                        {deck.cards.length}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

function mapStateToProps(state, {id, navigation}){
    return{
        deck: state[id],
        navigation,
    }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
    container: {
        height:120,
        marginTop: 15,
        marginLeft:15,
        marginRight: 15,
        marginBottom: 5,
        backgroundColor: white,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        justifyContent: 'center'
    },
    deckName: {
        fontSize: 25,
        alignSelf: 'center',
        color: 'black',
    },
    subText: {
        fontSize: 20,
        color: gray,
        alignSelf: 'center'
    }
})
