import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "../utils";

import IncorrectAnswerNote from "@/pages/IncorrectAnswerNote/IncorrectAnswerNote";

describe("IncorrectAnswerNote Page Test", () => {
  it("should render IncorrectAnswerNote Page", () => {
    render(<IncorrectAnswerNote />);

    expect(screen.getByText(/Incorrect Answers Note/i));
    expect(screen.getByText(/Home/i));
  });

  it("should navigate to Home page when user click Home button", async () => {
    const { user } = render(<IncorrectAnswerNote />);

    await user.click(screen.getByText(/Home/i));

    expect(location.pathname).eq("/");
  });
});
