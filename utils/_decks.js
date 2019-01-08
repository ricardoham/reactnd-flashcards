import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, decks } from './constants';

function setDecks() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
  return decks;
}

export default function deckResults(results) {
  if (results === null) {
    results = setDecks();
  } else {
    results = JSON.parse(results);
  }
  return results;
}
