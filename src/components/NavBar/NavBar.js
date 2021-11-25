import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Logo from './Logo';
import { Link, NavLink } from 'react-router-dom';

const {Brand, Toggle, Collapse} = Navbar;

const NavBar = () => {
    return <>
        <Navbar className="nav fixed-top" expand="lg">
            <Container fluid>
                <Navbar.Brand exact to="/"><Logo/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav>
                        <NavLink exact to="/foro" className="whiteText navBarLink">_foro</NavLink>
                        <NavLink exact to="/holdup" className="whiteText navBarLink">_¿qué es el hold-up?</NavLink>
                        <Link to="/start">
                            <Button className="btn-nav button">_comienza ahora</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
}

export default NavBar;