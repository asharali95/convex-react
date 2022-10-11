import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Footer } from "../Landingpage/Footer";
import { Icon } from "@iconify/react";
import { Header } from "../Landingpage/Header";
import { Link, useParams } from "react-router-dom";
import { Features } from "../Landingpage/Features";
import { getEvent } from "../../store/actions/eventAction";
import { RESET_EVENT_DETAIL } from "../../store/common/types";
import { useDispatch, useSelector } from "react-redux";
import { convertHTMLToString } from "../common/_helper";
import SiteLoader from "../SiteLoader/SiteLoader";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";
export const EventDetail = () => {
  const { id } = useParams();
  const { loading, event_details } = useSelector((state) => state.event);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEvent(id));
    return () => dispatch({ type: RESET_EVENT_DETAIL });
  }, [id, dispatch]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const openLink=(link) => {
    console.log(link)
    if (link.indexOf("http://") === 0 || link.indexOf("https://") === 0) {
      window.location.replace(link)
    }
    else{
      window.location.replace('http://'+link)
    }
   
  }
  return (
    <div>
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
                      event_details.image
                        ? event_details.image
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
      <div className="startup_detail open_desk ">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="start_up">
                <h5>{event_details.title}</h5>
                <p>{convertHTMLToString(event_details.description)}
                
                </p>
              </div>
            </Col>
        
            <Col lg={3}></Col>
        
            <Col lg={3}>
              <div className="startup_details start_up">
                <div className="mothrt_eve">
                  <h6>Date and Time</h6>
                  <span>{event_details.start_date}</span>
                  <span>{event_details.end_date}</span>
                </div>
                <div className="mothrt_eve">
                  <h6>Location</h6>
                  <span>{event_details.location}</span>
                </div>
                

            
                {/* <a target={"_blank"} href={event_details.map_link}> */}
                  <button onClick={() => openLink(event_details.map_link)} className="talk_btn">RSVP</button>
                 
                {/* </a> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="startup_detail open_mobile">
        <Container>
          <Row>
          <Col lg={5}>
              <div className="startup_details start_up">
                <div className="mothrt_eve">
                  <h6>Date and Time</h6>
                  <span>{event_details.start_date}</span>
                  <span>{event_details.end_date}</span>
                </div>
                <div className="mothrt_eve">
                  <h6>Location</h6>
                  <span>{event_details.country_name}</span>
                </div>
                

            
                
                  <button onClick={() => openLink(event_details.map_link)} className="talk_btn">RSVP</button>
              
              </div>
            </Col>
            <Col lg={2}></Col>
            <Col lg={5}>
              <div className="start_up">
                <h5>{event_details.title}</h5>
                <p>{event_details.description}</p>
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
                  {event_details.previous  && (
                    <Link
                      to={`/events/${event_details.previous}`}
                    >
                      <img src={imageurl.prev} alt="" />
                      <span>Previous Event</span>
                    </Link>
                  )}
                </p>

                <p className="custom_arrow">
                  {event_details.next  && (
                    <Link
                      to={`/events/${event_details.next}`}
                    >
                      <span>Next Event</span>
                      <img className="ms-2" src={imageurl.next} alt="" />
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
