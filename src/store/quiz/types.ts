import { PayloadAction } from "@reduxjs/toolkit";

type QuizType = "multiple" | "boolean";
type QuizDifficulty = "easy" | "medium" | "hard";
type Quiz = {
  type: QuizType;
  difficulty: QuizDifficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

export type InitialState = {
  isFetchingQuiz: boolean;
  quiz: Quiz[];
  error: any;
};

export type QuizResponse = {
  response_code: number;
  results: Quiz[];
};

export type FetchQuizSuccessPayloadAction = PayloadAction<{
  quiz: Quiz[];
}>;
