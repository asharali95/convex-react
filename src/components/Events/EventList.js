import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Link } from "react-router-dom";
import { getEvents } from "../../store/actions/eventAction";
import { connect } from "react-redux";
import SiteLoader from "../../components/SiteLoader/SiteLoader";
import { convertHTMLToString } from "../common/_helper";
const EventList = ({ loading, events, getEvents }) => {
  useEffect(() => {
    getEvents({
      search: "",
    });
  }, [getEvents]);
  
  return (
    <div className="portfolio">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="ser_vi mb-5">
              <tag>OUR EVENTS</tag>
              <h5>
                <p className="mb-0">It's time to join our community</p>
              </h5>
              <p style={{ opacity: "0.5" }}>
              Every month we host both in-person and digital events to support founders across the world.
              </p>
            </div>
          </Col>
        </Row>
        {loading ? <SiteLoader /> : null}
        <Row>
          <Col lg={8}>
            <div className="blog_open">
              <h5 className="blog-title">Latest Events</h5>
              {events &&
                events.length > 0 &&
                events.map((event) => (
                  <Link to={`/events/${event.slug}`} key={event.id}>
                    <div className="red_blog">
                      <img
                        src={event.image ? event.image : imageurl.advise}
                        alt=""
                      />
                      <div className="blog_red_details">
                        <h5>{event.title}</h5>
                        <div className="now_para">
                        <p>{convertHTMLToString(event.description)}</p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
const mapStateToProps = ({ event: { loading, events } }) => {
  return {
    loading,
    events,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getEvents: (payload) => dispatch(getEvents(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EventList);
