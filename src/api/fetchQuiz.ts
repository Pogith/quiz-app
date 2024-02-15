import { QuizResponse } from "@/store/quiz/types";
import { mockData } from "./mock";

const fetchMockQuiz = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData);
    }, 1000);
  });
};

export const fetchQuiz = async () => {
  // const response = await fetch(import.meta.env.VITE_QUIZ_API_URL);
  // const data = await response.json();
  const response = (await fetchMockQuiz()) as Promise<QuizResponse>;

  return response;
};
