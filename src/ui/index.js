// Core
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// UI
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import App from './containers/App';
import defaultTheme from './index.jss';

// Engine
import '../engine/init/i18n';
import * as serviceWorker from '../engine/init/serviceWorker';
import { store } from '../engine/init/store';

ReactDOM.render(
  <ThemeProvider theme={defaultTheme}>
    <CssBaseline />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
serviceWorker.register();
