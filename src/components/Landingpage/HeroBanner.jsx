import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

import imageurl from "../common/images";
export const HeroBanner = () => {
  return (
    <div className="hero_banner">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="ser_vi mb-5">
              <div>
                <div className="title_hero_con">
                  <h5 className="title_track">
                    <p className=" mb-0">Unleashing </p>
                    <p className=" mb-0">true potential of</p>
                    <span>Entrepreneurs </span>
                  </h5>
                  <p className="title-para mb-4">
                    An Award Winning Venture Ecosystem Supporting Startup
                    Entrepreneurs With A Formulaic & Holistic Structure.
                  </p>
                 <Link to="/services">
                 <button className="talk_btn">
                    <span className="pe-2">What We Offer</span>
                    <Icon icon="bi:arrow-right-circle" color="white" />
                  </button></Link>
                  <div className="hero_img open_mobile">
                    <img src={imageurl.herosvg} alt="" />
                  </div>
                </div>
              <div className=" open_desk">
              <Row  >
                  <Col lg={4} className="pe-0" md={6}>
                    <div className="rocket_box">
                      <h5>
                        <img src={imageurl.rocket} alt="" />
                        <span>700+</span>
                      </h5>
                      <p>No. of Startups in ConvrtX Ecosystem</p>
                    </div>
                  </Col>
                  <Col lg={4} className="ps-0" md={6}>
                    <div className="rocket_box">
                      <h5>
                        <img src={imageurl.friends} alt="" />
                        <span>4,000+</span>
                      </h5>
                      <p>Advisor Community managed by ConvrtX</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="rocket_box">
                      <h5>
                        <img src={imageurl.headphone} alt="" />
                        <span>10,000+</span>
                      </h5>
                      <p>Lives positively impacted through ConvrtX Programs</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className=" open_mobile">
              <Row >
                  <Col lg={4} md={6}>
                    <div className="rocket_box">
                      <h5>
                        <img src={imageurl.rocket} alt="" />
                        <span>700+</span>
                      </h5>
                      <p>No. of Startups in ConvrtX Ecosystem</p>
                    </div>
                  </Col>
                  <Col lg={4}  md={6}>
                    <div className="rocket_box">
                      <h5>
                        <img src={imageurl.friends} alt="" />
                        <span>4,000+</span>
                      </h5>
                      <p>Advisor Community managed by ConvrtX</p>
                    </div>
                  </Col>
                  <Col lg={4} md={6}>
                    <div className="rocket_box">
                      <h5>
                        <img src={imageurl.headphone} alt="" />
                        <span>10,000+</span>
                      </h5>
                      <p>Lives positively impacted through ConvrtX Programs</p>
                    </div>
                  </Col>
                </Row>
              </div>
                
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div className="hero_img open_desk">
              <img src={imageurl.herosvg} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
