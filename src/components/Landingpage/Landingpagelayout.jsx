import React, { useEffect } from "react";
import { BlogHome } from "../Blog/BlogHome";
import { EventSection } from "../Events/EventSection";
import { PortfolioList } from "./PortfolioList";
import { Features } from "./Features";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroBanner } from "./HeroBanner";
import { Partners } from "./Partners";
import { ServiceTitle } from "./ServiceTitle";
import { Review } from "./Review";
import { connect } from "react-redux";
import { getPartners } from "../../store/actions/partnershipAction";
import { getHomePageData } from "../../store/actions/blogAction";
import { MobileHeader } from "./Mobile/MobileHeader";
import ReactGA from "react-ga4"
const Landingpagelayout = ({
  getPartners,
  partnerships,
  getHomePageData,
  blogs,
  events,
  portfolios,
  currentPage,
  per_page,
  total_record,
}) => {
  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    getPartners(1);
  }, [getPartners]);
  useEffect(() => {
    getHomePageData();
  }, [getHomePageData]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <HeroBanner />
      <Features />
      <ServiceTitle />
      <PortfolioList portfolios={portfolios || []} />
      <Partners
        getPartners={getPartners}
        partnerships={partnerships}
        currentPage={currentPage}
        per_page={per_page}
        total_record={total_record}
      />
      <Review />
      <BlogHome blogs={blogs || []} />
      <EventSection events={events || []} />
      <Footer />
    </div>
  );
};
const mapStateToProps = ({
  partnership: { loading, partnerships, currentPage, per_page, total_record },
  home: { blogs, events, portfolios },
}) => {
  return {
    loading,
    partnerships,
    blogs,
    events,
    portfolios,
    currentPage,
    per_page,
    total_record,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPartners: (payload, page) => dispatch(getPartners(payload, page)),
    getHomePageData: () => dispatch(getHomePageData()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Landingpagelayout);
