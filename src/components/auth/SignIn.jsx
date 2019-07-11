import React from 'react';
import {
  Link,
  withRouter,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import './SignIn.scss';


import { signIn } from '../../store/actions/authActions';

class SignIn extends React.Component {
    state = {
      email: '',
      password: '',
    }

    signIn = (e) => {
      e.preventDefault();
      this.props.signIn(this.state);
    }

    handleChange = (e) => {
      this.setState({
        [e.target.id]: e.target.value,
      });
    }

    render() {
      const { authError, auth } = this.props;
      const { email, password } = this.state;

      if (auth.uid) return <Redirect to="/dashboard" />;

      return (
        <div className="new-user-container">
          <div className="new-user-log-in">
            <div className="new-user-title">
              <h1>Zaloguj się </h1>
              <p>kontynuuj z nami przygodę </p>
            </div>


            <div className="Input">

              <form onSubmit={this.signIn}>

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
                  value={password}
                  onChange={this.handleChange}
                  type="password"
                  name="password"
                  className="form-control-log-in"
                  id="password"
                  placeholder="hasło"
                />

                <button>Zaloguj</button>
                <div>
                  { authError ? <p>{authError}</p> : null }
                </div>
              </form>

            </div>

            <div className="go-to-register">
              <p>Nie masz jeszcze konta ?</p>
              <Link to="/signup">
                <button>Zarejstruj się</button>
              </Link>
            </div>
          </div>
        </div>
      );
    }
}

const mapStateToProps = state => ({
  authError: state.auth.authError,
  auth: state.firesbase.auth,
});

const mapDispatchToProps = dispatch => ({
  signIn: creds => dispatch(signIn(creds)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SignIn));
