import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './DashboardNavBar.scss';
import { connect } from 'react-redux';

import {
  Link,
} from 'react-router-dom';
import SignedInLinks from '../../landing-page/Navbar/SignedInLinks';

const DashboardNavBar = (props) => {
  const { profile } = props;

  return (
    <header className="dashboard-header">
      <div>
        <Link to="/">
          <h1>Szamka</h1>
        </Link>
      </div>

      <div className="dashboard-site-nav-cnt">
        <nav className="dashboard-site-nav">
          <ul>
            <li className="dashboard-link">
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faHome} />
              </Link>
            </li>
            <li className="go-to-recipes">
              <Link to="/dashboard/recipes-list">
                Przepisy
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="user-menu">
        <SignedInLinks profile={profile} />
      </div>

    </header>
  );
};

const mapStateToProps = state => ({
  profile: state.firesbase.profile,
});


export default connect(mapStateToProps)(DashboardNavBar);
