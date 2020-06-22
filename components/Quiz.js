import React, {Component} from 'react';
import {View, ActivityIndicator, Text, TouchableOpacity, StyleSheet, Dimensions} from 'react-native';
import {connect} from 'react-redux'
import shuffle from 'shuffle-array'
import {gray, purple, white} from "../utils/colors";
import Score from "./Score";

class Quiz extends Component{
    state = {
        cards: null,
        index: 0,
        total:0,
        right: 0,
        answer:'',
        showScore:false,
    }

    componentDidMount() {
        const {cards} = this.props;
        shuffle(cards);
        const card = cards[0];
        this.setState(()=>({
            cards: cards,
            card: card,
            total: cards.length,
            index:1,
        }))
    }

    handleRightAnswer = () => {
        this.setState((state) => ({
            right: state.right + 1,
        }));
        this.handleNextQuestion();
    }

    handleWrongAnswer = () => {
        this.setState((state) => ({
            wrong: state.wrong + 1,
        }));
        this.handleNextQuestion();
    }

    handleShowAnswer = () => {
        const {card} = this.state;
        let answer = card.answer;
        if (this.state.answer==='')
            answer = card.answer;
        else
            answer = '';
        this.setState(()=>({
            answer: answer,
        }))
    }

    handleNextQuestion = () => {
        const {cards, index} = this.state;
        if (index<cards.length){
            const card = cards[index];
            this.setState(()=>({
                card: card,
                index: index+1,
            }))
        }
        else {
            this.setState(()=>({
                showScore: true,
            }))
        }
    }

    render() {
        const {card, index, answer, total, right, showScore} = this.state

        if (card===null || typeof card==='undefined')
            return <ActivityIndicator style={{marginTop:50}}/>
        else {
            return showScore
                ? (
                    <Score right={right} total={total} navigation={this.props.navigation} deckID={this.props.deckID}/>
                )
                : (
                <View style={styles.container}>
                    <View style={{alignItems:'center'}}>
                        <Text style={{fontSize: 25, color:gray}}>
                            Questions remaining
                        </Text>
                        <Text style={{fontSize: 25, color:gray}}>
                            {total - index}
                        </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <Text style={styles.title}>
                            {card.question}
                        </Text>
                        <Text style={styles.subText} hide={this.state.showAnswer}>
                            {answer}
                        </Text>
                    </View>
                    <View style={{alignItems:'center'}}>
                        <TouchableOpacity
                            style={styles.showAnswer}
                            onPress={()=>this.handleShowAnswer()}
                        >
                            <Text style={{color:white, fontSize:18}}>
                                Show Answer
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.correct}
                                          onPress={this.handleRightAnswer}
                        >
                            <Text style={{color:white, fontSize:18}}>
                                Correct
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.Incorrect}
                                          onPress={this.handleWrongAnswer}
                        >
                            <Text style={{color: white, fontWeight:'bold', fontSize:18}}>
                                Incorrect
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

function mapStateToProps(state, {route}){
    const {deckID} = route.params;
    const cards = state[deckID].cards;
    return {
        cards,
        deckID,
    }
}

export default connect(mapStateToProps)(Quiz);

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
        fontSize: 30,
        alignSelf: 'center'
    },
    subText:{
        color: gray,
        fontSize: 20,
        fontWeight: 'bold',

    },
    showAnswer: {
        borderWidth: 2,
        width: 200,
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: purple,
    },
    correct: {
        borderWidth: 2,
        width: 200,
        height: 50,
        marginTop: 20,
        borderRadius: 5,
        borderColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
    },
    Incorrect: {
        width: 200,
        height: 50,
        marginTop: 20,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },
})
