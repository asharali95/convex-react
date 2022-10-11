import React from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from "../common/images";
import { Link } from "react-router-dom";
import { Formik, ErrorMessage, Field } from "formik";
import { newsletterValidation } from "../common/validation";
import TextError from "../common/TextError";
import { useSelector, useDispatch } from "react-redux";
import { addNewsLatter } from "../../store/actions/authAction";
import { HashLink as NavLink } from 'react-router-hash-link';
import ReactGA from "react-ga4"
export const Footer = () => {
  const { submitting } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(addNewsLatter(values, resetForm));
    setSubmitting(false);
  };
  return (
    <div className="footer">
      <div className="letter_box">
        <Container>
          <Row>
            <Col lg={6}>
              <h5>Join our Newsletter</h5>
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={newsletterValidation}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Group
                      className="mb-3 form-group"
                      controlId="formBasicEmail"
                    >
                      <Field
                        type="text"
                        name="email"
                        placeholder="Enter Email..."
                      />
                      {submitting ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        <Icon
                          icon="bi:arrow-right"
                          color="white"
                          onClick={handleSubmit}
                        />
                      )}
                    </Form.Group>
                    <ErrorMessage name="email" component={TextError} />
                  </Form>
                )}
              </Formik>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="letter_box foot">
        <Container>
          <Row>
            <Col lg={5} md={6} className="mb-5">
              <div className="go_box">
                <span>Email</span>
              
                <a href={"mailto:hello@convrtx.com" }> <h5>hello@convrtx.com</h5> </a> 
              </div>

              <div className="go_box"  onClick={()=>{
                ReactGA.event({
                  category: "Contact",
                  action: "click-to-call",
                  label: "phonecall", // optional
                });
              }}>
                <span>Phone</span>
                <a href="tel:+18889797510"><h5>+1 (888) 979-7510</h5> </a> 
              </div>

              <div className="social_icon">
                <a
                  className="social_rid"
                  rel="noopener"
                  href="https://www.facebook.com/ConvrtX/"
                  target="_blank"
                >
                  <Icon icon="fa:facebook" />
                </a>
                <a
                  className="social_rid"
                  rel="noopener"
                  href="https://twitter.com/convrtx_com"
                  target="_blank"
                >
                  <Icon icon="akar-icons:twitter-fill" />
                </a>
                <a
                  className="social_rid"
                  rel="noopener"
                  href="https://www.instagram.com/convrtx/"
                  target="_blank"
                >
                  <Icon icon="ant-design:instagram-filled" />
                </a>
                <a
                  className="social_rid"
                  rel="noopener"
                  href="https://ca.linkedin.com/company/convrtx"
                  target="_blank"
                >
                  <Icon icon="akar-icons:linkedin-box-fill" />
                </a>
                <a
                  className="social_rid"
                  rel="noopener"
                  href="https://www.youtube.com/channel/UCieU04hOtjoDblOCXPMeMnQ"
                  target="_blank"
                >
                  <Icon icon="akar-icons:youtube-fill" />
                </a>
              </div>
            </Col>
            <Col lg={7} className="mb-5">
              <Row>
                <Col lg={4} md={6} sm={6} xs={12}>
                  <ul className="quiclink">
                    <h4>Home</h4>
                    <li>
                      <Link to="/startaproject">Start A Project</Link>
                    </li>
                    <li>
                      <Link to="/partnerships">Partnerships</Link>
                    </li>
                    <li>
                      <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="mb-0">
                      <a href="http://www.openadvisor.app/" target="_blank">OpenAdvisor</a>
                    </li>
                  </ul>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                  <ul className="quiclink">
                    <h4>Services</h4>
                    <li>
                      <Link to="/services/strategy_advisory">Strategy & Advisory</Link>
                    </li>
                    <li>
                      <Link to="/services/raising_capital">Raising Capital</Link>
                    </li>
                    <li>
                      <Link to="/services/product_development">
                        Product Development
                      </Link>
                    </li>
                    <li className="mb-0">
                      <Link to="/services/Launch_Strategy">Launch Strategy</Link>
                    </li>
                  </ul>
                </Col>
                <Col lg={4} md={6} sm={6} xs={12}>
                  <ul className="quiclink">
                    <h4>Resources</h4>
                    <li>
                      <Link to="/blog">Blog</Link>
                    </li>
                    <li>
                      <Link to="/programs">Programs</Link>
                    </li>
                    <li>
                      <Link to="/events">Events</Link>
                    </li>
                    <li className="mb-0">
                      <Link to="/pitchcompetition">Pitch Competition</Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div className="copy_right">
          <Container>
            <div className="op_copy">
              <div className="logo_box">
                <NavLink smooth to="#top">
                <img src={imageurl.footlogo} alt="" />
                </NavLink>
              </div>

              <div className="copy_box">
                <span>© Copyright 2022 ConvrtX. All Rights Reserved.</span>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};
