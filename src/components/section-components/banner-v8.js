import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class BannerV8 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className='le__slider-area le__slider-6 mb-120---'>
        <div className='le__slide-one-active slick-slide-arrow-1 slick-slide-dots-1'>
          {/* le__slide-item */}
          <div
            className='le__slide-item--- le__slide-item-9 section-bg-1 bg-image'
            data-bs-bg={publicUrl + "assets/img/slider/13.jpg"}
          >
            <div className='le__slide-item-inner'>
              <div className='slide-item-info bg-overlay-white-90 text-center'>
                <div className='slide-item-info-inner  le__slide-animation'>
                  <h1 className='slide-title animated text-uppercase'>OUR MODERN LIVING luxeS</h1>
                  <h4 className='slide-sub-title text-uppercase animated'>SITEWIDE 21% OFF</h4>
                  <div className='btn-wrapper animated go-top'>
                    <Link to='/shop' className='theme-btn-1 btn btn-effect-1 text-uppercase'>
                      Shop now
                    </Link>
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

export default BannerV8;
