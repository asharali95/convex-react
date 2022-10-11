import React ,{useEffect} from "react";
import { Footer } from "../../Landingpage/Footer";
import { Header2 } from "../../Landingpage/Header2";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";
import { Review } from "../../Landingpage/Review";
import { Features } from "../../Landingpage/Features";
import { DownloadPdf } from "./DownloadPdf";
import { MobileHeader2 } from "../../Landingpage/Mobile/MobileHeader2";

const ThankYou2 = () => {
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
                       
                        <h5 style={{ fontSize: "50px" }}>
                          <span>Call Now,</span>  If You<br/> Don't Wanna Wait.

                          <br />
                          Analyst.
                        </h5>
                        <div className="tollfree">
                          <h6 className="d-flex" style={{alignItems:"center",flexWrap:"wrap",lineHeight:"30px"}}><Icon icon="fluent:call-20-regular" color="#200e32" width="40" height="40" /><a href="tel:+18889797510"><span style={{color:"#e18427",fontSize:"25px",marginRight:"12px"}}>+1 (888) 979-7510</span></a><span>(Toll-Free)</span> </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="thanku ">
                <img src={imageurl.bookcall}  alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
     <div className="open_df">
     <DownloadPdf/>
     </div>
      <div className="review_grey" id="review">
        <Review />
      </div>
      <Features/>
      <Footer />
    </div>
  );
};

export default ThankYou2;
