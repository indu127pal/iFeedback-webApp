import { createStore, applyMiddleware } from 'redux';
// import { persistStore, persistCombineReducers } from 'redux-persist';
// import { storage } from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const sagaMiddleware = createSagaMiddleware();
// const reducer = persistCombineReducers(config, reducers);

export default function() {
  const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
