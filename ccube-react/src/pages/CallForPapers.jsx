import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const CallForPapers = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" style={{ height: '50vh !important' }}>
        <div className="hero-content">
          <div className="hero-box">
            <h1>Call For Papers</h1>
          </div>
        </div>
      </div>

      {/* Call for Papers Content */}
      <Container className="py-5 px-lg-5">
        <div className="wow fadeInUp">
          <p className="section-title text-secondary justify-content-center"><span></span>CCUBE 2025<span></span></p>
          <h1 className="text-center mb-5">CALL FOR PAPERS</h1>
        </div>
        <Row className="justify-content-center" style={{ textAlign: "justify" }}>
          <p>
            CCUBE 2025 - The 4th International Conference on Circuits, Controls, and Communication provides an excellent opportunity to work with experts, researchers, and scholars from across the world in the field of electrical engineering. CCUBE 2025 is jointly organized by the Departments of Electronics & Communication Engineering and Electrical Engineering, R N S Institute of Technology, Bangalore, every 4 years. CCUBE 2013, 2017, and 2021 have been great successes. The conference is technically co-sponsored by the IEEE Signal Processing Society, Bangalore, India. The past conference proceedings are published and available in the IEEE Xplore digital library.  
            <br /> 
            <a href="https://drive.google.com/file/d/1JWgqxLNxifY_B6E1njF-aNUbkxoALG-u/view?usp=sharing">Download Brochure</a>
            <br /><br />
            The following are the topics for the CCUBE 2025 (but not limited to)
          </p>
        </Row>
      </Container>

      {/* Topics */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="col-box dark-blue-bg" style={{ height: '480px' }}>
              <ol><b style={{ color: 'rgb(84, 200, 95)', fontSize: 'larger' }}>Circuits, Devices, VLSI</b></ol>
              <ol>
                1. Nano Technology <br />
                2. Embedded Systems Design <br />
                3. Analog Mixed Signal Design <br />
                4. ASIC Design <br />
              </ol>
              <ol><b style={{ color: 'rgb(84, 200, 95)', fontSize: 'larger' }}>Sensors and IOT</b></ol>
              <ol>
                1. Wearable Sensors <br />
                2. Data Analytics <br />
                3. Smart Agriculture <br />
                4. Smart Cities <br />
                5. Industrial IOT
              </ol>
              <ol><b style={{ color: 'rgb(84, 200, 95)', fontSize: 'larger' }}>Special Tracks For The Conference</b></ol>
              <ol>
                1. IEEE SIGHT Humanitarian <br />
                2. Women In Engineering <br />
                3. Quantum Communication
              </ol>
            </div>
          </div>

          <div className="col-md-4">
            <div className="col-box light-green-bg" style={{ height: '480px' }}>
              <ol><b style={{ color: '#004080', fontSize: 'larger' }}>Signal and Image Processing</b></ol>
              <ol>
                1. Statistical Signal Processing <br />
                2. Computer Vision <br />
                3. Medical Imaging
              </ol>
              <ol><b style={{ color: '#004080', fontSize: 'larger' }}>Antenna Communication and Networking</b></ol>
              <ol>
                1. Software Defined Radio <br />
                2. Phased Array Antennas <br />
                3. Wireless Body Networks <br />
                4. Wireless Sensor Networks <br />
                5. Optical Communication and Networks <br />
                6. Antennas for 5G/6G Communication
              </ol>
            </div>
          </div>

          <div className="col-md-4">
            <div className="col-box dark-blue-bg" style={{ height: '480px' }}>
              <ol><b style={{ color: 'rgb(84, 200, 95)', fontSize: 'larger' }}>Control, Robotics and Automation</b></ol>
              <ol>
                1. Humanoid Robot Technology <br />
                2. Nano Robotics <br />
                3. Automated Guided Vehicles
              </ol>
              <ol><b style={{ color: 'rgb(84, 200, 95)', fontSize: 'larger' }}>Power energy and Electric Vehicles</b></ol>
              <ol>
                1. Renewable energy and Sustainable Technologies <br />
                2. Powerline Communication
              </ol>
              <ol><b style={{ color: 'rgb(84, 200, 95)', fontSize: 'larger' }}>Computer Systems and Engineering AI</b></ol>
              <ol>
                1. Cyber Security and Block Chain <br />
                2. Big Data, Distributed and Cloud Computing
              </ol>
            </div>
          </div>
        </div>
      </div>

      {/* Guidelines */}
      <Container className="py-5 px-lg-5">
        <div className="wow fadeInUp">
          <p className="section-title text-secondary justify-content-center"><span></span>CCUBE 2025<span></span></p>
          <h1 className="text-center mb-5">Guide Lines For Submission</h1>
        </div>
        <Row className="justify-content-center" style={{ textAlign: "justify" }}>
          <p>
            Submit a conference paper - Paper Length Up to 6 pages, including figures, tables & references. All submissions must conform to the IEEE paper formatting and submission instructions. All paper submissions should follow the IEEE 8.5″ x 11″ two-column format using 10pt fonts and the IEEE Conference template (downloadable by selecting "Conferences" in the IEEE-Template Selector: <a href="https://template-selector.ieee.org/"> https://template-selector.ieee.org/</a>). Accepted and presented papers will be published in the IEEE Xplore Digital Library.

            The paper review process is double-blind. Authors are required to take all reasonable steps to preserve the anonymity of their submission. 
            <br /> <br /> The submission must not include author information and must not include citations or discussions of related work that would make the authorship apparent. For each accepted paper, at least one author is required to pay a full author registration and attend the conference in person to present their work on-site. Any no-show papers will be reported to the publisher and removed from the conference proceedings. For authors with multiple papers accepted by the conference, a separate author registration is required for each paper.
          </p>
        </Row>
      </Container>

      {/* Paper Submission */}
      <div className="container-xxl bg-primary newsletter wow fadeInUp" style={{ marginBottom: '2%' }}>
        <Container className="py-5 px-lg-5">
          <Row className="justify-content-center">
            <Col lg={7} className="text-center">
              <h1 className="text-center text-white mb-4">Paper Submission</h1>
              <div className="button-container">
                <a href="https://cmt3.research.microsoft.com/CCUBE2025/Submission/Index">
                  <button className="rounded-button">Click here to Submit Paper</button>
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sponsors */}
      <div className="spon">
        <Container className="py-5 px-lg-5">
          <div className="wow fadeInUp">
            <p className="section-title text-secondary justify-content-center"><span></span>CCUBE 2025<span></span></p>
            <h1 className="text-center mb-5">Sponsors</h1>
          </div>
          <div className="logos d-flex justify-content-center align-items-center flex-wrap">
            <img src="/logo.webp" alt="Sponsor 1" className="mx-4 my-3" />
            <img src="/SPSJPA.png" alt="Sponsor 2" className="mx-4 my-3" />
          </div>
        </Container>
      </div>
    </>
  );
};

export default CallForPapers;