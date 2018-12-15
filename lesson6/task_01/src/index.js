import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import CounterApp from './components/CounterApp.jsx';

ReactDOM.render(
  <Provider store={store}>
    <CounterApp/>
  </Provider>,
  document.getElementById('root')
);


