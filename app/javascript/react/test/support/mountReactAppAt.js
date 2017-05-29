import Root from 'Root';
import { configureStore } from 'store/configureStore';
import { browserHistory } from 'react-router';
// import { syncHistoryWithStore, push } from 'react-router-redux';

let mountReactAppAt = (url) => {
  let store = configureStore()
  store.dispatch(push(url));

  let history = syncHistoryWithStore(browserHistory, store)


  return mount(
    <Root store={store}
      history={history}
    />
  )
}

export default mountReactAppAt;
