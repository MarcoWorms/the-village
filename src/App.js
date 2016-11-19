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

function Header (props) {
  return (
    <header>
      <p>
        <Link to='/'>Home</Link>
        {
          props.user
            && 
            <span>
              {props.user.email}
              <FirebaseLogoutButton>
                logout
              </FirebaseLogoutButton>
            </span>
        }
      </p>
    </header>
  )
}

function Footer (props) {
  return (
    <footer>
      footer
    </footer>
  )
}

class App extends Component {
  handleUser = (user) => {
    this.props.dispatch({ type:'USER_STATE_CHANGED', payload: user })
  }
  render() {
    return (
      <div className={ styles.app }>
        <FirebaseConnect />
        <FirebaseHandleUser then={ this.handleUser } />
        <Header user={this.props.user} />
        { this.props.children }
        <Footer />
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
      <p>
        <FirebaseLoginButton
          provider="google"
          then={
            (result) => this.context.router.push('/')
          }
        >
          login google
        </FirebaseLoginButton>
      </p>
    )
  }
}

export class NoPath extends Component {
  render() {
    return <p>404 fucks not given</p>
  }
}

export default connect(state => state)(App)
