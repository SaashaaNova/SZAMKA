import React from 'react';
import {
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import DashboardNavBar from './DashboardNavBar/DashboardNavBar';
import DashboardWelcome from './DashboardWelcome/DashboardWelcome';
import RecipesList from '../recipes/RecipesList';
import CreateRecipe from '../recipes/CreateRecipe';
import UpdateRecipe from '../recipes/UpdateRecipe';
import AddBntsCmp from './AddBtnsComponent/AddBtnsCmp';
import './Dashboard.scss';


function Dashboard(props) {
  const {
    recipes, auth, recipeNotifications, userNotifications,
  } = props;

  if (!auth.uid) return <Redirect to="/" />;
  return (

    <div className="dashboard-bg">
      <div className="dashboard-container">

        <DashboardNavBar />

        <div className="dashboard-main-desktop">
          <AddBntsCmp />
          <Switch>
            <Route
              exact
              path="/dashboard"
              render={routeProps => (
                <DashboardWelcome {...routeProps} recipeNotifications={recipeNotifications} userNotifications={userNotifications} />
              )}
            />
            <Route
              path="/dashboard/recipes-list"
              render={routeProps => (
                <RecipesList {...routeProps} recipes={recipes} />
              )}
            />
            <Route path="/dashboard/create-recipe" component={CreateRecipe} />
            <Route path="/dashboard/update/recipe/:id" component={UpdateRecipe} />
          </Switch>

        </div>

      </div>

    </div>

  );
}

const mapStateToProps = state => ({
  recipes: state.firestore.ordered.recipes,
  auth: state.firesbase.auth,
  recipeNotifications: state.firestore.ordered.recipeNotifications,
  userNotifications: state.firestore.ordered.userNotifications,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipes' },
    { collection: 'recipeNotifications', limit: 5, orderBy: ['time', 'desc'] },
    { collection: 'userNotifications', limit: 5, orderBy: ['time', 'desc'] },
  ]),
)(Dashboard);
