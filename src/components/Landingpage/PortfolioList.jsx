import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";
import { PortFolioCarousal } from "../Portfolio/PortFolioCarousal";
import { Link } from "react-router-dom";
export const PortfolioList = ({ portfolios }) => {
  return (
    <div className="portfolio contactus port ">
      <Container>
        <Col lg={12} className="mb-5">
          <div className="ser_vi mb-5">
            <small>
            <span style={{fontSize:"18px"}}>PORTFOLIO</span>
              <img src={imageurl.featuredlogo} style={{width:"30px",height:"30px"}} className="mb-0 ms-3" alt="" />
             
            </small>
            <h5 className="title_track new_common">
              <span>Startups </span>
              <p className="d-inline mb-0"> we have <br/>impacted to-date</p>
            </h5>
          </div>
        </Col>
        <Row>
          <Col></Col>
        </Row>
      </Container>
      <div className="port_box">
        <PortFolioCarousal portfolios={portfolios} />
        
      </div>
      <Container>
        <Row>
          <Col className="text-center mt-4">
            {" "}
            {/* <button className="talk_btn"><span className="pe-2">View More</span>
                <Icon icon="bi:arrow-right-circle" color="white" /></button> */}
            <Link to="/portfolio">
              {" "}
              <button className="talk_btn">
                <span className="pe-2">View more</span>
                <Icon icon="bi:arrow-right-circle" color="white" />
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
