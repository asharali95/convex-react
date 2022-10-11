import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";

export const Programpage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
        <div className="programpage portfolio">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="ser_vi mb-5">
              <tag>PROGRAMS</tag>
              <h5>
                <span className="d-inline">Build, </span>
                <p className="mb-0 d-inline"> relationships and belonging!</p>
              </h5>
            </div>
          </Col>
        </Row>

        <div className="prog_openadvisor ">
          <Row>
            <Col lg={6} md={12}>
              <div className="grey_box">
                <div className="opener">
                  <img src={imageurl.openlogo} alt="" />
                  <h5>Our Global Advisory Platform</h5>
                  <p>
                    Open Advisor helps early and mid stage startups from around
                    the world find strategic mentors, who impart the wisdom and
                    guidance of years spent transforming industries.
                  </p>
                  
                  <a href="http://www.openadvisor.app/" target="_blank">
          <button className="talk_btn">
                  <span>View more</span>{" "}
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
          </a>
             
                </div>
              </div>
            </Col>
            <Col lg={6} md={12}>
            <div className="openadvisit">
                <img src={imageurl.openadbanner} alt="" />
            </div>
            
            </Col>
          </Row>
        </div>
      </Container>
     
    </div>
    <div className="intro_program">
        <Container>
            <Row>
                <Col lg={6}>
                <h5>Introducing ConvrtX, Startup Incubation 2.0</h5>
                </Col>
            </Row>
        </Container>
      </div>
    </div>
  );
};
