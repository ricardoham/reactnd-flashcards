import { AsyncStorage } from 'react-native';
import deckResults from './_decks';
import { DECK_STORAGE_KEY } from './constants';

export const getDecks = () => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(deckResults);

export const addDeck = deck => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(JSON.parse)
  .then(data => AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify([...data, deck])));

export const addCard = (deckKey, question) => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(JSON.parse)
  .then((data) => {
    data[deckKey].questions.push(question);
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });

export const editDeck = (deckKey, title) => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(JSON.parse)
  .then((data) => {
    data[deckKey].title = title;
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });

export const editCard = (deckKey, questionKey, question) => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(JSON.parse)
  .then((data) => {
    data[deckKey].questions[questionKey] = question;
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(data));
  });

export const removeDeck = id => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(JSON.parse)
  .then((data) => {
    console.log('THE Data', data);
    console.log('DECEKey', id);
    const deleteDeck = data.filter(i => i.id !== id);
    console.log('FILTER TO DELETE', deleteDeck);
    AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(deleteDeck));
  });
