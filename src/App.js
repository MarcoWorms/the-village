import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import styles from './styles.css'
import { Grid, Row, Col } from 'react-flexbox-grid'
import {
  FirebaseConnect,
  FirebaseHandleUser,
  FirebaseLoginButton,
  FirebaseLogoutButton
} from './react-firebase'

class UserPicture extends Component {
  render() {
    return (
      <div
        className={ styles.userPicture }
        style={{ backgroundImage: `url("${this.props.children}")` }}
      />
    )
  }
}

function Header (props) {
  return (
    <header className={ styles.header }>
      <Row middle="xs" center="xs" className={ styles.userInfo }>
        <Col xs={2}>
          <Link to='/'>Home</Link>
        </Col>
        <Col xs={10}>
          {
            props.user
              &&
              <Grid >
                <Row middle="xs" start="xs">
                  <Col xs={1}>
                    <UserPicture >
                      { props.user.photoURL }
                    </UserPicture>
                  </Col>
                  <Col xs={4} className={ styles.userEmail }>
                    { props.user.email }
                  </Col>
                  <Col xs={7}>
                    <FirebaseLogoutButton
                      text="Logout"
                    />
                  </Col>
                </Row>
              </Grid>
          }
        </Col>
      </Row>
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
      <Grid>
        <FirebaseConnect />
        <FirebaseHandleUser then={ this.handleUser } />

        <Header user={this.props.user} />
        { this.props.children }
        <Footer />
      </Grid>
    )
  }
}


function LoggedIn (props) {
  if (props.user) {
    return props.children
  }
  return <Link to='/login'>Login</Link>
}

class HomeX extends Component {
  render() {
    return (
      <Col xs={12}>
        <LoggedIn user={this.props.user}>
          <Link to="/game">
            Play
          </Link>
        </LoggedIn>
      </Col>
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
            (result) => this.context.router.push('/game')
          }
        />
        <br />
        <br />
        <FirebaseLoginButton
          provider="github"
          text="Login with Github"
          then={
            (result) => this.context.router.push('/game')
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

