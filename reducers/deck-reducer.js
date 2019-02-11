import { cloneDeep } from 'lodash';
import {
  FETCH_ALL_DECKS_SUCCESS, ADD_DECK_SUCCESS, ADD_DECK_FAILURE,
  ADD_CARD_SUCCESS, ADD_CARD_FAILURE, EDIT_DECK_SUCCESS,
  EDIT_CARD_SUCCESS, EDIT_CARD_FAILURE, REMOVE_DECK_SUCCESS,
} from '../actions/action-types';

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
        decksData: [...state.decksData, action.payload],
      };
    case ADD_DECK_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case ADD_CARD_SUCCESS:
      const updatedDeck = [...state.decksData];
      updatedDeck[action.payload.deckKey].questions.push(action.payload.question);
      return {
        ...state,
        decksData: updatedDeck,
      };
    case ADD_CARD_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case EDIT_DECK_SUCCESS:
      const editedDeck = [...state.decksData];
      editedDeck[action.payload.deckKey].title = action.payload.title;
      return {
        ...state,
        decksData: editedDeck,
      };
    case EDIT_CARD_SUCCESS:
      const editCard = cloneDeep([...state.decksData]);
      editCard[action.payload.deckKey].questions[action.payload.cardKey] = action.payload.question;
      return {
        ...state,
        decksData: editCard,
      };
    case EDIT_CARD_FAILURE:
      return {
        ...state,
        error: action.error,
      };
    case REMOVE_DECK_SUCCESS:
      return {
        ...state,
        decksData: state.decksData.filter(deck => deck.id !== action.payload.id),
      };
    default:
      return state;
  }
}
