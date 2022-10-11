import React, { useState } from "react";
import { Container, Row, Col, Tabs, Tab } from "react-bootstrap";
import imageurl from "../common/images";
import Paginate from "../common/Paginate/Paginate";
const categories = [
  {
    id: 1,
    name: "Core Partners",
  },
  {
    id: 2,
    name: "Ecological Partners",
  },
];
export const Partners = ({
  getPartners,
  partnerships,
  currentPage,
  per_page,
  total_record,
}) => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTab = (category) => {
    setActiveTab(category);
    getPartners(category);
  };
  const handlePageClick = ({ selected: page }) => {
    getPartners(activeTab, page + 1);
  };

  return (
    <div className="partners" style={{ background: "#EBFAF6" }}>
      <Container>
        <Row>
          <Col>
            <h5 className="text-center">Partners</h5>
          </Col>
        </Row>
        <Row>
          <ul className="mb-3 nav nav-tabs" role="tablist">
            {categories &&
              categories.length > 0 &&
              categories.map((category) => (
                <li
                  className="nav-item"
                  key={category.id}
                  onClick={() => handleTab(category.id)}
                >
                  <button
                    type="button"
                    className={
                      activeTab === category.id ? "nav-link active" : "nav-link"
                    }
                  >
                    {category.name}
                  </button>
                </li>
              ))}
          </ul>
        </Row>
        <Row>
          {partnerships &&
            partnerships.length > 0 &&
            partnerships.map((logo) => (
              <Col lg={2} md={4} sm={6} xs={6} key={logo.id}>
                <div className="brand_box_part">
                  <img
                    src={logo.image ? logo.image : imageurl.logo}
                    alt=""
                    className="logo"
                  />
                </div>
              </Col>
            ))}
        </Row>
        {partnerships && partnerships.length > 0 && (
          <Row>
            <Col lg={12} className=" mt-4">
              <div className="pagination">
                <Paginate
                  totalCounts={total_record}
                  perPage={per_page}
                  currentPage={currentPage}
                  handlePageClick={handlePageClick}
                />
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
};
