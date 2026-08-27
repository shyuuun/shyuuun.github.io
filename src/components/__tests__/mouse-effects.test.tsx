import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, act } from "@testing-library/react";
import MouseEffects from "@/components/mouse-effects";

describe("MouseEffects", () => {
  it("renders children", () => {
    render(
      <MouseEffects>
        <div>Child content</div>
      </MouseEffects>,
    );
    expect(screen.getByText("Child content")).toBeInTheDocument();
  });

  it("registers click listener on mount", () => {
    const addSpy = vi.spyOn(document, "addEventListener");
    render(
      <MouseEffects>
        <div>Test</div>
      </MouseEffects>,
    );
    expect(addSpy).toHaveBeenCalledWith("click", expect.any(Function));
    addSpy.mockRestore();
  });

  it("removes click listener on unmount", () => {
    const removeSpy = vi.spyOn(document, "removeEventListener");
    const { unmount } = render(
      <MouseEffects>
        <div>Test</div>
      </MouseEffects>,
    );
    unmount();
    expect(removeSpy).toHaveBeenCalledWith("click", expect.any(Function));
    removeSpy.mockRestore();
  });

  it("handles click event without crashing", () => {
    render(
      <MouseEffects interactionMode="burst">
        <div>Click area</div>
      </MouseEffects>,
    );

    act(() => {
      document.dispatchEvent(
        new MouseEvent("click", {
          clientX: 100,
          clientY: 100,
          bubbles: true,
        }),
      );
    });
  });

  it("renders with different interaction modes", () => {
    const modes = [
      "rings",
      "burst",
      "particles",
      "crosshair",
      "wavy",
      "sniper",
    ] as const;

    modes.forEach((mode) => {
      const { unmount } = render(
        <MouseEffects interactionMode={mode}>
          <div>{mode}</div>
        </MouseEffects>,
      );
      expect(screen.getByText(mode)).toBeInTheDocument();
      unmount();
    });
  });
});
