import React, { useState } from "react";
import { Container, Navbar, Dropdown, Nav } from "react-bootstrap";
import imageurl from "../common/images";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

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
            <Nav className="m-auto my-2 my-lg-0">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Dropdown className="drop_down">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Services
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/services/strategy_advisory">
                    <div className="dak openhas">
                      <img src={imageurl.advisey} alt="" />
                      <h5>Strategy & Advisory</h5>
                      <span>
                      The team creates a feasible route
                        <br />for your startup, outlining how <br />
                       you can use your  value proposition <br />  to be
                         a contender in the industry.
                      </span>

                      <Icon
                        className="d-block retto"
                        icon="bi:arrow-up-left"
                        color="#E18427"
                      />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/raising_capital">
                  <div className="dak">
                      <img src={imageurl.capital} alt="" />
                      <h5>Raising Capital</h5>
                      <span>
                      With our investor relations and
                        <br />investor guidance, ConvrtX is 
                        <br />properly equipped to help you
                        <br /> with startup fundraising.
                      </span>

                      <Icon
                        className="d-block retto"
                        icon="bi:arrow-up-left"
                        color="#E18427"
                      />
                      </div>
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/services/product_development">
                  <div className="dak">
                      <img src={imageurl.software} alt="" />
                      <h5>Product Development</h5>
                      <span>
                      We can provide support from the<br /> initial
                        UI and UX concepts to the<br /> clickable
                       prototype and all the way <br />  through to launch
                       
                      </span>

                      <Icon
                        className="d-block retto"
                        icon="bi:arrow-up-left"
                        color="#E18427"
                      />
                      </div>
                  </Dropdown.Item>
                 
                  <Dropdown.Item as={Link} to="/services/Launch_Strategy">
                  <div className="dak">
                      <img src={imageurl.strategy} alt="" />
                      <h5>Launch Strategy</h5>
                      <span>
                      We can assist you with operations, <br /> understanding,
                       and managing  <br />your startup runway,  and <br/>
                      
                       product-market fit.
                       
                      </span>


                      <Icon
                        className="d-block retto"
                        icon="bi:arrow-up-left"
                        color="#E18427"
                      />
                      </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Dropdown className="drop_down">
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Programs
                </Dropdown.Toggle>

                <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/programs">
                    <div className="dak openhas hana_bor">
                      <img src={imageurl.program1} alt="" />
                      <h5>Programs</h5>
                      <span>
                      We offer a launch array 
                        <br />of programs and support to  help our
                        <br /> founder succeed  from platforms,
                        <br /> to webinars to incubation.
                      </span>

                      <Icon
                        className="d-block retto"
                        icon="bi:arrow-up-left"
                        color="#E18427"
                      />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/pitchcompetition">
                    <div className="dak hana_bor ">
                      <img src={imageurl.program2} alt="" />
                      <h5>Pitch Competition</h5>
                      <span>
                      The pitch competition 
                        <br /> focuses on providing early 
                        <br />idea stage startups a 
                        <br /> chance to think brighter and bolder.
                      </span>

                      <Icon
                        className="d-block retto"
                        icon="bi:arrow-up-left"
                        color="#E18427"
                      />
                    </div>
                  </Dropdown.Item>
                  <Dropdown.Item as={Link} to="/events">
                    <div className="dak  hana_bor">
                      <img src={imageurl.program3} alt="" />
                      <h5>Events</h5>
                      <span>
                      Every month we host
                        <br />  both in-person and digital
                        <br /> events to support founders 
                        <br />   across the world.
                      </span>

                      <Icon
                        className="d-block retto"
                        icon="bi:arrow-up-left"
                        color="#E18427"
                      />
                    </div>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Nav.Link as={Link} to="/portfolio">
                Portfolio
              </Nav.Link>
              <Nav.Link as={Link} to="/partnerships">
                Partnerships
              </Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>
            <Nav className="m-auto my-2 my-lg-0">
              {/* <button className="talk_btn">Let's talk</button> */}
              <Link className="open_talk" to="/startaproject">
                <button className="talk_btn">
                  <span>Start a Project</span>{" "}
                  <Icon icon="bi:arrow-right-circle" color="white" />
                </button>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
