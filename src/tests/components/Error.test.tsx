import { describe, expect, it } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "../utils";

import Error from "@/components/Error/Error";

describe("Error Component Test", () => {
  it("should render Too Many Requst Error  when response code is 5", () => {
    const error = {
      error: {
        response_code: 5,
      },
    };
    render(<Error error={error} />);

    expect(screen.getByText(/429 Too Many Request/i));
  });

  it("should render Unknown Error when error is unknown", () => {
    const error = {
      error: {
        message: "Unknown Error",
      },
    };

    render(<Error error={error} />);

    expect(screen.getByText(/An Unknown Error Occurred. Sorry./i));
  });

  it("should navigate Home Page when click Home Button", async () => {
    const error = {
      error: {
        message: "Unknown Error",
      },
    };

    const { user } = render(<Error error={error} />);

    await user.click(screen.getByText(/Home/i));

    expect(location.pathname).eq("/");
  });
});
