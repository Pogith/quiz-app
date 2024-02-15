import { createSlice } from "@reduxjs/toolkit";

import { FetchQuizSuccessPayloadAction, InitialState } from "./types";

const initialState: InitialState = {
  isFetchingQuiz: false,
  quiz: [],
  error: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    fetchQuizStart: (state) => {
      state.isFetchingQuiz = true;
    },

    fetchQuizSuccess: (state, action: FetchQuizSuccessPayloadAction) => {
      const { quiz } = action.payload;

      state.quiz = quiz.map((quizData) => {
        const correctAnswer = quizData["correct_answer"];
        const incorrectAnswers = quizData["incorrect_answers"];
        const answers = [correctAnswer, ...incorrectAnswers];

        return {
          ...quizData,
          answers,
        };
      });
      state.isFetchingQuiz = initialState.isFetchingQuiz;
    },

    fetchQuizError: (state, action: any) => {
      state.error = action.payload;
      state.isFetchingQuiz = initialState.isFetchingQuiz;
    },
  },
});

const { actions, reducer } = quizSlice;

export const { fetchQuizStart, fetchQuizSuccess, fetchQuizError } = actions;
export default reducer;
