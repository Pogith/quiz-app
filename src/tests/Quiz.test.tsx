import { describe, expect, it, vi } from "vitest";
import { useSelector } from "react-redux";
import { screen } from "@testing-library/react";

import { render } from "./utils";

import { mockData } from "@/api/mock";
import Quiz from "@/pages/Quiz/Quiz";
import { Quiz as QuizType } from "@/store/quiz/types";

vi.mock("react-redux", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-redux")>();
  return {
    ...actual,
    useSelector: vi.fn(),
  };
});

describe("Quiz Page Test", () => {
  it("should render loading when quiz is empty", () => {
    vi.mocked(useSelector).mockReturnValueOnce([]);
    vi.mocked(useSelector).mockReturnValueOnce(true);

    render(<Quiz />);

    expect(screen.getByText(/Loading..../i)).toBeInTheDocument();
  });

  it("should render quiz when successfully fetch", async () => {
    const quiz = mockData.results.map((quizData) => {
      const correctAnswer = quizData["correct_answer"];
      const incorrectAnswers = quizData["incorrect_answers"];
      const answers = [correctAnswer, ...incorrectAnswers];

      return {
        ...quizData,
        answers,
      };
    }) as QuizType[];

    vi.mocked(useSelector).mockReturnValueOnce(quiz);
    vi.mocked(useSelector).mockReturnValueOnce(false);

    render(<Quiz />);

    expect(screen.getByText(/Q/i)).toBeInTheDocument();
    expect(
      screen.getByText(
        /Who performed the opening theme song for the James Bond 007 movie &quot;Goldfinger&quot;?/i
      )
    ).toBeInTheDocument();

    expect(screen.getByText(/Shirley Basey/i));
    expect(screen.getByText(/Tom Jones/i));
    expect(screen.getByText(/John Barry/i));
    expect(screen.getByText(/Sheena Easton/i));
  });
});
