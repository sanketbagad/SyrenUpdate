import React from 'react'
import { Container, Nav } from 'react-bootstrap'

const Links = () => {
    return (
       <Container style={{borderBottom:"solid", borderBottomColor:"blue", marginBottom: "2rem" }}>
          <div style={{display: "flex"}}>
            <Nav.Link href="#home">All</Nav.Link>
            <Nav.Link href="#home">Control Tower</Nav.Link>
            <Nav.Link href="#home">Data Visualization</Nav.Link>
            <Nav.Link href="#home">Simulation</Nav.Link>
            <Nav.Link href="#home">Planning</Nav.Link>
          </div>
       </Container>
    )
}

export default Links
