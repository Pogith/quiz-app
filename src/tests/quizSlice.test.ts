import { describe, expect, it } from "vitest";

import { mockData } from "@/api/mock";
import reducer, {
  checkQuizAnswer,
  checkQuizTime,
  fetchQuizStart,
  fetchQuizSuccess,
} from "@/store/quiz/quizSlice";
import { InitialState, Quiz } from "@/store/quiz/types";

describe("quizSlice Test", () => {
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

  const quizState = mockData.results.map((quizData) => {
    const correctAnswer = quizData["correct_answer"];
    const incorrectAnswers = quizData["incorrect_answers"];
    const answers = [correctAnswer, ...incorrectAnswers];

    return {
      ...quizData,
      answers,
    };
  }) as Quiz[];

  it("should return the initial state", () => {
    expect(reducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle a fetchQuiz being added to an empty quiz", () => {
    const mockQuizData = mockData.results as Omit<Quiz, "answers">[];

    const reducerReturnValue = reducer(
      initialState,
      fetchQuizSuccess({ quiz: mockQuizData })
    );

    expect(reducerReturnValue.quiz).toEqual(quizState);
    expect(reducerReturnValue.isFetchingQuiz).toEqual(false);
  });

  it("should handle a checkQuizAnswer being added to an results correct answer counts", () => {
    const previousState = {
      ...initialState,
      quiz: quizState,
    };

    const quizNum = 2;
    const currentQuiz = previousState.quiz[quizNum];
    const answer = currentQuiz["correct_answer"];
    const payload = {
      quizNum,
      answer,
    };

    expect(reducer(previousState, checkQuizAnswer(payload))).toEqual({
      ...previousState,
      results: {
        ...previousState.results,
        correctAnswersCounts: previousState.results.correctAnswersCounts + 1,
      },
    });
  });

  it("should handle a checkQuizAnswer being added to an results incorrect answer counts and added incorrectQuiz", () => {
    const previousState = {
      ...initialState,
      quiz: quizState,
    };

    const quizNum = 2;
    const currentQuiz = previousState.quiz[quizNum];
    const answer = currentQuiz["incorrect_answers"][2];
    const payload = {
      quizNum,
      answer,
    };

    const incorrectQuiz = {
      ...currentQuiz,
      quizNum,
      selectedAnswer: answer,
    };

    expect(reducer(previousState, checkQuizAnswer(payload))).toEqual({
      ...previousState,
      results: {
        ...previousState.results,
        incorrectAnswersCounts:
          previousState.results.incorrectAnswersCounts + 1,
      },
      incorrectQuiz: [incorrectQuiz],
    });
  });

  it("should handle a checkQuizTime being added to an results quizTime", () => {
    const time = 50;

    expect(reducer(initialState, checkQuizTime({ time }))).toEqual({
      ...initialState,
      results: {
        ...initialState.results,
        quizTime: time,
      },
    });
  });

  it("should show loading", () => {
    const type = fetchQuizStart.type;

    const action = { type };

    const reducerReturnValue = reducer(initialState, action);

    expect(reducerReturnValue.isFetchingQuiz).toEqual(true);
  });
});
