import {createReducer} from './reducerHelper';
import {LOADING} from '../actions/constants';

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