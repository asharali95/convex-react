import { connect } from "react-redux";
import React, { useEffect } from "react";
import { getPartners } from "../../../store/actions/partnershipAction";
import { Footer } from "../../Landingpage/Footer";
import { Header } from "../../Landingpage/Header";
import { Partners } from "../../Landingpage/Partners";
import { Programpage } from "./Programpage";
import { AdvisorCommunity } from "./AdvisorCommunity";
import { Accelaret } from "./Accelaret";
import { MobileHeader } from "../../Landingpage/Mobile/MobileHeader";

const OpenAdvisorLayout = ({
  getPartners,
  partnerships,
  currentPage,
  per_page,
  total_record,
}) => {
  useEffect(() => {
    getPartners(1);
  }, [getPartners]);
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <Programpage/>
      <AdvisorCommunity/>
      <Accelaret/>
      <Partners
        getPartners={getPartners}
        partnerships={partnerships}
        currentPage={currentPage}
        per_page={per_page}
        total_record={total_record}
      />
      <Footer />
    </div>
  );
};
const mapStateToProps = ({
  partnership: { loading, partnerships, currentPage, per_page, total_record },
}) => {
  return {
    loading,
    partnerships,
    currentPage,
    per_page,
    total_record,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getPartners: (payload, page) => dispatch(getPartners(payload, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OpenAdvisorLayout);
