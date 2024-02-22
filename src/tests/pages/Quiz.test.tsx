import { describe, expect, it, vi } from "vitest";
import { useSelector } from "react-redux";
import { screen } from "@testing-library/react";

import { render } from "../utils";

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
  it("should render loading during fetching quiz data", () => {
    vi.mocked(useSelector).mockReturnValueOnce([]);
    vi.mocked(useSelector).mockReturnValueOnce(true);
    vi.mocked(useSelector).mockReturnValueOnce(null);

    render(<Quiz />);

    expect(document.querySelector(".loading")).not.toBeNull();
  });

  it("should render empty quiz screen when quiz is empty", async () => {
    vi.mocked(useSelector).mockReturnValueOnce([]);
    vi.mocked(useSelector).mockReturnValueOnce(false);
    vi.mocked(useSelector).mockReturnValueOnce(null);

    render(<Quiz />);

    expect(screen.getByText(/There is No Quiz!/i)).toBeInTheDocument();
  });

  it("should render error when fetching data is failed", async () => {
    vi.mocked(useSelector).mockReturnValueOnce([]);
    vi.mocked(useSelector).mockReturnValueOnce(false);

    const error = {
      error: {
        response_code: 5,
      },
    };
    vi.mocked(useSelector).mockReturnValueOnce(error);

    render(<Quiz />);

    expect(screen.getByText(/429 Too Many Request/i)).toBeInTheDocument();
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
