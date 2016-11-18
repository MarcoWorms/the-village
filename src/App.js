import React, { Component } from 'react';
import { connect } from 'react-redux'
import styles from './styles.css';
import { FirebaseConnect, FirebaseHandleUser, FirebaseGoogleLogin } from './react-firebase'

class App extends Component {
  handleUser = (user) => {
    this.props.dispatch({ type:'USER_STATE_CHANGED', payload: user })
  }
  render() {
    return (
      <div className={ styles.app }>
        <FirebaseConnect />
        <FirebaseHandleUser then={ this.handleUser } />
        <p>header</p>
        { this.props.children }
        <p>footer</p>
      </div>
    );
  }
}

export class Login extends Component {
  handleLogin = () => {
    FirebaseGoogleLogin() 
  }
  render() {
    return (
      <div>
        <p>pls login</p>
        <button onClick={ this.handleLogin }>google</button>
      </div>  
    )
  }
}

export class NoPath extends Component {
  render() { return <p>404 fucks not given</p> }
}

export default connect(state => state)(App)
