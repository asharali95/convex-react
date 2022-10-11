import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";

import { Icon } from "@iconify/react";
export const AdvisorCommunity = () => {
  return (
    <div className="advisorcommunity">
      <Container>
        <Row>
          <Col>
            <h5 className="advise_track">Advisor Community</h5>
          </Col>
        </Row>

        <Row>
          <Col>
            <div className="adivise_box">
              <div className="first_box">
                <img src={imageurl.advisor1} alt="" />
              </div>
              <div className="detail_box">
                <div className="star_name">
                  <div className="nme">
                    <h5>Esin Nilsen</h5>
                    <span>Data Scientist - Gridcognition</span>
                  </div>
                  <div className="rationg_box">
                    <Icon icon="bxs:star" color="#ffc107" />
                    <span>4.9</span>
                  </div>
                </div>
               <div className="descrip">
               <p>
               Hi, I am Data Scientist for digital Platforms at Gridcognition and also an instructor at Product hunting platform with almost 3 years of experience... 
               <a href="http://www.openadvisor.app/" target="_blank"><span></span></a>
                </p>
                
               </div>
                <div className="tags_stle">
                <span>Python</span>
                    <span>Data Science</span>
                    <span>Data Protection</span>
                    <span>Privacy Advisor</span>
                    <span>Data Intelligence</span>
                    
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="adivise_box">
              <div className="first_box">
                <img src={imageurl.advisor2} alt="" />
              </div>
              <div className="detail_box">
                <div className="star_name">
                  <div className="nme">
                    <h5>Tim Clark</h5>
                    <span>Product Marketing - Dropbox</span>
                  </div>
                  <div className="rationg_box">
                    <Icon icon="bxs:star" color="#ffc107" />
                    <span>4.7</span>
                  </div>
                </div>
               <div className="descrip">
               <p>
               Currently, product marketing at Dropbox, and also an angel investor actively involved in developing innovative marketing and communication p...
               <a href="http://www.openadvisor.app/" target="_blank"><span></span></a>
                </p>
                
               </div>
                <div className="tags_stle">
                    <span>Marketing</span>
                    <span>Communications</span>
                    <span>Media Studies</span>
                    <span>Related Support Services</span>
                    <span>Partnerships</span>
                    
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="adivise_box border-bottom-0">
              <div className="first_box">
                <img src={imageurl.advisor3} alt="" />
              </div>
              <div className="detail_box">
                <div className="star_name">
                  <div className="nme">
                    <h5>George Kristiansen</h5>
                    <span>Procurement & Materials Management - HD Supply</span>
                  </div>
                  <div className="rationg_box">
                    <Icon icon="bxs:star" color="#ffc107" />
                    <span>4.9</span>
                  </div>
                </div>
               <div className="descrip">
               <p>
               I have 18 years of steadily increasing expertise in a wide range of procurement, supply chain, and compliance functions from diverse industri...
               <a href="http://www.openadvisor.app/" target="_blank"><span></span></a>
                </p>
               
               </div>
                <div className="tags_stle">
                    <span>Supply Chain</span>
                    <span>Procurement</span>
                    <span>Purchasing Practitioner</span>
                    <span>Compliance Functions</span>
                    <span>Distribution</span>
                    
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
            <Col className="text-center">
          <a href="http://www.openadvisor.app/" target="_blank">
          <button className="talk_btn">
                  <span>View more</span>{" "}
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
          </a>
            </Col>
        </Row>
      </Container>
    </div>
  );
};
