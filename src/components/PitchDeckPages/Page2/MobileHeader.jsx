import React, { useState } from "react";
import { Container, Navbar, Accordion, Nav } from "react-bootstrap";
import imageurl from "../../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { HashLink as NavLink } from 'react-router-hash-link';

export const MobileHeader = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  const [show, setShow] = useState(false);
  window.addEventListener("scroll", changeColor);
  return (
    <div className="mobile_header">
      <Navbar
        className={color ? "header header_bg" : "header header-transparent"}
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={imageurl.logo} alt="" />
          </Navbar.Brand>
          <div className="partial">
          <NavLink className="open_talk border-bottom-0 "  smooth to="#startaproject" >
                   <button className="talk_btn d-block w-100">
                      <span className="pe-2">Start a Project</span>
                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                   </NavLink>
          <span onClick={() => setShow(true)}><img src={imageurl.mobileham} alt="" /></span>
          </div>

          <div className={show ? "menu_box show_one" : " menu_box show_two"} >
            <div style={{ textAlign: "right", marginBottom: "12px" }}>
              <span onClick={() => setShow(false)}><Icon icon="ep:close" color="white" width="30" height="30" vFlip={true} /></span>
            </div>
            <NavLink className="nav-link d-block" smooth to="#about" onClick={() => setShow(false)}>
              About Us
            </NavLink>

            <NavLink className="nav-link d-block" smooth to="#samples" onClick={() => setShow(false)}>
              Samples
            </NavLink>

            <NavLink className="nav-link d-block" smooth to="#reviews" onClick={() => setShow(false)}>
              Reviews
            </NavLink>
            <div className="open_gym" style={{maxHeight:"57vh"}}>
            <NavLink className="open_talk border-bottom-0 "  onClick={() => setShow(false)} smooth to="#startaproject" >
                   <button className="talk_btn d-block w-100">
                      <span className="pe-2">Start a Project</span>
                      <Icon icon="bi:arrow-right-circle" color="white" />
                    </button>
                   </NavLink>
            
            </div>
          </div>


        </Container>
      </Navbar>
    </div>
  );
};
