import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "./utils";
import App from "@/App";

describe("App Test", () => {
  it("render on a bad page", () => {
    render(<App />, { route: "/something-does-not-match" });

    expect(screen.getByText(/Not Found/i)).toBeInTheDocument();
  });
});
