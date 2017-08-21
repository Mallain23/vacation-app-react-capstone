import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './Store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
//import './grid.css'
import './index.css';
import App from './App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
      <Provider store={store}>
              <App />
      </Provider>,
      document.getElementById('root'));
registerServiceWorker();
