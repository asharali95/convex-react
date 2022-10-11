import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../common/images";
import { HashLink as NavLink } from 'react-router-hash-link';

export const BusinessTypes = () => {
  return (
    <div className="pitch_startups busineaa_type">
      <Container>
        <div>
          <Container>
            <Row><Col>
            <div className="ser_vi mb-5">
                  <div>
                    <div className="mb-5">
                      <div className="serv busi_after ps-0 ">
                        <div className="ser_vi bookacal text-center">
                          <h5>
                           Types Of <span>Business Plans</span>
                          </h5>
                          <p>ConvrtX has worked with 1,000s of Startups from Pre-Seed to <br/>Series C.</p>

                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div></Col></Row>
            <Row style={{justifyContent:"center"}}>
              <Col lg={3} md={4}>
                <div className="clap_box loan_box">
                  <span className="busi_types"><img src={imageurl.bank} alt="" /></span>
                  <h5 className="type_loan mb-4">Bank Loan</h5>
                  <NavLink  smooth to="#startaproject1">
                  <button className="talk_btn d-block w-100">
                      <span className="pe-2">Learn More</span>
                      
                    </button>
                    </NavLink>

                </div>
              </Col>
              <Col lg={3} md={4}>
                <div className="clap_box cap_box">
                  <span className="busi_types"><img src={imageurl.moneycircle} alt="" /></span>
                  <h5 className="type_loan mb-4">Investment</h5>
                  <NavLink  smooth to="#startaproject1">
                  <button className="talk_btn d-block w-100">
                      <span className="pe-2">Learn More</span>
                      
                    </button>
                    </NavLink>

                </div>
              </Col>
              <Col lg={3} md={4}>
                <div className="clap_box juke_box">
                  <span className="busi_types"><img src={imageurl.presentionchart} alt="" /></span>
                  <h5 className="type_loan mb-4">Strategy</h5>
                  <NavLink  smooth to="#startaproject1">
                  <button className="talk_btn d-block w-100">
                      <span className="pe-2">Learn More</span>
                      
                    </button>
                    </NavLink>
                </div>
              </Col>
              
            </Row>
          </Container>
        </div>
      </Container>
    </div>
  );
};
