import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './styles.css'
import {
  FirebaseConnect,
  FirebaseHandleUser,
  FirebaseLoginButton,
  FirebaseLogoutButton
} from './react-firebase'

function Header (props) {
  return (
    <header className={ styles.header }>
      <Link to='/'>Home</Link>
      {
        props.user
          ?
          <span>
            <FirebaseLogoutButton
              text="Logout" 
            />
            <span className={ styles.userInfo } >
              <img className={ styles.userPicture }
                src={ props.user.photoURL }
              ></img>
              <span className={ styles.userEmail }>{ props.user.email }</span>
            </span>
          </span>
          :
          <Link to='/login'>Login</Link>

      }
    </header>
  )
}

function Footer (props) {
  return (
    <footer className={ styles.footer }>
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
      <div>
        <FirebaseConnect />
        <FirebaseHandleUser then={ this.handleUser } />
        <Header user={this.props.user} />
        <div className={ styles.app }>
          { this.props.children }
        </div>
        <Footer />
      </div>
    )
  }
}

class HomeX extends Component {
  render() {
    return (
      <div>
        <br />
        {
          !this.props.user
            ?
            'You are not logged in :/'
            :
            'you are sooo logged in :3'
        }
      </div>
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
        <br />
        <span>Welcome to the login, please, login.</span>
        <br />
        <br />
        <FirebaseLoginButton
          provider="google"
          text="Login with Google"
          then={
            (result) => this.context.router.push('/')
          }
        />
        <br />
        <br />
        <FirebaseLoginButton
          provider="github"
          text="Login with Github"
          then={
            (result) => this.context.router.push('/')
          }
        />
      </div>
    )
  }
}

export class NoPath extends Component {
  render() {
    return <div>404 fucks not given</div>
  }
}

export default connect(state => state)(App)

