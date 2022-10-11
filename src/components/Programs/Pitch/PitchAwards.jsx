import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import { Icon } from "@iconify/react";
import imageurl from '../../common/images';
import { Link } from 'react-router-dom';


export const PitchAwards = () => {
  return (
    <div className="pitch_awards">
      <Container>
        <Row>
          <Col lg={12} >
          <div >
          <div className="ser_vi mb-3">
             
             <h5 style={{maxWidth:"100%",textAlign:"center"}}>
              
             <p className='mb-0 d-inline'> Pitch Competition </p>
             <span style={{color:"#E18427"}}> Awards</span>

             </h5>
            
           </div>
          </div>
          </Col>
         <Container>
         <div className="pitch_medals">
        
        <Row>
          <Col lg={4}>
            <div className="pitch_place">
              <img src={imageurl.diamond} alt="" />
              <h6>1st Place</h6>
              <p>$1000 in cash</p>
              <p> $3,500 in credits towards<br/> ConvrtX services</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="pitch_place second_places">
              <img src={imageurl.gold} alt="" />
              <h6>2st Place</h6>
              <p>$500 in cash</p>
              <p> $2,750 in credits towards <br/> ConvrtX services</p>
            </div>
          </Col>
          <Col lg={4}>
            <div className="pitch_place">
              <img src={imageurl.medal} alt="" />
              <h6>3st Place</h6>
              <p>$250 in cash</p>
              <p> $2,000 in credits towards <br/> ConvrtX services</p>
            </div>
          </Col>
        </Row>
        <Row>
          <Col style={{textAlign:"center"}}>
          <Link to="/applyforpitch"> <button className="talk_btn">
                    <span className="pe-2">Apply To Pitch</span>
                    <Icon icon="bi:arrow-right-circle" color="white" />
                  </button></Link></Col>
        </Row>
      
    </div>
         </Container>
        </Row>
      </Container>
      
    </div>
  )
}
