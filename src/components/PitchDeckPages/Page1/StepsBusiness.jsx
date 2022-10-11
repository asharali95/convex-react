import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../../common/images";

export const StepsBusiness = () => {
  return (
    <div className="pitch_startups busineaa_type steps_business" id="ourprocess">
      <Container>
        <div>
          <Container>
            <Row><Col>
            <div className="ser_vi mb-5">
                  <div>
                    <div className="mb-5">
                      <div className="serv ps-0 ">
                        <div className="ser_vi bookacal text-center">
                          <h5>
                            Our
                          <span> Process</span>
                          </h5>
                     
                       
                        </div>
                      </div>
                    </div>
                  </div>
                </div></Col></Row>
            <Row>
           <Col>
           <img className="open_desk " style={{marginBottom:"35px"}} src={imageurl.ourBusness} alt="" />
           <img className="open_mobile desk_yop" style={{marginBottom:"35px"}} src={imageurl.ourBusness2} alt="" />
           </Col>
              {/* <Col lg={4}>
                <div className="clap_box steps_box">
                  <span className="busi_types process_busi">1</span>
                  <h5>KICK-OFF CALL</h5>
                 <p>Lets get to know each other. We start with an in-depth Zoom video interview and consultation.</p>

                </div>
              </Col>
              <Col lg={4}>
              <div className="clap_box steps_box">
                  <span className="busi_types green process_busi">2</span>
                  <h5>CREATE</h5>
                 <p>Our team of researchers, writers, designers, and financial modelers build your deck or plan.</p>

                </div>
              </Col>
              <Col lg={4}>
              <div className="clap_box steps_box">
                  <span className="busi_types purple process_busi">3</span>
                  <h5>COLLABORATE</h5>
                 <p>Have a series of Zoom meetings to review and refine the materials and advise until perfect.</p>

                </div>
              </Col> */}
              
            </Row>
            <div className="caption_status">
              <Row>
                <Col lg={4}>
                  <div className="first_box">
                    <h5>60+</h5>
                    <span>Industries</span>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="first_box try_border">
                    <h5>$4.0 B+</h5>
                    <span>Investment</span>
                  </div>
                </Col>
                <Col lg={4}>
                  <div className="first_box">
                    <h5>30+</h5>
                    <span>Countries</span>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};
