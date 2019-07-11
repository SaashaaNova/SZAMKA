import React from 'react';
import './CreateRecipe.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DishOptionsRecipe from './DishOptionsRecipe';
import { updateRecipe } from '../../store/actions/recipesActions';

class UpdateRecipe extends React.Component {
    state = {
      title: this.props.recipe.title,
      description: this.props.recipe.description,
      type: this.props.recipe.type,
      color: '#417238',
      icon: 'coffee',
      polish: 'śniadanie',
    };

    UpdateRecipe = (e) => {
      e.preventDefault();
      const { recipeId, action } = this.props;
      this.props.updateRecipe(recipeId, this.state);
      action();
    }

    handleChange = (e) => {
      e.preventDefault();

      this.setState({
        [e.target.id]: e.target.value,
      });
    }

    handleChangeSelect = (e) => {
      e.preventDefault();
      const dataColor = e.target.options[e.target.selectedIndex].dataset.color;
      const dataIcon = e.target.options[e.target.selectedIndex].dataset.icon;
      const dataPolish = e.target.options[e.target.selectedIndex].dataset.polish;

      this.setState({
        type: e.target.value,
        color: dataColor,
        icon: dataIcon,
        polish: dataPolish,
      });
    }


    render() {
      const { auth } = this.props;
      const { title, description, type } = this.state;

      if (!auth.uid) return <Redirect to="/" />;

      return (
        <div className="add-recipe">

          <div className="add-recipe-title">
            <h1>Edytuj swój przepis</h1>
          </div>

          <div className="recipe-basic-desc">
            <form onSubmit={this.UpdateRecipe}>
              <button>Zapisz</button>
              <div className="new-recipe-title">
                <label>Nowa nazwa</label>
                <input
                  value={title}
                  onChange={this.handleChange}
                  id="title"
                  type="text"
                />
              </div>
              <div className="recipe-desc">
                <label>Nowy opis</label>
                <textarea
                  value={description}
                  onChange={this.handleChange}
                  name=""
                  id="description"
                  cols="30"
                  rows="10"
                />
              </div>
              <div className="recipe-type">
                <label>Zmień typ posiłku</label>
                <select
                  id={type}
                  value={type}
                  onChange={this.handleChangeSelect}
                >
                  <DishOptionsRecipe />
                </select>
              </div>

            </form>
          </div>

        </div>

      );
    }
}

const mapDispatchToProps = dispatch => ({
  updateRecipe: (recipeId, updatedRecipe) => { dispatch(updateRecipe(recipeId, updatedRecipe)); },
});

const mapStateToProps = state => ({
  auth: state.firesbase.auth,
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateRecipe);
