import React, { useEffect } from "react";
import { Footer } from "../Landingpage/Footer";
import { Header } from "../Landingpage/Header";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPortfolio } from "../../store/actions/portfolioAction";
import SiteLoader from "../SiteLoader/SiteLoader";
import { RESET_PORTFOLIO_DETAIL } from "../../store/common/types";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";

export const PortfolioDetail = () => {
  const { id } = useParams();
  const { loading, portfolio_details } = useSelector(
    (state) => state.portfolio
  );

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPortfolio(id));
    return () => dispatch({ type: RESET_PORTFOLIO_DETAIL });
  }, [id, dispatch]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const openLink=(link) => {
  
    if (link.indexOf("http://") === 0 || link.indexOf("https://") === 0) {
      window.open(link)
    }
    else{
      window.open('http://'+link)
    }
   
  }
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      {loading ? <SiteLoader /> : null}
      <div className="portfolio-detail picture_port">
        <div className="open_ox">
          <img className="op_banner" src={imageurl.imageurl} alt="" />

          <Container className="nova">
            <Row>
              <Col lg={6}>
                {" "}
                <div className="red_notice">
                  <img
                    src={
                      portfolio_details.image
                        ? portfolio_details.image
                        : imageurl.default
                    }
                    alt=""
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="startup_detail open_desk">
        <Container>
          <Row>
            <Col lg={5}>
              <div className="start_up">
              <h5><span style={{color:"#e18427"}}>{portfolio_details.startup_name}</span> Startup Bio</h5>
                <h6 className="mb-3"></h6>
                <p>{portfolio_details.bio}</p>
              </div>
            </Col>
            <Col lg={2}></Col>
            <Col lg={5}>
              <div className="startup_details start_up">
                <h5>Startup details</h5>
                <p>
                  <span>Country</span>
                  <span>{portfolio_details.country_name}</span>
                </p>
                <p>
                  <span>Founders</span>
                  <span>{portfolio_details.founders_name}</span>
                </p>
               
                <p>
                  <span>Industry</span>
                  <span>{portfolio_details.industry}</span>
                </p>
                <p className="mb-5">
                  <span>Date Founded</span>
                  <span>{portfolio_details.date}</span>
                </p>
               
                
             
                  <button onClick={() => openLink(portfolio_details.website_link)} className="talk_btn"> Visit Website</button>
            
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="startup_detail open_mobile ">
        <Container>
          <Row>
          <Col lg={5}>
              <div className="startup_details start_up">
                <h5>Startup details</h5>
                <p>
                  <span>Country</span>
                  <span>{portfolio_details.country_name}</span>
                </p>
                <p>
                  <span>Founders</span>
                  <span>{portfolio_details.founders_name}</span>
                </p>
               
                <p>
                  <span>Industry</span>
                  <span>{portfolio_details.industry}</span>
                </p>
                <p className="mb-5">
                  <span>Date Founded</span>
                  <span>{portfolio_details.date}</span>
                </p>
               
                
                <button  onClick={() => openLink(portfolio_details.website_link)} className="talk_btn"> Visit Website</button>
              </div>
            </Col>
            <Col lg={2}></Col>
            <Col lg={5}>
              <div className="start_up">
              <h5>Startup Bio</h5>
              <h6 className="mb-3">{portfolio_details.startup_name}</h6>
                <p>{portfolio_details.bio}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="previous_startup">
        <Container>
          <Row>
            <Col>
              <div className="start">
                <p className="custom_arrow">
                  {portfolio_details.previous  && (
                    <Link
                      to={`/portfolio/${portfolio_details.previous_tag}/${portfolio_details.previous}`}
                    >
                      <img src={imageurl.prev} alt="" />
                      <span>Previous Startup</span>
                    </Link>
                  )}
                </p>

                <p className="custom_arrow">
                  {portfolio_details.next && (
                    <Link
                      to={`/portfolio/${portfolio_details.next_tag}/${portfolio_details.next}`}
                    >
                      <span>Next Startup</span>
                      <img className="ms-3" src={imageurl.next} alt="" />
                    </Link>
                  )}
                </p>
              </div>
            </Col>
          </Row>
          {/* <a
            href="https://mmfinfotech.co/convertx_app/storage/app/public/pdf/Infographics/Crypto%20App%20Template_Client's%20Copy.pdf"
            download
            target="_blank"
          >
            <button type="button" class="btn btn-success btn-lg btn-block">
              Download Resume
            </button>
          </a> */}
        </Container>
      </div>

      <Footer />
    </div>
  );
};
