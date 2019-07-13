import React, { Component } from 'react';
import './AddBtnsCmp.scss';

import {
  Link,
} from 'react-router-dom';


export class AddBntsCmp extends Component {
    state = {
      active: false,
    };

    toggleClass = () => {
      const { active } = this.state;
      const currentState = active;
      this.setState({ active: !currentState });
    };

    render() {
      const { active } = this.state;
      return (
        <div className="add-bnts-cnt">
          <div className="add-bnts" onClick={this.toggleClass} />
          <div className={`addRecipe ${active ? 'moveRecipe' : null}`}>
            <Link to="/dashboard/create-recipe" onClick={this.toggleClass}>
                przepis
            </Link>
          </div>
          <div className={`addPlan ${active ? 'movePlan' : null}`}>
            <Link to="/dashboard/create-plan" onClick={this.toggleClass}>
                plan
            </Link>
          </div>
        </div>

      );
    }
}

export default AddBntsCmp;
