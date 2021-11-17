import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
const Data = () => {
    return (
        <Container style={{marginTop:"2rem"}}>
        <Row>
        <Col> <h4><i class="fas fa-bars"></i> Data Visualization</h4> </Col>
    <Col style={{display:"flex", justifyContent:"flex-end"}}> </Col>
        </Row>
        <Row>
          <Col>
          <Card style={{ width: '18rem', borderTop:"solid", borderTopColor:"blue", marginTop:"1rem" }}>
            <Card.Body>
                <div style={{display:"flex", justifyContent:"space-between"}}>
                <Card.Title><i class="far fa-star"></i> Connected <br/>Visibilty</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-cube"></i></Card.Subtitle>
                </div>
               
                <Card.Text>
                <ul>
                    <li>long label tool </li>
                    <li>long label toool </li>
                </ul>
                </Card.Text>
            </Card.Body>
            <a style={{color:"blue", alignSelf:"flex-end", margin:"2px"}}>Learn More</a>
          </Card>
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    )
}

export default Data
