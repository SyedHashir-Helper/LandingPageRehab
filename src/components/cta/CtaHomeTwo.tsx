

import Link from 'next/link';
import React from 'react';

const CtaHomeTwo = () => {
  return (
    <>
      <div className="it-cta-3__area it-cta-3__style-2 pt-120">
        <div className="container container-large">
          <div className="it-cta-3__bg">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-md-8">
                <div className="it-cta-3__text z-index">
                  <h4 className="it-cta-3__title">Fight with Stroke, Being at Home <br />
                    with innovative AI Solutions</h4>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="it-cta-3__text text-start text-md-end">
                  <Link className="it-white-btn hover-2" href="/service-details"><span>SERVICE NOW</span></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaHomeTwo;