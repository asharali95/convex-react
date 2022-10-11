import React,{useEffect} from "react";
import { Header } from "../Landingpage/Header";
import { Footer } from "../Landingpage/Footer";
import EventList from "./EventList";
import "../Landingpage/landingpage.css";
import { Features } from "../Landingpage/Features";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";
export const EventLayout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <MobileHeader/>
      <EventList />
      <Features />
      <Footer />
    </div>
  );
};
