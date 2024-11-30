

import Link from 'next/link';
import React from 'react';
import { MdElderly, MdOutlineElderly, MdHandshake  } from 'react-icons/md';

const AboutHomeTwo = () => {
  return (
    <>
      <div className="it-about-4__area fix pt-120 pb-120">
        <div className="container">
          <div className="row align-items-xl-start align-items-center">
            <div className="col-xxl-5 col-xl-6 col-lg-6">
              <div className="it-about-4__thumb-box">
                <img src="assets/img/about/aboutImage.webp" alt="rk-theme" />
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-lg-6 wow itfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-about-3__right-wrap it-about-4__right-wrap">
                <div className="it-about-3__section-box">
                  <span className="it-section-subtitle-4">
                    {/* <em>//</em>  */}
                    KNOW ABOUT US</span>
                  <h4 className="it-section-title">What is Rehab Guardian?</h4>
                  <p>AI-based Real-Time Stroke Patient Activities Monitoring, Mobility Analysis and Recovery Progress Insights. Alerts for detection of any abnormality in patient. </p>
                </div>
                <div className="it-choose-2__item-box mb-25 d-flex align-items-center">
                  <div className="it-choose-2__item color d-flex align-items-center">
                    <MdHandshake size={60} color='#fc4830'/>

                    <h6>Strong <br />Trust</h6>
                  </div>
                  <div className="it-choose-2__item color d-flex align-items-center">
                    {/* <span>
                      <i className="flaticon-rocket"></i>
                    </span> */}
                      <MdOutlineElderly size={60} color='#fc4830'/>
                    <h6>Less <br />Burden</h6>
                  </div>
                </div>
                <div className="it-about-progress mb-30">
                  <div className="it-about-progress-item fix">
                    <h4>Recovery Rate Increment</h4>
                    <span className="progress-count">20%</span>
                    <div className="progress">
                      <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                        data-wow-delay=".3s" role="progressbar" data-width="82%" aria-valuenow={25}
                        aria-valuemin={0} aria-valuemax={100}
                        style={{ width: "20%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}>

                      </div>
                    </div>
                  </div>
                  <div className="it-about-progress-item fix">
                    <h4>Reduction in Mortality</h4>
                    <span className="progress-count">30%</span>
                    <div className="progress">
                      <div className="progress-bar wow slideInLeft" data-wow-duration="1s"
                        data-wow-delay=".3s" role="progressbar" data-width="37%" aria-valuenow={25}
                        aria-valuemin={0} aria-valuemax={100}
                        style={{ width: "70%", visibility: "visible", animationDuration: "1s", animationDelay: "0.3s", animationName: "slideInLeft" }}>

                      </div>
                    </div>
                  </div>
                </div>
                <Link className="it-red-btn hover-2" href="/about-us"><span>discover more</span></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHomeTwo;