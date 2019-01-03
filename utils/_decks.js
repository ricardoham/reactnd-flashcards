import { AsyncStorage } from 'react-native';
import { dummyData, DECK_STORAGE_KEY } from './constants';

function setDummyData() {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(dummyData));

  return dummyData;
}

export default function deckResults(results) {
  console.log("MY RESULTS", results);
  if (results === null) {
    results = setDummyData();
  } else {
    results = JSON.parse(results);
  }

  return results;
}
