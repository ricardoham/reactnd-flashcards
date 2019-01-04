import { AsyncStorage } from 'react-native';
import deckResults from './_decks';
import { DECK_STORAGE_KEY } from './constants';

export const getDecks = () => AsyncStorage.getItem(DECK_STORAGE_KEY)
  .then(deckResults);

export const addDeck = (deck) => {
  const newDeck = []
  return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
    decks: deck
  }))
  // return getDecks().then(decks => {
  //   console.log('AAAA', decks);
  //   console.log('BBB', deck)
  //   const newDeck = [...decks, deck]
  //   console.log('NWEDECK', newDeck)
  //     return AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify({
  //       newDeck
  //     }))
  // })
}
