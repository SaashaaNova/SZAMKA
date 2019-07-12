import React from 'react';
import moment from 'moment';
import 'moment/locale/pl';

moment.locale('pl');

const UsersNotifications = (props) => {
  const { userNotifications } = props;
  console.log(userNotifications);

  return (
    <div className='user-notify-cnt'>
      <div className='user-notify-title'>
        <span>Notyfikacje</span>
      </div>
      <ul className='user-notify-list'>
        {userNotifications && userNotifications.map(item => (
          <li key={item.id}>
            <div className='user-notify-item-date'>
              {moment(item.time.toDate()).fromNow()}
            </div>
            <span className='user-notify-item-content'>{item.content} </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersNotifications;
