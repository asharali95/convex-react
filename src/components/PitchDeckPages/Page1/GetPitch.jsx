import React from 'react'
import {Container,Row,Col} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { HashLink as NavLink } from 'react-router-hash-link';
export const GetPitch = () => {
  return (
    <div className='business_pitch'>
        <Container>
          <div className="get_box">
          <Row>
                <Col>
                <h5>Get your Perfect <br/> <span>Business Plan</span></h5>
                <p>ConvrtX is a team of professional researchers, writers, designers, and  <br/> financial
analysts. Get the perfect pitch</p>
                </Col>
            </Row>
            <Row>
            <Col className="text-center"> <Link className="open_talk" to="/ContactUs">
            <NavLink  className="open_talk" smooth to="#startaproject1">
                   <button className="talk_btn ">
                      <span className="pe-2">Start a Project</span>
                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                   </NavLink>
              </Link></Col>
          </Row>
          </div>
        </Container>
    </div>
  )
}
