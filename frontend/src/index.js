import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import App from './containers/App';
import * as apiCalls from './api/apiCalls'

const actions = {
  postLogin: apiCalls.login
}

ReactDOM.render(
  <HashRouter>
    <App/>
  </HashRouter>,
  document.getElementById('root')
);
