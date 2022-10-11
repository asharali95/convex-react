import React,{useEffect} from "react";
import { Footer } from "../Pitch/../../Landingpage/Footer";
import { Header2 } from "../Pitch/../../Landingpage/Header2";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";
import { Review } from "../../Landingpage/Review";
import { MobileHeader2 } from "../../Landingpage/Mobile/MobileHeader2";

const ThankYou = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header2 />
      <MobileHeader2/>
      <div className="serviceshero pt-4">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="ser_vi mb-5">
                <div>
                  <div className="mb-5">
                    <div className=" serv1 jai_maha ps-0">
                      <div className="ser_vi thankuText">
                        <h5>
                          <span>Thanks</span>, We'll <br/> Be In Touch.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={7}>
              <div className="thanku">
                <img src={imageurl.thankuthumb} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="bookacall">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="ser_vi ">
                <div>
                  <div className="mb-5">
                    <div className="serv ps-0 pb-0 serv2">
                      <div className="ser_vi bookacal">
                        <span
                          className="mb-3 d-block"
                          style={{ color: "#073D30", fontSize: "20px" }}
                        >
                          REQUIRED - Next Step!
                        </span>
                        <h5 style={{ fontSize: "50px" }}>
                          <span>Book a Call,</span> With a Startup Competition
                          <br />
                         
                        </h5>
                        <button className="talk_btn">
                          <span className="pe-2">Book a Call</span>
                          <Icon icon="bi:arrow-right-circle" color="white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="thanku ">
                <img src={imageurl.bookcall} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="review_grey" id="review">
        <Review />
      </div>
      <Footer />
    </div>
  );
};

export default ThankYou;
