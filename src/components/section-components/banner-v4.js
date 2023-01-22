import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class BannerV4 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className='le__slider-area le__slider-2--- le__slider-6 section-bg-2'>
        <div className='le__slide-one-active slick-slide-arrow-1 slick-slide-dots-1 arrow-white'>
          {/* le__slide-item */}
          <div
            className='le__slide-item le__slide-item-2--- le__slide-item-6 text-color-white bg-image bg-overlay-theme-black-60'
            data-bs-bg={publicUrl + "assets/img/slider/14.jpg"}
          >
            <div className='le__slide-item-inner text-center'>
              <div className='container'>
                <div className='row'>
                  <div className='col-lg-12 align-self-center'>
                    <div className='slide-item-info'>
                      <div className='slide-item-info-inner le__slide-animation'>
                        <div className='slide-video mb-50'>
                          <a
                            className='le__video-icon-2 le__video-icon-2-border--- border-radius-no le__secondary-bg'
                            href='https://www.youtube.com/embed/tlThdr3O5Qo'
                            data-rel='lightcase:myCollection'
                          >
                            <i className='fa fa-play' />
                          </a>
                        </div>
                        <h6 className='slide-sub-title white-color animated'>
                          <span>
                            <i className='fas fa-home' />
                          </span>{" "}
                          Real Estate Agency
                        </h6>
                        <h1 className='slide-title text-uppercase animated '>
                          Find Your Dream <br /> House By Us
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BannerV4;
