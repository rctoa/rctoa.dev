import { loadPost } from "../../lib/posts.ts";
import Markdown from "../../components/Markdown/Markdown.tsx";
import { define } from "../../utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const { id } = ctx.params;
    const post = await loadPost(id);
    if (!post) return new Response("No encontrado", { status: 404 });
    return { data: { post } };
  },
});

export default define.page<typeof handler>((props) => {
  const { post } = props?.data || {};

  if (!post) return <div>No post found</div>;

  const { title, body, tags, date, excerpt } = post;
  const tag = Array.isArray(tags) ? tags[0] : tags;

  return (
    <article class="mx-auto max-w-2xl">
      <a
        href="/blog"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
      >
        ← Todos los artículos
      </a>
      <header class="mt-4 mb-8 flex flex-col gap-3 border-b border-black/10 pb-8 dark:border-white/10">
        <div class="flex flex-wrap items-center gap-2 text-xs">
          {tag && (
            <a
              href={`/blog/category/${tag}`}
              class="rounded-full border border-black/10 px-2.5 py-1 font-medium uppercase tracking-wide transition hover:border-black/30 dark:border-white/15"
            >
              {tag}
            </a>
          )}
          <time
            dateTime={new Date(date).toISOString()}
            class="text-gray-500 dark:text-gray-400"
          >
            {Intl.DateTimeFormat("es", { dateStyle: "long" }).format(
              new Date(date),
            )}
          </time>
        </div>
        <h1 class="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
        {excerpt && !excerpt.startsWith("This is my") && (
          <p class="text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
            {excerpt}
          </p>
        )}
      </header>
      <Markdown body={body} />
    </article>
  );
});
