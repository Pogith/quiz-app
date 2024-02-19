import { PayloadAction } from "@reduxjs/toolkit";
import { Color } from "chart.js";

type QuizType = "multiple" | "boolean";
type QuizDifficulty = "easy" | "medium" | "hard";
export type Quiz = {
  type: QuizType;
  difficulty: QuizDifficulty;
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
  answers: string[];
};

export type Results = {
  quizTime: number;
  correctAnswersCounts: number;
  incorrectAnswersCounts: number;
};

export type IncorrectQuiz = {
  quizNum: number;
  selectedAnswer: string;
} & Quiz;

export type InitialState = {
  isFetchingQuiz: boolean;
  quiz: Quiz[];
  error: any;
  results: Results;
  incorrectQuiz: IncorrectQuiz[];
};

export type QuizResponse = {
  response_code: number;
  results: Quiz[];
};

export type FetchQuizSuccessPayloadAction = PayloadAction<{
  quiz: Omit<Quiz, "answers">[];
}>;

export type CheckQuizAnswerPayloadAction = PayloadAction<{
  quizNum: number;
  answer: string;
}>;

export type CheckQuizTimePayloadAction = PayloadAction<{
  time: number;
}>;

export type UpdateIncorrectQuizPayloadAction = PayloadAction<{
  quizNum: number;
  answer: string;
}>;

export type ChartDatasets = {
  label?: string;
  data: any[];
  borderWidth?: number | object;
  backgroundColor?: Color;
  borderColor?: Color;
};
export type ChartData = {
  labels: string[];
  datasets: ChartDatasets[];
};
