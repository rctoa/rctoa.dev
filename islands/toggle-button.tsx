import { useLayoutEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";
import { SunIcon } from "../components/Icons/SunIcon.tsx";
import { MoonIcon } from "../components/Icons/MoonIcon.tsx";

const ToggleButton = () => {
  const theme = useSignal((() => {
    if (import.meta.env.SSR) {
      return undefined;
    }
    if (
      typeof localStorage !== "undefined" && localStorage.getItem("theme")
    ) {
      return localStorage.getItem("theme");
    }
    if (globalThis.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  })());

  const toggleTheme = () => {
    const t = theme.value === "light" ? "dark" : "light";
    const apply = () => {
      localStorage.setItem("theme", t);
      theme.value = t;
    };
    const doc = globalThis.document as Document & {
      startViewTransition?: (cb: () => void) => void;
    };
    if (typeof doc?.startViewTransition === "function") {
      doc.startViewTransition(apply);
    } else {
      apply();
    }
  };

  useLayoutEffect(() => {
    const root = document.documentElement;
    theme.value === "light"
      ? root.classList.remove("dark")
      : root.classList.add("dark");
  }, [theme.value]);

  const isDark = theme.value === "dark";

  return (
    <div>
      <button
        type="button"
        onClick={toggleTheme}
        class="glass flex h-9 w-9 items-center justify-center rounded-full p-2 focus:outline-none"
        aria-label={isDark ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
      >
        {!theme.value ? <span /> : isDark ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
};

export default ToggleButton;
