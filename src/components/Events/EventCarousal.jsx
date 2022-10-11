import React from "react";
import Carousel from "react-multi-carousel";

import { EventCard } from "./EventCard";
import imageurl from "../common/images";
 export const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group_event"> 
     <button  onClick={() => next()} >  <img src={imageurl.right} alt="" /></button>
      <button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} > <img src={imageurl.left} alt="" /></button>
     
      {/* <Button style={{background:"red",position:"absolute",left:"0" ,bottom:0}} onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </Button> */}
    </div>
  );
};
export const EventCarousal = ({ events }) => {
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
      <Carousel showDots={true} responsive={responsive} infinite={true} renderButtonGroupOutside={true}  arrows={false} customButtonGroup={<ButtonGroup />}>
        {events &&
          events.length > 0 &&
          events.map((event) => <EventCard event={event} key={event.id} />)}
      </Carousel>
    </div>
  );
};
