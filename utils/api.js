import {AsyncStorage} from 'react-native';

const FLASHCARD_KEY = '2';

const decks = {
    '8xf0y6ziyjabvozdd253nd': {
        id: '8xf0y6ziyjabvozdd253nd',
        title: 'Deck 1',
        cards: [],
    },
    '6ni6ok3ym7mf1p33lnez': {
        id: '6ni6ok3ym7mf1p33lnez',
        title: 'Deck 2',
        cards: [],
    },
    'am8ehyc8byjqgar0jgpub9': {
        id: 'am8ehyc8byjqgar0jgpub9',
        title: 'Deck 3',
        cards: [],
    },
    'loxhs1bqm25b708cmbf3g': {
        id: 'loxhs1bqm25b708cmbf3g',
        title: 'Deck 4',
        cards: [],
    },
    'vthrdm985a262al8qx3do': {
        id: 'vthrdm985a262al8qx3do',
        title: 'Deck 5',
        cards: [],
    }
}


export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function fetchDecks(){
    return AsyncStorage.getItem(FLASHCARD_KEY)
        .then(res => {
            const data = JSON.parse(res);
            return data;
        })
}

export function saveDeck(deck) {
    return AsyncStorage.mergeItem(FLASHCARD_KEY, JSON.stringify({
        [deck.id]: deck,
    }))
}

export function saveNewCardToDeck({deckID, card}){
    return AsyncStorage.getItem(FLASHCARD_KEY)
        .then(results =>{
            const data =JSON.parse(results);
            data[deckID]={
                ...data[deckID],
                cards: [
                    ...data[deckID].cards,
                    card
                ]
            }
            AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data));
        })
}

export function removeDeck(key){
    return AsyncStorage.getItem(DECKS)
        .then((results)=>{
            const data =JSON.parse(results);
            data[key] = undefined;
            delete data[key];
            AsyncStorage.setItem(DECKS, JSON.stringify(data));
        })
}
