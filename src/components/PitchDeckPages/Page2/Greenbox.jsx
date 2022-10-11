import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images"
export const Greenbox = () => {
  return (
    <div className="green_global">
      <Container>
        <Row>
          <Col lg={12}>
          <div className="green_showck">
          <div className="first_box raw_circle">
            <img src={imageurl.rocket} alt="" />
            <h5>Over 1,000 <br/>success stories</h5>
          </div>
          <div className="first_box raw_circle">
            <img src={imageurl.friends} alt="" />
            <h5>Global <br/>Coverage</h5>
          </div>
          <div className="first_box">
            <img src={imageurl.headphone} alt="" />
            <h5>Fast  <br/>Turnaround</h5>
          </div>
          </div>
          </Col>
         
        </Row>
      </Container>
    </div>
  );
};
