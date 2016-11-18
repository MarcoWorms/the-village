import React, { Component } from 'react';
import { connect } from 'react-redux'
import styles from './styles.css';
import { FirebaseConnect, FirebaseHandleUser, FirebaseLoginButton } from './react-firebase'

class App extends Component {
  handleUser = (user) => {
    this.props.dispatch({ type:'USER_STATE_CHANGED', payload: user })
  }
  render() {
    return (
      <div className={ styles.app }>
        <FirebaseConnect />
        <FirebaseHandleUser then={ this.handleUser } />
        <span>{ this.props.user && this.props.user.email }</span>
        { this.props.children }
        <p>footer</p>
      </div>
    );
  }
}

export class Login extends Component {
  render() {
    return (
      <div>
        <p>pls login</p>
        <FirebaseLoginButton provider="google" >
          google
        </FirebaseLoginButton>
      </div>  
    )
  }
}

export class NoPath extends Component {
  render() { return <p>404 fucks not given</p> }
}

export default connect(state => state)(App)
