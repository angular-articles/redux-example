import { getIn } from 'immutable';

// Store keys
const ui = Object.freeze({
  isLoading: (state) => getIn(state, ['ui', 'loading'], false),
});

export const selectors = Object.freeze({
  ui,
});
