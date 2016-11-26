import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App, { Home, Login, NoPath } from './App';
import Game, { Main, Town, Troops } from './GameMain'
import './index.css';

function initialState() {
  return {
    user: null,
    energy: {
      max: 30,
      current: 30
    },
    resources: {
      gold: 0,
      stone: 0,
      books: 0
    }
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
    case 'INCREMENT_RESOURCES':
      return {
        ...state,
        resources: {
          gold: state.resources.gold + 1,
          stone: state.resources.stone + 1,
          books: state.resources.books + 1,
        },
        energy: {
          ...state.energy,
          current: state.energy.current - 1
        }
      }
    case 'RESTORE_ENERGY':
      return {
        ...state,
        energy: {
          ...state.energy,
          current: state.energy.max
        }
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
          <IndexRoute component={ Main }/>
          <Route path="town" component={ Town }/>
          <Route path="troops" component={ Troops }/>
					<Route path="*" component={ NoPath }/>
        </Route>
        <Route path="*" component={ NoPath }/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
