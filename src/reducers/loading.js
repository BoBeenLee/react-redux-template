import {createReducer} from './reducerHelper';
import {LOADING} from '../actions/contants';

const initialState = {
  loading: false,
};

const updateLoadingReducer = {
  [LOADING]: (state, { loading }) => ({
    ...state,
    loading,
  }),
};

export default createReducer(initialState, {
  ...updateLoadingReducer
});