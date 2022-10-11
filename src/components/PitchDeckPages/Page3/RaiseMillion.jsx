import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";
import { HashLink as NavLink } from 'react-router-hash-link';

export const RaiseMillion = () => {
  return (
    <div className="fundarise trust million">
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="fundarise_details">
              <h5>
              See How We've Helped Startups <br />
                 <span> Raise Millions</span>
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          
          <Row>
          <Col >
         <div className="billions_fund">
         <div className="mobin">
            <img src={imageurl.imagebusiness} alt="" />
            <div className="detail_nox">
              <h4>CryptoApp</h4>
              <p><span>Company :</span> <span>CryptoApp</span></p>
              <p><span>Type :</span> <span>Series A</span></p>
              <p><span>Industry :</span> <span>SaaS</span></p>
              <NavLink  className="open_talk" smooth to="#startaproject1">
                   <button className="talk_btn ">
                      <span className="pe-2">Start a Project</span>
                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                   </NavLink>
            </div>
          </div>
         </div>
          
          </Col>
        </Row>
        </Row>
      </Container>
    </div>
  );
};
