import React, { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Form } from "react-bootstrap";
import { PortfolioCard } from "./PortfolioCard";
import { getPortfolios } from "../../store/actions/portfolioAction";
import { connect } from "react-redux";
import SiteLoader from "../../components/SiteLoader/SiteLoader";
import { INDUSTRIES } from "../../components/common/constants";
import SearchFilter from "../common/SearchFilter";
import Paginate from "../common/Paginate/Paginate";

const Portfolio = ({
  loading,
  portfolios,
  getPortfolios,
  currentPage,
  per_page,
  total_record,
}) => {
  const [activeTab, setActiveTab] = useState("All");
  const [search, setSearch] = useState(null);
  useEffect(() => {
    getPortfolios({
      industry: "All",
      search: "",
    });
  }, [getPortfolios]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (search || search !== null) {
        getPortfolios({
          industry: activeTab,
          search,
        });
      }
    }, 500);

    return () => clearTimeout(delayDebounceFn);
  }, [search, getPortfolios]);

  const handlePageClick = ({ selected: page }) => {
    getPortfolios({ industry: activeTab, search: search }, page + 1);
  };

  const handleTab = (industry) => {
    setActiveTab(industry);
    setSearch("")
    getPortfolios({
      industry,
      search: "",
    });
  };
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="portfolio " id="top">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="ser_vi mb-5">
              <tag>PORTFOLIO</tag>
              <h5>
                <span>Startups, </span>
                <p className="mb-0">we have impacted to date!</p>
              </h5>
            </div>
          </Col>
        </Row>
        {loading ? <SiteLoader /> : null}
        <Tab.Container
          className=""
          id="left-tabs-example"
          defaultActiveKey="first"
        >
          <Row className="mb-4">
            <Col lg={8}>
              <div class="nav_tabs nav nav-pills">
                {INDUSTRIES &&
                  INDUSTRIES.length > 0 &&
                  INDUSTRIES.map((industry) => (
                    <div
                      class="nav-item"
                      key={industry}
                      onClick={() => handleTab(industry)}
                    >
                      <a
                        className={
                          activeTab === industry
                            ? "nav-link active"
                            : "nav-link"
                        }
                      >
                        {industry}
                      </a>
                    </div>
                  ))}
              </div>
            </Col>

            <Col lg={4}>
              <SearchFilter setSearch={setSearch} search={search} />
            </Col>
          </Row>

          <Row>
            {portfolios && portfolios.length > 0 ? (
              portfolios.map((portfolio) => (
                <Col lg={4} md={6} sm={12} key={portfolio.id}>
                  <PortfolioCard portfolio={portfolio} />
                </Col>
              ))
            ) : (
              <Col lg={12}>
                <h3 className="text-center mt-4">No result found</h3>
              </Col>
            )}
            {/* {portfolios.length > 3 && (
              <Col lg={12} className="text-center mt-4">
                <button className="talk_btn red_btn">Load More</button>
              </Col>
            )} */}
            {portfolios && portfolios.length > 0 && (
              <Col lg={12} className="text-center mt-4">
                <div className="pagination">
                  <Paginate
                    totalCounts={total_record}
                    perPage={per_page}
                    currentPage={currentPage}
                    handlePageClick={handlePageClick}
                  />
                </div>
              </Col>
            )}
          </Row>
        </Tab.Container>
      </Container>
    </div>
  );
};

const mapStateToProps = ({
  portfolio: { loading, portfolios, currentPage, per_page, total_record },
}) => {
  return {
    loading,
    portfolios,
    currentPage,
    per_page,
    total_record,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPortfolios: (payload, page) => dispatch(getPortfolios(payload, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Portfolio);
