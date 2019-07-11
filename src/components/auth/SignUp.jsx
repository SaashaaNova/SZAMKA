import React from 'react';
import {
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import './SignUp.scss';

class SignUp extends React.Component {
    state = {
      email: '',
      firstName: '',
      passwordOne: '',
      passwordTwo: '',
    }

    signUp = (e) => {
      e.preventDefault();
      this.props.signUp(this.state);
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }

    render() {
      const { auth, authError } = this.props;
      const {
        email, firstName, passwordOne, passwordTwo,
      } = this.state;

      if (auth.uid) return <Redirect to="/dashboard" />;

      return (
        <div className="new-user-container">
          <div className="new-user-log-in">
            <div className="new-user-title">
              <h1>Zarejstruj się</h1>
              <p>i rozpocznij przygodę z gotowaniem</p>
            </div>


            <div className="Input">

              <form onSubmit={this.signUp}>

                <input
                  value={email}
                  onChange={this.handleChange}
                  type="email"
                  name="email"
                  className="form-control-log-in"
                  id="email"
                  placeholder="email"
                />

                <input
                  value={firstName}
                  onChange={this.handleChange}
                  type="text"
                  name="firstName"
                  className="form-control-log-in"
                  id="firstName"
                  placeholder="Imię"
                />

                <input
                  value={passwordOne}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control-log-in"
                  id="passwordOne"
                  placeholder="hasło"
                />

                <input
                  value={passwordTwo}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control-log-in"
                  id="passwordTwo"
                  placeholder="Powtórz hasło"
                />

                <button>Zarejstruj się</button>
                <div>
                  { authError ? <p>{authError}</p> : null }
                </div>

              </form>

            </div>

            <div className="go-to-register">
              <p>Masz już konto ?</p>
              <Link to="/signin">
                <button>Zaloguj się</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  auth: state.firesbase.auth,
  authError: state.auth.authError,
});

const mapDispatchToProps = dispatch => ({
  signUp: creds => dispatch(signUp(creds)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignUp));
