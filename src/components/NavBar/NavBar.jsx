//Dependencies import
import React from 'react'
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"
import { searchCharacter } from "../../redux/actions/index.js";
// Bootstrap Component
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// Components made with React
import Searchbar from '../Searchbar/Searchbar';
// Style in SCSS format
import Style from "./NavBar.module.scss"
//Img import
import logo from "../../img/logo.png"


//This is a navbar component that will be rendered in all sections
const NavBar = () => {
    const dispatch = useDispatch();
    // Hook to knoe in which route we are 
    const location = useLocation();
    let route = location.pathname

    // Search Bar is a reusable component so we need to provide a function by props
    let handle = (el) => dispatch(searchCharacter(el, 1));

    return (
        // navbar with condition navlink style class if we already are in the route
        <Navbar className={Style.NavContainer} expand="lg" >
            <Container fluid>
                <Link to={`/`}>
                    <Navbar.Brand className={Style.con}><img className={Style.logo} src={logo} alt="Star War Logo" /></Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link className={route === "/" ? Style.active : Style.NavText} to={`/`}>
                            Characters
                        </Link>

                    </Nav>
                    <Searchbar handle={handle} toRoute= "/" />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
