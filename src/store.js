import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './reducers';
import rootSaga from './sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const applyMiddlewares = composeWithDevTools(applyMiddleware(
    sagaMiddleware, thunkMiddleware, createLogger()
  ));
  const store = createStore(
    reducer,
    initialState,
    applyMiddlewares
  );
  sagaMiddleware.run(rootSaga);
  return store;
}
