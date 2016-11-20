import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'
import { Link } from 'react-router'


 class GameMain extends Component {
   render() {
     return (
       <Row>
         <Col xs={3}>
           <ul>
             <li><Link to="/game/town">Town</Link></li>
             <li><Link to="/game/troops">Troops</Link></li>
           </ul>
         </Col>
         <Col xs={9}>
           {this.props.children}
         </Col>
       </Row>
     )
   }
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
