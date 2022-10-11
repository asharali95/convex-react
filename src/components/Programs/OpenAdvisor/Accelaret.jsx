import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export const Accelaret = () => {
  return (
    <div className="advisorcommunity accelar">
      <Container>
        <Row>
          <Col>
            <h5 className="advise_track">Accelerator Program</h5>
          </Col>
        </Row>

        <Row>
          <Col lg={6}>
            <div className="accelate_box">
              <img src={imageurl.accelarte} alt="" />
            </div>
          </Col>
          <Col lg={6}>
            <div className="accelater_detail">
              <div>
                <h5>Launching - Early 2023</h5>
                <p>
                  We look forward to launching ConvrtX's first accelerator
                  program in early 2023 to significantly impact and increase the
                  product marketing fit and growth potential of Seed - Series A
                  startups. 
                </p>
                <p>ConvrtX will only offer this program to select
                  founders within our ecosystem that we believe have significant
                  potential for rapid and scaleable growth.</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
