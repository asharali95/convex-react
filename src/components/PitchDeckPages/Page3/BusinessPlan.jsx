import React from "react";
import { Footer } from "../../Landingpage/Footer";
import { Header2 } from "./Header2";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";
import { Features } from "../../Landingpage/Features";

import { PitchStartups } from "../Page1/PitchStartups";
import { BusinessTypes } from "./BusinessTypes";
import { StepsBusiness } from "../Page1/StepsBusiness";
import { Review } from "../Page1/Review"
import { DownloadPdf } from "./DownloadPdf";
import { GetPitch } from "../Page1/GetPitch";
import { NeedBusinessForm } from "../Page1/NeedBusinessForm";
import { Fundarise } from "./Fundarise";
import { StartupsTrust } from "./StartupsTrust";
import { RaiseMillion } from "./RaiseMillion";
import { CustomBusiness } from "./CustomBusiness";
import { connect } from "react-redux";
import { createPitchDuck } from "../../../store/actions/authAction";
import { withRouter } from "react-router-dom";
import { OurPackages } from "../Page1/OurPackages";

import { HashLink as NavLink } from 'react-router-hash-link';
import { MobileHeader2 } from "./MobileHeader2";

const BusinessPlan = ({ createPitchDuck, submitting, history }) => {
  return (
    <div id="top">
      <Header2 />
      <MobileHeader2/>
      <div className="hero_banner business_merge business_packages" >
        <Container>
          <Row>
            <Col lg={12}>
              <div className="ser_vi " style={{ justifyContent: "center" }}>
                <div className="mb-5">
                  <h5>
                    <p className=" mb-0 d-inline">
                      Raise money faster with <br />
                      Professional
                    </p>
                    <span> business plans </span>
                  </h5>
                  <p className="title-para ">
                    ConvrtX is a team of professional researchers, writers,
                    designers, and financial analysts. Get <br />
                    the perfect pitch deck to scale your company.
                  </p>
                  <div className="deck_btns">
                  <NavLink  smooth to="#startaproject1">
                   <button className="talk_btn">
                      <span className="pe-2">Start a Project</span>
                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                   </NavLink>
                    <NavLink smooth to="#samples">
                    <button className="talk_btn  openwork ms-3">
                      <span className="pe-2">Our Work</span>
                      <Icon icon="bi:arrow-right-circle" color="#fff" />
                    </button>
                    </NavLink>
                 
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <BusinessTypes />

      <Features />
      <Fundarise />
      <StepsBusiness />
      <DownloadPdf />
      <StartupsTrust />
      <OurPackages />
      <CustomBusiness />
      <RaiseMillion />

      <div className="review_grey" id="review">
        <Review />
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
)(withRouter(BusinessPlan));
