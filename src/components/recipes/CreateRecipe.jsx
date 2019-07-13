import React from 'react';
import './CreateRecipe.scss';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import DishOptionsRecipe from './DishOptionsRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { createRecipe } from '../../store/actions/recipesActions';

library.add(faPlus);

class CreateRecipe extends React.Component {
    state = {
      title: '',
      description: '',
      ingredient: '',
      instruction: '',
      ingredientsArr: [],
      instructionsArr: [],
      type: 'breakfast',
      color: '#417238',
      icon: 'coffee',
      polish: 'śniadanie',
    };

    CreateNewRecipe = (e) => {
      e.preventDefault();

      this.props.createRecipe(this.state);
      this.props.history.push('/dashboard/recipes-list');
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

    onAddItem = () => {
      const { ingredient } = this.state;

      if (ingredient) {
        this.setState((state) => {
          const array = [...state.ingredientsArr, state.ingredient];

          return {
            ingredientsArr: array,
            ingredient: '',
          };
        });
      } else {
        this.setState((state) => {
          const array = [...state.instructionsArr, state.instruction];

          return {
            instructionsArr: array,
            instruction: '',
          };
        });
      }
    }


    render() {
      const { auth } = this.props;
      const {
        type, ingredient, ingredientsArr, instruction, instructionsArr,
      } = this.state;

      if (!auth.uid) return <Redirect to="/" />;

      return (
        <div className="add-recipe">
          <div className="recipe-basic-desc">
            <form onSubmit={this.CreateNewRecipe}>
              <div className="add-recipe-title">
                <h1>Dodaj swój nowy przepis</h1>
                <button>Zapisz</button>
              </div>

              <div className="form-cnt">
                <div className="new-recipe-title">
                  <label>Nazwa</label>
                  <input
                    onChange={this.handleChange}
                    id="title"
                    type="text"
                  />
                </div>
                <div className="recipe-type">
                  <label>Jaki typ posiłku ?</label>
                  <select
                    id={type}
                    value={this.value}
                    onChange={this.handleChangeSelect}
                  >
                    <DishOptionsRecipe />
                  </select>
                </div>
                <div className="recipe-desc">
                  <label>Opis</label>
                  <textarea
                    onChange={this.handleChange}
                    name=""
                    id="description"
                    cols="30"
                    rows="3"
                  />
                </div>
              </div>
              
              <div className="form-cnt">
                <div className="ingredients">
                  <div>
                    <input
                        value={ingredient}
                        onChange={this.handleChange}
                        id="ingredient"
                        type="text"
                        placeholder= 'Dodaj składnik'
                      />
                      <button
                        disabled={!ingredient}
                        onClick={this.onAddItem}
                      >
                         <FontAwesomeIcon icon={faPlus} />
                      </button>
                  </div>
                  
                  
                    <ul>
                      {ingredientsArr.map((ingredient, key) => (
                        <li key={key}>{ingredient}</li>
                      ))}
                    </ul>
                  
                </div>
              
                <div className="instructions">
                  <div>
                    <textarea
                      value={instruction}
                      onChange={this.handleChange}
                      name=""
                      id="instruction"
                      cols="30"
                      rows="3"
                      placeholder= 'Dodaj krok instrukcji'
                    />

                    <button
                      disabled={!instruction}
                      onClick={this.onAddItem}
                    >
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                  </div>
                 
                  <ol>
                    {instructionsArr.map((instruction, key) => (
                      <li key={key}>{instruction}</li>
                    ))}
                  </ol>
                  
                </div>
              


              </div>
             
            </form>
          </div>

        </div>

      );
    }
}

const mapStateToProps = state => ({
  auth: state.firesbase.auth,
});

const mapDispatchToProps = dispatch => ({
  createRecipe: recipe => dispatch(createRecipe(recipe)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe);
