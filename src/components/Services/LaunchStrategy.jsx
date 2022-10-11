import React,{useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Footer } from "../Landingpage/Footer";
import { Icon } from "@iconify/react";
import { Header } from "../Landingpage/Header";
import { Link } from "react-router-dom";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";


export const LaunchStrategy = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <div className="service_detail">
        <Container>
          <Row><Col><Link to="/services"><h5 style={{ color: "#000", textTransform: "uppercase",display:"flex",alignItems:"center" }}> <Icon icon="bytesize:arrow-left" style={{ fontSize: "18px", color: "#e18427", marginRight: "12px" }} /><span>Services</span></h5></Link></Col></Row>
          <Row>
            <Col>
              {" "}
              <div className="left_box">
                <h5 className="mb-5">Launch Strategy</h5>
              </div>
            </Col>
          </Row>
          <Row className="mb-4">
            <Col lg={6}>
              <div className="left_box">
                <div className="tags_box">
                  <span>Market Validation</span>
                  <span>Product Market Fit</span>
                  <span>Post Launch Support</span>
                  <span>HR Support</span>
                  <span>Startup Runway</span>
                  <span>Go To Market Strategy</span>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <p className="serve_description">
                Even once the development process is complete and your app is ready to launch, our guidance does not stop there. ConvrtX is here to make sure that you have access to the support required to execute a successful launch.
              </p>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.launch1} alt="" />
                <p>
                  ConvrtX helps you with all aspects of launching your new app, from market validation to helping with your go-to market strategy, as well as:
                </p>
                <ul>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Optimizing The Product For The Market</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Supporting The Startup With Regular Maintenance</span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>Offering HR Support</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.launch2} alt="" />
                <p>
                  There is plenty to be done when it comes to managing a successful launch strategy. Fortunately, ConvrtX helps you manage all aspects of your launch. We can assist you with operations, understanding, and managing your startup runway, and ensuring your app can satisfy the market by optimizing product-market fit.

                </p>
                <p>
                  We understand that the hard work is not over once your app is available to download. That is why ConvrtX doesn’t stop assisting you once your app has been developed. Whether you require help maintaining your app or aid in hiring team members or employees, we are here to help with all aspects of post-launch support.</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <Footer />
    </div>
  );
};
