import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.css'

function NavBar() {
    return (
        <div className='navbar-box'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="/">OwlNigth</Navbar.Brand>
                    <Nav className="me-auto">
                            <Nav.Link href="/login&register">Iniciar Sesión</Nav.Link>
                            <Nav.Link href="/profile">Perfil</Nav.Link>
                    {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav"> */}
                        {/* Doble click, para perfil o separendo login y register? */}
                            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="/register">Register</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Perfil</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown> */}
                             {/* </Navbar.Collapse> */}
                        </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavBar;