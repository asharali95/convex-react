import React, { useState } from "react";
import { Container, Row, Col, Tab } from "react-bootstrap";
import Paginate from "../../components/common/Paginate/Paginate";

import imageurl from "../common/images";
const categories = [
  {
    id: 1,
    name: "Core Partners",
  },
  {
    id: 2,
    name: "Ecologicial Partners",
  },
];

const Partnerbrands = ({
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
    <div className="partners open_partners">
      <Container>
        <Row >
          <Col lg={7} className="mb-5">
            <div className="ser_vi mb-5">
              <tag>PARTNERSHIPS</tag>
              <h5 style={{ fontSize: "60px" }}>
                <span>ConvrtX </span>
                <p className="mb-0 d-inline">
                  {" "}
                  partners
                  <br /> with institutional leaders to foster innovation.
                </p>
              </h5>
            </div>
          </Col>
          <Col lg={5} md={12}>
            <div className="part_ban">
              <div className="part_img">
                <img src={imageurl.partnership2} alt="" />
              </div>
              <div className="bg_back"></div>
            </div>
            
            <div className="new_part">
            <img src={imageurl.part_one} alt="" />
              </div>
          </Col>
        </Row>

        <Tab.Container
          className=""
          id="left-tabs-example"
          defaultActiveKey="first"
        >
          <Row className="mb-4">
            <Col lg={8}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <h5 style={{ fontSize: "60px", fontWeight: "600" }}>
                  Partners
                </h5>
              </div>
            </Col>
            <Col lg={4}>
              <div class="nav_tabs nav nav-pills open_bug">
                {categories &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <div
                      class="nav-item"
                      key={category.id}
                      onClick={() => handleTab(category.id)}
                    >
                      <a
                        type="button"
                        className={
                          activeTab === category.id
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        {category.name}
                      </a>
                    </div>
                  ))}
              </div>
            </Col>
          </Row>
          <Row>
            {partnerships && partnerships.length > 0 ? (
              partnerships.map((logo) => (
                <Col  lg={2} md={3} sm={4} xs={6} key={logo.id}>
                  <div className="brand_box_part">
                    <img
                      src={logo.image ? logo.image : imageurl.logo}
                      alt=""
                      className="logo"
                    />
                  </div>
                </Col>
              ))
            ) : (
              <Col lg={12}>
                <h3 className="text-center mt-4">No result found</h3>
              </Col>
            )}

            <Col lg={12} className="text-center mt-4">
              {/* <button className="talk_btn red_btn">Load More</button> */}
              {partnerships && partnerships.length > 0 && (
                <div className="pagination">
                  <Paginate
                    totalCounts={total_record}
                    perPage={per_page}
                    currentPage={currentPage}
                    handlePageClick={handlePageClick}
                  />
                </div>
              )}
            </Col>
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Partnerbrands;
