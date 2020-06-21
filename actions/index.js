export const ADD_DECK ='ADD_DECK'
export const DELETE_DECK ='DELETE_DECK'
export const ADD_CARD ='ADD_CARD'
export const RECEIVE_DECK = 'RECEIVE_DECK'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECK,
        decks,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addCard({deckID, card}) {
    return {
        type: ADD_CARD,
        deckID,
        card,
    }
}

export function deleteDeck(deckID) {
    return{
        type: DELETE_DECK,
        deckID,
    }
}
