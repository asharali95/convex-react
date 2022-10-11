import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../common/images";
import { HashLink as NavLink } from 'react-router-hash-link';
import { Slider1pdf } from "./Slider1pdf";
export const DownloadPdf = () => {
  return (
    <div className="Download_pdf" id="samples">
      <Container>
        <Row >
          <Col>
            <h5>
              Explore Our <span>Business Plan</span> & <br />{" "}
              <span>Pitch Deck</span> Samples
            </h5>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="para_iop">
              Our Startup Consultants are experts with curating your vision or
              existing startup <br />
              to potential investors.
            </p>
          </Col>
        </Row>

        <div className="pdf_tabs">
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row >
              <Col sm={12}>
                <Nav variant="pills" className="tabs_null">
                  <Nav.Item>
                    <Nav.Link eventKey="first">
                      <Icon icon="ant-design:check-circle-outlined" />
                      <span>Business Plans</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">
                      <Icon icon="ant-design:check-circle-outlined" />
                      <span>Pitch Decks</span>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">
                      <Icon icon="ant-design:check-circle-outlined" />
                      <span>Infographics</span>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
            </Row>
            <Row>
              <Col lg={12}>
                <Tab.Content className="mb-5">
                  <Tab.Pane eventKey="first">
                    <div className="slide_show">
                      <Row>
                        <Col lg={3}>
                          <a
                            href="https://convrtx.com/convertx_app/storage/app/public/pdf/BusinessPlan/Crypto%20App%20Fintech%20BP%20Template.pdf"

                            target="_blank"
                          >
                            <div className="pdf_info">
                              <img src={imageurl.pdf1} alt="" />
                              <div className="name_one">
                                <span>CryptoApp</span>


                                <Icon icon="bi:arrow-right" color="#e18427" />

                              </div>

                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a
                            href="https://convrtx.com/convertx_app/storage/app/public/pdf/BusinessPlan/HealthApp_BP_Template%20(1).pdf"

                            target="_blank"
                          >
                            <div className="pdf_info">
                              <img src={imageurl.pdf2} alt="" />
                              <div className="name_one">
                                <span>HealthApp</span>


                                <Icon icon="bi:arrow-right" color="#e18427" />

                              </div>
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a
                            href="https://convrtx.com/convertx_app/storage/app/public/pdf/BusinessPlan/DateApp_BP_Template.pdf"

                            target="_blank"
                          >
                            <div className="pdf_info">
                              <img src={imageurl.pdf3} alt="" />
                              <div className="name_one">
                                <span>DateApp</span>


                                <Icon icon="bi:arrow-right" color="#e18427" />

                              </div>
                            </div>
                          </a>
                        </Col>
                        <Col lg={3}>
                          <a
                            href="https://convrtx.com/convertx_app/storage/app/public/pdf/BusinessPlan/Logistics%20(Deliver%20App).pdf"

                            target="_blank"
                          >
                            <div className="pdf_info">
                              <img src={imageurl.pdf4} alt="" />
                              <div className="name_one">
                                <span>DeliverApp</span>


                                <Icon icon="bi:arrow-right" color="#e18427" />

                              </div>
                            </div>
                          </a>
                        </Col>
                      </Row>
                    </div>
                    <Row className="slide_mobile">

                      <Col><Slider1pdf /></Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      <Col lg={3}>
                      <a
                              href="https://convrtx.com/convertx_app/storage/app/public/pdf/PitchDeck/Crypto%20App%20Fintech%20Pitch%20deck%20template.pdf"
                             
                              target="_blank"
                            >
                        <div className="pdf_info">
                          <img src={imageurl.pdf5} alt="" />
                          <div className="name_one">
                            <span>CryptoApp</span>

                           
                              <Icon icon="bi:arrow-right" color="#e18427" />
                            
                          </div>
                        </div>
                        </a>
                      </Col>
                      <Col lg={3}>
                        
                      <a
                              href="https://convrtx.com/convertx_app/storage/app/public/pdf/PitchDeck/HealthApp_PD_Template.pdf"
                            
                              target="_blank"
                            >
                        <div className="pdf_info">
                          <img src={imageurl.pdf6} alt="" />
                          <div className="name_one">
                            <span>HealthApp</span>

                              <Icon icon="bi:arrow-right" color="#e18427" />
                         
                          </div>
                        </div>
                        </a>
                      </Col>
                      <Col lg={3}>
                      <a
                              href="https://convrtx.com/convertx_app/storage/app/public/pdf/PitchDeck/Dating%20Social%20(Date%20App)%20PD%20(1).pdf"
                            
                              target="_blank"
                            >
                        <div className="pdf_info">
                          <img src={imageurl.pdf7} alt="" />
                          <div className="name_one">
                            <span>DateApp</span>

                           
                              <Icon icon="bi:arrow-right" color="#e18427" />
                          
                          </div>
                        </div>
                        </a>
                      </Col>
                      <Col lg={3}>
                      <a
                              href="https://crvtx.space/dataconvertx/Pitch%20Deck/Logistics%20(Deliver%20App)%20Pitch%20deck%20template.pdf"
                            
                              target="_blank"
                            >
                        <div className="pdf_info">
                          <img src={imageurl.pdf8} alt="" />
                          <div className="name_one">
                            <span>DeliverApp</span>

                           
                              <Icon icon="bi:arrow-right" color="#e18427" />
                           
                          </div>
                        </div>
                        </a>
                      </Col>
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      <Col lg={3}>
                        <a
                          href="https://convrtx.com/convertx_app/storage/app/public/pdf/Infographics/Crypto%20App%20Template_Client's%20Copy.pdf"

                          target="_blank"
                        >
                          <div className="pdf_info">
                            <img src={imageurl.pdf9} alt="" />
                            <div className="name_one">
                              <span>CryptoApp</span>


                              <Icon icon="bi:arrow-right" color="#e18427" />

                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col lg={3}>
                        <a
                          href="https://crvtx.space/dataconvertx/Infographics/HealthApp_InfographicsTemplate.pdf"

                          target="_blank"
                        >
                          <div className="pdf_info">
                            <img src={imageurl.pdf10} alt="" />
                            <div className="name_one">
                              <span>HealthApp</span>


                              <Icon icon="bi:arrow-right" color="#e18427" />

                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col lg={3}>
                        <a
                          href="https://convrtx.com/convertx_app/storage/app/public/pdf/Infographics/Dating%20Social%20(Date%20App)%20Infographic%20template%20Revision%202.pdf"

                          target="_blank"
                        >
                          <div className="pdf_info">
                            <img src={imageurl.pdf11} alt="" />
                            <div className="name_one">
                              <span>DateApp</span>


                              <Icon icon="bi:arrow-right" color="#e18427" />

                            </div>
                          </div>
                        </a>
                      </Col>
                      <Col lg={3}>
                        <a
                          href="https://convrtx.com/convertx_app/storage/app/public/pdf/Infographics/Logistics%20(Deliver%20App)%20Infographics%20template%20Revision%201.pdf"

                          target="_blank"
                        >
                          <div className="pdf_info">
                            <img src={imageurl.pdf12} alt="" />
                            <div className="name_one">
                              <span>DeliverApp</span>


                              <Icon icon="bi:arrow-right" color="#e18427" />

                            </div>
                          </div>
                        </a>
                      </Col>
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

          <Row>
            <Col className="text-center">
              {" "}
              <NavLink smooth to="#startaproject">
                <button className="talk_btn ">
                  <span className="pe-2">Start a Project</span>
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
              </NavLink>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
