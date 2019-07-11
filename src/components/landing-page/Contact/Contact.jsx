import React from 'react';
import './Contact.scss';

const Contact = () => (
  <section className="stay-in-contact-bg">
    <div className="stay-in-contact-container container">
      <div className="stay-in-contact-title">
        <h2>Pozostań z nami w kontakcie</h2>
      </div>
      <div className="stay-in-contact-txt">
        <p>Zostaw swój email, abys zawsze był na bierząco</p>
      </div>
      <div>
        <form action="">
          <div className="stay-in-contact-input">
            <input type="text" placeholder="email" className="input-email" />
            <button className="input-button">Wyślij</button>
          </div>
        </form>

      </div>

    </div>
  </section>
);

export default Contact;
