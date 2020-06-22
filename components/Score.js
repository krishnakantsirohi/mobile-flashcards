import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet,Dimensions} from 'react-native';
import {purple, white} from "../utils/colors";
import {clearLocalNotification, setLocalNotification} from "../utils/api";

class Score extends Component {

    componentDidMount() {
        this.props.navigation.setOptions({title: 'Score'})
        clearLocalNotification();
        setLocalNotification();
    }

    handleRestart = () => {
        this.props.navigation.goBack();
        return this.props.navigation.navigate('Quiz', {deckID:this.props.deckID})
    }

    render() {
        const {right, total} = this.props
        return (
            <View>
                <View style={styles.container}>
                    <Text style={{fontWeight:'bold', fontSize: 28,}}>
                        Your Score:
                    </Text>
                    <Text style={{fontWeight:'bold', fontSize: 25}}>
                        {right} out of {total}
                    </Text>
                </View>
                <View>
                    <TouchableOpacity
                        style={styles.restartBtn}
                        onPress={this.handleRestart}
                    >
                        <Text style={styles.btnText}>
                            Restart Quiz
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.backBtn}
                        onPress={()=>(this.props.navigation.goBack())}
                    >
                        <Text style={styles.btnText}>
                            Back to Deck
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default Score;

const styles = StyleSheet.create({
    container: {
        height:250,
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
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontWeight:'bold',
    },
    restartBtn: {
        borderWidth: 2,
        borderRadius: 5,
        marginTop: 50,
        marginLeft: 50,
        marginRight: 50,
        marginBottom: 10,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: purple
    },
    backBtn:{
        borderWidth: 2,
        borderRadius: 5,
        marginTop:10,
        marginLeft: 50,
        marginRight: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: purple
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 18,
        color: white,
    }
})
