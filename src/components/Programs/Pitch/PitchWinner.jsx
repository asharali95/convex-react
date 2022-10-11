import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from '../../common/images';
import {Link} from "react-router-dom"

export const PitchWinner = () => {
  return (
    <div>
      <div className=" pitch_win">

        <div className="cento">
          <Container>
            <Row>
              <Col><h5>Pitch Us, For A Chance To Win <span>$10,000 USD</span> Towards Your Startup Idea.</h5></Col>
            </Row>
            <Row>
              <Col>
                <div className="pitch_com">
                  <img src={imageurl.picthWin} alt="" />
                </div>
              </Col>
            </Row>
            <Row>
              <Col style={{ textAlign: "center" }}>
               <Link to="/applyforpitch"> <button className="talk_btn">
                  <span className="pe-2">Apply To Pitch</span>
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button></Link>
              </Col>
            </Row>
          </Container>
        </div>

      </div>
      <div className="pitch_intro">
          <Container>
            <Row>
              <Col>
                <p className='heart'>ConvrtX has always been and will be about providing entrepreneurs with an opportunity to launch their startup into the open waters. The ConvrtX pitch competition focuses on providing early idea stage startups a chance to think brighter and bolder.

                </p>
                <p className='heart'>Apply to pitch our panel for a chance to win USD $10,000 to help launch their start up idea into the stratosphere.</p></Col>
            </Row>
          </Container>
        </div>
    </div>
  )
}
