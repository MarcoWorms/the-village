import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Grid, Row, Col } from 'react-flexbox-grid'


 class GameMain extends Component {
  constructor(props) {
    super(props)
  }
   render() {
     return (
       <Row>
         <Col xs={3}>
           <ul>
             <li><a href="#">Town</a></li>
             <li><a href="#">Troops</a></li>
           </ul>
         </Col>
       </Row>
     )
   }
}






export default connect(state => state)(GameMain)
