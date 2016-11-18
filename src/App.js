import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './styles.css';
import {
  FirebaseConnect,
  FirebaseHandleUser,
  FirebaseLoginButton,
  FirebaseLogoutButton
} from './react-firebase'

class App extends Component {
  handleUser = (user) => {
    this.props.dispatch({ type:'USER_STATE_CHANGED', payload: user })
  }
  render() {
    return (
      <div className={ styles.app }>
        <FirebaseConnect />
        <FirebaseHandleUser then={ this.handleUser } />
        <Link to='/'>Go home you're drunk</Link>
        <br />
        <p>{ this.props.user
            && <span>
              {this.props.user.email}
              <FirebaseLogoutButton>
                logout
              </FirebaseLogoutButton>
            </span>
        }</p>
        <br />
        { this.props.children }
        <br />
        <p>footer</p>
      </div>
    );
  }
}

class HomeX extends Component {
  render() {
    return (
      !this.props.user
      ? <p><Link to='/login'>Go login dude</Link></p>
      : <p>you are so logged in</p>
    )
  }
}
export const Home = connect(state => state)(HomeX)

export class Login extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  render() {
    return (
      <div>
        <FirebaseLoginButton
          provider="google"
          then={
            (result) => this.context.router.push('/')
          }
        >
          login google
        </FirebaseLoginButton>
      </div>
    )
  }
}

export class NoPath extends Component {
  render() {
    return <p>404 fucks not given</p>
  }
}

export default connect(state => state)(App)
