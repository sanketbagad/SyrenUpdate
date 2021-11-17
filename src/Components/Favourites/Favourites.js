import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
const Favourites = () => {
    return (
        <Container style={{marginTop:"1rem"}}>
  <Row>
    <Col> <h4><i class="fas fa-star"></i> Favourite Apps (Max. 6)</h4> </Col>
    <Col style={{display:"flex", justifyContent:"flex-end"}}> <h6>Send Feedback <i class="fas fa-comments"></i></h6> </Col>
  </Row>
  <Row style={{alignItems:"center"}}>
    <Col style={{marginTop:"1rem", marginBottom:"1rem"}}>
    <Card style={{ width: '12rem', borderTop:"solid", borderTopColor:"blue" }}>
  <Card.Body style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
    <Card.Title><i class="far fa-star"></i> Connected <br/>Visibilty</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-exclamation-triangle"></i></Card.Subtitle>
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card style={{ width: '12rem', borderTop:"solid", borderTopColor:"blue" }}>
  <Card.Body style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
    <Card.Title><i class="far fa-star"></i> Connected <br/>Visibilty</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-exclamation-triangle"></i></Card.Subtitle>
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card style={{ width: '12rem', borderTop:"solid", borderTopColor:"blue" }}>
  <Card.Body style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
    <Card.Title><i class="far fa-star"></i> Connected <br/>Visibilty</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-exclamation-triangle"></i></Card.Subtitle>
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card style={{ width: '12rem', borderTop:"solid", borderTopColor:"blue" }}>
  <Card.Body style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
      <span><i class="far fa-star"></i></span>
    <Card.Title> Connected <br/>Visibilty</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-exclamation-triangle"></i></Card.Subtitle>
  </Card.Body>
</Card>
    </Col>

    <Col>
    <Card style={{ width: '12rem', borderTop:"solid", borderTopColor:"blue" }}>
  <Card.Body style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
    <Card.Title><i class="far fa-star"></i> Connected <br/>Visibilty</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-exclamation-triangle"></i></Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
    <Col>
    <Card style={{ width: '12rem', borderTop:"solid", borderTopColor:"blue" }}>
  <Card.Body style={{display: "flex", justifyContent:"space-between", alignItems:"center"}}>
    <Card.Title><i class="far fa-star"></i> Connected <br/>Visibilty</Card.Title>
    <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-exclamation-triangle"></i></Card.Subtitle>
  </Card.Body>
</Card>
    </Col>
    <Col></Col>
  </Row>
</Container>
    )
}

export default Favourites
