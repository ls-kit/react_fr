import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class VideoV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "image";

    return (
      <div className='le__video-popup-area le__video-popup-margin---'>
        <div
          className='le__video-bg-img le__video-popup-height-600--- bg-overlay-black-30 bg-image bg-fixed le__animation-pulse1'
          data-bs-bg={publicUrl + "assets/img/bg/19.jpg"}
        >
          <a
            className='le__video-icon-2 le__video-icon-2-border---'
            href='https://www.youtube.com/embed/X7R-q9rsrtU?autoplay=1&showinfo=0'
            data-rel='lightcase:myCollection'
          >
            <i className='fa fa-play' />
          </a>
        </div>
      </div>
    );
  }
}

export default VideoV1;
