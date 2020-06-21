import React from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import {gray, white} from "../utils/colors";
import {connect} from 'react-redux';
import {addDeck} from "../actions";
import {generateUID, saveDeck} from "../utils/api";

class AddDeck extends React.Component{
    state = {
        title: '',
    }

    handleChange = (text) => {
        this.setState(()=>({
            title: text,
        }))
    }

    handleSubmit = () => {
        const deck = {
            id: generateUID(),
            title: this.state.title,
            cards: [],
        }
        this.props.dispatch(addDeck(deck));
        saveDeck(deck);
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.txt}>
                    What is the title of your new deck?
                </Text>
                <TextInput
                    style={styles.textInput}
                    placeholder="Deck Title"
                    onChangeText={text => this.handleChange(text)}
                />
                <TouchableOpacity style={styles.addBtn} onPress={this.handleSubmit} disabled={this.state.title===''}>
                    <Text style={{alignSelf:'center', color: white, paddingTop:10, fontSize:20}}>
                        Add Deck
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

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

function mapStateToProps(state){
    return{
        state
    }
}

export default connect(mapStateToProps)(AddDeck);
