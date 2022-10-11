import React from "react";
import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import imageurl from "../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

export const ServiceSection = () => {

  return (
    <div id="top" className="service">
      <Container>
        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
          <Row>
            <Col lg={5}>
              <div className="ser_vi">
                <img src={imageurl.conlogo} alt="" />
                <h5>
                  <span>ConvrtX</span> work with entrepreneurs and supports
                  startups <br/>in four critical<br/> ways.
                </h5>
              </div>
              <Nav variant="pills" className="flex-column">
                <Nav.Item>
                  <Nav.Link eventKey="first">
                    <img src={imageurl.rec} alt="" />
                    <span>Strategy & Advisory</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">
                    <img src={imageurl.rec} alt="" />
                    <span>Raising Capital</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">
                    <img src={imageurl.rec} alt="" />
                    <span>Product Development</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">
                    <img src={imageurl.rec} alt="" />
                    <span>Launch Strategy</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col lg={7}>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <div className="grey_box">
                    <div className="ad_box">
                      <img src={imageurl.advise} alt="" />
                      <Link to="/services/strategy_advisory">
                        <span>
                          <Icon icon="akar-icons:arrow-up-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="grey_details">
                    <h5>
                      <img src={imageurl.advisey} alt="" />
                      <span>Strategy & Advisory</span>
                    </h5>
                    <p>
                      Starting with a plan of action helps you lay out a
                      concrete path for the next few years. Where you thought of
                      a singular idea we will amplify it into everything that
                      makes your operational startup, and all that will go into
                      erecting it. Once you share your idea with us we start
                      researching the solution you want to introduce into the
                      market.
                    </p>
                    <Link className="open_talk ps-0" to="/startaproject">
                      <button className="talk_btn">
                        <span>Start a Project</span>{" "}
                        <Icon icon="bi:arrow-right-circle" color="white" />
                      </button>
                    </Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className="grey_box">
                    <div className="ad_box">
                      <img src={imageurl.raising} alt="" />
                      <Link to="/services/raising_capital">
                        <span>
                          <Icon icon="akar-icons:arrow-up-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="grey_details">
                    <h5>
                      <img src={imageurl.capital} alt="" />
                      <span>Raising Capital</span>
                    </h5>
                    <p>
                      In order to bring your idea to life, you will require seed
                      stage funding. Once you have your business plan and pitch
                      deck in hand, the next critical step is raising capital.
                      Our objective is to put you in touch with VC firms that we
                      believe may align with your idea and goals.
                    </p>
                    <Link className="open_talk ps-0" to="/startaproject">
                      <button className="talk_btn">
                        <span>Start a Project</span>{" "}
                        <Icon icon="bi:arrow-right-circle" color="white" />
                      </button>
                    </Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <div className="grey_box">
                    <div className="ad_box">
                      <img src={imageurl.product1} alt="" />
                      <Link to="/services/product_development">
                        <span>
                          <Icon icon="akar-icons:arrow-up-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="grey_details">
                    <h5>
                      <img src={imageurl.software} alt="" />
                      <span>Product Development</span>
                    </h5>
                    <p>
                      Once you have received your funding, it is time to start
                      developing your app. Here at ConvrtX, our goal is to
                      ensure that you receive the best quality design and
                      development services to bring your idea to life exactly as
                      you imagined it.
                    </p>
                    <Link className="open_talk ps-0" to="/startaproject">
                      <button className="talk_btn">
                        <span>Start a Project</span>{" "}
                        <Icon icon="bi:arrow-right-circle" color="white" />
                      </button>
                    </Link>
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <div className="grey_box">
                    <div className="ad_box">
                      <img src={imageurl.launch1} alt="" />
                      <Link to="/services/Launch_Strategy">
                        <span>
                          <Icon icon="akar-icons:arrow-up-right" />
                        </span>
                      </Link>
                    </div>
                  </div>
                  <div className="grey_details">
                    <h5>
                      <img src={imageurl.strategy} alt="" />
                      <span>Launch Strategy</span>
                    </h5>
                    <p>
                      Even once the development process is complete and your app
                      is ready to launch, our guidance does not stop there.
                      ConvrtX is here to make sure that you have access to the
                      support required to execute a successful launch.
                    </p> 
                    <Link className="open_talk ps-0" to="/startaproject">
                      <button className="talk_btn">
                        <span>Start a Project</span>{" "}
                        <Icon icon="bi:arrow-right-circle" color="white" />
                      </button>
                    </Link>
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};
