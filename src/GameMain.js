import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router'
import styles from './gameStyles.css'

class Generator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      progress: 0,
      maxProgress: 100,
      interval: 5,
      lastFrame: 0
    }
  }
  tick() {
    this.props.working && this.props.tick()
    this.setState({progress: 0})
  }
  progress = () => {
    const dt = performance.now() - this.state.lastFrame
    this.setState({
      progress: this.state.progress + (100/5) * dt/1000,
      lastFrame: performance.now()
    })
    this.state.progress >= 100 && this.tick()
    this.a = requestAnimationFrame(this.progress)
  }
  componentDidMount() {
    this.setState({progress: 0})
    this.progress()
  }
  componentWillUnmount() {
    cancelAnimationFrame(this.a)
  }
  render() {
    return (
      <progress
        style={{width: '90%'}}
        value={this.state.progress}
        max={this.state.maxProgress}
      />
    )
  }
}

const Resources = ({gold, stone, books}) =>
  <ul className={styles.ulReset}>
    <li>{gold} gold</li>
    <li>{stone} stone</li>
    <li>{books} books</li>
  </ul>

class GameMainX extends Component {
  render() {
    return (
      <Row center="xs">
        <Col xs={2}>
          <br />
          <ul className={ styles.ulReset }>
            <li>
              <a href="#" onClick={
                (e) => {
                  e.preventDefault()
                  this.props.dispatch({ type: 'RESTORE_ENERGY' })
                }
              }>Charge</a><br />
              {this.props.energy.current} / {this.props.energy.max}
              <br />
              <br />
            </li>
            <li>
              <Generator
                working={this.props.energy.current > 0}
                tick={() => this.props.dispatch({ type: 'INCREMENT_RESOURCES' })}
              /><br /><br />
            </li>
            <li>
              <Resources {...this.props.resources} /><br />
            </li>
            <li><Link to="/game/">Main</Link></li>
            <li><Link to="/game/town">Town</Link></li>
            <li><Link to="/game/troops">Troops</Link></li>
          </ul>
          <br />
        </Col>
        <Col xs={10}>
          {this.props.children}
        </Col>
      </Row>
    )
  }
}
export const GameMain = connect(state => state)(GameMainX)

export class Main extends Component {
  render = () => (
    <span>home</span>
  )
}

export class Town extends Component {
  render = () => (
    <span>town</span>
  )
}

export class Troops extends Component {
  render = () => (
    <span>troops</span>
  )
}

export default connect(state => state)(GameMain)
