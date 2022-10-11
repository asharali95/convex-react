import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import imageurl from "../common/images";
import { Icon } from "@iconify/react";


export const BlogHome = ({ blogs }) => {
  return (
    <div className="blogshome features">
      <Container>
        <Row>
          <Col>
          <h5 className="blog_feat"><span>Blogs </span><img src={imageurl.featuredlogo} alt="" /></h5>
          </Col>
        </Row>
        <Row>
          {blogs && blogs.length > 0 && (
            <Col lg={8} md={6}>
              <Link to={`/blog/${blogs[0].category}/${blogs[0].slug}`}><div className="blog_box">
                <img
                  className="firs_img"
                  src={blogs[0].image ? blogs[0].image : imageurl.bannerbig}
                  alt=""
                />
                <h5>{blogs[0].title}</h5>
              </div></Link>
            </Col>
          )}
          <Col lg={4} md={6}>
            {blogs &&
              blogs.length > 1 &&
              blogs.slice(1, blogs.length).map((blog) => (
                <Link to={`/blog/${blog.category}/${blog.slug}` }  key={blog.id}>
                <div className="blog_box" >
                  <img
                    src={blog.image ? blog.image : imageurl.bannerbig}
                    alt=""
                  />
                  <h5>{blog.title}</h5>
                </div>
                </Link>
              ))}
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4">
            {" "}
            <Link to="/blog">
              <button className="talk_btn">
                <span className="pe-2">View more</span>
                <Icon icon="bi:arrow-right-circle" color="white" />
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
