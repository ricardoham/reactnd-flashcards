import { AsyncStorage } from 'react-native';
import { decks, DECK_STORAGE_KEY } from './constants';

function setDecks() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));

  return decks;
}

export default function deckResults(results) {
  console.log("MY RESULTS", results);
  if (results === null) {
    results = setDecks();
  } else {
    results = JSON.parse(results);
  }

  return results;
}
