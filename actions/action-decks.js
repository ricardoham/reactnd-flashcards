import { FETCH_ALL_DECKS_SUCCESS, ADD_DECK_SUCCESS } from './action-types';
import * as decksAPI from '../utils/api';

export function getDecks() {
  return dispatch => (
    decksAPI.getDecks().then(response => dispatch({
      type: FETCH_ALL_DECKS_SUCCESS,
      payload: response,
    }))
  );
}

export function addDeck(deck) {
  return dispatch => (
    decksAPI.addDeck().then(response => dispatch({
      type: ADD_DECK_SUCCESS,
      deck
    }))
  )
}
