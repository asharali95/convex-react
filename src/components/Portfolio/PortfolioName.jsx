import React from "react";
import imageurl from "../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export const PortfolioName = () => {
  return (
    <>
      <div className="portfolio-card">
        <div className="port_img">
          <img src={imageurl.portfolioimg} alt="" />
        </div>
        <div className="port_detail">
          <h5>2 meters</h5>
          <p>Lorem Ipsum is simply dummy text</p>
          <Link to="/Portfolio/Portfolio-detail">
            <span>
              <Icon icon="akar-icons:arrow-up-right" />
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
