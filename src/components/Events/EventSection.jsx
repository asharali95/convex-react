import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { EventCarousal } from "./EventCarousal";
import "react-multi-carousel/lib/styles.css";


export const EventSection = ({ events }) => {
  return (
   
    <div className="blogshome eventlist">
      <Container>
        <Row>
          <Col lg={12}>
            <h5 className="blog common_bolo">Events</h5>
          
          </Col>
          
        </Row>
        <Row>
          <Col>
            <EventCarousal events={events} />
          </Col>
        </Row>
      </Container>
    </div>
    
  );
};
