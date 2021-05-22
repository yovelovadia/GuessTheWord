export const gameActionsTypes = {
  SET_SCORE: 'SET_SCORE',
};

export const setScore = (payload) => ({
  type: gameActionsTypes.SET_SCORE,
  payload,
});
