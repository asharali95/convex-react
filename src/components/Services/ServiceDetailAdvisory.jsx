import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Footer } from "../Landingpage/Footer";
import { Icon } from "@iconify/react";
import { Header } from "../Landingpage/Header";
import { Link } from "react-router-dom";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";


export const ServiceDetailAdvisory = () => {
 
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <div className="service_detail">
        <Container>
          <Row><Col><Link  to="/services"><h5 style={{color:"#000",textTransform:"uppercase",display:"flex",alignItems:"center" }}> <Icon icon="bytesize:arrow-left" style={{fontSize:"18px",color:"#e18427",marginRight:"12px"}} /><span>Services</span></h5></Link></Col></Row>
          <Row>
            <Col>
              {" "}
              <div className="left_box">
                <h5 className="mb-5">Strategy & Advisory</h5>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col lg={6}>
              <div className="left_box">
                <div className="tags_box">
                  <span>Early Stage</span>
                  <span>Industry Research</span>
                  <span>Business Plan & Pitch Deck</span>
                  <span>Advisory Support</span>
                  <span>Startup Fundrasing</span>
                  <span>Board Building</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <p className="serve_description">
                Starting with a plan of action helps you lay out a concrete path
                for the next few years. Where you thought of a singular idea we
                will amplify it into everything that makes your operational
                startup, and all that will go into erecting it.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.bannerbig} alt="" />
                <p>
                  Once you share your idea with us we start researching the
                  solution you want to introduce into the market. We'll research
                  every from product development costs to who your competitors
                  are, and what they are up to. Our goal is to get you investor
                  ready and to do exactly that we provide the following
                  services:
                </p>
                <ul>
                  <li>
                  <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Industry Research</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>An Investor Ready Business plan & Pitch Deck</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Assistance Building your Advisory Board</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.strategyAdvise} alt="" />
                <p>
                  With up to date insights in hand, we hand this data to our
                  expert business strategists. The team creates a feasible route
                  for your startup, outlining how you can use your value
                  proposition to be a contender in the industry. We provide you
                  with a tangible plan that help you stay on track, as well as
                  share with prospective investors who may be interested in
                  funding your startup. 
                </p>
                <p>With comprehensive pitch decks we guide
                  you on how to get the attention of VCs in board room meetings.
                  With years of experience in what goes on in the investment
                  circles, we can help you decide what you need to show off
                  during your pitch.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
