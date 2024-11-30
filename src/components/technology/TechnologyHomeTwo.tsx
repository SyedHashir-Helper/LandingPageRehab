
import React from 'react';
import Count from '../common/count';
import Link from 'next/link';
import Image from 'next/image';
const TechnologyHomeTwo = () => {
  return (
    <>
      <div className="it-technology-4__area fix p-relative pt-120 pb-120">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 wow itfadeLeft" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-technology-4__right-box">
                <div className="it-technology-4__title-box pb-15">
                  <span className="it-section-subtitle-4">
                    {/* <em>//</em>  */}
                    SHORT INTRO</span>
                  <h4 className="it-section-title">We are important part of your recovery journey</h4>
                </div>
                <div className="it-technology-4__text pb-10">
                  <p>Through CCTV cameras integration, we analyze patient activities 24/7 and log them. If any abnormality
                    happens, alerts are generated and sent to multiple persons. We integrate sensors for gathering biometrics of patient.
                  </p>
                </div>
                <div className="it-choose-2__item-wrap mb-60 d-flex align-items-center">
                  <div className="it-choose-2__item active-2 d-flex align-items-center">
                    <span>
                      <i className="fas fa-user-nurse"></i>
                    </span>
                    <h6>We are <br />your Caregiver</h6>
                  </div>
                  <div className="it-choose-2__text">
                    <span><b data-purecounter-duration="1" data-purecounter-end="428"
                      className="purecounter"> <Count number={100} />% </b> <br />Trust & Belief
                    </span>
                  </div>
                </div>
                <div className="it-technology-4__item d-flex align-items-center text-center p-relative">
                  <Link className="it-red-btn hover-2" href="/about-us"><span>discover more</span></Link>
                  <div className="it-technology-4__icon-2 d-none d-xl-block">
                    <span><i className="flaticon-badge"></i></span>
                  </div>
                  <p className="text-start d-none d-xl-block">We are High Quality <br /> AI Solution</p>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="it-technology-4__thumb-box p-relative text-center text-lg-end">
                <div className="it-technology-4__thumb">
                  <Image src="assets/img/technology/tech1.jpg" alt="rk-theme" />
                </div>
                <div className="it-technology-4__thumb-sm">
                  <Image src="assets/img/technology/tech2.jpg" alt="rk-theme" />
                </div>
                <div className="it-technology-4__shape d-none d-md-block">
                  <Image src="assets/img/technology/shape-4-1.png" alt="rk-theme" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechnologyHomeTwo;