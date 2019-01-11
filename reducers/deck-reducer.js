import {
  FETCH_ALL_DECKS_SUCCESS, ADD_DECK_SUCCESS, ADD_DECK_FAILURE, ADD_CARD_SUCCESS, ADD_CARD_FAILURE,
} from '../actions/action-types';

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
  console.log('LEEE REDUX', action);
  switch (action.type) {
    case FETCH_ALL_DECKS_SUCCESS:
      return {
        ...state,
        decksData: action.payload,
      };
    case ADD_DECK_SUCCESS:
      return {
        ...state,
        decksData: [...state.decksData, action.deck],
      };
    case ADD_DECK_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case ADD_CARD_SUCCESS:
      const updatedDeck = [...state.decksData];
      updatedDeck[action.deckKey].questions.push(action.question);
      return {
        ...state,
        decksData: updatedDeck,
      };
    case ADD_CARD_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
}
