import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Gallery = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" style={{ height: '50vh !important' }}>
        <div className="hero-content">
          <div className="hero-box">
            <h1>Gallery</h1>
          </div>
        </div>
      </div>

      {/* Gallery Content */}
      <div className="gallery" style={{ textAlign: 'center' }}>
        <div className="first">
          <h1><i>CCUBE 2021</i></h1>
          <Row>
            <Col md={4}><img src="/2021/5K4B5860.JPG" alt="" /></Col>
            <Col md={4}><img src="/2021/5K4B5868.JPG" alt="" /></Col>
            <Col md={4}><img src="/2021/5K4B5914.JPG" alt="" /></Col>
            <Col md={4}><img src="/2021/5K4B5927.JPG" alt="" /></Col>
            <Col md={4}><img src="/2021/5K4B5936.JPG" alt="" /></Col>
            <Col md={4}><img src="/2021/5K4B5970.JPG" alt="" /></Col>
          </Row>
        </div>

        <div className="second" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h1><i>CCUBE 2017</i></h1>
          <Row>
            <Col md={4}><img src="/2017/_SDG9409.JPG" alt="" /></Col>
            <Col md={4}><img src="/2017/_SDG9437.JPG" alt="" /></Col>
            <Col md={4}><img src="/2017/_SDG9477.JPG" alt="" /></Col>
            <Col md={4}><img src="/2017/SAR_1959.JPG" alt="" /></Col>
            <Col md={4}><img src="/2017/SAR_1966.JPG" alt="" /></Col>
            <Col md={4}><img src="/2017/SAR_1988.JPG" alt="" /></Col>
          </Row>
        </div>

        <div className="second" style={{ marginTop: '4rem' }}>
          <h1><i>CCUBE 2013</i></h1>
          <Row>
            <Col md={4}><img src="/2013/DSC_0447.JPG" alt="" /></Col>
            <Col md={4}><img src="/2013/DSC_0454.JPG" alt="" /></Col>
            <Col md={4}><img src="/2013/DSC_0465.JPG" alt="" /></Col>
            <Col md={4}><img src="/2013/DSC_0477.JPG" alt="" /></Col>
            <Col md={4}><img src="/2013/DSC_0500.JPG" alt="" /></Col>
            <Col md={4}><img src="/2013/DSC_0563.JPG" alt="" /></Col>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Gallery;