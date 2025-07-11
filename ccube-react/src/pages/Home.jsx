import React, { useEffect } from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    // Add scroll animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.modern-card, .timeline-item, .col-box, .card3');
      
      elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        // If element is in viewport
        if(position.top < window.innerHeight && position.bottom >= 0) {
          if (!element.classList.contains('fade-in')) {
            element.classList.add('fade-in');
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    
    // Back to top button
    const handleBackToTop = () => {
      if (window.scrollY > 100) {
        document.querySelector('.back-to-top').style.display = 'flex';
      } else {
        document.querySelector('.back-to-top').style.display = 'none';
      }
    };
    
    window.addEventListener('scroll', handleBackToTop);
    
    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleBackToTop);
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-box">
            <h1 className="fade-in-down">CCUBE 25</h1>
            <p className="fade-in-up">4th International Conference on Circuits, Controls and Communication</p>
            <div className="mt-4 animated fadeIn" style={{ animationDelay: '0.6s' }}>
              <a href="#about" className="btn btn-light btn-lg rounded-pill fade-in-left" style={{ animationDelay: '0.8s' }}>Learn More</a>
              <a href="#register" className="btn btn-secondary btn-lg rounded-pill fade-in-right pulse" style={{ animationDelay: '1s' }}>Register Now</a>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div id="about" className="container-xxl py-5">
        <Container className="py-5 px-lg-5">
          <div className="text-center fade-in-up">
            <p className="section-title text-secondary justify-content-center"><span></span>Welcome to<span></span></p>
            <h1 className="text-center mb-5" style={{ fontSize: '2.8rem', color: '#004080' }}>CCUBE 2025</h1>
          </div>
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="modern-card fade-in-up">
                <h3 style={{ fontSize: '28px', color: '#004080' }}>Dear Researcher,</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  CCUBE 2025 - The 4th International Conference on Circuits, Controls and Communication provides an excellent opportunity to work with experts, researchers, and scholars from across the world in the field of electrical engineering. A brilliant platform for delivering the most recent innovative research findings, as well as the most recent advances and applications in the field of electrical and communication technology.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
        <Container className="py-5 px-lg-5">
          <Row className="justify-content-center">
            <Col lg={10}>
              <div className="modern-card fade-in-left">
                <h3 style={{ fontSize: '28px', color: '#004080' }}>About the Conference</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  CCUBE 2025 is jointly organized by Departments of Electronics & Communication Engineering and Electrical Engineering, R N S Institute of Technology, Bangalore every 4 years.
                  CCUBE 2013, 2017 and 2021 have been a great success. The conference is technically co-sponsored by lEEE Signal Processing Society, Bangalore, India. The past conference proceedings are published and available in lEEE Xplore digital library.
                </p>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center" style={{ marginTop: '3rem' }}>
            <Col lg={10}>
              <div className="modern-card fade-in-right">
                <h3 style={{ fontSize: '28px', color: '#004080' }}>Scope</h3>
                <p style={{ fontSize: '18px', lineHeight: '1.8' }}>
                  CCUBE 2025's mission is to develop and foster communication among scholars and practitioners in a wide range of engineering and technology fields. The conference will include invited speakers from globally renowned personalities, pre-conference tutorials/workshops, panel discussion and referred paper presentations. This conference enables participants to present research findings, share thoughts and ideas, discuss critical challenges in cutting-edge technology, and develop their professional and social networks. The conference believes in linking theoretical and technological advancements for academic and industry applications. The accepted and presented papers will be submitted for possible inclusion into IEEE Xplorer.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Important Dates Section */}
      <div className="container-xxl py-5 bg-light" style={{ borderRadius: '20px', margin: '2rem auto', maxWidth: '1320px' }}>
        <Container className="py-5 px-lg-5">
          <div className="fade-in-up">
            <p className="section-title text-secondary justify-content-center"><span></span>Mark Your Calendar<span></span></p>
            <h1 className="text-center mb-5" style={{ color: '#004080' }}>Important Dates</h1>
          </div>
          
          <div className="timeline">
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <h4>Paper Submission Start Date</h4>
                <p>July 1st 2025</p>
              </div>
            </div>
            <div className="timeline-item timeline-right">
              <div className="timeline-content">
                <h4>Paper Submission End Date</h4>
                <p>August 1st 2025</p>
              </div>
            </div>
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <h4>Notification for Acceptance of Papers</h4>
                <p>August 30th 2025</p>
              </div>
            </div>
            <div className="timeline-item timeline-right">
              <div className="timeline-content">
                <h4>Registration and Submission of Camera Ready Paper</h4>
                <p>September 30th 2025</p>
              </div>
            </div>
            <div className="timeline-item timeline-left">
              <div className="timeline-content">
                <h4>Conference Date</h4>
                <p>October 24 to 25 2025</p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Call For Papers Section */}
      <div className="container fade-in-up">
        <p className="section-title text-secondary justify-content-center"><span></span>Participate<span></span></p>
        <h1 style={{ textAlign: 'center', paddingBottom: '2%', color: '#004080', fontSize: '2.8rem' }}>Call For Papers</h1>
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

      {/* Conference Tracks Section */}
      <div style={{ textAlign: 'center' }}>
        <p className="section-title text-secondary justify-content-center"><span></span>Research Areas<span></span></p>
        <h1 style={{ color: '#004080', fontSize: '2.8rem', marginBottom: '3rem' }}>Conference Tracks</h1>
      </div>

      <div className="cards-container fade-in-up">
        <div className="card3">
          <strong>Track-1 (Circuits)</strong>
          <div className="card__body">
            1. IoT: Sensors, MEMS, Nano, Devices and Circuits<br />
            2. IoT Applications: Smart grid, Process instrumentation, e-health, Disaster management, Protocols and standards, Mobile and wearable devices, Innovative vehicular applications.<br />
            3. VLSI: Design, Fabrication, Testing, CAD, Embedded systems and SOC<br />
            4. Power Electronics, Smart Power electronics drives and applications, Renewable Energy sources<br />
            5. Electric Vehicles
          </div>
          <span>Track-1 (Circuits)</span>
        </div>

        <div className="card3">
          <strong>Track-2 (Controls)</strong>
          <div className="card__body">
            1. Control, Robotics and Acquisition<br />
            2. Power Systems and FACTS<br />
            3. Advanced Machines and Controls<br />
            4. Instrumentation, Robotics and Virtual Reality
          </div>
          <span>Track-2 (Controls)</span>
        </div>

        <div className="card3">
          <strong>Track-3 (Communications)</strong>
          <div className="card__body">
            1. Communication Network, Mobile Communication, MANET, VANET, Wireless Sensors Network, Web Services, Security, e-transaction<br />
            2. Optical, Satellite, RF and Microwave Communication<br />
            3. Signal Processing: Image, Audio, Video, Biomedical Signal Processing<br />
            4. Pattern Recognition, Machine Learning, Deep Learning
          </div>
          <span>Track-3 (Communications)</span>
        </div>
      </div>

      {/* Register Section */}
      <div id="register" className="container-xxl newsletter py-5 fade-in-up" style={{ marginBottom: '2%' }}>
        <Container className="py-5 px-lg-5">
          <Row className="justify-content-center">
            <Col lg={8} className="text-center">
              <p className="section-title text-white justify-content-center"><span></span>Join Us<span></span></p>
              <h1 className="text-center text-white mb-5" style={{ fontSize: '2.8rem' }}>Register Today</h1>
              <div className="table-responsive">
                <Table className="custom-table" style={{ background: 'white', color: '#333' }}>
                  <thead>
                    <tr>
                      <th rowSpan="2" style={{ verticalAlign: 'middle' }}>Delegate</th>
                      <th colSpan="3" style={{ textAlign: 'center' }}>Authors</th>
                    </tr>
                    <tr>
                      <th>Student Members</th>
                      <th>Professional Members</th>
                      <th>Research Scholars</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>IEEE Members</strong></td>
                      <td>7000</td>
                      <td>8000</td>
                      <td>7000</td>
                    </tr>
                    <tr>
                      <td><strong>NON-IEEE Members</strong></td>
                      <td>9000</td>
                      <td>10000</td>
                      <td>9000</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
              <div className="mt-5">
                <a href="#" className="btn btn-light btn-lg rounded-pill pulse" style={{ fontSize: '1.2rem', padding: '12px 30px' }}>Register Now</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* Sponsors Section */}
      <div className="spon text-center py-5">
        <Container className="py-5 px-lg-5 fade-in-up">
          <div>
            <p className="section-title text-secondary justify-content-center"><span></span>CCUBE 2025<span></span></p>
            <h1 className="text-center mb-5" style={{ color: '#004080', fontSize: '2.8rem' }}>Our Sponsors</h1>
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

export default Home;