

import React from 'react';
import { FaRegAddressBook, FaPlug, FaDatabase } from "react-icons/fa";
import { AiOutlineRobot } from "react-icons/ai";
import { IoCameraOutline } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

const SolutionHomeTwo = () => {
  return (
    <>
      <div className="it-solution-4__area fix z-index-3 black-bg pt-100 pb-100">
        <div className="it-solution-4__shape-1">
          <img src="assets/img/solution/solution-bg-3.png" alt="rk-theme" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="it-solution-4__section-box text-center mb-25">
                <span className="it-section-subtitle-4">
                  {/* <em>//</em>  */}
                  Our Features</span>
                <h4 className="it-section-title text-white pb-25">Improve and Innovate with <br />the following
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="it-solution-4__plr">
          <div className="container-fluid g-0">
            <div className="row">
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".3s">
                <div className="it-solution-4__item text-center">
                  <span>
                    <i className="fas fa-book"></i>
                  </span>
                  <h5 className="it-solution-4__title">Activity Logs & Reports</h5>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".5s">
                <div className="it-solution-4__item text-center">
                  <span>
                    {/* <i className="flaticon-advertisig-agency"></i> */}
                    <i className="fas fa-watch"></i>
                  </span>
                  <h5 className="it-solution-4__title">Sensors Integration</h5>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".7s">
                <div className="it-solution-4__item text-center">
                  <span>
                    {/* <i className="flaticon-software-application"></i> */}
                    <i className="fas fa-database"></i>
                  </span>
                  <h5 className="it-solution-4__title">Custom DEMMI Dataset</h5>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay=".9s">
                <div className="it-solution-4__item text-center">
                  <span>
                    {/* <i className="flaticon-money-transfer"></i> */}
                    <i className="fas fa-brain"></i>
                  </span>
                  <h5 className="it-solution-4__title">Adaptive AI Algorithms</h5>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay="1s">
                <div className="it-solution-4__item text-center">
                  <span>
                    {/* <i className="flaticon-rocket-launch"></i> */}
                    <i className="fas fa-camera-retro"></i>
                  </span>
                  <h5 className="it-solution-4__title">Cameras Integration</h5>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 mb-30 wow itfadeUp" data-wow-duration=".9s"
                data-wow-delay="1.1s">
                <div className="it-solution-4__item text-center">
                  <span>
                    {/* <i className="flaticon-internet"></i> */}
                    <i className="fas fa-chart-bar"></i>
                    {/* <MdDashboard/>   */}
                  </span>
                  <h5 className="it-solution-4__title">User-Friendly Dashboard</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionHomeTwo;