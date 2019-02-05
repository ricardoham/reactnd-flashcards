import {
  FETCH_ALL_DECKS_SUCCESS, ADD_DECK_SUCCESS,
  ADD_DECK_FAILURE, ADD_CARD_SUCCESS,
  ADD_CARD_FAILURE, EDIT_DECK_SUCCESS,
  EDIT_DECK_FAILURE, EDIT_CARD_SUCCESS,
  EDIT_CARD_FAILURE,
  REMOVE_DECK_FAILURE,
  REMOVE_DECK_SUCCESS,
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

export function editDeck(deckKey, title) {
  return dispatch => (
    decksAPI.editDeck(deckKey, title).then(() => dispatch({
      type: EDIT_DECK_SUCCESS,
      deckKey,
      title,
    }))
      .catch(error => dispatch({
        type: EDIT_DECK_FAILURE,
        error,
      }))
  );
}

export function editCard(deckKey, cardKey, question) {
  return dispatch => (
    decksAPI.editCard(cardKey, question).then(() => dispatch({
      type: EDIT_CARD_SUCCESS,
      deckKey,
      cardKey,
      question,
    }))
      .catch(error => dispatch({
        type: EDIT_CARD_FAILURE,
        error,
      }))
  );
}

export function removeDeck(deckKey) {
  console.log('Called Action');
  console.log('ACtion deck key', deckKey);
  return dispatch => (
    decksAPI.removeDeck(deckKey).then(response => dispatch({
      type: REMOVE_DECK_SUCCESS,
      payload: response,
      deckKey,
    }))
      .catch(error => dispatch({
        type: REMOVE_DECK_FAILURE,
        error,
      }))
  );
}
