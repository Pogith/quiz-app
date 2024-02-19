import { describe, expect, it, vi } from "vitest";
import { screen } from "@testing-library/react";

import { render } from "./utils";
import Button from "@/components/Button/Button";

describe("Button Component Test", () => {
  const onClick = vi.fn();

  it("should render Button Component", () => {
    render(<Button text="Next" />);

    expect(screen.getByText(/Next/i));
  });

  it("should handle click event", async () => {
    const { user } = render(<Button text="Next" onClick={onClick} />);

    await user.click(screen.getByText(/Next/i));

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("should render small size button", async () => {
    const text = "Next";

    render(<Button text={text} size="small" onClick={onClick} />);

    const list = screen.getByText(text);

    expect(list).toHaveClass("button small primary");
  });

  it("should render medium size button", async () => {
    const text = "Next";

    render(<Button text={text} size="medium" onClick={onClick} />);

    const list = screen.getByText(text);

    expect(list).toHaveClass("button medium primary");
  });

  it("should render large size button", async () => {
    const text = "Next";

    render(<Button text={text} size="large" onClick={onClick} />);

    const list = screen.getByText(text);

    expect(list).toHaveClass("button large primary");
  });

  it("should render primary color button", async () => {
    const text = "Next";
    const color = "primary";

    render(<Button text={text} color={color} onClick={onClick} />);

    const list = screen.getByText(text);

    expect(list).toHaveClass("button small primary");
  });

  it("should render secondary color button", async () => {
    const text = "Next";
    const color = "secondary";

    render(<Button text={text} color={color} onClick={onClick} />);

    const list = screen.getByText(text);

    expect(list).toHaveClass("button small secondary");
  });

  it("should render tertiary color button", async () => {
    const text = "Next";
    const color = "tertiary";

    render(<Button text={text} color={color} onClick={onClick} />);

    const list = screen.getByText(text);

    expect(list).toHaveClass("button small tertiary");
  });
});
