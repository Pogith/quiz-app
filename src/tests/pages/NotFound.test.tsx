import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "../utils";

import NotFound from "@/pages/NotFound/NotFound";

describe("NotFound Page Test", () => {
  it("should render 404 NotFound", () => {
    render(<NotFound />);

    expect(screen.getByText(/404 Not Found/i));
  });
});
