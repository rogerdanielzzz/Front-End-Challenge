import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../img/logo.png"
import Searchbar from '../Searchbar/Searchbar';
import Style from "./NavBar.module.scss"
import { searchCharacter } from "../../redux/actions/index.js";
import { useDispatch } from "react-redux";
import { Link , useLocation} from "react-router-dom"





const NavBar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    let route =location.pathname

    let handle = (el) => dispatch(searchCharacter(el, 1));

    return (
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
                        <Link className={route =="/"? Style.active :Style.NavText} to={`/`}>
                            Characters
                        </Link>
                        <Link className={route =="/about"? Style.active :Style.NavText} to={`/about`}>
                            About
                        </Link>


                    </Nav>
                    <Searchbar handle={handle} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
