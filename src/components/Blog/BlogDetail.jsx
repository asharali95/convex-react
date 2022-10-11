import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Footer } from "../Landingpage/Footer";
import { Icon } from "@iconify/react";
import { Header } from "../Landingpage/Header";
import { Link, useParams } from "react-router-dom";
import { Features } from "../Landingpage/Features";
import { getBlog } from "../../store/actions/blogAction";
import { RESET_BLOG_DETAIL } from "../../store/common/types";
import { useDispatch, useSelector } from "react-redux";
import { convertHTMLToString } from "../common/_helper";
import SiteLoader from "../SiteLoader/SiteLoader";
import { MobileHeader } from "../Landingpage/Mobile/MobileHeader";

export const BlogDetail = () => {
  const { id } = useParams();
  const { loading, blog_details } = useSelector((state) => state.blog);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBlog(id));
    return () => dispatch({ type: RESET_BLOG_DETAIL });
  }, [id, dispatch]);
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

 
  return (
    <div className="pb-0">
      <Header />
      <MobileHeader />
      {loading ? <SiteLoader /> : null}
      <div className="service_detail blog_detail pb-0">
        <Container>
          <Row>
            <Col>
              <Link to="/blog" className="link_redirect">
                {" "}
                <Icon icon="bi:arrow-left" color="#e18427" />
                <span>OUR BLOGS & RESOURCES</span>
              </Link>
              <div className="follow_box">
                <div className="first_box">
                  <img src={imageurl.blogbg} style={{ overflow: "hidden", borderRadius: "50%" }} alt="" />
                  <div className="user_name">
                    <h5>ConvrtX-Team</h5>
                    <span style={{color:"rgb(156, 156, 156)"}}>{blog_details.date_time}</span>
                  </div>
                </div>
                {/* <div className="follow_btn">
                  <span style={{ color: "#000", opacity: "0.5" }}>
                    390 followers
                  </span>
                  <button
                    style={{ backgroundColor: "#073D30" }}
                    className="talk_btn ms-4 me-4"
                  >
                    <span className="">Follow</span>
                  </button>
                  <Icon
                    icon="clarity:ellipsis-vertical-line"
                    color="black"
                    fontSize="20px"
                  />
                </div> */}
              </div>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="banner_box">
                <img
                  src={
                    blog_details.image ? blog_details.image : imageurl.bannerbig
                  }
                  alt=""
                />


                <div className="tags_blog">
                  {
                  blog_details.tag && blog_details.tag.length >0 && blog_details.tag.map((t,i) => <span key={i}>{t}</span>)
                  }
                 
                </div>
                <h5 style={{ fontSize: "30px", marginBottom: "30px" }}>{blog_details.title}</h5>
                <p style={{ color: "#000 !important", opacity: "unset",marginBottom:"15px" }}>{convertHTMLToString(blog_details.description)}</p>
                {/* <ul>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>
                      Lorem Ipsum is simply dummy text of the printing
                    </span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>
                      Lorem Ipsum is simply dummy text of the printing
                    </span>
                  </li>
                  <li>
                    <Icon icon="bi:arrow-right" color="#e18427" />
                    <span>
                      Lorem Ipsum is simply dummy text of the printing
                    </span>
                  </li>
                </ul> */}
              </div>
            </Col>
          </Row>
          {/* <Row>
            <Col>
              <div className="banner_box">
                <img src={imageurl.bannerbig} alt="" />
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since to make a type specimen
                  book.Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since to make a type specimen book.
                </p>
              </div>
            </Col>
          </Row> */}
        </Container>
      </div>
      <Features />
      <Footer />
    </div>
  );
};
