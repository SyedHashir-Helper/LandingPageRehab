

import Link from 'next/link';
import React from 'react';
import { FaClock,FaRegAddressBook, FaWalking } from 'react-icons/fa';
import { AiFillWarning } from "react-icons/ai";
import { GiHealthNormal } from "react-icons/gi";
import Image from 'next/image';
const ServiceHomeTwo = () => {
  return (
    <>
      <div className="it-service-4__area fix grey-bg-2 it-service-style-2 p-relative pt-120 pb-120">
        <div className="it-service-4__shape-2">
          <Image src="assets/img/service/3716313.png" alt="rk-theme" />
        </div>
        <div className="container">
          <div className="it-service-4__section-wrap">
            <div className="row align-items-end">
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="it-service-4__section-box">
                  <span className="it-section-subtitle-4">
                    {/* <em>//</em>  */}
                    OUR SHOWCASE</span>
                  <h4 className="it-section-title">Service We are Offering <br />
                    to Our Customer</h4>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="it-service-4__top-text">
                  <p>AI-powered stroke patient monitoring with real-time activity recognition, mobility tracking, and abnormality detection to ensure personalized, continuous care and faster recovery.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row row-cols-xl-5 row-cols-lg-3 row-cols-md-3 row-cols-1 row-cols-sm-2">
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".3s">
              <div className="it-service-4__item fix text-center">
                <span>
                  {/* <i className="flaticon-digital-marketing"></i> */}
                  <FaClock/>
                </span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Real Time <br />
                    Monitoring</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly">
                  <div className="it-service-4__shape-1">
                    <Image src="assets/img/about/shape-4-4.png" alt="rk-theme" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".5s">
              <div className="it-service-4__item fix text-center">
                <span>
                  {/* <i className="flaticon-web-design"></i> */}
                  <FaRegAddressBook/>
                  </span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Activities  <br />
                  Recognition</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly">
                  <div className="it-service-4__shape-1">
                    <Image src="assets/img/about/shape-4-4.png" alt="rk-theme" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".7s">
              <div className="it-service-4__item fix text-center">
                <span>
                  {/* <i className="flaticon-bar-chart"></i> */}
                  <FaWalking/>
                  </span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Mobility <br />
                    Calculation</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly">
                  <div className="it-service-4__shape-1">
                    <Image src="assets/img/about/shape-4-4.png" alt="rk-theme" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay=".9s">
              <div className="it-service-4__item fix text-center">
                <span>
                  {/* <i className="flaticon-support"></i> */}
                  <AiFillWarning/>
                  </span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Abnormality <br />
                    Detection</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly">
                  <div className="it-service-4__shape-1">
                    <Image src="assets/img/about/shape-4-4.png" alt="rk-theme" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col mb-30 wow itfadeUp" data-wow-duration=".9s" data-wow-delay="1s">
              <div className="it-service-4__item fix text-center">
                <span>
                  {/* <i className="flaticon-analytics"></i> */}
                  <GiHealthNormal/>
                  </span>
                <Link href="/service-details">
                  <h5 className="it-service-4__title">Personalized <br />
                    Rehabilitation</h5>
                </Link>
                <div className="it-service-4__link">
                  <Link href="/service-details">Read More</Link>
                </div>
                <div className="it-service-4__overly">
                  <div className="it-service-4__shape-1">
                    <Image src="assets/img/about/shape-4-4.png" alt="rk-theme" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="it-service-4__bottom-text text-center pt-20">
                <span>Need our solutions & services? <strong>Send a request
                  now</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHomeTwo;