import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Control = () => {
    return (
        <Container style={{marginTop:"2rem"}}>
        <Row>
        <Col> <h4><i class="fas fa-bars"></i> Control Tower</h4> </Col>
    <Col style={{display:"flex", justifyContent:"flex-end"}}>
        <form action="/action_page.php">
        <label for="cars"></label>
        <select id="cars" name="cars">
            <option value="volvo">By Frequency</option>
            <option value="saab">Saab</option>
            <option value="fiat">Fiat</option>
            <option value="audi">Audi</option>
        </select>
        </form>
    </Col>
        </Row>
        <Row>
          <Col>
          <Card style={{ width: '14rem', borderTop:"solid", borderTopColor:"blue", marginTop:"1rem" }}>
            <Card.Body>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <span><i class="far fa-star"></i></span>
                <Card.Title> Connected <br/>Visibilty</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-cube"></i></Card.Subtitle>
                </div>
               
                <Card.Text>
                <ul>
                    <li>Exception mgmt tool </li>
                    <li>Exception mgmt tool </li>
                </ul>
                </Card.Text>
            </Card.Body>
            <a style={{color:"blue", alignSelf:"flex-end", margin:"2px"}}>Learn More</a>
          </Card>
          </Col>
          
          <Col>
          <Card style={{ width: '14rem', borderTop:"solid", borderTopColor:"blue", marginTop:"1rem" }}>
            <Card.Body>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <span><i class="far fa-star"></i></span>
                <Card.Title> Connected <br/>Visibilty</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-cube"></i></Card.Subtitle>
                </div>
               
                <Card.Text>
                <ul>
                    <li>Exception mgmt tool </li>
                    <li>Exception mgmt tool </li>
                </ul>
                </Card.Text>
            </Card.Body>
            <a style={{color:"blue", alignSelf:"flex-end", margin:"2px"}}>Learn More</a>
          </Card>
          </Col>
         
          <Col>
          <Card style={{ width: '14rem', borderTop:"solid", borderTopColor:"blue", marginTop:"1rem" }}>
            <Card.Body>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                <span><i class="far fa-star"></i></span>
                <Card.Title> Connected <br/>Visibilty</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-cube"></i></Card.Subtitle>
                </div>
               
                <Card.Text>
                <ul>
                    <li>Exception mgmt tool </li>
                    <li>Exception mgmt tool </li>
                </ul>
                </Card.Text>
            </Card.Body>
            <a style={{color:"blue", alignSelf:"flex-end", margin:"2px"}}>Learn More</a>
          </Card>
          </Col>

          <Col>
          <Card style={{ width: '14rem', borderTop:"solid", borderTopColor:"blue", marginTop:"1rem" }}>
            <Card.Body>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
                    <span><i class="far fa-star"></i></span>
                <Card.Title> Connected <br/>Visibilty</Card.Title>
                <Card.Subtitle className="mb-2 text-muted"><i class="fas fa-cube"></i></Card.Subtitle>
                </div>
               
                <Card.Text>
                <ul>
                    <li>Exception mgmt tool </li>
                    <li>Exception mgmt tool </li>
                </ul>
                </Card.Text>
            </Card.Body>
            <a style={{color:"blue", alignSelf:"flex-end", margin:"2px"}}>Learn More</a>
          </Card>
          </Col>
        </Row>
      </Container>
    )
}

export default Control
