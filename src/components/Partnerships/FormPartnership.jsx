import React from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Formik, ErrorMessage, Field } from "formik";
import TextError from "../common/TextError";
import { createPartnerLeadValidation } from "../common/validation";
import { useHistory } from "react-router-dom";

export const FormPartnership = ({ submitting, createPartnerLead }) => {
  const history = useHistory()
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    createPartnerLead(values, resetForm,history);
    setSubmitting(false);
  };
  return (
    <div className="partnership_open contactus">
      <Container>
        <Formik
          initialValues={{
            full_name: "",
            company_name: "",
            email: "",
            info: "",
            phone_no: "",
          }}
          validationSchema={createPartnerLeadValidation}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form className="contact" onSubmit={handleSubmit}>
              <Row>
                <Col className="" style={{ textAlign: "center",marginBottom:"36px"  }}>
                  <h5 style={{ fontSize: "60px", fontWeight: "600",marginBottom:"14px" }}>
                    <span>Become A </span>
                    <p style={{ color: "#E18427" }} className="mb-0 d-inline">
                      {" "}
                      Partner
                    </p>
                  </h5>
                  <p>Fill out the form below.</p>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Company Name</Form.Label>

                    <Field
                      type="text"
                      placeholder="Company name"
                      className="form-control"
                      name="company_name"
                    />
                    <ErrorMessage name="company_name" component={TextError} />
                  </Form.Group>
                </Col>
                <Col lg={6}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>

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
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>

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
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>

                    <Field
                      type="text"
                      placeholder="Your Phone Number"
                      className="form-control"
                      name="phone_no"
                    />
                    <ErrorMessage name="phone_no" component={TextError} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col lg={12} className="mb-4">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>More Information</Form.Label>

                    <Field
                      type="text"
                      as="textarea"
                      rows={1}
                      placeholder="Write any message here ..."
                      className="form-control"
                      name="info"
                    />
                    <ErrorMessage name="info" component={TextError} />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col style={{ textAlign: "center" }}>
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
                </Col>
              </Row>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};
