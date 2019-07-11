import React, { Component } from 'react';
import RecipeTile from './RecipeTile';
import RecipeFilter from './RecipeFilter';
import './RecipesList.scss';

export class RecipesList extends Component {
    state = {
      activeType: 'all',
    };

    handleChange = (type) => {
      this.setState({
        activeType: type,
      });
    }

    render() {
      const { recipes } = this.props;
      const { activeType } = this.state;

      return (
        <div className="list-of-recipes">
          <div className="list-of-recipes-cnt">
            <div className="list-of-recipes-title">
              <p>Twoje Przepisy</p>
              <RecipeFilter recipes={recipes} onChange={this.handleChange} />
            </div>

            <div className="list-of-recipes-section">
              {recipes && recipes.map((recipe) => {
                if (recipe.type.indexOf(activeType) < 0 && activeType !== 'all') return null;
                return (
                  <RecipeTile recipe={recipe} key={recipe.id} recipeId={recipe.id} />
                );
              })}
            </div>
          </div>

        </div>
      );
    }
}

export default RecipesList;
