import { AsyncStorage } from 'react-native';
import deckResults from './_decks';
import { DECK_STORAGE_KEY } from './constants';

export const getDecks = () => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(deckResults);

// export const getDecks = () =>  {
//   return AsyncStorage.getItem(DECK_STORAGE_KEY);
// }

export const addDeck = title => AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
  title,
}));

// export const getSingleDeck(title) {
//   return  getDecks().then()
// }
