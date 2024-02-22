import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "../utils";

import Result from "@/pages/Result/Result";

describe("Result Page Test", () => {
  it("should render Result Page", () => {
    render(<Result />);

    expect(screen.getByText(/Result!/i)).toBeInTheDocument();
    expect(screen.getByText(/Correct Answer/i)).toBeInTheDocument();
    expect(screen.getByText(/Wrong Answer/i)).toBeInTheDocument();
    expect(screen.getByText(/Quiz time/i)).toBeInTheDocument();
    expect(screen.getByText(/Check My Note/i)).toBeInTheDocument();
    expect(screen.getByText(/Back to Home/i)).toBeInTheDocument();
  });

  it("should navigate to Home page when user click Back to Home button", async () => {
    const { user } = render(<Result />);

    await user.click(screen.getByText(/Back to Home/i));

    expect(location.pathname).eq("/");
  });

  it("should navigate to Home page when user click Check My Note button", async () => {
    const { user } = render(<Result />);

    await user.click(screen.getByText(/Check My Note/i));

    expect(location.pathname).eq("/incorrect-answer-note");
  });
});
