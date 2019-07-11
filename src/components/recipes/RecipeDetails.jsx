// import React from 'react'

import React, { Component } from 'react';
import { connect } from 'react-redux';
import './RecipeDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEdit, faTrashAlt, faTimesCircle, faCarrot, faCoffee, faUtensils,
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { removeRecipe } from '../../store/actions/recipesActions';
import UpdateRecipe from './UpdateRecipe';

library.add(faEdit, faTrashAlt, faTimesCircle, faCarrot, faCoffee, faUtensils);

class RecipeDetails extends Component {
    state = {
      activeEdit: true,
    };


    showUpdateWindow = () => {
      const currentState = this.state.activeEdit;
      this.setState({ activeEdit: !currentState });
    };

    render() {
      const {
        recipe, action, recipeId, removeRecipe,
      } = this.props;
      const { activeEdit } = this.state;
      let showUpdateWindow;

      if (!activeEdit) {
        showUpdateWindow = <UpdateRecipe action={this.showUpdateWindow} recipe={recipe} recipeId={recipeId} />;
      }

      if (recipe) {
        const recipeNum = recipeId;

        return (
          <div className="recipe-details-cnt">
            <button className="close-detail-btn">
              <FontAwesomeIcon icon="times-circle" onClick={action} style={{ color: recipe.dishColor }} />
            </button>
            <div className="recipe-intro-detail">
              <div className="recipe-img-detail">
                <div style={{ background: recipe.color }}>
                  <FontAwesomeIcon icon={recipe.icon} />
                </div>
              </div>
              <div className="recipe-title-cnt">
                <span className="recipe-title-detail">
                  {recipe.title}
                  <button onClick={this.showUpdateWindow}>
                    <FontAwesomeIcon icon="edit" />
                  </button>
                  <button onClick={() => { removeRecipe(recipeNum); }}>
                    <FontAwesomeIcon icon="trash-alt" />
                  </button>
                </span>
                <span className="recipe-category">
                            kategoria: {recipe.polish}
                </span>
                <span className="recipe-desctription">
                  {recipe.description}
                </span>
              </div>
            </div>
            <div className="recipe-steps-detail">
              <div className="recipe-ingredients-list">
                <span>składniki</span>
                <ul className="ingredients-list">
                  {recipe.ingredientsArr.map((ingredient, key) => (
                    <li key={key}>{ingredient}</li>
                  ))}
                </ul>
              </div>
              <div className="recipe-preparation-steps">
                <span>sposób wykonania</span>
                <ol className="prepartaion-steps">
                  {recipe.instructionsArr.map((instruction, key) => (
                    <li key={key}>{instruction}</li>
                  ))}
                </ol>
              </div>
            </div>
            {showUpdateWindow}
          </div>
        );
      }
    }
}

const mapDispatchToProps = dispatch => ({
  removeRecipe: id => dispatch(removeRecipe(id)),
});

export default connect(null, mapDispatchToProps)(RecipeDetails);
