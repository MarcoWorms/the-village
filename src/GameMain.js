import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router'
import styles from './gameStyles.css'


class GameMain extends Component {
  render() {
    return (
      <Row center="xs">
        <Col xs={2}>
          <br />
          <ul className={ styles.ulReset }>
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

class MainX extends Component {
  render() {
    return (
      <Grid>
        {/*  */}
        {/* <FirebaseFetchResources  */}
        {/*   then={} */}
        {/* > */}

        <Row start="xs">
          <Col xs={10}>
            <br />
            <ul className={ styles.ulReset }>
              <li>{this.props.resources.gold} gold</li>
              <li>{this.props.resources.stone} stone</li>
              <li>{this.props.resources.books} books</li>
            </ul>
            <br />
          </Col>
        </Row>
      </Grid>
    )
  }
}
export const Main = connect(state => state)(MainX)

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
