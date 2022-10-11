import React from "react";
import { Container, Row, Col, Form, Spinner } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { Formik, ErrorMessage, Field } from "formik";
import TextError from "../../common/TextError";
import { createPitchDuckValidation } from "../../common/validation";

export const FormBusiness = ({ submitting, createPitchDuck, history }) => {
  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    createPitchDuck(values, resetForm, history);
    setSubmitting(false);
  };
  return (
    <div className="partnership_open get_open contactus" id="startaproject">
      <Container>
        <Formik
          initialValues={{
            full_name: "",
            company_name: "",
            email: "",
            phone_no: "",
          }}
          validationSchema={createPitchDuckValidation}
          onSubmit={handleSubmit}
        >
          {({ handleSubmit }) => (
            <Form className="contact" onSubmit={handleSubmit}>
              <Row>
                <Col className="mb-4" style={{ textAlign: "center" }}>
                  <h5
                    className="mb-4"
                    style={{ fontSize: "60px", fontWeight: "600" }}
                  >
                    <span> Need a </span>
                    <p style={{ color: "#E18427" }} className="mb-0 d-inline">
                      {" "}
                      Pitch Deck  
                    </p>
                 <p className="mb-0 d-inline">   or</p>
                    <p style={{ color: "#E18427" }} className="mb-0 d-block">
                      {" "}
                      Business Plan?
                    </p>
                  </h5>
                  <p>Fill out the form below.</p>
                </Col>
              </Row>
              <Row>
                
                 
                <Col lg={12}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
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
              <Row className="mb-5">
                <Col lg={6}>
                  <Form.Group className="mb-4" controlId="formBasicEmail">
                    <Form.Label>Email </Form.Label>

                    <Field
                      type="email"
                      placeholder="Enter email"
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
                      placeholder="Your Phone Number"
                      className="form-control"
                      name="phone_no"
                    />
                    <ErrorMessage name="phone_no" component={TextError} />
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
                      <span className="pe-2">Start a Project</span>
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
