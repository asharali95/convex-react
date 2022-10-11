import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../common/images";
import { Link } from "react-router-dom";

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

          <Row>
            <Col className="text-center">
              {" "}
              <Link smooth to="/startaproject">
                <button className="talk_btn ">
                  <span className="pe-2">Start a Project</span>
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
              </Link>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
