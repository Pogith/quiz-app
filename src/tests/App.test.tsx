import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "./utils";
import App from "@/App";

describe("App Test", () => {
  it("should render and navigate Home Page", () => {
    render(<App />, { route: "/" });

    expect(location.pathname).eq("/");
  });

  it("should render and navigate Quiz Page", () => {
    render(<App />, { route: "/quiz" });

    expect(location.pathname).eq("/quiz");
  });

  it("should render and navigate Result Page", () => {
    render(<App />, { route: "/result" });

    expect(location.pathname).eq("/result");
  });

  it("should render and navigate IncorrectAnswerNote Page", () => {
    render(<App />, { route: "/incorrect-answer-note" });

    expect(location.pathname).eq("/incorrect-answer-note");
  });

  it("should render 404 Not Found page when routes wrong path", () => {
    render(<App />, { route: "/something-does-not-match" });

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
