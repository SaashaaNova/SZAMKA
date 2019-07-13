import React from 'react';
import './MainFrontPicture.scss';
import {
  Link,
} from 'react-router-dom';

const MainFrontPicture = () => (
  <section className="font-pg-bg">
    <div className="container">

      <div className="font-pg-bg-txt">
        <h1>
          Rozpocznij z nami przygdę z{' '}
          <span>gotowaniem</span>
        </h1>
        <Link to="/signup">
          <button type="button">Dołącz</button>
        </Link>

      </div>

    </div>
  </section>
);

export default MainFrontPicture;
