import React, { Component } from 'react'
import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyBQTNjEKWZoFevOpyWCXyPueva6anY6sUQ",
  authDomain: "village-977d9.firebaseapp.com",
  databaseURL: "https://village-977d9.firebaseio.com",
  storageBucket: "village-977d9.appspot.com",
  messagingSenderId: "851629571565"
}

export class FirebaseConnect extends Component {
  componentDidMount() {
    firebase
      .initializeApp(config)
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return null
  }
}

export class FirebaseHandleUser extends Component {
  componentDidMount() {
    firebase.auth().onAuthStateChanged(this.props.then)
  }
  shouldComponentUpdate() {
    return false
  }
  render() {
    return null
  }
}

export class FirebaseLoginButton extends Component {
  handleLogin = () => {
    var provider = new firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithPopup(provider)
      .then((result) => this.props.then && this.props.then(result))
      .catch(error => {
        console.log('authError', error)
      })
  }
  render() {
    return (
      <button onClick={ this.handleLogin }>
        {this.props.children}
      </button>
    )
  }
}

export class FirebaseLogoutButton extends Component {
  handleLogout = () => {
    firebase.auth().signOut()
  }
  render() {
    return (
      <button onClick={ this.handleLogout }>
        {this.props.children}
      </button>
    )
  }
}

