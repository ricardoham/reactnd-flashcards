import { createStore } from 'redux';
import rootReducer from '../reducers/root-reducer';

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
  );
}
