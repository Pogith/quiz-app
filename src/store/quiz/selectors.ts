import { RootState } from "../store";

export const getQuiz = (state: RootState) => {
  return state.quiz.quiz;
};

export const getIsFetchingQuiz = (state: RootState) => {
  return state.quiz.isFetchingQuiz;
};

export const getQuizResults = (state: RootState) => {
  return state.quiz.results;
};

export const getIncorrectQuiz = (state: RootState) => {
  return state.quiz.incorrectQuiz;
};

export const getError = (state: RootState) => {
  return state.quiz.error;
};
