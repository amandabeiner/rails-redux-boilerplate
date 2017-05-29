import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { configureStore } from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store)


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root store={store}
      history={history}
    />,
    document.getElementById('app')
  )
})
