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

function getProvider(providerName) {
  switch (providerName) {
    case 'google':
      return new firebase.auth.GoogleAuthProvider()
    case 'github':
      return new firebase.auth.GoogleAuthProvider()
  }
}

export class FirebaseLoginButton extends Component {
  handleLogin = (e) => {
    e.preventDefault()
    var provider = getProvider(this.props.provider)

    firebase.auth().signInWithPopup(provider)
      .then((result) => this.props.then && this.props.then(result))
      .catch(error => console.log('authError', error))
  }
  render() {
    return (
      <a href="#" onClick={ this.handleLogin }>
        {this.props.text}
      </a>
    )
  }
}

export class FirebaseLogoutButton extends Component {
  handleLogout = (e) => {
    e.preventDefault()
    firebase.auth().signOut()
      .then((result) => this.props.then && this.props.then(result))
  }
  render() {
    return (
      <a href="#" onClick={ this.handleLogout }>
        {this.props.text}
      </a>
    )
  }
}

