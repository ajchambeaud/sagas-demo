import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mainSaga from './sagas';

export default function configure(initialState) {
  const create =
    typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
      : createStore;

  const sagaMiddleware = createSagaMiddleware();

  let reduxMiddleware = [sagaMiddleware];

  const createStoreWithMiddleware = applyMiddleware(...reduxMiddleware)(create);
  const store = createStoreWithMiddleware(reducer, initialState);

  sagaMiddleware.run(mainSaga);

  return store;
}
