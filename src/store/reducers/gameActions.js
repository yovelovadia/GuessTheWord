import { gameActionsTypes } from '../actions';

const initialState = {
  allScores: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case gameActionsTypes.SET_SCORE:
      let sortByScore;
      if (state.allScores) {
        sortByScore = [...state.allScores, payload].sort(
          (a, b) => b.score - a.score
        );
      } else sortByScore = [payload];
      return {
        ...state,
        allScores: sortByScore,
      };
    default:
      return state;
  }
};
