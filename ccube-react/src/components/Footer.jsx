import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <div className="container-fluid bg-primary text-light footer">
      <Container className="py-5 px-lg-5">
        <Row className="g-5 position-relative">
          <Col md={6} lg={3}>
            <p className="section-title text-white h5 mb-4">Get In Touch<span></span></p>
            <p><i className="fa fa-map-marker-alt me-3"></i></p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-instagram"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-linkedin-in"></i></a>
              <a className="btn btn-outline-light btn-social" href="#"><i className="fab fa-youtube"></i></a>
            </div>
          </Col>
          
          <Col md={6} lg={3}>
            <p className="section-title text-white h5 mb-4">CONNECT WITH IEEE<span></span></p>
            <a className="btn btn-link" href="#">IEEE Collaborate</a>
            <a className="btn btn-link" href="#">Careers at IEEE</a>
            <a className="btn btn-link" href="#">IEEE Newsroom</a>
            <a className="btn btn-link" href="#">IEEE Media Kit</a>
            <a className="btn btn-link" href="#">IEEE Learning Network</a>
          </Col>
          
          <Col md={6} lg={3}>
            <p className="section-title text-white h5 mb-4">MEMBERSHIP<span></span></p>
            <a className="btn btn-link" href="https://www.ieee.org/membership/join/index.html">Join</a>
            <a className="btn btn-link" href="https://www.ieee.org/membership/renew.html">Renew</a>
            <a className="btn btn-link" href="https://www.ieee.org/membership/benefits/index.html">Benefits</a>
            <a className="btn btn-link" href="https://ieee-collabratec.ieee.org/">IEEE Collaborate</a>
            <a className="btn btn-link" href="https://ieeebangalore.org/guide-to-join-ieee/">Guide to Join IEEE</a>
          </Col>
          
          <Col md={6} lg={3}>
            <p className="section-title text-white h5 mb-4">QUICK LINKS<span></span></p>
            <Link className="btn btn-link" to="/">Home</Link>
            <Link className="btn btn-link" to="/">About-Us</Link>
            <Link className="btn btn-link" to="/">Best Paper Awards</Link>
            <Link className="btn btn-link" to="/">Early Registrations</Link>
            <Link className="btn btn-link" to="/">Previous Proceedings</Link>
          </Col>
        </Row>
      </Container>
      
      <Container className="px-lg-5">
        <div className="copyright">
          <Row>
            <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
              &copy; <a className="border-bottom" href="ieeebangalore.org">IEEE Bangalore Section - 2023</a>
            </Col>
            <Col md={6} className="text-center text-md-end">
              <div className="footer-menu">
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Footer;