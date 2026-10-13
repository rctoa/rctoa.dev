import { ComponentChildren } from "preact";

interface Props {
  eyebrow: string;
  title: string;
  description?: string;
  linkHref?: string;
  linkText?: string;
  children?: ComponentChildren;
}

export default function SectionHeading(
  { eyebrow, title, description, linkHref, linkText }: Props,
) {
  return (
    <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
      <div class="max-w-xl">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
          {eyebrow}
        </p>
        <h2 class="mt-1 text-2xl font-bold tracking-tight text-balance">
          {title}
        </h2>
        {description && (
          <p class="mt-2 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
            {description}
          </p>
        )}
      </div>
      {linkHref && linkText && (
        <a
          href={linkHref}
          class="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-black/10 px-4 py-1.5 text-sm font-medium transition hover:border-black/30 hover:bg-black/[0.03] dark:border-white/15 dark:hover:border-white/40 dark:hover:bg-white/5"
        >
          {linkText}
          <span
            aria-hidden="true"
            class="transition group-hover:translate-x-0.5"
          >
            →
          </span>
        </a>
      )}
    </div>
  );
}
