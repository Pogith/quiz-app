import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";
import { render } from "./utils";

import Home from "@/pages/Home/Home";

describe("Home Page Test", () => {
  it("should render Home Page", () => {
    render(<Home />);

    expect(screen.getByText(/Start Quiz/i)).toBeInTheDocument();
  });

  it("should navigate to Quiz page when user click Start Quiz button", async () => {
    const { user } = render(<Home />);

    await user.click(screen.getByText(/Start Quiz/i));

    expect(location.pathname).eq("/quiz");
  });
});
