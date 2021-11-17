import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
const Favourites = () => {
    return (
        <Container style={{marginTop:"1rem"}}>
  <Row>
    <Col> <h4><i class="fas fa-star"></i>Favourite Apps (Max. 6)</h4> </Col>
    <Col style={{display:"flex", justifyContent:"flex-end"}}> <h6>Send Feedback <i class="fas fa-comments"></i></h6> </Col>
  </Row>
  <Row>
    <Col style={{marginTop:"1rem", marginBottom:"1rem"}}>
    <Card style={{ width: '18rem', borderTop:"solid", borderTopColor:"blue" }}>
  <Card.Body style={{display: "flex", justifyContent:"space-between"}}>
    <Card.Title><i class="far fa-star"></i>Connected <br/> Visibilty</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-exclamation-triangle"></i></Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
    <Col>3 of 3</Col>
    <Col>3 of 3</Col>
    <Col>3 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
    )
}

export default Favourites
