const recipeReducer = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_RECIPE':
      console.log('created recipe', action.recipe);
      return state;
    case 'CREATE_RECIPE_ERROR':
      console.log('created recipe error', action.err);
      return state;
    case 'REMOVE_RECIPE':
      console.log('removed recipe', action.recipe);
      return state;
    case 'REMOVE_RECIPE_ERROR':
      console.log('remove recipe error', action.err);
      return state;
    case 'UPDATE_RECIPE':
      console.log('updated recipe', action.recipe);
      return state;
    case 'UPDATE_RECIPE_ERROR':
      console.log('updated recipe error', action.err);
      return state;
    default:
      return state;
  }
};

export default recipeReducer;
