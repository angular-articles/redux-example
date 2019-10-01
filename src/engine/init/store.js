import { createStore, applyMiddleware, compose } from 'redux';

import env from '../helpers/env';
import middleware from './middleware';
import { reducers } from './reducers';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = env.isDev() && devtools ? devtools : compose;

const store = createStore(
  reducers(),
  composeEnhancers(applyMiddleware(...middleware)),
);

export { store };
