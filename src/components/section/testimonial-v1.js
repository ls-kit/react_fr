import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class Testimonial extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div
        className='le__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70'
        data-bs-bg={publicUrl + "assets/img/bg/20.jpg"}
      >
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area le__section-title-2--- text-center'>
                <h6 className='section-subtitle section-subtitle-2 le__secondary-color'>Our Testimonial</h6>
                <h1 className='section-title'>Clients Feedback</h1>
              </div>
            </div>
          </div>
          <div className='row le__testimonial-slider-5-active slick-arrow-1'>
            <div className='col-lg-4'>
              <div className='le__testimonial-item le__testimonial-item-7'>
                <div className='le__testimoni-info'>
                  <div className='le__testimoni-info-inner'>
                    <div className='le__testimoni-img'>
                      <img src={publicUrl + "assets/img/testimonial/1.jpg"} alt='#' />
                    </div>
                    <div className='le__testimoni-name-designation'>
                      <h5>Jacob William</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                  <p>
                    <i className='flaticon-left-quote-1' />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='le__testimonial-item le__testimonial-item-7'>
                <div className='le__testimoni-info'>
                  <div className='le__testimoni-info-inner'>
                    <div className='le__testimoni-img'>
                      <img src={publicUrl + "assets/img/testimonial/2.jpg"} alt='#' />
                    </div>
                    <div className='le__testimoni-name-designation'>
                      <h5>Kelian Anderson</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                  <p>
                    <i className='flaticon-left-quote-1' />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='le__testimonial-item le__testimonial-item-7'>
                <div className='le__testimoni-info'>
                  <div className='le__testimoni-info-inner'>
                    <div className='le__testimoni-img'>
                      <img src={publicUrl + "assets/img/testimonial/3.jpg"} alt='#' />
                    </div>
                    <div className='le__testimoni-name-designation'>
                      <h5>Adam Joseph</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                  <p>
                    <i className='flaticon-left-quote-1' />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
                </div>
              </div>
            </div>
            <div className='col-lg-4'>
              <div className='le__testimonial-item le__testimonial-item-7'>
                <div className='le__testimoni-info'>
                  <div className='le__testimoni-info-inner'>
                    <div className='le__testimoni-img'>
                      <img src={publicUrl + "assets/img/testimonial/1.jpg"} alt='#' />
                    </div>
                    <div className='le__testimoni-name-designation'>
                      <h5>James Carter</h5>
                      <label>Selling Agents</label>
                    </div>
                  </div>
                  <p>
                    <i className='flaticon-left-quote-1' />
                    Precious ipsum dolor sit amet consectetur adipisicing elit, sed dos mod tempor incididunt
                    ut labore et dolore magna aliqua. Ut enim ad min veniam, quis nostrud Precious ips um
                    dolor sit amet, consecte
                  </p>
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

export default Testimonial;
