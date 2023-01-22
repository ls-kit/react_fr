import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class BannerV7 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className='le__slider-area le__slider-6'>
        <div className='le__slide-one-active slick-slide-arrow-1 slick-slide-dots-1'>
          {/* le__slide-item */}
          <div
            className='le__slide-item--- le__slide-item-9 section-bg-1 bg-image'
            data-bs-bg={publicUrl + "assets/img/slider/52.jpg"}
          >
            <div className='le__slide-item-inner'>
              <div className='slide-item-info bg-overlay-white-90 text-center'>
                <div className='slide-item-info-inner slide-item-info-line-no  le__slide-animation'>
                  <div className='slide-item-car-dealer-form'>
                    {/* <div class="section-title-area le__section-title-2 text-center">
											<h1 class="section-title  text-color-white">Find Your <span class="le__secondary-color-3">Perfect</span> Car</h1>
										</div> */}
                    <h3 className='text-color-white--- text-center mb-30'>
                      Find Your <span className='le__secondary-color-3'>Perfect</span> Home
                    </h3>
                    <div className='le__car-dealer-form-tab'>
                      <div className='le__tab-menu  text-uppercase text-center'>
                        <div className='nav'>
                          <a className='active show' data-bs-toggle='tab' href='#le__form_tab_1_1'>
                            <i className='fas fa-home' />
                            Rent Home
                          </a>
                          <a data-bs-toggle='tab' href='#le__form_tab_1_2'>
                            <i className='fas fa-home' />
                            Sale Home
                          </a>
                        </div>
                      </div>
                      <div className='tab-content pb-10'>
                        <div className='tab-pane fade active show' id='le__form_tab_1_1'>
                          <div className='car-dealer-form-inner'>
                            <form action='#' className='le__car-dealer-form-box row'>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-car col-lg-12 col-md-12'>
                                <select className='nice-select'>
                                  <option>Property Type</option>
                                  <option>Apartment</option>
                                  <option>Co-op</option>
                                  <option>Condo</option>
                                  <option>Single Family Home</option>
                                </select>
                              </div>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-meter col-lg-12 col-md-12'>
                                <select className='nice-select'>
                                  <option>Location</option>
                                  <option>chicago</option>
                                  <option>London</option>
                                  <option>Los Angeles</option>
                                  <option>New York</option>
                                  <option>New Jersey</option>
                                </select>
                              </div>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-calendar col-lg-12 col-md-12'>
                                <select className='nice-select'>
                                  <option>Sub Location</option>
                                  <option>Bayonne</option>
                                  <option>Greenville</option>
                                  <option>Manhattan</option>
                                  <option>Queens</option>
                                  <option>The Heights</option>
                                  <option>Upper East Side</option>
                                  <option>West Side</option>
                                </select>
                              </div>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-calendar col-lg-12 col-md-12'>
                                <div className='btn-wrapper text-center mt-0 go-top'>
                                  {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                                  <Link
                                    to='/shop-right-sidebar'
                                    className='btn theme-btn-1 btn-effect-1 text-uppercase'
                                  >
                                    Search
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                        <div className='tab-pane fade' id='le__form_tab_1_2'>
                          <div className='car-dealer-form-inner'>
                            <form action='#' className='le__car-dealer-form-box row'>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-car col-lg-12 col-md-12'>
                                <select className='nice-select'>
                                  <option>Property Type</option>
                                  <option>Apartment</option>
                                  <option>Co-op</option>
                                  <option>Condo</option>
                                  <option>Single Family Home</option>
                                </select>
                              </div>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-meter col-lg-12 col-md-12'>
                                <select className='nice-select'>
                                  <option>Location</option>
                                  <option>chicago</option>
                                  <option>London</option>
                                  <option>Los Angeles</option>
                                  <option>New York</option>
                                  <option>New Jersey</option>
                                </select>
                              </div>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-calendar col-lg-12 col-md-12'>
                                <select className='nice-select'>
                                  <option>Sub Location</option>
                                  <option>Bayonne</option>
                                  <option>Greenville</option>
                                  <option>Manhattan</option>
                                  <option>Queens</option>
                                  <option>The Heights</option>
                                  <option>Upper East Side</option>
                                  <option>West Side</option>
                                </select>
                              </div>
                              <div className='le__car-dealer-form-item le__custom-icon le__icon-calendar col-lg-12 col-md-12'>
                                <div className='btn-wrapper text-center mt-0 go-top'>
                                  {/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
                                  <Link
                                    to='/shop-right-sidebar'
                                    className='btn theme-btn-1 btn-effect-1 text-uppercase'
                                  >
                                    Search
                                  </Link>
                                </div>
                              </div>
                            </form>
                          </div>
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

export default BannerV7;
