import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../../store/actions/authActions';
import './SignInLinks.scss';
import { NavLink } from 'react-router-dom';


class SignedInLinks extends Component {
    state = {
      active: false,
    };

    toggleClass = () => {
      const currentState = this.state.active;
      this.setState({ active: !currentState });
    };

    render() {
      return (
        <div onClick={this.toggleClass} className="user-opts">
          <span className="avatar">
            <NavLink to="/dashboard">
              {this.props.profile.initials}
            </NavLink>
          </span>
          <div className="avatar-opts" style={{ height: !this.state.active ? '0' : null }}>
            <ul>
              <li>
                <NavLink to="dashboard/profile">
                  <span>Profil</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/">
                  <span onClick={this.props.signOut}>Wyloguj</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(signOut()),
});

export default connect(null, mapDispatchToProps)(SignedInLinks);
