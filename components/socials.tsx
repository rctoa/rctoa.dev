import { Github } from "./Icons/Github.tsx";
import { Linkedin } from "./Icons/Linkedin.tsx";

function Socials() {
  const linkClass =
    "flex size-9 items-center justify-center rounded-full border border-black/10 bg-white/60 p-2 transition hover:-translate-y-0.5 hover:border-black/30 hover:shadow-sm dark:border-white/15 dark:bg-white/5 dark:hover:border-white/40";
  return (
    <div className="flex flex-row gap-2">
      <a
        href="https://github.com/rctoa"
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub de Roberto Toalongo"
      >
        <Github />
      </a>
      <a
        href="https://www.linkedin.com/in/roberto-toalongo-galabay-1836471b5"
        className={linkClass}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn de Roberto Toalongo"
      >
        <Linkedin />
      </a>
    </div>
  );
}

export default Socials;
