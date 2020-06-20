import React, {Component} from 'react'
import {View, Text} from 'react-native'

class NoCards extends Component{
    render() {
        return(
            <View>
                <Text>
                    Sorry, you cannot take a quiz because there are no cards on the deck.
                </Text>
            </View>
        )
    }
}
