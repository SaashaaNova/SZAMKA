import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import recipeReducer from './recipeReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  recipe: recipeReducer,
  firestore: firestoreReducer,
  firesbase: firebaseReducer,
});

export default rootReducer;
