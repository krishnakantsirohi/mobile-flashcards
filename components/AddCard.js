import React, {Component} from 'react';
import {TextInput, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, Platform} from 'react-native';
import {gray, white} from "../utils/colors";
import {connect} from 'react-redux'
import {generateUID, saveNewCardToDeck} from "../utils/api";

class AddCard extends Component{

    state = {
        question: '',
        answer: '',
    }

    componentDidMount() {
        const {deck} = this.props;
        this.props.navigation.setOptions({title:  'Add card to '+deck.title})
    }

    handleQuestionChange = (text) => {
        this.setState(()=>({
            question: text,
        }))
    }

    handleAnswerChange = (text) => {
        this.setState(()=>({
            answer: text,
        }))
    }

    handleSubmit = () => {
        const {deckID} = this.props;
        const card = {
            id: generateUID(),
            question: this.state.question,
            answer: this.state.answer,
        }
        saveNewCardToDeck({deckID, card})
        this.props.dispatch();
        this.props.navigation.goBack();
    }

    render() {
        return(
            <KeyboardAvoidingView style={styles.container} behavior={Platform.OS==='ios'?'padding':'padding'}>
                <Text style={styles.txt}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Question Here"
                    onChangeText={text => this.handleQuestionChange(text)}
                />
                <TextInput
                    style={styles.textInput}
                    placeholder="Enter Answer Here"
                    onChangeText={text => this.handleAnswerChange(text)}
                />
                <TouchableOpacity style={styles.addBtn} onPress={this.handleSubmit} disabled={this.state.question==='' || this.state.answer===''}>
                    <Text style={{alignSelf:'center', color: white, paddingTop:10, fontSize:20}}>
                        Submit
                    </Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        )
    }
}

function mapStateToProps(state, {route}) {
    const {deckID} = route.params;
    return {
        deck: state[deckID],
        deckID,
    }
}

export default connect(mapStateToProps)(AddCard)

const styles = StyleSheet.create({
    container: {
        marginLeft: 10,
        marginRight: 10,
        flex:1,
        justifyContent: 'flex-start',
    },
    textInput: {
        height: 50,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 15,
        borderColor: gray,
        backgroundColor: white,
        borderWidth: 2,
        borderRadius:5,
        fontSize: 25,
        paddingLeft:10
    },
    addBtn: {
        color:white,
        backgroundColor: '#000',
        flexDirection: 'column',
        marginLeft: 10,
        marginRight: 10,
        height:50,
        borderRadius: 5,
        fontSize: 30,
    },
    txt: {
        marginTop: 100,
        marginLeft: 10,
        marginRight: 10,
        fontSize: 38,
        flexShrink:1,
        textAlign: 'center'
    }
})
