import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import imageurl from '../common/images';

export const AboutHero = () => {
  return (
    <div className='aboutus'>
<Container>
    <Row>
        <Col lg={6}>
            <div className="title_common">
               <div>
              <div className='mb-5'>
              <h5>Laurent Favre</h5>
                <span>CEO of ViewDuck</span>
              </div>
                <p>“ConvrtX has worked very hard on my project and has executed it very well so far. They are open to discussion and are excellent listeners.They helped me in these specific ways: the strategic business plan, registering my LLC, and creating a strong marketing strategy.”</p>
               </div>
            </div>
        </Col>
        <Col>
        <div className="open_op ">
        <img className='ceo_img' src={imageurl.about} alt="" />
        </div>
        </Col>
    </Row>
</Container>
    </div>
  )
}
