import React,{useEffect} from "react";
import { Header } from "../Landingpage/Header";
import { Footer } from "../Landingpage/Footer";
import ContactForm from "./ContactForm";
import { Features } from "../Landingpage/Features";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";

export const ContactLayout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <MobileHeader/>
      <ContactForm />
      <Features />
      <Footer />
    </div>
  );
};
