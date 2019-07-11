import React from 'react';
import './WhyUs.scss';
import {
  Link,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCarrot, faCat, faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCarrot, faCat, faCookieBite);

const WhyUs = () => (

  <section className="features-bg">
    <div className="features-container container">

      <div className="features-title">
        <h2>Lorem ipsum dolor sit amet.</h2>
      </div>

      <div className="features-content-container">

        <div className="feature-content">
          <div className="features-icon">
            <FontAwesomeIcon icon="cookie-bite" />
          </div>
          <div className="features-content-title">
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="features-content-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque quas blanditiis dignissimos quo. Pariatur cum culpa officiis odio architecto!
            </p>
          </div>

        </div>

        <div className="feature-content">
          <div className="features-icon">
            <FontAwesomeIcon icon="cat" />
          </div>
          <div className="features-content-title">
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="features-content-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque quas blanditiis dignissimos quo. Pariatur cum culpa officiis odio architecto!
            </p>
          </div>

        </div>

        <div className="feature-content">
          <div className="features-icon">
            <FontAwesomeIcon icon="carrot" />
          </div>
          <div className="features-content-title">
            <h3>Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="features-content-text">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet neque quas blanditiis dignissimos quo. Pariatur cum culpa officiis odio architecto!
            </p>
          </div>

        </div>


      </div>

      <div className="features-button">
        <Link to="/register">
          <button>Lorem ipsum</button>
        </Link>
      </div>

    </div>
  </section>
);

export default WhyUs;
