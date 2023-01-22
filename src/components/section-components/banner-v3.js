import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class BannerV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className='le__slider-area le__slider-3  section-bg-2'>
        <div className='le__slide-one-active slick-slide-arrow-1 slick-slide-dots-1'>
          {/* le__slide-item */}
          <div
            className='le__slide-item le__slide-item-2 le__slide-item-3-normal--- le__slide-item-3 bg-image bg-overlay-theme-black-60'
            data-bs-bg={publicUrl + "assets/img/slider/11.jpg"}
          >
            <div className='le__slide-item-inner text-center'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <div className='slide-item-info'>
                      <div className='slide-item-info-inner le__slide-animation'>
                        <div className='slide-video mb-50 d-none'>
                          <a
                            className='le__video-icon-2 le__video-icon-2-border'
                            href='https://www.youtube.com/embed/tlThdr3O5Qo'
                            data-rel='lightcase:myCollection'
                          >
                            <i className='fa fa-play' />
                          </a>
                        </div>
                        <h6 className='slide-sub-title white-color--- animated'>
                          <span>
                            <i className='fas fa-home' />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore.
                          </p>
                        </div>
                        <div className='btn-wrapper animated go-top'>
                          <Link to='/shop' className='theme-btn-1 btn btn-effect-1'>
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* le__slide-item */}
          <div
            className='le__slide-item le__slide-item-2  le__slide-item-3-normal--- le__slide-item-3 bg-image bg-overlay-theme-black-60'
            data-bs-bg={publicUrl + "assets/img/slider/12.jpg"}
          >
            <div className='le__slide-item-inner  text-right text-end'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <div className='slide-item-info'>
                      <div className='slide-item-info-inner le__slide-animation'>
                        <h6 className='slide-sub-title white-color--- animated'>
                          <span>
                            <i className='fas fa-home' />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore.
                          </p>
                        </div>
                        <div className='btn-wrapper animated go-top'>
                          <Link to='/shop' className='theme-btn-1 btn btn-effect-1'>
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* le__slide-item */}
          <div
            className='le__slide-item le__slide-item-2  le__slide-item-3-normal--- le__slide-item-3 bg-image bg-overlay-theme-black-60'
            data-bs-bg={publicUrl + "assets/img/slider/13.jpg"}
          >
            <div className='le__slide-item-inner  text-left'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <div className='slide-item-info'>
                      <div className='slide-item-info-inner le__slide-animation'>
                        <h6 className='slide-sub-title white-color--- animated'>
                          <span>
                            <i className='fas fa-home' />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className='slide-title animated '>
                          Find Your Dream <br /> House By Us
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore.
                          </p>
                        </div>
                        <div className='btn-wrapper animated go-top'>
                          <Link to='/shop' className='theme-btn-1 btn btn-effect-1'>
                            Make An Enquiry
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
      </div>
    );
  }
}

export default BannerV3;
