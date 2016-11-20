import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App, { Home, Login, NoPath } from './App';
import Game, { Town, Troops} from './GameMain'
import './index.css';

function initialState() {
  return {
    user: null
  }
}

function reducers (state = initialState(), action) {
  console.log(action)
  switch (action.type) {
    case 'USER_STATE_CHANGED':
      return {
        ...state,
        user: action.payload
      }
    default:
      return state
  }
}

const store = createStore(reducers)

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ hashHistory }>
      <Route path="/" component={ App }>
        <IndexRoute component={Home}/>
        <Route path="login" component={ Login }/>
        <Route path="game" component={ Game }>
          <Route path="town" component={ Town }/>
          <Route path="troops" component={ Troops }/>
        </Route>
        <Route path="*" component={ NoPath } />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
