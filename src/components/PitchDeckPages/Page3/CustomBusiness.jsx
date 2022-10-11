import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../../common/images";
import { Icon } from "@iconify/react";
export const CustomBusiness = () => {
  return (
    <div className="fundarise trust" id="included">
      <Container>
        <Row>
          <Col>
            {" "}
            <div className="fundarise_details">
              <h5>
                What is included in our custom <br />
                <span>Business Plans?</span>
              </h5>
            </div>
          </Col>
        </Row>
        <Row>
          <Row>
            <Col lg={4}>
              <ul className="customlist">
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Marketing Plan</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>SWOT Anlysis</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Competitive Anlysis</span>
                </li>

                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Profitability Anlysis</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Personal Plan</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Organizational Chart</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Company Valuation</span>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <ul className="customlist">
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Executive Summary</span>
                </li>
             
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Company Description</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Keys to Success</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Three Year Objectives</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Products or Service Description</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Market Research</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Fundraising Support</span>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <ul className="customlist">
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>12 Month & 3 Year Profit & Loss</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>3 Year Balance Sheet</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>3 Year Sales Forecast</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>12 Month & 3 Year Cash Flows</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Break-Even Analysis</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Financial Ratio Analysis</span>
                </li>
                <li>
                  <Icon icon="akar-icons:circle-check" />
                  <span>Management Team</span>
                </li>
              </ul>
            </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
};
