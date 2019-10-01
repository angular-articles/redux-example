import { createLogger } from 'redux-logger';
import env from '../helpers/env';

const middleware = [];

const logger = createLogger({
  duration: true,
  collapsed: true,
  colors: {
    title: () => '#139BFE',
    prevState: () => '#1C5FAF',
    action: () => '#149945',
    nextState: () => '#A47104',
    error: () => '#ff0005',
  },
});

if (env.isDev()) {
  middleware.push(logger);
}

export default middleware;
