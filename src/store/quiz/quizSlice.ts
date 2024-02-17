import { createSlice } from "@reduxjs/toolkit";

import {
  CheckQuizAnswerPayloadAction,
  CheckQuizTimePayloadAction,
  FetchQuizSuccessPayloadAction,
  InitialState,
} from "./types";

const initialState: InitialState = {
  isFetchingQuiz: false,
  quiz: [],
  error: null,
  results: {
    quizTime: 0,
    correctAnswersCounts: 0,
    incorrectAnswersCounts: 0,
  },
  incorrectQuiz: [],
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

    checkQuizAnswer: (state, action: CheckQuizAnswerPayloadAction) => {
      const { quizNum, answer } = action.payload;

      const currentQuiz = state.quiz[quizNum];

      if (currentQuiz["correct_answer"] === answer) {
        state.results.correctAnswersCounts += 1;
      } else {
        state.results.incorrectAnswersCounts += 1;

        const incorrectQuiz = {
          ...currentQuiz,
          quizNum,
          selectedAnswer: answer,
        };

        state.incorrectQuiz.push(incorrectQuiz);
      }
    },

    checkQuizTime: (state, action: CheckQuizTimePayloadAction) => {
      const { time } = action.payload;

      state.results.quizTime = time;
    },
  },
});

const { actions, reducer } = quizSlice;

export const {
  fetchQuizStart,
  fetchQuizSuccess,
  fetchQuizError,
  checkQuizAnswer,
  checkQuizTime,
} = actions;
export default reducer;
