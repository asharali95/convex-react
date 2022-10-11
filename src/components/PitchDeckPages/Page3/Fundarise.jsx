import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import imageurl from '../../common/images'
import { Icon } from '@iconify/react';
export const Fundarise = () => {
  return (
    <div className='fundarise' >
        <Container className=' frustattion'>
            <Row>
                <Col lg={6}>
                    <div className="fundarise_img">
                        <img src={imageurl.businessdesign} alt="" />
                        <div className="text_box">
                            <h5>Largest <br/>fundraising <br/> network</h5>
                        </div>
                    </div>
                </Col>
                <Col lg={6}>
                    <div className="fundarise_details">
                        <div>
                            <h5>We help you <span>fundraise</span> for your business</h5>
                            <ul>
                                <li>
                                <Icon icon="akar-icons:circle-check-fill" />
                                <span>Former VC/PE experts create your <br/>custom business plan</span>
                                </li>
                                <li>
                                <Icon icon="akar-icons:circle-check-fill" />
                                <span>Tier 1 VC grade Silicon Valley business<br/> plan standards.</span>
                                </li>
                                <li>
                                <Icon icon="akar-icons:circle-check-fill" />
                                <span>Startups to Inc 5,000 and Fortune 50 <br/>Companies - 1,000 + clients</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}
