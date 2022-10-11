import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { BlogDetail } from "../components/Blog/BlogDetail";
import { BlogLayout } from "../components/Blog/BlogLayout";
import { ContactLayout } from "../components/Contact/ContactLayout";
import { EventDetail } from "../components/Events/EventDetail";
import { EventLayout } from "../components/Events/EventLayout";
import Landingpagelayout from "../components/Landingpage/Landingpagelayout";
import PartnershipLayout from "../components/Partnerships/PartnershipLayout";
import PitchDeskBusiness from "../components/PitchDeckPages/Page1/PitchDeskBusiness";
import PitchDeskDesign from "../components/PitchDeckPages/Page2/PitchDeskDesign";
import { PortfolioDetail } from "../components/Portfolio/PortfolioDetail";
import { PortfolioLayout } from "../components/Portfolio/PortfolioLayout";
import OpenAdvisorLayout  from "../components/Programs/OpenAdvisor/OpenAdvisorLayout";
import PitchForm from "../components/Programs/Pitch/PitchForm";
import { PitchLayout } from "../components/Programs/Pitch/PitchLayout";
import ThankYou from "../components/Programs/Pitch/ThankYou";
import { LaunchStrategy } from "../components/Services/LaunchStrategy";
import { ProductDevelopment } from "../components/Services/ProductDevelopment";
import { RaisingCapital } from "../components/Services/RaisingCapital";

import { ServiceDetailAdvisory } from "../components/Services/ServiceDetailAdvisory";
import { ServiceLayout } from "../components/Services/ServiceLayout";
import BusinessPlan from "../components/PitchDeckPages/Page3/BusinessPlan"
import ThankYou2 from "../components/Programs/Pitch/ThankYou2";

export const Router = () => {
  return (
    <div>
      <BrowserRouter basename="/">
        <Switch  >
          <Route exact path="/" component={Landingpagelayout} />
         
          <Route exact path="/services" component={ServiceLayout} />
          <Route
            exact
            path="/services/strategy_advisory"
            component={ServiceDetailAdvisory}
          />
          <Route
            exact
            path="/services/raising_capital"
            component={RaisingCapital}
          />
          <Route
            exact
            path="/services/product_development"
            component={ProductDevelopment}
          />
          <Route
            exact
            path="/services/Launch_Strategy"
            component={LaunchStrategy}
          />
          {/* <Route
            exact
            path="/Services-detail"
            component={ServiceDetailAdvisory}
          /> */}
          <Route exact path="/portfolio" component={PortfolioLayout} />
          <Route
            exact
            path="/portfolio/:param/:id"
            component={PortfolioDetail}
          />
          <Route exact path="/startaproject" component={ContactLayout} />

          <Route exact path="/events" component={EventLayout} />
          <Route exact path="/events/:id" component={EventDetail} />
          <Route exact path="/blog" component={BlogLayout} />
          <Route exact path="/blogdetail" component={BlogDetail} />
          <Route exact path="/blog/:param/:id" component={BlogDetail} />
          <Route exact path="/partnerships" component={PartnershipLayout} />
          <Route exact path="/pitchcompetition" component={PitchLayout} />
          <Route exact path="/applyforpitch" component={PitchForm} />
          <Route exact path="/thankyou1" component={ThankYou} />
          <Route exact path="/thankyou" component={ThankYou2} />
          <Route exact path="/programs" component={OpenAdvisorLayout} />
       
          {/* New three Pages */}
           <Route exact path="/strategy" component={PitchDeskBusiness} /> 
           <Route exact path="/Pitchdeck" component={PitchDeskDesign} /> 
           <Route exact path="/Businessplan" component={BusinessPlan} /> 

        </Switch>
      </BrowserRouter>
    </div>
  );
};
