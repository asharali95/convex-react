import React, { useRef, useEffect,useState } from "react";
import { Features } from "../../Landingpage/Features";
import { Footer } from "../../Landingpage/Footer";
import { Header } from "../../Landingpage/Header";
import { Link, useHistory } from "react-router-dom";
import { Icon } from "@iconify/react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import imageurl from "../../common/images";
import { connect } from "react-redux";
import { Formik, ErrorMessage, Field } from "formik";
import TextError from "../../common/TextError";
import { createPitchOffCompetitionValidation } from "../../common/validation";
import { createPitchOffCompetition } from "../../../store/actions/authAction";
import { INDUSTRIES, INDUSTRY_OTPION } from "../../common/constants";
import { MobileHeader } from "../../Landingpage/Mobile/MobileHeader";

const PitchForm = ({ submitting, createPitchOffCompetition }) => {
  const imageRef = useRef(null);
  const history = useHistory();
  const [image, setFieldValue] = useState(null);
  


  const onFileChange = (event, setFieldValue) => {
    const image = event.target.files[0];
    setFieldValue("image", image);
  };
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    createPitchOffCompetition(values, resetForm, history);
    setSubmitting(false);
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header />
      <MobileHeader />
      <div className="pitch_form portfolio contactus">
        <Container>
          <Row>
            <Col>
              <Link to="/pitchcompetition">
                <h5 style={{ color: "#000", textTransform: "uppercase" }}>
                  {" "}
                  <Icon
                    icon="bytesize:arrow-left"
                    style={{
                      fontSize: "18px",
                      color: "#e18427",
                      marginRight: "12px",
                    }}
                  />
                  <span>PITCH  APPLICATION</span>
                </h5>
              </Link>
            </Col>
          </Row>

          <Row>
            <Col className="mb-5">
              <div className="ser_vi mb-5">
                <h5 style={{ maxWidth: "100%", paddingLeft: "24px" }}>
                  <p className="d-inline mb-0"> Apply for </p>
                  <span>Pitch </span>
                  <p className="d-inline mb-0"> Competition </p>
                </h5>
              </div>
            </Col>
          </Row>
          <Row>
            <div className="pitch_apply contact">
              <div className="first_box">
                <h5>
                  Submit your details for<br />  <span>the Pitch</span> Competition!
                </h5>
              </div>
              <div className="second_box">
                <Formik
                  initialValues={{
                    first_name: "",
                    last_name: "",
                    email: "",
                    industry: "",
                    website: "",
                    phone_no: "",
                    summary: "",
                    image: "",
                  }}
                  validationSchema={createPitchOffCompetitionValidation}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit, setFieldValue }) => (
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>First Name *</Form.Label>

                            <Field
                              type="text"
                              placeholder="First Name"
                              className="form-control"
                              name="first_name"
                            />
                            <ErrorMessage
                              name="first_name"
                              component={TextError}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Last Name *</Form.Label>
                            <Field
                              type="text"
                              placeholder="Last Name"
                              className="form-control"
                              name="last_name"
                            />
                            <ErrorMessage
                              name="last_name"
                              component={TextError}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Phone *</Form.Label>
                            <Field
                              type="text"
                              placeholder="Phone"
                              className="form-control"
                              name="phone_no"
                            />
                            <ErrorMessage
                              name="phone_no"
                              component={TextError}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email * </Form.Label>

                            <Field
                              type="email"
                              placeholder="Email"
                              className="form-control"
                              name="email"
                            />
                            <ErrorMessage name="email" component={TextError} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Startup Category * </Form.Label>

                            <Field
                              placeholder="industry"
                              as="select"
                              name="industry"
                              className=" form-control up_input"
                            >
                              <option>Select Category</option>
                              {INDUSTRY_OTPION.length > 0 &&
                                INDUSTRY_OTPION.map((list, i) => (
                                  <option key={`list_${i}`} value={list}>
                                    {list}
                                  </option>
                                ))}
                            </Field>
                            <ErrorMessage
                              name="industry"
                              component={TextError}
                            />
                          </Form.Group>
                        </Col>
                        <Col lg={6}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Startup Website</Form.Label>
                            <Field
                              type="text"
                              placeholder="Web url"
                              className="form-control"
                              name="website"
                            />
                            <ErrorMessage
                              name="website"
                              component={TextError}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Startup Summary *</Form.Label>

                            <Field
                              type="text"
                              placeholder="Tell us breifly about your startup ..."
                              className="form-control"
                              name="summary"
                            />
                            <ErrorMessage
                              name="summary"
                              component={TextError}
                            />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <div className="mb-3">
                            <div
                              className="upload_pdf"
                              onClick={() => imageRef.current.click()}
                            >
                              <input
                                type="file"
                                hidden
                                ref={imageRef}
                                onChange={(e) => onFileChange(e, setFieldValue)}
                              />
                              <img
                                src={image ? image : imageurl.upload}
                                className={image && "upload__image"}
                                alt=""
                              />

                            </div>
                            <ErrorMessage name="image" component={TextError} />
                          </div>

                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <button
                            className="talk_btn d-block w-100"
                            disabled={submitting}
                          >
                            {submitting ? (
                              <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                              />
                            ) : (
                              <span className="pe-2">Proceed to Payment</span>
                            )}

                            <Icon icon="bi:arrow-right-circle" color="white" />
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>{" "}
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <Features />
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
    createPitchOffCompetition: (payload, resetForm, history) =>
      dispatch(createPitchOffCompetition(payload, resetForm, history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PitchForm);
