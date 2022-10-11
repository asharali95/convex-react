import React, { useState } from "react";
import { Container, Navbar, Accordion, Nav } from "react-bootstrap";
import imageurl from "../../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

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
          <Link className="open_talk border-bottom-0 " to="/startaproject">
                <button className="talk_btn d-block w-100">
                  <span>Start a Project</span>{" "}
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
              </Link>
          <span onClick={() => setShow(true)}><img src={imageurl.mobileham} alt="" /></span>
          </div>

          <div className={show ? "menu_box show_one" : " menu_box show_two"} >
            <div style={{ textAlign: "right", marginBottom: "12px" }}>
              <span onClick={() => setShow(false)}><Icon icon="ep:close" color="white" width="30" height="30" vFlip={true} /></span>
            </div>
            <Nav.Link className="mb-0" as={Link} to="/" onClick={() => setShow(false)}>
              Home
            </Nav.Link>
            <Accordion >
              <Accordion.Item eventKey="0">
                <Accordion.Header>Services</Accordion.Header>
                <Accordion.Body>
                  <Nav.Link as={Link} to="/services/strategy_advisory" onClick={() => setShow(false)}>
                    <img src={imageurl.advisey} alt="" />
                    <span>Strategy & Advisory</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/services/raising_capital" onClick={() => setShow(false)}>
                    <img src={imageurl.capital} alt="" />
                    <span>Raising Capital</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/services/product_development" onClick={() => setShow(false)}>
                    <img src={imageurl.software} alt="" />
                    <span>Product Development</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/services/Launch_Strategy" onClick={() => setShow(false)}>
                    <img src={imageurl.strategy} alt="" />
                    <span>Launch Strategy</span>
                  </Nav.Link>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion >
              <Accordion.Item eventKey="1">
                <Accordion.Header>Programs</Accordion.Header>
                <Accordion.Body>
                  <Nav.Link as={Link} to="/programs" onClick={() => setShow(false)}>
                    <img src={imageurl.program1} alt="" />
                    <span>Programs</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/PitchCompetition" onClick={() => setShow(false)}>
                    <img src={imageurl.program2} alt="" />
                    <span>Pitch Competition</span>
                  </Nav.Link>
                  <Nav.Link as={Link} to="/events" onClick={() => setShow(false)}>
                    <img src={imageurl.program3} alt="" />
                    <span>Events</span>
                  </Nav.Link>
                
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Nav.Link as={Link} to="/Portfolio" onClick={() => setShow(false)}>
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="/partnerships" onClick={() => setShow(false)}>
              Partnerships
            </Nav.Link>
            <Nav.Link as={Link} to="/blog" onClick={() => setShow(false)}>
              Blog
            </Nav.Link>
          <div className="open_gym">
          <Link className="open_talk border-bottom-0 " to="/startaproject">
                <button className="talk_btn d-block w-100">
                  <span>Start a Project</span>{" "}
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
              </Link>
          </div>
          </div>


        </Container>
      </Navbar>
    </div>
  );
};
