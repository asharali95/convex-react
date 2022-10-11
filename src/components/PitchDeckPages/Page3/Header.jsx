import React, { useState } from "react";
import { Container, Navbar, Dropdown, Nav } from "react-bootstrap";
import imageurl from "../../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { HashLink as NavLink } from 'react-router-hash-link';

export const Header = () => {
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className="header">
      <Navbar
        className={color ? "header header_bg" : "header header-transparent"}
        expand="lg"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img src={imageurl.logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="ms-auto my-2 my-lg-0">
              <NavLink className="nav-link" smooth to="#about" >
                About Us
              </NavLink>
              <NavLink className="nav-link"   smooth to="#ourprocess">
               Our Process
              </NavLink>
             
              
              <NavLink className="nav-link"  smooth to="#samples" >
              Samples
              </NavLink>
            
              <NavLink className="nav-link"  smooth to="#packages" >
             Packages
              </NavLink>
              <NavLink className="nav-link"   smooth to="#included">
              What's included
              </NavLink>
              <NavLink className="nav-link"  smooth to="#review">
               Review
              </NavLink>
            </Nav>
            <Nav className="ms-auto my-2 my-lg-0">
              {/* <button className="talk_btn">Let's talk</button> */}
              <NavLink className="open_talk" to="#startaproject1">
                <button className="talk_btn">
                  <span>Start a Project</span>{" "}
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
