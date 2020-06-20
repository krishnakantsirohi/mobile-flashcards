export const ADD_DECK ='ADD_DECK'
export const DELETE_DECK ='DELETE_DECK'
export const RECEIVE_CARD = 'RECEIVE_CARD'
export const ADD_CARD ='ADD_CARD'
export const DELETE_CARD = 'DELETE_CARD'
export const RECEIVE_DECK = 'RECEIVE_DECK'

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECK,
        decks,
    }
}

export function receriveCards(cards) {
    return {
        type: RECEIVE_CARD,
        cards,
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck,
    }
}

export function addCard(card) {
    return {
        type: ADD_CARD,
        card,
    }
}

export function removeDeck(deck) {
    return{
        type: DELETE_DECK,
        deck,
    }
}

export function removeCard(card) {
    return {
        type: DELETE_CARD,
        card,
    }
}
