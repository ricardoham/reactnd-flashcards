import { FETCH_ALL_DECKS_SUCCESS } from './action-types';
import * as decksAPI from '../utils/api';

export function getDecks() {
  return dispatch => (
    decksAPI.getDecks().then(response => dispatch({
      type: FETCH_ALL_DECKS_SUCCESS,
      payload: response,
    }))
  );
}
