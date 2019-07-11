import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faCheck);

export class RecipeFilter extends Component {
    state = {
      currentType: 'all',
    }

    handleFilter = (type) => {
      this.props.onChange(type);
      this.setState({
        currentType: type,
      });
    }

    render() {
      const { recipes } = this.props;
      const { currentType } = this.state;

      const typeArr = ['all'];
      let dishType;
      let classNameType;

      recipes && recipes.map((recipe) => {
        if (typeArr.indexOf(recipe.type) < 0) {
          return typeArr.push(recipe.type);
        }
        return recipe;
      });

      const filterButtons = typeArr && typeArr.map((type) => {
        switch (type) {
          case 'all':
            dishType = 'wszystkie';
            classNameType = 'active-all';
            break;
          case 'breakfast':
            dishType = 'śniadanie';
            classNameType = 'active-breakfast';
            break;
          case 'dinner':
            dishType = 'obiad';
            classNameType = 'active-dinner';
            break;
          case 'supper':
            dishType = 'kolacja';
            classNameType = 'active-supper';
            break;
          default:
            break;
        }

        return (
          <button
            key={type}
            onClick={() => this.handleFilter(type)}
            className={`${`categ-bnt-${type}`} 
                ${(currentType === type) ? classNameType : null}`}
          >
            <FontAwesomeIcon
              icon="check"
              style={{ display: `${currentType !== type ? 'none' : 'inline-block'}` }}
            />
            {dishType}
          </button>
        );
      });


      return (
        <div className="categories-bnts">
          <span>filtruj:</span>
          {filterButtons}
        </div>
      );
    }
}

export default RecipeFilter;
