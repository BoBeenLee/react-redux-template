import { combineReducers } from 'redux';
import loading from './loading';
import counter from './counter';

export default combineReducers({
  loading,
  counter,
});