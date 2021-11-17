import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Control = () => {
    return (
        <Container style={{marginTop:"1rem"}}>
        <Row>
        <Col> <h4><i class="fas fa-bars"></i> Control Tower</h4> </Col>
    <Col style={{display:"flex", justifyContent:"flex-end"}}> </Col>
        </Row>
        <Row>
          <Col>
          <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
          </Card>
          </Col>
          <Col>2 of 3</Col>
          <Col>3 of 3</Col>
        </Row>
      </Container>
    )
}

export default Control
