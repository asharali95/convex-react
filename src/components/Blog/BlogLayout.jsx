import React ,{useEffect} from "react";
import { Header } from "../Landingpage/Header";
import { Footer } from "../Landingpage/Footer";
import BlogSection from "./BlogSection";
import "../Landingpage/landingpage.css";
import { Features } from "../Landingpage/Features";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";
export const BlogLayout = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <MobileHeader/>
      <BlogSection />
      <Features />
      <Footer />
    </div>
  );
};
