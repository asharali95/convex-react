import React from "react";
import { Footer } from "../../Landingpage/Footer";
import { Header } from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";
import { Features } from "../../Landingpage/Features";

import { PitchStartups } from "./PitchStartups";

import { Review } from "./Review";
import { DownloadPdf } from "../Page1/DownloadPdf";
import { connect } from "react-redux";
import { createPitchDuck } from "../../../store/actions/authAction";
import { withRouter } from "react-router-dom";
import { PitchForm } from "./PitchForm";
import { Greenbox } from "./Greenbox";
import { MobileHeader } from "./MobileHeader";
import { HashLink as NavLink } from 'react-router-hash-link';

const PitchDeskDesign = ({ createPitchDuck, submitting, history }) => {
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <div  className="hero_banner business_merge design_pitch">
        <Container>
          <Row>
            <Col lg={6}>
              <div className="ser_vi ">
                <div className="mb-5">
                  <h5>
                    <p className=" mb-0 d-inline">The Worldwide Leader in</p>
                    <span> Pitch Deck  Design </span>
                  </h5>
                  <p className="title-para mb-4">
                    ConvrtX is the global leader in Business Plan & Pitch Deck
                    creation. Over 10,000 Business Plans & Pitch Decks Created
                    To-date. $4+ Billion in capital raised and counting.
                  </p>
                  <div className="deck_btns">
                  <NavLink  smooth to="#startaproject">
                   <button className="talk_btn">
                      <span className="pe-2">Start a Project</span>
                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                   </NavLink>
                    <NavLink smooth to="#samples">
                    <button className="talk_btn deck_btn ms-3">
                      <span className="pe-2">Our Work</span>
                      <Icon icon="bi:arrow-right-circle" color="#000" />
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={6}>
              <div className="business_img pitch_design">
                <img src={imageurl.picthdesign} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <PitchForm
        createPitchDuck={createPitchDuck}
        submitting={submitting}
        history={history}
      />
      <Greenbox />
      <Features />
      <div className="review_grey" id="reviews">
        <Review />
      </div>
      <div className="now_whte">
        <PitchStartups />
      </div>

      <DownloadPdf id="samples" />

      <Footer />
    </div>
  );
};
const mapStateToProps = ({ form }) => {
  return {
    submitting: form.submitting,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createPitchDuck: (payload, resetForm, history) =>
      dispatch(createPitchDuck(payload, resetForm, history)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(PitchDeskDesign));
