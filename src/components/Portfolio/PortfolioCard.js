import React from "react";
import imageurl from "../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
export const PortfolioCard = ({ portfolio }) => {
  return (
    <>
      <div>
        <Link to={`/portfolio/${portfolio.industry}/${portfolio.slug}`}>
          <div className="portfolio-card">
            <div className="port_img">
              <img
                src={portfolio.image ? portfolio.image : imageurl.portfolio}
                alt=""
              />
            </div>
            <div className="port_detail">
              <h5 className="title_track">{portfolio.startup_name}</h5>
              <p>{portfolio.bio}</p>

              <span>
                <Icon icon="akar-icons:arrow-up-right" />
              </span>

            </div>
          </div>
        </Link>
      </div>
    </>
  );
};
