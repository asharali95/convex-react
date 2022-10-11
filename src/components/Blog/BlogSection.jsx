import React, { useEffect,useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import imageurl from "../common/images";
import { Link } from "react-router-dom";
import { getBlogs } from "../../store/actions/blogAction";
import { connect } from "react-redux";
import SiteLoader from "../../components/SiteLoader/SiteLoader";
import { convertHTMLToString } from "../common/_helper";
import Paginate from "../common/Paginate/Paginate"
const BlogSection = ({ loading, blogs, getBlogs,currentPage,
  per_page,
  total_record, }) => {
  useEffect(() => {
    getBlogs({
      search: "",
    });
  }, [getBlogs]);

  const handlePageClick = ({ selected: page }) => {
    getBlogs({search:""}, page + 1);
  };
  return (
    <div className="portfolio blog_list_show pb-0">
      <Container>
        <Row>
          <Col className="mb-5">
            <div className="ser_vi mb-5">
              <tag>OUR BLOG & RESOURCES</tag>
              <h5>
                <p className="mb-0">It's time to level up your knowledge</p>
              </h5>
              <p style={{ opacity: "0.5" }}>
              Knowledge is power, and power is knowledge. Learning from other people's successes & mistakes is one of the fastest<br/> ways to learn. We created our blog for precisely that.
              </p>
            </div>
          </Col>
        </Row>
        {loading ? <SiteLoader /> : null}
        <Row>
          <Col lg={8}>
            <div className="blog_open">
              <h5 className="blog-title">Latest Blog</h5>
              {blogs &&
                blogs.length > 0 &&
                blogs.map((blog) => (
                  <Link to={`/blog/${blog.category}/${blog.slug}`} key={blog.id}>
                    <div className="red_blog">
                      <img
                        src={blog.image ? blog.image : imageurl.advise}
                        alt=""
                      />
                      <div className="blog_red_details">
                        <h5>{blog.title}</h5>
                      <div className="now_para">
                      <p>{convertHTMLToString(blog.description)}</p>
                      </div>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </Col>
          {blogs && blogs.length > 0 && (
              <Col lg={12} className="text-center mt-4">
                <div className="pagination">
                  <Paginate
                    totalCounts={total_record}
                    perPage={per_page}
                    currentPage={currentPage}
                    handlePageClick={handlePageClick}
                  />
                </div>
              </Col>
            )}
         
        </Row>
      </Container>
    </div>
  );
};

const mapStateToProps = ({ blog: { loading, blogs ,currentPage,
  per_page,
  total_record,} }) => {
  return {
    loading,
    blogs,
    currentPage,
  per_page,
  total_record,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getBlogs: (payload,page) => dispatch(getBlogs(payload,page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BlogSection);
