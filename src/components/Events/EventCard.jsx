import React from "react";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export const EventCard = ({ event}) => {
  return (
    <Link to={`/events/${event.slug}`}>
    <div className="event-card">
      <div className="event_img">
        <img src={event.image ? event.image : imageurl.advise} alt="" />
      </div>
      <div className="event-details">
        <h4>{event.title}</h4>
        <p>
          <Icon icon="akar-icons:location" color="#b3b3b3" />
          <span>{event.location}</span>
        </p>
        <p>
          <Icon icon="uil:calender" color="#b3b3b3" />
          {/* <span>17 May, 2022  </span> */}
          <span> {event.start_date}</span>
        </p>
      </div>
    </div>
    </Link>
  );
};
