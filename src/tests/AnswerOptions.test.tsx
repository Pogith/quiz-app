import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "./utils";

import { Quiz } from "@/store/quiz/types";
import AnswerOptions from "@/components/AnswerOptions/AnswerOptions";

describe("AnswerOptions Component Test", () => {
  const activeQuiz: Quiz = {
    answers: ["Shirley Basey", "Tom Jones", "John Barry", "Sheena Easton"],
    category: "Entertainment: Film",
    correct_answer: "Shirley Basey",
    difficulty: "medium",
    incorrect_answers: ["Tom Jones", "John Barry", "Sheena Easton"],
    question:
      "Who performed the opening theme song for the James Bond 007 movie &quot;Goldfinger&quot;?",
    type: "multiple",
  };

  const onClick = vi.fn();

  it("should render answer lists at AnswerOptions Component", () => {
    render(<AnswerOptions activeQuiz={activeQuiz} onClick={onClick} />);

    expect(screen.getByText(/Shirley Basey/i));
    expect(screen.getByText(/Tom Jones/i));
    expect(screen.getByText(/John Barry/i));
    expect(screen.getByText(/Sheena Easton/i));
  });

  it("should render four answer lists", async () => {
    const { getByTestId } = render(
      <AnswerOptions activeQuiz={activeQuiz} onClick={onClick} />
    );

    expect(getByTestId("answer-list").children.length).toBe(
      activeQuiz.answers.length
    );
  });

  it("should handle click event", async () => {
    const { user } = render(
      <AnswerOptions activeQuiz={activeQuiz} onClick={onClick} />
    );

    await user.click(screen.getByText(/Shirley Basey/i));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render selected correct answer", async () => {
    const selectedAnswer = {
      answer: "Shirley Basey",
      answerNumber: 0,
    };

    render(
      <AnswerOptions
        activeQuiz={activeQuiz}
        selectedAnswer={selectedAnswer}
        onClick={onClick}
      />
    );

    const list = screen.getByText(selectedAnswer.answer);

    expect(list).toHaveClass("selected-correct-answer");
  });

  it("should render selected incorrect answer", async () => {
    const selectedAnswer = {
      answer: "Tom Jones",
      answerNumber: 1,
    };

    render(
      <AnswerOptions
        activeQuiz={activeQuiz}
        selectedAnswer={selectedAnswer}
        onClick={onClick}
      />
    );

    const list = screen.getByText(selectedAnswer.answer);

    expect(list).toHaveClass("selected-incorrect-answer");
  });
});
