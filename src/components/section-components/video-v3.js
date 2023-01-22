import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class VideoV3 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className='le__video-popup-area le__video-popup-margin'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-12'>
              <div
                className='le__video-bg-img le__video-popup-height-600 bg-overlay-black-10-- bg-image'
                data-bs-bg={publicUrl + "assets/img/bg/15.jpg"}
              >
                <a
                  className='le__video-icon-2 le__video-icon-2-border border-radius-no le__secondary-bg'
                  href='https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0'
                  data-rel='lightcase:myCollection'
                >
                  <i className='fa fa-play' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default VideoV3;
