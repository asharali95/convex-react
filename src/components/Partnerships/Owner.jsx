import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import { Icon } from '@iconify/react';
import imageurl from '../common/images';
export const Owner = () => {
  return (
    <div className='owner_part portfolio'>
        <Container>
            <Row className='mb-5'>
                <Col lg={12}> <h5 style={{fontSize:"60px",fontWeight:"600"}}>
                <span style={{color:"#E18427"}}>ConvrtX </span>
                <p style={{fontSize:"60px"}} className="mb-0 d-inline"> Vision</p>
              </h5></Col>
            </Row>
            <Row>
                <Col lg={6}>
                    <div className="josh_imf">
                        <img src={imageurl.josh} alt="" />
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="open_done" style={{display:"flex",alignItems:"center",height:"100%"}}>
                    <div>
                    <Icon style={{fontSize:"50px",color:"#E18427"}} icon="bi:quote" />
                    <p>We Empower Entrepreneurs to think bolder, greater and then actualize that thinking.</p>
                    <div className="own_name">
                        <h6>Josh Adler</h6>
                        <span>CEO CovertX</span>

                    </div>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
