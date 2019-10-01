import { combineReducers } from 'redux-immutablejs';

// Reducers
import { uiReducers } from '../core/ui/reducers';

export const reducers = () => combineReducers({
  uiReducers,
});
