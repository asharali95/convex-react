import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import imageurl from "../../common/images";
import { HashLink as NavLink } from 'react-router-hash-link';
export const OurPackages = () => {
  return (
    <div className="Download_pdf ourpackages" id="packages" >
      <Container>
        <Row>
          <Col className="mb-5">
            <h5>
              Our <span>Packages</span>
            </h5>
            <p className="mb-5">
              Curated for Startups in Idea Stage to Series C, we got you
              covered. Treat us like your
               North Star,<br /> we are here to provide direction and guidance.
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={4}>
            <div className="nak">
              <div className="package_card ">
                <label>Basic Plan</label>
                <img src={imageurl.packageicon1} alt="" />
                <h4>
                  Entry level plan
                  <br /> with custom research
                </h4>
                <p>
                  For Early Stage Startups seeking funding from the SBA or
                  investors &lt; $100,000
                </p>
                <ul>
                  <li>
                    <Icon icon="akar-icons:check" />
                    <span>
                      Fully custom business plan with market research and
                      financials
                    </span>
                  </li>
                  <li>
                    <Icon icon="akar-icons:check" />
                    <span>60 day timeline with up to 2 revisions.</span>
                  </li>
                </ul>
                <NavLink  className="open_talk" smooth to="#startaproject1">
                   <button className="talk_btn d-block w-100">
                      <span className="pe-2">Start a Project</span>
                   
                    </button>
                   </NavLink>
                
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="package_card premium_card">
              <label>Premium Plan</label>
              <img src={imageurl.packageicon2} alt="" />
              <h4>
                Professional plan for
                <br />
                more complex investment
              </h4>
              <p>
                For Pre-Seed Stage Startups seeking funding from the SBA or
                investors &lt; $300,000
              </p>
              <ul>
                <li>
                  <Icon icon="akar-icons:check" />
                  <span>
                    Custom investor ready business plan & Pitch<br/> Deck with
                    financial model from Pre-Seed to Series A
                  </span>
                </li>
                <li>
                  <Icon icon="akar-icons:check" />
                  <span>
                    Brand Positioning, Logo Creation with<br/> Brand Book &
                    Guidelines
                  </span>
                </li>
                <li>
                  <Icon icon="akar-icons:check" />
                  <span>60 day timeline with up to 5 revisions.</span>
                </li>
              </ul>
              <NavLink  smooth to="#startaproject1">
                   <button className="talk_btn d-block w-100">
                      <span className="pe-2">Start a Project</span>
                      
                    </button>
                   </NavLink>
              <div className="plan_smile">Most Popular</div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="nak">
              <div className="package_card packagecard2">
                <label>Investor Pack</label>
                <img src={imageurl.packageicon3} alt="" />
                <h4>Entry level plan with custom research</h4>
                <p>
                  For Seed or Later Stage Startups seeking funding to accelerate
                  growth &gt; $1,000,000
                </p>
                <ul className="mb-1">
                  <li>
                    <Icon icon="akar-icons:check" />
                    <span>
                      Everything included in our premium plan with unlimited
                      revisions.
                    </span>
                  </li>
                  <li>
                    <Icon icon="akar-icons:check" />
                    <span>
                      Expanded investor deck for due diligence, valuation, and
                      investor list
                    </span>
                  </li>
                </ul>
               
                <NavLink  className="open_talk" smooth to="#startaproject1">
                   <button className="talk_btn d-block w-100">
                      <span className="pe-2">Start a Project</span>
                     
                    </button>
                   </NavLink>
               
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
