import React from 'react';
import moment from 'moment';
import 'moment/locale/pl';

moment.locale('pl');

const UsersNotifications = (props) => {
  const { userNotifications } = props;
  console.log(userNotifications);

  return (
    <div>
      <div>
        <span>Notyfikacje</span>
      </div>
      <ul>
        {userNotifications && userNotifications.map(item => (
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

export default UsersNotifications;
