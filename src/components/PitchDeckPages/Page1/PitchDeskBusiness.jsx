import React from "react";
import { Footer } from "../../../components/Landingpage/Footer";
import { Header } from "./Header";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../../components/common/images";
import { Icon } from "@iconify/react";
import { Features } from "../../Landingpage/Features";
import { FormBusiness } from "./FormBusiness";
import { PitchStartups } from "./PitchStartups";
import { BusinessTypes } from "./BusinessTypes";
import { StepsBusiness } from "./StepsBusiness";
import { Review } from "./Review";
import { DownloadPdf } from "./DownloadPdf";
import { GetPitch } from "./GetPitch";
import { NeedBusinessForm } from "./NeedBusinessForm";
import { OurPackages } from "./OurPackages";
import { connect } from "react-redux";
import { createPitchDuck } from "../../../store/actions/authAction";
import { withRouter } from "react-router-dom";
import { MobileHeader } from "./MobileHeader";
import { HashLink as NavLink } from 'react-router-hash-link';

const PitchDeskBusiness = ({ createPitchDuck, submitting, history }) => {
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <div className="hero_banner business_merge" >
        <Container>
          <Row>
            <Col lg={6}>
              <div className="ser_vi ">
                <div className="mb-5">
                  <h5>
                    <p className=" mb-0 d-inline">The Worldwide Leader in</p>
                    <span> Pitch Deck & Business Plan Creation </span>
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
              <div className="business_img">
                <img src={imageurl.businesssvg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <FormBusiness
        createPitchDuck={createPitchDuck}
        submitting={submitting}
        history={history}
      />
      <Features />

      <PitchStartups />
      <BusinessTypes />
      <StepsBusiness />
      <DownloadPdf />
      <OurPackages />
      <div className="review_grey" id="review">
       <Review/>
      </div>
      <GetPitch />
      <NeedBusinessForm
        createPitchDuck={createPitchDuck}
        submitting={submitting}
        history={history}
      />
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
)(withRouter(PitchDeskBusiness));
