import { AsyncStorage } from 'react-native';
import { decks, DECK_STORAGE_KEY } from './constants';

function setdecks() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));

  return decks;
}

export default function deckResults(results) {
  console.log("MY RESULTS", results);
  if (results === null) {
    results = setdecks();
  } else {
    results = JSON.parse(results);
  }

  return results;
}
