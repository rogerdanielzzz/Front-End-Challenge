import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SearchIcon from "../../img/search.svg"
import logo from "../../img/logo.png"

import Style from "./NavBar.module.scss"
const NavBar = () => {
    return (
        <Navbar className={Style.NavContainer} expand="lg" >
            <Container fluid>
                <Navbar.Brand href="#"><img className={Style.logo} src={logo} alt="Star War Logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link className={Style.NavText} href="#action1">Home</Nav.Link>
                        <Nav.Link className={Style.NavText} href="#action2">Link</Nav.Link>

                        <Nav.Link className={Style.NavText} href="#" disabled>
                            Link
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control id={Style.sInput}
                            type="search"
                            placeholder="Search"
                            className="rounded-left"
                            aria-label="Search"
                        />
                        <Button className={Style.sButton}><img src={SearchIcon} alt="Search Icon" /></Button>




                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
