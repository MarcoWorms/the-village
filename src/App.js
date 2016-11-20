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

class Header extends Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }
  render() {
    return (
      <header className={ styles.header }>
        <Row middle="xs" center="xs" className={ styles.userInfo }>
          <Col xs={2}>
            <Link to='/'>Home</Link>
          </Col>
          <Col xs={10}>
            {
              this.props.user
                &&
                <Grid >
                  <Row middle="xs" start="xs">
                    <Col xs={1}>
                      <UserPicture >
                        { this.props.user.photoURL }
                      </UserPicture>
                    </Col>
                    <Col xs={4} className={ styles.userEmail }>
                      { this.props.user.email }
                    </Col>
                    <Col xs={7}>
                      <FirebaseLogoutButton
                        text="Logout"
                        then={
                          (result) => this.context.router.push('/')
                        }
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
}

function Footer (props) {
	return (
		<Row center="xs">
			<Col xs={12}>
				<footer className={ styles.footer }>
					footer
				</footer>
			</Col>
		</Row>
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
				<br />
				<LoggedIn user={this.props.user}>
					<Link to="/game">
						Play
					</Link>
				</LoggedIn>
				<br />
				<br />
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
          text="Google"
          then={
            (result) => this.context.router.push('/game')
          }
        />
        <br />
        <FirebaseLoginButton
          provider="github"
          text="Github"
          then={
            (result) => this.context.router.push('/game')
          }
        />
        <br />
        <br />
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

