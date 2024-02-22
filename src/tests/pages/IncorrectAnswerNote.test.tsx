import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";
import { useSelector } from "react-redux";

import { render } from "../utils";

import IncorrectAnswerNote from "@/pages/IncorrectAnswerNote/IncorrectAnswerNote";
import { mockIncorrectQuiz } from "@/api/mock";

vi.mock("react-redux", async (importOriginal) => {
  const actual = await importOriginal<typeof import("react-redux")>();
  return {
    ...actual,
    useSelector: vi.fn(),
  };
});

describe("IncorrectAnswerNote Page Test", () => {
  it("should render IncorrectAnswerNote Page", () => {
    vi.mocked(useSelector).mockReturnValue(mockIncorrectQuiz);

    render(<IncorrectAnswerNote />);

    expect(screen.getByText(/Incorrect Answers Note/i));
    expect(screen.getByText(/Home/i));
    expect(screen.getAllByText(/Your Selected Answer:/i));
    expect(screen.getAllByText(/Correct Answer:/i));
  });

  it("should navigate to Home page when user click Home button", async () => {
    const { user } = render(<IncorrectAnswerNote />);

    await user.click(screen.getByText(/Home/i));

    expect(location.pathname).eq("/");
  });
});
