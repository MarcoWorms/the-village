import React, { Component } from 'react';
import styles from './styles.css';
import { FirebaseConnect } from './react-firebase'


class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <FirebaseConnect />
        <p>header</p>
        { this.props.children }
        <p>footer</p>
      </div>
    );
  }
}

export class Login extends Component {
  render() { return <p>pls login</p> }
}

export class NoPath extends Component {
  render() { return <p>404 fucks not given</p> }
}

export default App;
