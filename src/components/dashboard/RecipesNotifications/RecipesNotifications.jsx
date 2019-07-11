import React from 'react';
import moment from 'moment';
import 'moment/locale/pl';

moment.locale('pl');

const RecipesNotifications = (props) => {
  const { recipeNotifications } = props;

  return (
    <div>
      <div>
        <span>Najnowsze przepisy</span>
      </div>
      <ul>
        {recipeNotifications && recipeNotifications.map(item => (
          <li key={item.id}>
            <span>{item.content} </span>
            <span>{item.title} </span>
            <span>{item.name}</span>
            <div>
              {moment(item.time.toDate()).fromNow()}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesNotifications;
