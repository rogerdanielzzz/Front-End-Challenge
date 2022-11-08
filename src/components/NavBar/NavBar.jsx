import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../img/logo.png"
import Searchbar from '../Searchbar/Searchbar';
import Style from "./NavBar.module.scss"
import { searchCharacter } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";




const NavBar = () => {
    const dispatch = useDispatch();

    let handle = (el) => dispatch(searchCharacter(el, 1));

    return (
        <Navbar className={Style.NavContainer} expand="lg" >
            <Container fluid>
                <Navbar.Brand className={Style.con} href="#"><img className={Style.logo} src={logo} alt="Star War Logo" /></Navbar.Brand>
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
                   <Searchbar handle={handle} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
