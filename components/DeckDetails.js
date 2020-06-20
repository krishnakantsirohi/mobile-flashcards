import React, {Component} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

class DeckDetails extends Component{
    render() {
        return(
            <View>
                <Text>
                    Deck Details
                </Text>
                <TouchableOpacity>
                    <Text>
                        Add Card
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                        Start Quiz
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text>
                        Delete Deck
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default DeckDetails
