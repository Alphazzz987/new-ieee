import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Navbar as BootstrapNavbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="container-xxl position-relative p-0">
      <BootstrapNavbar 
        expand="lg" 
        className={`navbar-light px-4 px-lg-5 py-3 py-lg-0 ${isSticky ? 'sticky-top shadow-sm' : ''}`}
        style={{ zIndex: 1000 }}
      >
        <Container fluid>
          <BootstrapNavbar.Brand as={Link} to="/" className="p-0">
            <img src="/SPS_Logo_Color_RGB_Chapter_Lockup_Live.png" alt="Logo" />
          </BootstrapNavbar.Brand>
          
          <BootstrapNavbar.Toggle aria-controls="navbarCollapse">
            <span className="fa fa-bars"></span>
          </BootstrapNavbar.Toggle>
          
          <BootstrapNavbar.Collapse id="navbarCollapse">
            <Nav className="navbar-nav mx-auto py-0">
              <Nav.Link as={Link} to="/" className="nav-item nav-link">Home</Nav.Link>
              <Nav.Link as={Link} to="/" className="nav-item nav-link">About</Nav.Link>
              <Nav.Link as={Link} to="/organizing-committee" className="nav-item nav-link">Organizing Committee</Nav.Link>
              <Nav.Link as={Link} to="/speakers" className="nav-item nav-link">Speakers</Nav.Link>
              <Nav.Link as={Link} to="/gallery" className="nav-item nav-link">Gallery</Nav.Link>
              
              <NavDropdown title="Schedule" id="scheduleDropdown">
                <NavDropdown.Item href="" download>Topic 1</NavDropdown.Item>
                <NavDropdown.Item href="" download>Topic 2</NavDropdown.Item>
                <NavDropdown.Item href="" target="_blank">Topic 3</NavDropdown.Item>
              </NavDropdown>
              
              <NavDropdown title="Authors" id="authorsDropdown">
                <NavDropdown.Item href="" download>Author slides</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/call-for-papers">Call For Papers</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            
            <Link to="/register" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">
              Register Now
            </Link>
          </BootstrapNavbar.Collapse>
        </Container>
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;