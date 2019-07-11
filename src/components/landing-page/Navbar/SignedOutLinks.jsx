import React from 'react';
import {
  NavLink,
} from 'react-router-dom';

const SignedOutLinks = () => (
  <div>
    <div className="log-in-button">
      <NavLink to="/signin">
        <button type="button">Zaloguj</button>
      </NavLink>
    </div>
    <div className="log-out-button">
      <NavLink to="/signup">
        <button type="button">Zarejstruj</button>
      </NavLink>
    </div>
  </div>
);

export default SignedOutLinks;
