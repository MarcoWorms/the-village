import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App, { Login, NoPath } from './App';
import './index.css';

ReactDOM.render(
  <Router history={ hashHistory }>
    <Route path="/" component={ App }>
      <Route path="login" component={ Login } />
      <Route path="*" component={ NoPath } />
    </Route>
  </Router>,
  document.getElementById('root')
);
