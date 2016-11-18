import { Component } from 'react'
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

export const FirebaseGoogleLogin = () => {
  var provider = new firebase.auth.GoogleAuthProvider()
  firebase.auth().signInWithPopup(provider)
    .then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
}
