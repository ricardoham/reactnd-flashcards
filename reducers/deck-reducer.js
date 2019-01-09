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
      console.log('-----REDUX DATAs', state.decksData);
      const deckIndex = state.decksData.findIndex(c => c.index === action.deckKey);
      console.log('Redux deck index', deckIndex);
      const updateDeck = [...state.decksData];
      updateDeck[deckIndex] = action.question;
      return {
        ...state,
        decksData: updateDeck,
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
