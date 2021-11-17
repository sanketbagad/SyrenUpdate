import React from 'react'
import "./header.css"
import { Container, Row, Col } from 'react-bootstrap';
const Header = () => {
    return (
        <Container style={{ borderStyle:"solid", textAlign:"center", backgroundColor:"white" }}>
         <Row>
             <Col> <p><i class="fas fa-exclamation-triangle"></i> "CT use case management" is currently down due to unexpected server crashing, the expected recovery time is</p> </Col>
         </Row>
        </Container>
    )
}

export default Header
