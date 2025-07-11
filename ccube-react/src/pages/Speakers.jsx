import React from 'react';
import { Container } from 'react-bootstrap';

const Speakers = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" style={{ height: '50vh !important' }}>
        <div className="hero-content">
          <div className="hero-box">
            <h1>To be announced</h1>
          </div>
        </div>
      </div>

      {/* Speakers Content */}
      <Container className="py-5 text-center">
        <div className="modern-card">
          <h3>Keynote Speakers</h3>
          <p>The list of keynote speakers for CCUBE 2025 will be announced soon. Please check back later for updates.</p>
        </div>
      </Container>
    </>
  );
};

export default Speakers;