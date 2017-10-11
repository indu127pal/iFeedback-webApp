import { combineReducers } from 'redux';
import feedback from './feedback';
import { reducer as formReducer } from 'redux-form';

const reducer = combineReducers({
  form: formReducer,
  feedback,
});

export default reducer;
