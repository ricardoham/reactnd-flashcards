import { AsyncStorage } from 'react-native';
import deckResults from './_decks';
import { DECK_STORAGE_KEY } from './constants';

export const getDecks = () => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(deckResults);

export const addDeck = (deck) => {
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    decks
  }))
}
