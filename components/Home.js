import React, {Component} from 'react'
import {ScrollView} from 'react-native'
import {connect} from 'react-redux'
import {fetchDecks} from "../utils/api";
import {receiveDecks} from "../actions";
import Deck from "./Deck";

class Home extends Component{
    componentDidMount() {
        const {dispatch} = this.props;
        fetchDecks()
            .then((decks)=>dispatch(receiveDecks(decks)))
    }

    render() {
        const {decks} = this.props;
        const ids = Object.keys(decks);
        return(
            <ScrollView>
                {
                    ids.map(id => (
                        <Deck key={id} id={id} navigation={this.props.navigation}/>
                    ))
                }
            </ScrollView>
        )
    }
}

function mapStateToProps(state) {
    return{
        decks: state
    }
}

export default connect(mapStateToProps)(Home)
