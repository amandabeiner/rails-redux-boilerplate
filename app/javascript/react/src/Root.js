import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import App from './containers/App';

const Root = props => {
  return(
    <Provider store={props.store}>
      <Router history={props.history}>
        <Route path="/" component={App} />
      </Router>
    </Provider>
  )
}

export default Root;
