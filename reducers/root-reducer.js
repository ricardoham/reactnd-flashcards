import { combineReducers } from 'redux';
import decksReducer from './deck-reducer';

const rootReducer = combineReducers({
  decks: decksReducer,
});

export default rootReducer;
