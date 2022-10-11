import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../common/images";

export const PitchStartups = () => {
  return (
    <div className="pitch_startups" id="about">
      <Container>
        <div className="bookacall">
          <Container>
            <Row>
              <Col lg={6}>
                <div className="ser_vi start_op mb-5">
                  <div>
                    <div className="mb-5">
                      <div className="serv ps-0 serv2">
                        <div className="ser_vi bookacal">
                          <h5>
                            Pitch Decks for <span>Startups</span>
                          </h5>

                          <p>
                            ConvrtX is the global leader for Business Plan &
                            Pitch Deck creation. Most even say we are the
                            Largest Startup Ecosystem For Entrepreneurs. Whether
                            you're presenting to investors or just getting
                            started, ConvrtX can help you achieve the maximum
                            impression.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col lg={6}>
                    <div className="indian_box">
                      <img src={imageurl.cloud} alt="" />
                      <h5>3,500+</h5>
                      <span>Global Clients</span>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="indian_box">
                      <img src={imageurl.plans} alt="" />
                      <h5>10,000+</h5>
                      <span>Pitch Deck & Business Plans Created</span>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col lg={6}>
                    <div className="indian_box">
                      <img src={imageurl.notepad} alt="" />
                      <h5>$4B+</h5>
                      <span>Billions in Capital Raised</span>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div className="indian_box">
                      <img src={imageurl.communi} alt="" />
                      <h5>Global</h5>
                      <span>Representing Startups Everywhere</span>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};
