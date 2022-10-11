import React,{useEffect} from "react";
import { Header } from "../Landingpage/Header";
import { Footer } from "../Landingpage/Footer";
import Portfolio from "./Portfolio";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";

export const PortfolioLayout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div id="top">
      <Header />
      <MobileHeader/>
      <Portfolio />
      <Footer />
    </div>
  );
};
