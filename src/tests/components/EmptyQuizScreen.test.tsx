import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "../utils";

import EmptyQuizScreen from "@/components/EmptyQuizScreen/EmptyQuizScreen";

describe("EmptyQuizScreen Component Test", () => {
  it("should render EmptyQuizScreen", () => {
    render(<EmptyQuizScreen />);

    expect(screen.getByText(/There is No Quiz!/i));
  });

  it("should navigate Home Page when click Home Button", async () => {
    const { user } = render(<EmptyQuizScreen />);

    await user.click(screen.getByText(/Home/i));

    expect(location.pathname).eq("/");
  });
});
