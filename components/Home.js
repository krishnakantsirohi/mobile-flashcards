import React, {Component} from 'react'
import {ScrollView, View, TouchableOpacity, Text} from 'react-native'
import {connect} from 'react-redux'
import {fetchDecks} from "../utils/api";
import {receiveDecks} from "../actions";
import {AppLoading} from "expo";
import Deck from "./Deck";

class Home extends Component{
    state = {
        decks: null
    }

    componentDidMount() {
        const {dispatch} = this.props;
        fetchDecks()
            .then((decks)=>dispatch(receiveDecks(decks)))
            .then((res)=>(this.setState(()=>({
                decks: res.decks,
            }))))
    }

    render() {
        const {decks} = this.state;
        if (this.state.decks===null)
            return <AppLoading/>
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
        state
    }
}

export default connect(mapStateToProps)(Home)
