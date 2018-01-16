import { combineReducers } from 'redux';
import feedback from './feedback';
// import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  feedback,
});

export default reducer;
