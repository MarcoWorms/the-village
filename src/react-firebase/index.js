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
