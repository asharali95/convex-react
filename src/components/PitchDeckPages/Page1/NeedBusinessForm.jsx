import React from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Formik, ErrorMessage, Field } from "formik";
import TextError from "../../common/TextError";
import { createPitchDuckValidation } from "../../common/validation";


export const NeedBusinessForm = ({ submitting, createPitchDuck, history }) => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    createPitchDuck(values, resetForm, history);
    setSubmitting(false);
  };
  return (
    <div className="partnership_open pitch_startups  after_busi need_business contactus " id="startaproject1">
      <Container>
        <div className="bookacall">
          <Row>
            <Col lg={6}>
              <div className="ser_vi start_op mb-5">
                <div>
                  <div className="mb-5">
                    <div className="serv ps-0 serv2">
                      <div className="ser_vi bookacal">
                        <h5>
                          Need a <br/>{" "}
                          <span> Business Plan?</span>
                        </h5>

                        <p>
                          Fill out the form and get more information as to how
                          we can support your startup.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={2}>
            </Col>
            <Col lg={4}>
              <div className="form_need">
                <Formik
                  initialValues={{
                    full_name: "",
                    // company_name: "",
                    email: "",
                    phone_no: "",
                  }}
                  validationSchema={createPitchDuckValidation}
                  onSubmit={handleSubmit}
                >
                  {({ handleSubmit }) => (
                    <Form className="contact" onSubmit={handleSubmit}>
                      <Row>
                        
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
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
                        <Col lg={12}>
                          <Form.Group
                            className="mb-3"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Email </Form.Label>

                            <Field
                              type="email"
                              placeholder="Enter Email"
                              className="form-control"
                              name="email"
                            />
                            <ErrorMessage name="email" component={TextError} />
                          </Form.Group>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg={12}>
                          <Form.Group
                            className="mb-4"
                            controlId="formBasicEmail"
                          >
                            <Form.Label>Phone Number</Form.Label>

                            <Field
                              type="text"
                              placeholder="Enter Phone Number"
                              className="form-control"
                              name="phone_no"
                            />
                            <ErrorMessage
                              name="phone_no"
                              component={TextError}
                            />
                          </Form.Group>
                        </Col>
                      </Row>

                      <Row>
                        <Col style={{ textAlign: "center" }}>
                          <button
                            type="submit"
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
                              <span className="pe-2">Submit</span>
                            )}

                            <Icon icon="bi:arrow-right-circle" color="white" />
                          </button>
                        </Col>
                      </Row>
                    </Form>
                  )}
                </Formik>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};
