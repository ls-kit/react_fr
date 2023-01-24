import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";

class BlogSlider extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let customClass = this.props.customClass ? this.props.customClass : "";
    let sectionClass = this.props.sectionClass ? this.props.sectionClass : "";
    return (
      <div className={"le__blog-area pt-115--- pb-70 go-top " + sectionClass}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area le__section-title-2--- text-center'>
                <h6 className={"section-subtitle le__secondary-color " + customClass}>News &amp; Blogs</h6>
                <h1 className='section-title'>Leatest News Feeds</h1>
              </div>
            </div>
          </div>
          <div className='row  le__blog-slider-one-active slick-arrow-1 le__blog-item-3-normal'>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='le__blog-item le__blog-item-3'>
                <div className='le__blog-meta'>
                  <ul>
                    <li className='le__blog-author'>
                      <Link to='/team-details'>
                        <i className='far fa-user' />
                        by: Admin
                      </Link>
                    </li>
                    <li className='le__blog-tags'>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Interior
                      </Link>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Decorate
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='le__blog-img'>
                  <Link to='/blog-details'>
                    <img src={publicUrl + "assets/img/blog/1.jpg"} alt='#' />
                  </Link>
                </div>
                <div className='le__blog-brief'>
                  <h3 className='le__blog-title'>
                    <Link to='/blog-details'>10 Brilliant Ways To Decorate Your Home</Link>
                  </h3>
                  <div className='le__blog-meta-btn'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='le__blog-btn'>
                      <Link to='/blog-details'>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='le__blog-item le__blog-item-3'>
                <div className='le__blog-meta'>
                  <ul>
                    <li className='le__blog-author'>
                      <Link to='/team-details'>
                        <i className='far fa-user' />
                        by: Admin
                      </Link>
                    </li>
                    <li className='le__blog-tags'>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Interior
                      </Link>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Decorate
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='le__blog-img'>
                  <Link to='/blog-details'>
                    <img src={publicUrl + "assets/img/blog/2.jpg"} alt='#' />
                  </Link>
                </div>
                <div className='le__blog-brief'>
                  <h3 className='le__blog-title'>
                    <Link to='/blog-details'>The Most Inspiring Interior Design Of 2021</Link>
                  </h3>
                  <div className='le__blog-meta-btn'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          July 23, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='le__blog-btn'>
                      <Link to='/blog-details'>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='le__blog-item le__blog-item-3'>
                <div className='le__blog-meta'>
                  <ul>
                    <li className='le__blog-author'>
                      <Link to='/team-details'>
                        <i className='far fa-user' />
                        by: Admin
                      </Link>
                    </li>
                    <li className='le__blog-tags'>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Interior
                      </Link>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Interior
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='le__blog-img'>
                  <Link to='/blog-details'>
                    <img src={publicUrl + "assets/img/blog/3.jpg"} alt='#' />
                  </Link>
                </div>
                <div className='le__blog-brief'>
                  <h3 className='le__blog-title'>
                    <Link to='/blog-details'>Recent Commercial Real Estate Transactions</Link>
                  </h3>
                  <div className='le__blog-meta-btn'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          May 22, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='le__blog-btn'>
                      <Link to='/blog-details'>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='le__blog-item le__blog-item-3'>
                <div className='le__blog-meta'>
                  <ul>
                    <li className='le__blog-author'>
                      <Link to='/team-details'>
                        <i className='far fa-user' />
                        by: Admin
                      </Link>
                    </li>
                    <li className='le__blog-tags'>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Interior
                      </Link>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Decorate
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='le__blog-img'>
                  <Link to='/blog-details'>
                    <img src={publicUrl + "assets/img/blog/2.jpg"} alt='#' />
                  </Link>
                </div>
                <div className='le__blog-brief'>
                  <h3 className='le__blog-title'>
                    <Link to='/blog-details'>Renovating a Living Room? Experts Share Their Secrets</Link>
                  </h3>
                  <div className='le__blog-meta-btn'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='le__blog-btn'>
                      <Link to='/blog-details'>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Blog Item */}
            <div className='col-lg-12'>
              <div className='le__blog-item le__blog-item-3'>
                <div className='le__blog-meta'>
                  <ul>
                    <li className='le__blog-author'>
                      <Link to='/team-details'>
                        <i className='far fa-user' />
                        by: Admin
                      </Link>
                    </li>
                    <li className='le__blog-tags'>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Interior
                      </Link>
                      <Link to='/blog-grid'>
                        <i className='fas fa-tags' />
                        Decorate
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className='le__blog-img'>
                  <Link to='/blog-details'>
                    <img src={publicUrl + "assets/img/blog/2.jpg"} alt='#' />
                  </Link>
                </div>
                <div className='le__blog-brief'>
                  <h3 className='le__blog-title'>
                    <Link to='/blog-details'>7 home trends that will shape your house in 2021</Link>
                  </h3>
                  <div className='le__blog-meta-btn'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 24, 2021
                        </li>
                      </ul>
                    </div>
                    <div className='le__blog-btn'>
                      <Link to='/blog-details'>Read more</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </div>
      </div>
    );
  }
}

export default BlogSlider;
