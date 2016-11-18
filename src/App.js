import React, { Component } from 'react';
import styles from './styles.css';

class App extends Component {
  render() {
    return (
      <div className={ styles.app }>
        <p>pop</p>
        {this.props.children}
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
