import { FETCH_ALL_DECKS_SUCCESS } from '../actions/action-types';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ALL_DECKS_SUCCESS:
      return {
        ...state,
        decks: action.payload,
      };
    default:
      return state;
  }
}
