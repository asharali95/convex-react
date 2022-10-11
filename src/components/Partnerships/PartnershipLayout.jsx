import React, { useEffect } from "react";
import { Header } from "../Landingpage/Header";
import { Footer } from "../Landingpage/Footer";

import Partnerbrands from "./Partnerbrands";
import { Owner } from "./Owner";
import { FormPartnership } from "./FormPartnership";
import SiteLoader from "../../components/SiteLoader/SiteLoader";
import { getPartners } from "../../store/actions/partnershipAction";
import { connect } from "react-redux";
import { createPartnerLead } from "../../store/actions/authAction";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";

const PartnershipLayout = ({
  getPartners,
  loading,
  partnerships,
  submitting,
  createPartnerLead,
  currentPage,
  per_page,
  total_record,
}) => {
  useEffect(() => {
    getPartners(1);
  }, [getPartners]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      {loading ? <SiteLoader /> : null}
      <Partnerbrands
        getPartners={getPartners}
        partnerships={partnerships}
        currentPage={currentPage}
        per_page={per_page}
        total_record={total_record}
      />
      <Owner />
      <FormPartnership
        submitting={submitting}
        createPartnerLead={createPartnerLead}
      />
      <Footer />
    </div>
  );
};
const mapStateToProps = ({
  form,
  partnership: { loading, partnerships, currentPage, per_page, total_record },
}) => {
  return {
    submitting: form.submitting,
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
    createPartnerLead: (payload, resetForm,history) =>
      dispatch(createPartnerLead(payload, resetForm,history)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PartnershipLayout);
