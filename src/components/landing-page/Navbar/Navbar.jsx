import React from 'react';
import { connect } from 'react-redux';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import './Navbar.scss';
import {
  Link,
} from 'react-router-dom';

const Navbar = (props) => {
  const { auth, profile } = props;

  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

  return (
    <header className="page-header">
      <div className="header-container container">
        <div className="title">
          <div>
            <Link to="/">
              <h1>Szamka</h1>
            </Link>
          </div>
        </div>


        <nav className="page-header-navigation-left-nav">

          <ul>
            <li className="nav-item">
              <a href="/">Poznaj&nbsp;nas</a>
            </li>
            <li className="nav-item">
              <a href="/">Szukaj&nbsp;inspiracji</a>
            </li>
            <li className="nav-item">
              <a href="/">Bądź z nami w kontakcie</a>
            </li>
          </ul>

        </nav>
        <div className="page-header-navigation-right-nav">

          <div className="phone-number">
            <h1>+48 555 555 555</h1>
          </div>
          <div className="profile-header-landing">
            {links}
          </div>
        </div>

      </div>
    </header>
  );
};

const mapStateToProps = state => ({
  auth: state.firesbase.auth,
  profile: state.firesbase.profile,
});

export default connect(mapStateToProps)(Navbar);
