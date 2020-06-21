import {ADD_CARD, ADD_DECK, RECEIVE_DECK, DELETE_DECK} from "../actions";

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
            return Object.entries(state).filter(r=> r[0]!==action.deckID)

        case ADD_CARD:
            const {deckID, card} = action;
            return {
                ...state,
                [deckID]: {
                    ...state[deckID],
                    cards: [
                        ...state[deckID].cards,
                        card
                    ]
                }
            }
        default:
            return state;
    }
}

export default decks
