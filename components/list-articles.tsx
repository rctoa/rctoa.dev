import { FunctionComponent } from "preact";
import { Post } from "../types.d.ts";

interface Props {
  rows: Post[];
  max: number;
}

const ListArticle: FunctionComponent<Props> = ({ rows, max }) => {
  const articles = rows
    .slice(0, max)
    .map((post: Post) => <Article key={post.id} {...post} />);
  return <ul class="m-0 flex flex-col gap-2 p-0">{articles}</ul>;
};

function formatDate(date: Date) {
  return Intl.DateTimeFormat("es", { dateStyle: "long" }).format(date);
}

const Article = ({ id, title, date, excerpt, tags }: Post) => {
  return (
    <li class="list-none">
      <a
        href={`/blog/${id}`}
        class="group flex items-start justify-between gap-4 rounded-2xl border border-transparent px-4 py-3.5 transition hover:border-black/10 hover:bg-white/70 dark:hover:border-white/10 dark:hover:bg-white/5"
      >
        <div class="min-w-0">
          <div class="flex flex-wrap items-center gap-2 text-xs">
            <time
              dateTime={new Date(date).toISOString()}
              class="text-gray-500 dark:text-gray-400"
            >
              {formatDate(new Date(date))}
            </time>
            {tags && (
              <span class="rounded-full border border-black/10 px-2 py-0.5 font-medium uppercase tracking-wide text-gray-600 dark:border-white/15 dark:text-gray-400">
                {Array.isArray(tags) ? tags[0] : tags}
              </span>
            )}
          </div>
          <h3 class="mt-1.5 text-[15px] font-semibold leading-snug tracking-tight group-hover:underline group-hover:underline-offset-4">
            {title}
          </h3>
          {excerpt && !excerpt.startsWith("This is my") && (
            <p class="mt-1 line-clamp-1 text-sm text-gray-600 dark:text-gray-400">
              {excerpt}
            </p>
          )}
        </div>
        <span
          aria-hidden="true"
          class="mt-1 shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-black dark:group-hover:text-white"
        >
          →
        </span>
      </a>
    </li>
  );
};

export default ListArticle;
