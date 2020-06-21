import {ADD_CARD, ADD_DECK, RECEIVE_CARD, RECEIVE_DECK, DELETE_CARD, DELETE_DECK} from "../actions";

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECK:
            return {
                ...state,
                ...action.decks,
            }
        case ADD_DECK:
            const {deck} = action
            return {
                ...state,
                [deck.id]: deck,
            }
        case DELETE_DECK:
            return {
                ...state,
            }
        case RECEIVE_CARD:
            return {
                ...state,
                ...action.card
            }
        case ADD_CARD:
            return {
                ...state,
                ...action.card,
            }
        case DELETE_CARD:
            return {
                ...state,
                ...action.card
            }
        default:
            return state;
    }
}

export default decks
