import { FETCH_ALL_DECKS_SUCCESS, ADD_DECK_SUCCESS } from '../actions/action-types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_DECKS_SUCCESS:
      return {
        ...state,
        decksData: action.payload,
      };
    case ADD_DECK_SUCCESS:
      return {
        ...state,
        ...action.deck
      }
    default:
      return state;
  }
}
