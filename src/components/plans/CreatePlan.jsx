import React from 'react'
import './CreatePlan.scss';
import {
    Link,
  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHammer
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faHammer);

export default function CreatePlan() {
    return (
       
        <div className="create-plan-cnt">
            <FontAwesomeIcon icon={faHammer} />
          <h1>Sekcja w budowie</h1>
          <div>
            <Link to="/dashboard">
                Wróć do strony głównej
            </Link>
          </div>
        </div>
    
    )
}
