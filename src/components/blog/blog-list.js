import React, { Component } from "react";
import { Link } from "react-router-dom";
import Sidebar from "./sidebar";
class BlogList extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div className='le__blog-area mb-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 order-lg-2'>
              <div className='le__blog-list-wrap'>
                {/* Blog Item */}
                <div className='le__blog-item le__blog-item-5 go-top'>
                  <div className='le__blog-img'>
                    <Link to='/blog-details'>
                      <img src={publicUrl + "assets/img/blog/31.jpg"} alt='Image' />
                    </Link>
                  </div>
                  <div className='le__blog-brief'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-category'>
                          <Link to='/blog-grid'>Business</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='le__blog-title'>
                      <Link to='/blog-details'>
                        Lorem ipsum dolor sit amet, consecte cing elit, sed do eiusmod tempor.
                      </Link>
                    </h3>
                    <div className='le__blog-meta'>
                      <ul>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-eye' />
                            232 Views
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-comments' />
                            35 Comments
                          </Link>
                        </li>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 22, 2020
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint
                    </p>
                    <div className='le__blog-meta-btn'>
                      <div className='le__blog-meta'>
                        <ul>
                          <li className='le__blog-author'>
                            <Link to='/blog-grid'>
                              <img src={publicUrl + "assets/img/blog/author.jpg"} alt='#' />
                              By: Ethan
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className='le__blog-btn'>
                        <Link to='/blog-details'>
                          <i className='fas fa-arrow-right' />
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog Item (Video) */}
                <div className='le__blog-item le__blog-item-5 le__blog-item-video'>
                  <div className='le__video-img'>
                    <img src={publicUrl + "assets/img/blog/32.jpg"} alt='video popup bg image' />
                    <a
                      className='le__video-icon-2 le__secondary-bg le__video-icon-2-border---'
                      href='https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0'
                      data-rel='lightcase:myCollection'
                    >
                      <i className='fa fa-play' />
                    </a>
                  </div>
                  <div className='le__blog-brief go-top'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-category'>
                          <Link to='/blog-grid'>Business</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='le__blog-title'>
                      <Link to='/blog-details'>
                        Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                      </Link>
                    </h3>
                    <div className='le__blog-meta'>
                      <ul>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-eye' />
                            232 Views
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-comments' />
                            35 Comments
                          </Link>
                        </li>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 22, 2020
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint
                    </p>
                    <div className='le__blog-meta-btn'>
                      <div className='le__blog-meta'>
                        <ul>
                          <li className='le__blog-author'>
                            <Link to='/blog-grid'>
                              <img src={publicUrl + "assets/img/blog/author.jpg"} alt='#' />
                              By: Ethan
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className='le__blog-btn'>
                        <Link to='/blog-details'>
                          <i className='fas fa-arrow-right' />
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog Item (Gallery) */}
                <div className='le__blog-item le__blog-item-5 le__blog-item-gallery'>
                  <div className='le__blog-gallery-active slick-arrow-1 slick-arrow-1-inner'>
                    <div className='le__blog-gallery-item'>
                      <Link to='/blog-details'>
                        <img src={publicUrl + "assets/img/blog/33.jpg"} alt='Image' />
                      </Link>
                    </div>
                    <div className='le__blog-gallery-item'>
                      <Link to='/blog-details'>
                        <img src={publicUrl + "assets/img/blog/34.jpg"} alt='Image' />
                      </Link>
                    </div>
                    <div className='le__blog-gallery-item'>
                      <Link to='/blog-details'>
                        <img src={publicUrl + "assets/img/blog/31.jpg"} alt='Image' />
                      </Link>
                    </div>
                  </div>
                  <div className='le__blog-brief'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-category'>
                          <Link to='/blog-grid'>Business</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='le__blog-title'>
                      <Link to='/blog-details'>
                        Magna aliqua. Ut enim ad minim venia m, quis nostrud exercitation ullamco
                      </Link>
                    </h3>
                    <div className='le__blog-meta'>
                      <ul>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-eye' />
                            232 Views
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-comments' />
                            35 Comments
                          </Link>
                        </li>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 22, 2020
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint
                    </p>
                    <div className='le__blog-meta-btn'>
                      <div className='le__blog-meta'>
                        <ul>
                          <li className='le__blog-author'>
                            <Link to='/blog-grid'>
                              <img src={publicUrl + "assets/img/blog/author.jpg"} alt='#' />
                              By: Ethan
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className='le__blog-btn'>
                        <Link to='/blog-details'>
                          <i className='fas fa-arrow-right' />
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog Item (Audio) */}
                <div className='le__blog-item le__blog-item-5 le__blog-item-audio go-top'>
                  <div className='post-audio embed-responsive embed-responsive-16by9'>
                    <iframe src='https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/837045328&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true' />
                  </div>
                  <div className='le__blog-brief'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-category'>
                          <Link to='/blog-grid'>Business</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='le__blog-title'>
                      <Link to='/blog-details'>
                        Laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.
                      </Link>
                    </h3>
                    <div className='le__blog-meta'>
                      <ul>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-eye' />
                            232 Views
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-comments' />
                            35 Comments
                          </Link>
                        </li>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 22, 2020
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint
                    </p>
                    <div className='le__blog-meta-btn'>
                      <div className='le__blog-meta'>
                        <ul>
                          <li className='le__blog-author'>
                            <Link to='/blog-grid'>
                              <img src={publicUrl + "assets/img/blog/author.jpg"} alt='#' />
                              By: Ethan
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className='le__blog-btn'>
                        <Link to='/blog-details'>
                          <i className='fas fa-arrow-right' />
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog Item (No Image) */}
                <div className='le__blog-item le__blog-item-5 le__blog-item-no-image go-top'>
                  <div className='le__blog-brief'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-category'>
                          <Link to='/blog-grid'>Business</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='le__blog-title'>
                      <Link to='/blog-details'>
                        In reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      </Link>
                    </h3>
                    <div className='le__blog-meta'>
                      <ul>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-eye' />
                            232 Views
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-comments' />
                            35 Comments
                          </Link>
                        </li>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 22, 2020
                        </li>
                      </ul>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                      dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                      Excepteur sint
                    </p>
                    <div className='le__blog-meta-btn'>
                      <div className='le__blog-meta'>
                        <ul>
                          <li className='le__blog-author'>
                            <Link to='/blog-grid'>
                              <img src={publicUrl + "assets/img/blog/author.jpg"} alt='#' />
                              By: Ethan
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className='le__blog-btn'>
                        <Link to='/blog-details'>
                          <i className='fas fa-arrow-right' />
                          Read more
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Blog Item (Quote) */}
                <div
                  className='le__blog-item le__blog-item-5 le__blog-item-quote bg-image bg-overlay-theme-90 go-top'
                  data-bs-bg='img/blog/3.jpg'
                >
                  <div className='le__blog-brief go-top'>
                    <blockquote>
                      <Link to='/blog-details'>
                        Excepteur sint occaecat cupida tat non proident, sunt in.
                      </Link>
                    </blockquote>
                    <div className='le__blog-meta mb-0'>
                      <ul>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-eye' />
                            232 Views
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-comments' />
                            35 Comments
                          </Link>
                        </li>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 22, 2020
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Blog Item (Background Image) */}
                <div
                  className='le__blog-item le__blog-item-5 le__blog-item-bg-image bg-image bg-overlay-white-90'
                  data-bs-bg='img/blog/2.jpg'
                >
                  <div className='le__blog-brief go-top'>
                    <div className='le__blog-meta'>
                      <ul>
                        <li className='le__blog-category'>
                          <Link to='/blog-grid'>Business</Link>
                        </li>
                      </ul>
                    </div>
                    <h3 className='le__blog-title'>
                      <Link to='/blog-details'>
                        Culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis
                      </Link>
                    </h3>
                    <div className='le__blog-meta mb-0'>
                      <ul>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-eye' />
                            232 Views
                          </Link>
                        </li>
                        <li>
                          <Link to='/blog-details'>
                            <i className='far fa-comments' />
                            35 Comments
                          </Link>
                        </li>
                        <li className='le__blog-date'>
                          <i className='far fa-calendar-alt' />
                          June 22, 2020
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
              <div className='row'>
                <div className='col-lg-12'>
                  <div className='le__pagination-area text-center'>
                    <div className='le__pagination'>
                      <ul>
                        <li>
                          <Link to='#'>
                            <i className='fas fa-angle-double-left' />
                          </Link>
                        </li>
                        <li>
                          <Link to='#'>1</Link>
                        </li>
                        <li className='active'>
                          <Link to='#'>2</Link>
                        </li>
                        <li>
                          <Link to='#'>3</Link>
                        </li>
                        <li>
                          <Link to='#'>...</Link>
                        </li>
                        <li>
                          <Link to='#'>10</Link>
                        </li>
                        <li>
                          <Link to='#'>
                            <i className='fas fa-angle-double-right' />
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Sidebar />
          </div>
        </div>
      </div>
    );
  }
}

export default BlogList;
