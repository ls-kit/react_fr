import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class FeaturesV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    let customClass = this.props.customClass ? this.props.customClass : "";

    return (
      <div className={customClass}>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div className='section-title-area le__section-title-2--- text-center'>
                <h6 className='section-subtitle section-subtitle-2 le__secondary-color'>Our Services</h6>
                <h1 className='section-title'>Our Main Focus</h1>
              </div>
            </div>
          </div>
          <div className='row le__custom-gutter--- justify-content-center go-top'>
            <div className='col-lg-4 col-sm-6 col-12'>
              <div className='le__feature-item le__feature-item-6 text-center bg-white  box-shadow-1'>
                <div className='le__feature-icon'>
                  <img src={publicUrl + "assets/img/icons/icon-img/21.png"} alt='#' />
                </div>
                <div className='le__feature-info'>
                  <h3>
                    <Link to='/service-details'>Buy a home</Link>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we can match you with a house you
                    will want to call home.
                  </p>
                  <Link className='le__service-btn' to='/service-details'>
                    Find A Home <i className='flaticon-right-arrow' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-12'>
              <div className='le__feature-item le__feature-item-6 text-center bg-white  box-shadow-1 active'>
                <div className='le__feature-icon'>
                  <img src={publicUrl + "assets/img/icons/icon-img/22.png"} alt='#' />
                </div>
                <div className='le__feature-info'>
                  <h3>
                    <Link to='/service-details'>Rent a home</Link>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we can match you with a house you
                    will want to call home.
                  </p>
                  <Link className='le__service-btn' to='/service-details'>
                    Find A Home <i className='flaticon-right-arrow' />
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-sm-6 col-12'>
              <div className='le__feature-item le__feature-item-6 text-center bg-white  box-shadow-1'>
                <div className='le__feature-icon'>
                  <img src={publicUrl + "assets/img/icons/icon-img/23.png"} alt='#' />
                </div>
                <div className='le__feature-info'>
                  <h3>
                    <Link to='/service-details'>Sell a home</Link>
                  </h3>
                  <p>
                    over 1 million+ homes for sale available on the website, we can match you with a house you
                    will want to call home.
                  </p>
                  <Link className='le__service-btn' to='/service-details'>
                    Find A Home <i className='flaticon-right-arrow' />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturesV1;
