import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  fas, faCarrot, faCoffee, faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import RecipeDetails from './RecipeDetails';

library.add(fas, faCarrot, faCoffee, faUtensils);

export class RecipeTile extends Component {
    state = {
      active: true,
    };

    showRecipeDetail = () => {
      const { active } = this.state;
      const currentState = active;
      this.setState({ active: !currentState });
    };

    render() {
      const { recipe, auth, recipeId } = this.props;
      const { active } = this.state;

      let showDetails;

      if (!auth.uid) return <Redirect to="/" />;

      if (!active) {
        showDetails = <RecipeDetails action={this.showRecipeDetail} recipe={recipe} recipeId={recipeId} />;
      }

      return (
        <div className="recipe-tile-cnt">
          <div className="recipe-tile">
            <div className="recipe-img">
              <div style={{ background: recipe.color }}>
                <FontAwesomeIcon icon={recipe.icon} />
              </div>
            </div>
            <span className="recipe-title">{recipe.title}</span>
            <button type="button" onClick={this.showRecipeDetail} className="recipe-more-bnt">
                więcej
            </button>
          </div>
          {showDetails}
        </div>

      );
    }
}

const mapStateToProps = (state, ownProps) => {
  console.log('state', state)
  const { id } = ownProps.recipe;
  const { recipes } = state.firestore.data;
  const recipe = recipes ? recipes[id] : null;

  return {
    recipe,
    auth: state.firesbase.auth,
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'recipies' },
  ]),
)(RecipeTile);
