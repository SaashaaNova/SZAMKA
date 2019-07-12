import React from 'react';
import RecipesNotifications from '../RecipesNotifications/RecipesNotifications';
import UsersNotifications from '../UsersNotifications/UsersNotifications';
import './DashboardWelcome.scss';

export default function DashboardWelcome(props) {
  const { recipeNotifications, userNotifications } = props;

  return (
    <div className="dashboard-opt-cnt">
      <div className="profile-main-notificationes">
        <RecipesNotifications recipeNotifications={recipeNotifications} />
        <UsersNotifications userNotifications={userNotifications}/>
      </div>
    </div>
  );
}
