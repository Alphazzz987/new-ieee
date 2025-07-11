import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const OrganizingCommittee = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section" style={{ height: '50vh !important' }}>
        <div className="hero-content">
          <div className="hero-box">
            <h1>Organizing Committee</h1>
          </div>
        </div>
      </div>

      {/* Committee Members */}
      <div className="gallery">
        <div className="first">
          <div className="in_ch">
            <Row style={{ marginTop: '5%' }}>
              <Col className="center">
                <div className="plan">
                  <div className="inner">
                    <h1 style={{ color: 'red' }}>Chief Patrons</h1>
                    <br />
                    <p style={{ color: 'black' }}>
                      <b>Mr. Satish R Shetty</b> <br /> Managing Trustee, RN Shetty Trust
                      <br /><br />
                      <b>Mr. Karan Shetty</b> <br /> CEO, RN Shetty Group of Institutions
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="center">
                <div className="plan">
                  <div className="inner">
                    <h1 style={{ color: 'red' }}>Patrons</h1>
                    <br />
                    <p style={{ color: 'black' }}>
                      <b>Dr. M K Venkatesha</b> <br /> Director, RNSIT
                      <br /><br />
                      <b>Mr. Murali Krishna K Mysore</b> <br /> CTO, RNS Group of Institutions
                      <br /><br />
                      <b>Dr. Ramesh Babu H S</b> <br /> Principal, RNSIT
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="center">
                <div className="plan">
                  <div className="inner">
                    <h1 style={{ color: 'red' }}>General Chair</h1>
                    <br />
                    <p style={{ color: 'black' }}>
                      <b>Dr. Vipula Singh</b> <br />
                      <br />
                      <b>Dr. S Sumathi</b> <br />
                      <br />
                      <b>Prof. Anandi Giridharan</b> <br />
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="center">
                <div className="plan">
                  <div className="inner">
                    <h1 style={{ color: 'red' }}>Publication Chair</h1>
                    <br />
                    <p style={{ color: 'black' }}>
                      <b>Dr. Rajini V Honnungar</b> <br />
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="center">
                <div className="plan">
                  <div className="inner">
                    <h1 style={{ color: 'red' }}>Finance Chair</h1>
                    <br />
                    <p style={{ color: 'black' }}>
                      <b>Dr. Roopa Nayak</b> <br />
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="center">
                <div className="plan">
                  <div className="inner">
                    <h1 style={{ color: 'red', fontSize: '25px' }}>Technical Program Committee</h1>
                    <br />
                    <p style={{ color: 'black' }}>
                      <b>Dr. T. Srinivas</b> <br />
                      <br />
                      <b>Dr. Navin Kumar</b> <br />
                      <br />
                      <b>Dr. Abhishek Appaji</b> <br />
                      <br />
                      <b>Dr. Parameshachari B D</b> <br />
                    </p>
                  </div>
                </div>
              </Col>
              <Col className="center">
                <div className="plan">
                  <div className="inner">
                    <h1 style={{ color: 'red' }}>Technical Chair</h1>
                    <br />
                    <p style={{ color: 'black' }}>
                      <b>Dr. Ibrar Jahan M A</b> <br />
                      <br />
                      <b>Dr. Leena Chandrashekar</b> <br />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizingCommittee;