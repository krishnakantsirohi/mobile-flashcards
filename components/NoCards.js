import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {gray} from "../utils/colors";

class NoCards extends Component{

    componentDidMount() {
        this.props.navigation.setOptions({
            title: 'No Cards!'
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    Sorry, you cannot take a quiz because there are no cards on the deck.
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    text: {
        fontWeight: 'bold',
        fontSize: 28,
        textAlign:'center',
        color:gray
    }
})

export default NoCards
