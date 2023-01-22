import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Banner extends Component {
  render() {
    let publicUrl = "";
    // let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className='le__slider-area le__slider-3  section-bg-1 go-top'>
        <div className='le__slide-one-active slick-slide-arrow-1 slick-slide-dots-1'>
          {/* le__slide-item */}
          <div className='le__slide-item le__slide-item-2 le__slide-item-3-normal le__slide-item-3'>
            <div className='le__slide-item-inner'>
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
                        <div className='btn-wrapper animated '>
                          <Link to='/about' className='theme-btn-1 btn btn-effect-1 go-top'>
                            Make An Enquiry
                          </Link>
                          <a
                            className='le__video-play-btn bg-white'
                            href='https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0'
                            data-rel='lightcase'
                          >
                            <i className='icon-play  le__secondary-color' />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className='slide-item-img'>
                      <img src={publicUrl + "/assets/img/slider/slide2.jpg"} alt='#' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* le__slide-item */}
          <div className='le__slide-item le__slide-item-2  le__slide-item-3-normal le__slide-item-3'>
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
                          The Right Place <br />
                          of House Finding
                        </h1>
                        <div className='slide-brief animated'>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                            incididunt ut labore.
                          </p>
                        </div>
                        <div className='btn-wrapper animated'>
                          <Link to='/service' className='theme-btn-1 btn btn-effect-1'>
                            OUR SERVICES
                          </Link>
                          <Link to='/about' className='btn btn-transparent btn-effect-3'>
                            LEARN MORE
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className='slide-item-img slide-img-left'>
                      <img src={publicUrl + "/assets/img/slider/slide2.jpg"} alt='#' />
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

export default Banner;
