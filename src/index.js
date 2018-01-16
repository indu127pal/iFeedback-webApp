import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import createStore from './store/createStore'
import { BrowserRouter, Router } from 'react-router-dom'
import App from './components/App';
import './index.css';
import history from './components/History';

const store = createStore();

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root'),
);
