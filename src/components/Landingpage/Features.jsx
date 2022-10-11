import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
export const Features = () => {
  return (
    <div className="features">
      <Container>
        <Row >
          <Col>
            <h5 className="blog_feat">
              <span>Featured </span>
              <img src={imageurl.featuredlogo} alt="" />
            </h5>
          </Col>
        </Row>
        <Row style={{display:"flex",justifyContent:"center"}}>
        <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.forbes} alt="" />
            </div>
          </Col>
        <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.yahoo} alt="" />
            </div>
          </Col>
         
          <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.crunchbase} alt="" />
            </div>
          </Col>
          <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.newyork} alt="" />
            </div>
          </Col>
          <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.times} alt="" />
            </div>
          </Col>
          <Col lg={2} md={6} sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.business} alt="" />
            </div>
          </Col>
          <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.disprut} alt="" />
            </div>
          </Col>
          <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.jp} alt="" />
            </div>
          </Col>
          <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.gulf} alt="" />
            </div>
          </Col>
          <Col lg={2} md={6}  sm={6} xs={6}>
            <div className="brand_box">
              <img src={imageurl.influencive} alt="" />
            </div>
          </Col>
         
      
          
        
        </Row>
      </Container>
    </div>
    
  );
};
