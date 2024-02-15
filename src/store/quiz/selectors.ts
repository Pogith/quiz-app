import { RootState } from "../store";

export const getQuiz = (state: RootState) => {
  return state.quiz.quiz;
};

export const getIsFetchingQuiz = (state: RootState) => {
  return state.quiz.isFetchingQuiz;
};
