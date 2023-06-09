import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function AppBar() {
  return (
    <Navbar bg="light" expand="lg"   >
      <Container   className='mm'>
      <Navbar.Brand href="#home"><h2 className='text-success'><span><i className="bi bi-safe2-fill"></i></span></h2></Navbar.Brand>
        <Navbar.Brand href="#home"><h4 className='text-success HH'><span>TANTUM PROJECTS</span></h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav "   />
        <Navbar.Collapse id="basic-navbar-nav"  className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home" className='fw-bold'>HOME</Nav.Link>
            <Nav.Link href="#link"  className='fw-bold'>ABOUT US</Nav.Link>
            <Nav.Link href="#home"  className='fw-bold'>WHAT WE GO</Nav.Link>
            <Nav.Link href="#link"  className='fw-bold'>PROJECTS</Nav.Link>
            <Nav.Link href="#home"  className='fw-bold'>BLOGS</Nav.Link>
            <Nav.Link href="#link"  className='fw-bold'>CONTACT</Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppBar;