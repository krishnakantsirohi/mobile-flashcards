import {AsyncStorage} from 'react-native';
import * as Permissions from 'expo-permissions'
import {Notifications} from 'expo'

const FLASHCARD_KEY = 'Flashcard:Decks';
const NOTIFICATION_KEY='Flashcard:Notifications'

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
    return AsyncStorage.getItem(FLASHCARD_KEY)
        .then((results)=>{
            const data =JSON.parse(results);
            data[key] = undefined;
            delete data[key];
            AsyncStorage.setItem(FLASHCARD_KEY, JSON.stringify(data));
        })
}

function createNotification () {
    return {
        title: "Don't forget to practice",
        body: "Your flash cards want to see you today.",
        ios: {
            sound: false
        },
        android: {
            sound: false,
            vibrate: false,
            priority: "high",
            sticky: false
        }
    }
}

export const clearLocalNotification = () => {
    AsyncStorage.removeItem(NOTIFICATION_KEY).then(
        Notifications.cancelAllScheduledNotificationsAsync
    );
};

export const setLocalNotification = () => {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({ status }) => {
                    if (status === "granted") {
                        Notifications.cancelAllScheduledNotificationsAsync();
                        let tomorrow = new Date();
                        tomorrow.setDate(tomorrow.getDate() + 1);
                        tomorrow.setHours(12);
                        tomorrow.setMinutes(30);

                        Notifications.scheduleLocalNotificationAsync(createNotification(), {
                            time: tomorrow,
                            repeat: "day"
                        });

                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                    }
                });
            }
        });
};
