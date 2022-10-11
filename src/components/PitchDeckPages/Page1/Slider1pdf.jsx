import React from "react";
import Carousel from "react-multi-carousel";

import { Icon } from "@iconify/react";
import imageurl from "../../common/images";
export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group_event">
      <button onClick={() => next()} >  <img src={imageurl.right} alt="" /></button>
      <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} > <img src={imageurl.left} alt="" /></button>

      {/* <Button style={{background:"red",position:"absolute",left:"0" ,bottom:0}} onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button> */}
    </div>
  );
};
export const Slider1pdf = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      partialVisibilityGutter: 40
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 15
    },
    tablet: {
      breakpoint: { max: 1024, min: 767 },
      items: 2,
      partialVisibilityGutter: 15
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 1,
      partialVisibilityGutter: 15
    },
  };

  return (
    <div>
      <Carousel responsive={responsive} infinite={true} renderButtonGroupOutside={true} arrows={false} customButtonGroup={<ButtonGroup />}>
        <div className="pdf_info pdf_open">
          <img src={imageurl.pdf1} alt="" />
          <div className="name_one">
            <span>CryptoApp</span>

            <a
              href="https://crvtx.space/dataconvertx/BusinessPlan/Crypto%20App%20Fintech%20BP%20Template.pdf"
              download
              target="_blank"
            >
              <Icon icon="bi:arrow-right" color="#e18427" />
            </a>
          </div>
        </div>
        <div className="pdf_info pdf_open">
          <img src={imageurl.pdf2} alt="" />
          <div className="name_one">
            <span>HealthApp</span>

            <a
              href="https://crvtx.space/dataconvertx/BusinessPlan/HealthApp_BP_Template%20(1).pdf"
              download
              target="_blank"
            >
              <Icon icon="bi:arrow-right" color="#e18427" />
            </a>
          </div>
        </div>
        <div className="pdf_info pdf_open">
          <img src={imageurl.pdf3} alt="" />
          <div className="name_one">
            <span>DateApp</span>

            <a
              href="https://crvtx.space/dataconvertx/BusinessPlan/DateApp_BP_Template.pdf"
              download
              target="_blank"
            >
              <Icon icon="bi:arrow-right" color="#e18427" />
            </a>
          </div>
        </div>
        <div className="pdf_info pdf_open">
          <img src={imageurl.pdf4} alt="" />
          <div className="name_one">
            <span>DeliverApp</span>

            <a
              href="https://crvtx.space/dataconvertx/BusinessPlan/Logistics%20(Deliver%20App).pdf"
              download
              target="_blank"
            >
              <Icon icon="bi:arrow-right" color="#e18427" />
            </a>
          </div>
        </div>
      </Carousel >
    </div >
  );
};
