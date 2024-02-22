import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";

import { useSetInterval } from "@/hooks/useSetInterval";

describe("useSetInterval hook Test", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should return time", () => {
    const { result } = renderHook(() => useSetInterval());

    act(() => {
      vi.advanceTimersByTime(5000);
    });

    expect(result.current).toEqual(5);
  });
});
