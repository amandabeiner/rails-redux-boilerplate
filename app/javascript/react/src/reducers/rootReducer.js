import { combineReducers } from 'redux';
import { GifsReducer } from './gifs';
import { routerReducer as routing } from 'react-router-redux';

const rootReducer = combineReducers({
  routing,
  puppies: GifsReducer
});

export default rootReducer;
