import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/submit">submit</Nav.Link>
                            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link href="/img">All Images</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
