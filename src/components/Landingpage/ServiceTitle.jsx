import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const ServiceTitle = () => {
  return (
    <div className="serviceshero">
      <Container fluid className="pe-1">
        <Row>
          <Col lg={6} md={12}>
            <div className="serv">
              <div className="ser_vi check_padding">
                <img src={imageurl.poplogo} alt="" />
                <h5>
                  <span>ConvrtX</span> work with entrepreneurs and supports
                  startups in four critical<br/> ways.
                </h5>
              <Link to="/startaproject">
              <button className="talk_btn">
                  <span className="pe-2">Start a Project</span>
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button></Link>
              </div>
            </div>
          </Col>
          <Col className="open_desk" lg={6} md={12}>
            <div className="op">
              <div className="offer">
                <Link to="/services/strategy_advisory">
                  <div className="first_box border-top-0">
                    <div className="grey">
                      <span className="serial_no">1.</span>
                      <img src={imageurl.advisey} alt="" />
                      <h5>
                        <span>Strategy &<br/> Advisory</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">1.</span>
                      <h5>Strategy &<br/> Advisory</h5>
                      <p>
                        Starting with a plan of action helps you lay out a
                        concrete path for the next few years. Where you thought
                        of a singular idea we will amplify it into everything
                        that makes your operational startup, and all that will
                        go into erecting it.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="/services/product_development">
                  <div className="first_box ragvan border-top-0">
                    <div className="grey">
                      <span className="serial_no">3.</span>
                      <img src={imageurl.software} alt="" />
                      <h5>
                        <span>Product<br/> Development</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">3.</span>
                      <h5>Product Development</h5>
                      <p>
                        Once you have received your funding, it is time to start
                        developing your app. Here at ConvrtX, our goal is to
                        ensure that you receive the best quality design and
                        development services to bring your idea to life exactly
                        as you imagined it.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="offer">
                <Link to="/services/raising_capital">
                  <div className="first_box  border-top-0">
                    <div className="grey">
                      <span className="serial_no">2.</span>
                      <img src={imageurl.capital} alt="" />
                      <h5>
                        <span>Raising Capital</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">2.</span>
                      <h5>Raising Capital</h5>
                      <p>
                        In order to bring your idea to life, you will require
                        seed stage funding. Once you have your business plan and
                        pitch deck in hand, the next critical step is raising
                        capital. Our objective is to put you in touch with VC
                        firms that we believe may align with your idea and
                        goals.
                      </p>
                    </div>
                  </div>
                </Link>
                <Link to="/services/Launch_Strategy">
                  <div className="first_box ragvan border-top-0">
                    <div className="grey">
                      <span className="serial_no">4.</span>
                      <img src={imageurl.strategy} alt="" />
                      <h5>
                        <span>Launch Strategy</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">4.</span>
                      <h5>Launch Strategy</h5>
                      <p>
                        Even once the development process is complete and your
                        app is ready to launch, our guidance does not stop
                        there. ConvrtX is here to make sure that you have access
                        to the support required to execute a successful launch.
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="open_mobile">
        <Col lg={6} md={12} className="ps-0">
       <div className="offer">
       <Link to="/services/strategy_advisory">
                  <div className="first_box border-top-1">
                    <div className="grey">
                      <span className="serial_no">1.</span>
                      <img src={imageurl.advisey} alt="" />
                      <h5>
                        <span>Strategy & Advisory</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">1.</span>
                      <h5>Strategy & Advisory</h5>
                      <p>
                        Starting with a plan of action helps you lay out a
                        concrete path for the next few years. Where you thought
                        of a singular idea we will amplify it into everything
                        that makes your operational startup, and all that will
                        go into erecting it.
                      </p>
                    </div>
                  </div>
                </Link>
       </div>
            
            <div className="offer">
            <Link to="/services/raising_capital">
                  <div className="first_box  border-top-0">
                    <div className="grey">
                      <span className="serial_no">2.</span>
                      <img src={imageurl.capital} alt="" />
                      <h5>
                        <span>Raising Capital</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">2.</span>
                      <h5>Raising Capital</h5>
                      <p>
                        In order to bring your idea to life, you will require
                        seed stage funding. Once you have your business plan and
                        pitch deck in hand, the next critical step is raising
                        capital. Our objective is to put you in touch with VC
                        firms that we believe may align with your idea and
                        goals.
                      </p>
                    </div>
                  </div>
                </Link>
            </div>
               <div className="offer">
               <Link to="/services/product_development">
                  <div className="first_box ragvan border-top-0">
                    <div className="grey">
                      <span className="serial_no">3.</span>
                      <img src={imageurl.software} alt="" />
                      <h5>
                        <span>Product Development</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">3.</span>
                      <h5>Product Development</h5>
                      <p>
                        Once you have received your funding, it is time to start
                        developing your app. Here at ConvrtX, our goal is to
                        ensure that you receive the best quality design and
                        development services to bring your idea to life exactly
                        as you imagined it.
                      </p>
                    </div>
                  </div>
                </Link>
               </div>
                <div className="offer">
                <Link to="/services/Launch_Strategy">
                  <div className="first_box ragvan border-top-0">
                    <div className="grey">
                      <span className="serial_no">4.</span>
                      <img src={imageurl.strategy} alt="" />
                      <h5>
                        <span>Launch Strategy</span>
                        <Icon icon="bi:arrow-right" color="#b3b3b3" />
                      </h5>
                    </div>
                    <div className="detail_box_hover">
                      <span className="serial_no">4.</span>
                      <h5>Launch Strategy</h5>
                      <p>
                        Even once the development process is complete and your
                        app is ready to launch, our guidance does not stop
                        there. ConvrtX is here to make sure that you have access
                        to the support required to execute a successful launch.
                      </p>
                    </div>
                  </div>
                </Link>
                </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
