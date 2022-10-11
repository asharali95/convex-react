import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { Icon } from "@iconify/react";
import imageurl from '../../common/images';

export const Pitch = () => {
  return (
    <div className="portfolio contactus pitch_main">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="ser_vi mb-5">
              <small className='contact_after'>Pitch Competition</small>
              <h5 style={{ maxWidth: "100%" }}>
                <p className="d-inline mb-0">Join Our </p>
                <span> Pitch Competition </span>

              </h5>
            </div>
          </Col>
        </Row>

      </Container>



      <div className='overflow-hidden open_desk '>
        <div className="hero_pitch">
          <Container>
            <Row>
              <Col lg={5}><div className="hero_com">
                <img src={imageurl.pitchhero} alt="" />
              </div></Col>
              <Col lg={7}>
                <div>
                  <h4>Pitch <br />Competitions</h4>
                  <p style={{ color: "#839E98" }}>ConvrtX has always been and will be about providing entrepreneurs with an opportunity to launch their startup into the open waters. The ConvrtX pitch competition focuses on providing early idea stage startups a chance to think brighter and bolder.</p>
                  <Link to="/applyforpitch"> <button className="talk_btn">
                    <span className="pe-2">Apply To Pitch</span>
                    <Icon icon="bi:arrow-right-circle" color="white" />
                  </button></Link>
                </div>
              </Col>
            </Row>
          </Container>


        </div>
        
      </div>
      <div className='overflow-hidden open_mobile'>
        <div className="hero_pitch">
          <Container>
            <Row>
            <Col lg={12} md={12}>
                <div className='mb-5'>
                  <h4>Pitch <br />Competitions</h4>
                  <p style={{ color: "#839E98" }}>ConvrtX has always been and will be about providing entrepreneurs with an opportunity to launch their startup into the open waters. The ConvrtX pitch competition focuses on providing early idea stage startups a chance to think brighter and bolder.</p>
                  <Link to="/applyforpitch"> <button className="talk_btn">
                    <span className="pe-2">Apply To Pitch</span>
                    <Icon icon="bi:arrow-right-circle" color="white" />
                  </button></Link>
                </div>
              </Col>
              <Col lg={12} md={12}> <div className="hero_com">
                <img src={imageurl.pitchhero} alt="" />
              </div></Col>
              
            </Row>
          </Container>


        </div>
        
      </div>
    </div>
  )
}
