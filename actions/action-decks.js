import {
  FETCH_ALL_DECKS_SUCCESS, ADD_DECK_SUCCESS, ADD_DECK_FAILURE, ADD_CARD_SUCCESS, ADD_CARD_FAILURE,
} from './action-types';
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
    decksAPI.addDeck(deck).then(() => dispatch({
      type: ADD_DECK_SUCCESS,
      deck,
    }))
      .catch(error => dispatch({
        type: ADD_DECK_FAILURE,
        error,
      }))
  );
}

export function addCard(deckKey, question) {
  return dispatch => (
    decksAPI.addCard(deckKey, question).then(() => dispatch({
      type: ADD_CARD_SUCCESS,
      deckKey,
      question,
    }))
      .catch(error => dispatch({
        type: ADD_CARD_FAILURE,
        error,
      }))
  );
}
