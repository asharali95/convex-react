import React from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { connect } from "react-redux";
import { sendContact } from "../../store/actions/authAction";
import { Formik, ErrorMessage, Field } from "formik";
import TextError from "../common/TextError";
import { contactValidation } from "../common/validation";
import { useHistory } from "react-router-dom";

const ContactForm = ({ sendContact, submitting }) => {
  const history = useHistory()
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    sendContact(values, resetForm,history);
    setSubmitting(false);
  };
  return (
    <div className="portfolio contactus">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="ser_vi mb-5">
              <small className="contact_after">START A PROJECT</small>
              <h5>
                <span>Ready </span>
                <p className="d-inline mb-0"> to share your vision with us?</p>
              </h5>
            </div>
          </Col>
        </Row>
        {/* <div className="open_desk"> */}
          <Row>
            <Col lg={7}>
              <Formik
                initialValues={{
                  email: "",
                  full_name: "",
                  message: "",
                  phone: "",
                }}
                validationSchema={contactValidation}
                onSubmit={handleSubmit}
              >
                {({ handleSubmit }) => (
                  <Form className="contact" onSubmit={handleSubmit}>
                    <Row>
                      <Col>
                        {" "}
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label>Your Name</Form.Label>
                          <Field
                            type="text"
                            placeholder="Enter Name"
                            className="form-control"
                            name="full_name"
                          />
                          <ErrorMessage
                            name="full_name"
                            component={TextError}
                          />
                        </Form.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg={6}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>

                          <Field
                            type="email"
                            placeholder="Enter Email"
                            className="form-control"
                            name="email"
                          />
                          <ErrorMessage name="email" component={TextError} />
                        </Form.Group>
                      </Col>
                      <Col lg={6}>
                        <Form.Group className="mb-4" controlId="formBasicEmail">
                          <Form.Label>Phone Number</Form.Label>

                          <Field
                            type="text"
                            placeholder="Enter Phone Number"
                            className="form-control"
                            name="phone"
                          />
                          <ErrorMessage name="phone" component={TextError} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col>
                        {" "}
                        <Form.Group
                          className="mb-4"
                          controlId="exampleForm.ControlTextarea1"
                        >
                          <Form.Label>More Information</Form.Label>

                          <Field
                            type="text"
                            as="textarea"
                            rows={1}
                            placeholder="Please Provide More Information"
                            className="form-control"
                            name="message"
                          />
                          <ErrorMessage name="message" component={TextError} />
                        </Form.Group>
                      </Col>
                    </Row>
                    <button
                      type="submit"
                      className="talk_btn"
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
                        <span className="pe-2">We Don't Bite</span>
                      )}

                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                  </Form>
                )}
              </Formik>
            </Col>
            <Col lg={5}>
              <div className="addres_box">
                <div>
                  <h5>Address</h5>
                  <p>
                    {" "}
                  
                    <span>🇨🇦 Born on Bay St, Toronto - Canada. </span>
                  </p>
                  <p>🇦🇪 Headquartered in Index Tower, DIFC, Dubai - UAE</p>
                </div>
              </div>
              <div className="addres_box">
                <div>
                  <h5>Contact</h5>
                  <p> hello@Convrtx.com</p>
                  <p>+1 (888) 979-7510 (Toll-Free)</p>
                </div>
              </div>
            </Col>
          </Row>
       
        {/* <Row className="open_mobile">
          <Col lg={5}>
            <div className="addres_box">
              <div>
                <h5>Address</h5>
                <p>
                    {" "}
                  
                    <span>🇨🇦 Born on Bay St, Toronto - Canada. </span>
                  </p>
                  <p>🇦🇪 Headquartered in Index Tower, DIFC, Dubai - UAE</p>
              </div>
            </div>
            <div className="addres_box">
              <div>
                <h5>Contact</h5>
                <p> hello@Convrtx.com</p>
                <p>+1 (888) 979-7510 (Toll-Free)</p>
              </div>
            </div>
          </Col>
          <Col lg={7}>
            <Formik
              initialValues={{
                email: "",
                full_name: "",
                message: "",
                phone: "",
              }}
              validationSchema={contactValidation}
              onSubmit={handleSubmit}
            >
              {({ handleSubmit }) => (
                <Form className="contact" onSubmit={handleSubmit}>
                  <Row>
                    <Col>
                      {" "}
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Name</Form.Label>
                        <Field
                          type="text"
                          placeholder="Your name"
                          className="form-control"
                          name="full_name"
                        />
                        <ErrorMessage name="full_name" component={TextError} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col lg={6}>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>

                        <Field
                          type="email"
                          placeholder="Your email"
                          className="form-control"
                          name="email"
                        />
                        <ErrorMessage name="email" component={TextError} />
                      </Form.Group>
                    </Col>
                    <Col lg={6}>
                      <Form.Group className="mb-4" controlId="formBasicEmail">
                        <Form.Label>Phone</Form.Label>

                        <Field
                          type="text"
                          placeholder="Your Phone Number"
                          className="form-control"
                          name="phone"
                        />
                        <ErrorMessage name="phone" component={TextError} />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      {" "}
                      <Form.Group
                        className="mb-4"
                        controlId="exampleForm.ControlTextarea1"
                      >
                        <Form.Label>More Information</Form.Label>

                        <Field
                          type="text"
                          as="textarea"
                          rows={3}
                          placeholder="Write any message here"
                          className="form-control"
                          name="message"
                        />
                        <ErrorMessage name="message" component={TextError} />
                      </Form.Group>
                    </Col>
                  </Row>
                  <button
                    type="submit"
                    className="talk_btn"
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
                      <span className="pe-2">Submit</span>
                    )}

                    <Icon icon="bi:arrow-right-circle" color="white" />
                  </button>
                </Form>
              )}
            </Formik>
          </Col>
        </Row> */}
      </Container>
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
    sendContact: (payload, resetForm,history) =>
      dispatch(sendContact(payload, resetForm,history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
