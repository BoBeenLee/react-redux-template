import {createReducer} from './reducerHelper';
import {FAILURE, SUCCESS} from '../actions/contants';
import {COUNTER} from '../actions/counter';

export const getCounter = (state) => state.counter;

const initialState = 0;

const counterReducer = {
  [COUNTER[SUCCESS]]: (state, { counter }) => counter,
  [COUNTER[FAILURE]]: (state) => initialState
};

export default createReducer(initialState, {
  ...counterReducer
});