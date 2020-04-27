import { combineReducers } from 'redux';
import { reducer as buildings } from './buildings/reducer';

export default combineReducers({
  buildings: buildings
});