import * as React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import Logo from './Logo';
import { Link } from 'react-router-dom';
import BotaoOrcamento from './BotaoOrcamento';

class Header extends React.Component {
    render() {
        return (
            <Navbar expand='lg' className='header_navbar quebra_sessao_header '>
                <Container>
                    <Navbar.Brand href="./"><Logo size='50'></Logo></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/"><Nav.Link href="#home">Home</Nav.Link></Link>
                        <Link to="/Contacts"><Nav.Link href="#link">Contatos</Nav.Link></Link>
                        <Link to="/Services"><Nav.Link href="#link">Serviços</Nav.Link></Link>
                    </Nav>
                    <Nav><BotaoOrcamento /></Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        );
    }
}

export default Header;