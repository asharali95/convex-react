import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Footer } from "../Landingpage/Footer";
import { Icon } from "@iconify/react";
import { Header } from "../Landingpage/Header";
import { Link } from "react-router-dom";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";


export const RaisingCapital = () => {
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
                <h5 className="mb-5">Raising Capital</h5>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col lg={6}>
              <div className="left_box">
                <div className="tags_box">
                  <span>Seed Stage</span>
                  <span>Roadshow Support</span>
                  <span>Investor Relations</span>
                  <span>Investor Guidance</span>
                  <span>Startup Fundrasing</span>
                  <span>Raising Money</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <p className="serve_description">
              In order to bring your idea to life, you will require seed stage funding. Once you have your business plan and pitch deck in hand, the next critical step is raising capital. Our objective is to put you in touch with VC firms that we believe may align with your idea and goals.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.raising} alt="" />
                <p>
                With our investor relations and investor guidance, ConvrtX is properly equipped to help you with startup fundraising. When it comes to raising capital, we can assist with the following services:
                </p>
                <ul>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Supporting Founders On How To Raise Cash</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Teaching Founders How To Reach Out To and Interact With Investors</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Providing Support With Founder Roadshows</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.raising2} alt="" />
                <p>
                Raising capital is a critical step in bringing your idea to fruition. We understand how important investor guidance and startup fundraising is, which is why we support you every step of the way. 
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
