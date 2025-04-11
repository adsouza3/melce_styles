import { Container, Nav, Navbar } from 'react-bootstrap';
import { InstaIcon } from './insta_icon';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">sMel</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/gallery">Gallery</Nav.Link>
            <Nav.Link href="https://www.vagaro.com/us04/melcestyles" target="_blank">Book</Nav.Link>
            <Nav.Link href="https://www.instagram.com/melce_styles" target="_blank">
              <InstaIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;