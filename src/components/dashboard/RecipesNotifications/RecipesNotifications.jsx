import React from 'react';
import moment from 'moment';
import 'moment/locale/pl';
import './RecipesNotifications.scss';

moment.locale('pl');

const RecipesNotifications = (props) => {
  const { recipeNotifications } = props;

  return (
    <div className='recipe-notify-cnt'>
      <div className='recipe-notify-title'>
        <span>Najnowsze przepisy</span>
      </div>
      <ul className='recipe-notify-list'>
        {recipeNotifications && recipeNotifications.map(item => (
          <li key={item.id}>
            <div className='recipe-notify-first-child'>
              <span className='recipe-notify-item-content'>{item.content} </span>
              <div className='recipe-notify-item-date'>
                {moment(item.time.toDate()).fromNow()}
            </div>
            </div>
            <span className='recipe-notify-item-title'>{item.title} </span>
            <span className='recipe-notify-item-name'>{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesNotifications;
