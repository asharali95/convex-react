import React from 'react'
import { Container, Row, Col, } from "react-bootstrap";
import imageurl from '../common/images';
import { Icon } from "@iconify/react";
import { Link } from 'react-router-dom';
export const Review = () => {
  return (
    <div className='Review'>
      <Container>
        <Row><Col className='text-center'><h5 style={{ fontSize: "60px", fontWeight: "600" }}>
          <span >See what our </span>
          <p style={{ color: "#E18427" }} className="mb-0 d-inline"> Founders</p> <span>are saying!</span>
        </h5></Col></Row>
        <Row>
          <Col lg={4}  md={6} sm={12}>
            <div className="open_talk">
              <div className='pb-4 brand_log'>  
              <img src={imageurl.staybusy} alt="" />
              </div>
              <div className="follow_box">
                <div className="first_box">
                  <img src={imageurl.user} alt="" />
                  <div className="user_name">
                    <h5>Carter Olive</h5>
                    <p>Founder Of StayBusy</p>
                  </div>
                </div>
               

              </div>
              <p className='para'>“I am blown away by how dedicated ConvrtX was to supporting a founder's vision. The lessons I've learned along the way are beyond valuable.”</p>
            </div>
          </Col>
          <Col lg={4}  md={6} sm={12}>
            <div className="open_talk">
              <div className='pb-4 brand_log'>  
              <img src={imageurl.zoom} alt="" />
              </div>
              <div className="follow_box">
                <div className="first_box">
                  <img src={imageurl.tobusyowner} alt="" />
                  <div className="user_name">
                    <h5>Ayesha Imran</h5>
                    <p>founder Of 2Meeters</p>
                  </div>
                </div>
               

              </div>
              <p className='para'>“ConvrtX has helped us go from vision, to launch and supported with everything in between. They are really quite holisitc, in what they do!”</p>
            </div>
          </Col>
          <Col lg={4} md={6} sm={12}>
            <div className="open_talk">
              <div className='pb-4 brand_log'>  
              <img src={imageurl.sap} alt="" />
              </div>
              <div className="follow_box">
                <div className="first_box">
                  <img src={imageurl.zoomowner} alt="" />
                  <div className="user_name">
                    <h5>Michael McNair</h5>
                    <p>Founder Of SpotSwap</p>
                  </div>
                </div>
               

              </div>
              <p className='para'>"Being new to startup world, mean’t I had a lot to learn. But ConvrtX not only positioned me corretly for investors but taught me how to raise funds too!"</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:"center"}} > <Link  to="/startaproject">
                <button className="talk_btn">
                  <span>Start a Project</span>{" "}
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
              </Link></Col>
        </Row>
      </Container>
    </div>
  )
}
