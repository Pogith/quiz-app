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

export type InitialState = {
  isFetchingQuiz: boolean;
  quiz: Quiz[];
  error: any;
  results: Results;
};

export type QuizResponse = {
  response_code: number;
  results: Quiz[];
};

export type FetchQuizSuccessPayloadAction = PayloadAction<{
  quiz: Quiz[];
}>;

export type CheckQuizAnswerPayloadAction = PayloadAction<{
  quizNum: number;
  answer: string;
}>;

export type CheckQuizTimePayloadAction = PayloadAction<{
  time: number;
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
