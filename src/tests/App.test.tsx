import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "./utils";
import App from "@/App";

describe("App Test", () => {
  it("should render 404 Not Found page when routes wrong path", () => {
    render(<App />, { route: "/something-does-not-match" });

    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
