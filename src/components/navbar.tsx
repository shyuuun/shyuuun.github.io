"use client";

import { Moon, Sun, Volume2, VolumeX } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useSound } from "./hooks/use-sound";
import RollingLink from "./rolling-link";

const links = [
  { href: "#about", label: "About me" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

function ToggleButton({
  onClick,
  ariaLabel,
  children,
}: {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  return (
    <button
      aria-label={ariaLabel}
      className="rounded p-2 transition-colors hover:bg-primary/15 hover:text-primary"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function ThemeToggleButton() {
  const { resolvedTheme, setTheme } = useTheme();
  const isMounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  const { play } = useSound();

  if (!isMounted) {
    return null;
  }

  function toggleTheme(event: React.MouseEvent<HTMLButtonElement>) {
    play("click");
    const nextTheme = resolvedTheme === "dark" ? "light" : "dark";
    const documentWithTransition = document as Document & {
      startViewTransition?: (update: () => void) => unknown;
    };
    const { clientX, clientY } = event;
    const radius = Math.hypot(
      Math.max(clientX, window.innerWidth - clientX),
      Math.max(clientY, window.innerHeight - clientY),
    );

    document.documentElement.style.setProperty("--theme-x", `${clientX}px`);
    document.documentElement.style.setProperty("--theme-y", `${clientY}px`);
    document.documentElement.style.setProperty("--theme-radius", `${radius}px`);

    if (documentWithTransition.startViewTransition) {
      documentWithTransition.startViewTransition(() => setTheme(nextTheme));
    } else {
      setTheme(nextTheme);
    }
  }

  return (
    <ToggleButton
      onClick={toggleTheme}
      ariaLabel={resolvedTheme === "dark" ? "Use light mode" : "Use dark mode"}
    >
      {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
    </ToggleButton>
  );
}
export default function Navbar() {
  const { muted, setMuted, play } = useSound();
  const [visible, setVisible] = useState(true);
  const previousScrollY = useRef(0);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < previousScrollY.current;

      setVisible(currentScrollY < 80 || scrollingUp);
      previousScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function toggleSound() {
    play("click");
    setMuted(!muted);
  }

  return (
    <nav
      className={`container sticky font-mono top-4 z-10 flex items-center justify-between rounded border border-foreground/15 bg-background/90 px-4 py-3 backdrop-blur transition-transform duration-300 sm:top-6 ${visible ? "translate-y-0" : "-translate-y-[calc(100%+1.5rem)]"}`}
    >
      <RollingLink
        className="hidden sm:block font-bold tracking-tight"
        href="#about"
      >
        kokutaro.dev
      </RollingLink>
      <a
        className="block sm:hidden font-bold tracking-tight"
        href="#about"
        onClick={() => play("click")}
      >
        FV
      </a>

      <div className="flex items-center gap-4 sm:gap-6">
        <div className="flex items-center gap-3 text-sm sm:gap-5">
          {links.map((link) => (
            <RollingLink href={link.href} key={link.href}>
              {link.label}
            </RollingLink>
          ))}
        </div>

        <div className="flex items-center gap-1 border-l border-foreground/15 pl-3">
          <ThemeToggleButton />
          <button
            aria-label={muted ? "Turn sound on" : "Turn sound off"}
            className="rounded p-2 transition-colors hover:bg-primary/15 hover:text-primary"
            onClick={toggleSound}
            type="button"
          >
            {muted ? <VolumeX size={16} /> : <Volume2 size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
