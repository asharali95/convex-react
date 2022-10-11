import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Footer } from "../Landingpage/Footer";
import { Icon } from "@iconify/react";
import { Header } from "../Landingpage/Header";
import { Link } from "react-router-dom";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";


export const ProductDevelopment = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <div className="service_detail">
        <Container>
          <Row><Col><Link to="/services"><h5 style={{color:"#000",textTransform:"uppercase",display:"flex",alignItems:"center" }}> <Icon icon="bytesize:arrow-left" style={{fontSize:"18px",color:"#e18427",marginRight:"12px"}} /><span>Services</span></h5></Link></Col></Row>
          <Row>
            <Col>
              {" "}
              <div className="left_box">
                <h5 className="mb-5">Product Development</h5>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col lg={6}>
              <div className="left_box">
                <div className="tags_box">
                  <span>UI & UX</span>
                  <span>User Interface Design</span>
                  <span>Clickable Prototype</span>
                  <span>Development</span>
                  <span>Proof Of Concept</span>
                  <span>Minimum Viable Product</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <p className="serve_description">
              Once you have received your funding, it is time to start developing your app. Here at ConvrtX, our goal is to ensure that you receive the best quality design and development services to bring your idea to life exactly as you imagined it. 
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.product1} alt="" />
                <p>
                Our team of expert designers and developers work one-on-one with you throughout the development process. We offer a range of services, including:
                </p>
                <ul>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Initial Design Concepts for UI/UX Screens</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Development Of A Proof Of Concepts (POC)</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Development of a Minimum Viable Product (MVP)</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.product2} alt="" />
                <p>
                ConvrtX offers top quality user interface design services to make sure that your users will have the highest quality user experience possible. Additionally, with proof of concept, we present evidence to demonstrate that your app idea is feasible.


                </p>
                <p>You will get to work closely with the development team to make sure the creation of your app meets your vision and expectations exactly. ConvrtX helps you every step of the way; from the initial UI and UX concepts to the clickable prototype and all the way through to seeing the launch of your app.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
