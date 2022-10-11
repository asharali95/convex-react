import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { HashLink as NavLink } from 'react-router-hash-link';
export const StartupsTrust = () => {
  return (
    <div className="fundarise trust before_fun" id="about">
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="fundarise_details">
              <h5>
                Learn why 1,000s of startups <br />
                trust <span>ConvrtX</span>
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12}>
            <div className="red_trust">
              <div className="lopen_box">
                <img src={imageurl.icon1} alt="" />
                <h4>Tier 1 VC Quality</h4>
                <p>
                  Many of our clients have gone on to receive funding from top
                  VC firms including Warburg Pincus Index Ventures, Kliener
                  Perkins, and more.
                </p>
              </div>
              <div className="lopen_box">
                <img src={imageurl.icon2} alt="" />
                <h4>Expert Team</h4>
                <p>
                  Clients collaborate directly with a business plan expert that
                  has experience in investment banking to understand the unique
                  business model of your company.
                </p>
              </div>
              <div className="lopen_box">
                <img src={imageurl.icon3} alt="" />
                <h4>Custom Design</h4>
                <p>
                  Every plan has a fully custom design to reflect the unique
                  branding and opportunity of your company. No templates, No
                  Copy/Paste.
                </p>
              </div>
              <div className="lopen_box">
                <img src={imageurl.icon4} alt="" />
                <h4>Funding Support</h4>
                <p>
                  ConvrtX continues to provide end-to-end support in the
                  fundraising from modeling, designing, and funding.
                </p>
              </div>
              <div className="lopen_box second_opn me-0">
                <img src={imageurl.icon5} alt="" />
                <h4>Custom Financials</h4>
                <p>
                  ConvrtX continues to provide end-to-end support in the
                  fundraising from modeling, designing, and funding.
                </p>
              </div>
            </div>
          </Col>
          <Row>
          <Col className="mt-5" style={{textAlign:"center"}} >  <NavLink   smooth to="#startaproject1">
                   <button className="talk_btn ">
                      <span className="pe-2">Start a Project</span>
                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                   </NavLink></Col>
        </Row>
        </Row>
      </Container>
    </div>
  );
};
