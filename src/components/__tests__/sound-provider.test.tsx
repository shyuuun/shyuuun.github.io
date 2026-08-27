import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SoundProvider, useSound } from "@/components/providers/sound-provider";

const mockInstances: MockAudio[] = [];

class MockAudio {
  preload = "";
  volume = 1;
  src: string;
  play = vi.fn().mockResolvedValue(undefined);

  constructor(src: string) {
    this.src = src;
    mockInstances.push(this);
  }

  cloneNode() {
    const cloned = new MockAudio(this.src);
    cloned.volume = this.volume;
    return cloned;
  }
}

vi.stubGlobal("Audio", MockAudio);

function TestConsumer() {
  const { play, muted, setMuted } = useSound();
  return (
    <div>
      <span data-testid="muted">{String(muted)}</span>
      <button onClick={() => play("click")}>play click</button>
      <button onClick={() => play("open")}>play open</button>
      <button onClick={() => setMuted(!muted)}>toggle mute</button>
    </div>
  );
}

describe("SoundProvider", () => {
  beforeEach(() => {
    mockInstances.length = 0;
  });

  afterEach(() => {
    cleanup();
  });

  it("provides sound context to children", () => {
    render(
      <SoundProvider>
        <TestConsumer />
      </SoundProvider>,
    );
    expect(screen.getByTestId("muted")).toHaveTextContent("false");
  });

  it("preloads audio on mount", () => {
    render(
      <SoundProvider>
        <TestConsumer />
      </SoundProvider>,
    );
    expect(mockInstances.length).toBe(2);
  });

  it("play creates a cloned audio instance and calls play", async () => {
    const user = userEvent.setup();
    render(
      <SoundProvider>
        <TestConsumer />
      </SoundProvider>,
    );
    const countBefore = mockInstances.length;
    await user.click(screen.getByText("play click"));
    expect(mockInstances.length).toBeGreaterThan(countBefore);
    const lastInstance = mockInstances[mockInstances.length - 1];
    expect(lastInstance.play).toHaveBeenCalled();
  });

  it("play is a no-op when muted", async () => {
    const user = userEvent.setup();
    render(
      <SoundProvider>
        <TestConsumer />
      </SoundProvider>,
    );
    await user.click(screen.getByText("toggle mute"));
    expect(screen.getByTestId("muted")).toHaveTextContent("true");

    const countBefore = mockInstances.length;
    await user.click(screen.getByText("play click"));
    // No new Audio should be created when muted
    expect(mockInstances.length).toBe(countBefore);
  });
});

describe("useSound", () => {
  it("throws when used outside SoundProvider", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() => render(<TestConsumer />)).toThrow(
      "useSound must be used within a <SoundProvider>",
    );
    spy.mockRestore();
  });
});
