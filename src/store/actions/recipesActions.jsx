export const createRecipe = recipe => (dispatch, getState, { getFirebase, getFirestore }) => {
  // async
  const firestore = getFirestore();
  const { profile } = getState().firesbase;
  const authorId = getState().firesbase.auth;
  firestore.collection('recipes').add({
    ...recipe,
    authorName: profile.name,
    authorId: authorId.uid,
    createdAt: new Date(),
  }).then(() => {
    dispatch({ type: 'CREATE_RECIPE', recipe });
  }).catch((err) => {
    dispatch({ type: 'CREATE_RECIPE_ERROR', err });
  });
};

export const removeRecipe = recipe => (dispatch, getState, { getFirebase, getFirestore }) => {
  // async
  const firestore = getFirestore();
  firestore.collection('recipes').doc(recipe).delete().then(() => {
    dispatch({ type: 'REMOVE_RECIPE', recipe });
  })
    .catch((err) => {
      dispatch({ type: 'REMOVE_RECIPE_ERROR', err });
    });
};

export const updateRecipe = (recipe, updatedRecipe) => (dispatch, getState, { getFirebase, getFirestore }) => {
  const firestore = getFirestore();
  firestore.collection('recipes').doc(recipe).update({
    ...updatedRecipe,
  }).then(() => {
    dispatch({ type: 'UPDATE_RECIPE', recipe });
  })
    .catch((err) => {
      dispatch({ type: 'UPDATE_RECIPE_ERROR', err });
    });
};
