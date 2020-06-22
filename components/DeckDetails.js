import React, {Component} from 'react'
import {View, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'
import {connect} from 'react-redux';
import {gray, purple, white} from "../utils/colors";
import {deleteDeck} from "../actions";
import {removeDeck} from "../utils/api";

class DeckDetails extends Component{
    componentDidMount() {
        const {deck} = this.props;
        this.props.navigation.setOptions({title: deck.title})
    }

    handleDeleteDeck = () => {
        const {deck} = this.props;
        this.props.navigation.goBack();
        //this.props.dispatch(deleteDeck(deck.id));
        removeDeck(deck.id);
    }

    handleQuiz = () => {
        const {deck} = this.props;
        if (deck.cards.length===0)
            return this.props.navigation.navigate('NoCards');
        else
            return this.props.navigation.navigate('Quiz', {deckID:deck.id});
    }

    render() {
        const {deck} = this.props;
        return(
            <View style={styles.container}>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.title}>
                        {deck.title}
                    </Text>
                    <Text style={styles.subText}>
                        {deck.cards.length} cards
                    </Text>
                </View>
                <View style={{alignItems:'center'}}>
                    <TouchableOpacity
                        style={styles.addCardBtn}
                        onPress={()=>this.props.navigation.navigate('AddCard', {deckID:deck.id})}
                    >
                        <Text style={{color:white, fontSize:18}}>
                            Add Card
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startQuizBtn}
                                      onPress={this.handleQuiz}
                    >
                        <Text style={{color:white, fontSize:18}}>
                            Start Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.deleteDeckBtn}
                                      onPress={this.handleDeleteDeck}
                    >
                        <Text style={{color: 'red', fontWeight:'bold', fontSize:18}}>
                            Delete Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state, {route}){
    const {deckID} = route.params;
    return{
        deckID,
        deck: state[deckID],
    }
}

export default connect(mapStateToProps)(DeckDetails)

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height-100,
        marginLeft: 10,
        marginBottom: 10,
        marginRight: 10,
        marginTop: 10,
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
        justifyContent:'space-around',
        alignItems: 'center'
    },
    title: {
        fontSize: 28,
        alignSelf: 'center'
    },
    subText:{
        color: gray,
        fontSize: 18,
        fontWeight: 'bold'
    },
    addCardBtn: {
        borderWidth: 2,
        width: 200,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: purple,
    },
    startQuizBtn: {
        borderWidth: 2,
        width: 200,
        height: 50,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
    },
    deleteDeckBtn: {
        width: 200,
        height: 50,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
})
