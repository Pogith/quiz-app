export const fetchQuiz = async () => {
  const response = await fetch(import.meta.env.VITE_QUIZ_API_URL);
  const data = await response.json();

  return data;
};
