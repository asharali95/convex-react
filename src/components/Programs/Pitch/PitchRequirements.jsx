import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from '../../common/images';
import { Link } from 'react-router-dom';

export const PitchRequirements = () => {
  return (
    <div className=" require_pitch">
      <Container>
        <Row>
          <Col lg={6} >
            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
              <div className="ser_vi mb-3">

                <h5 style={{ maxWidth: "100%" }}>
                  <span style={{ color: "#000" }}>Pitch Competition </span>
                  <p className='mb-0'> Requirements & Benefits </p>

                </h5>
                <p style={{ marginBottom: "20px", fontSize: "18px" }} >All Applicants are required to do the following to complete their application:</p>
                <ul>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Pay The $50 Application Fee.</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Speak With A Startup Competition Analyst.</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Confirm they are a Pre-Seed Idea Stage Startup.</span>
                  </li>
                </ul>
                <Link to="/applyforpitch"> <button className="talk_btn">
                  <span className="pe-2">Apply To Pitch</span>
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button></Link>
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="pitch_rela">
              <div className="pitch_box">
                <img src={imageurl.pitchben} alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
