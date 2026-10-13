import { listPosts } from "../../lib/posts.ts";
import ListArticle from "../../components/list-articles.tsx";
import { define } from "../../utils.ts";

export const handler = define.handlers({
  async GET(_ctx) {
    const posts = await listPosts();
    return { data: { posts } };
  },
});

export default define.page<typeof handler>(function Blog(props) {
  return (
    <div class="flex flex-col gap-2">
      <header class="mb-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
          Blog
        </p>
        <h1 class="mt-1 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Artículos
        </h1>
        <p class="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
          Notas prácticas sobre frontend, backend y rendimiento web. Sin humo,
          con ejemplos reales.
        </p>
      </header>
      <ListArticle rows={props.data.posts} max={100} />
    </div>
  );
});
