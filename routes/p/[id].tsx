import { loadPost } from "../../lib/p.ts";
import Markdown from "../../components/Markdown/Markdown.tsx";
import Social from "../../components/socials.tsx";
import { define } from "../../utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const { id } = ctx.params;
    const post = await loadPost(id);
    if (!post) return new Response("No encontrado", { status: 404 });
    return { data: { post } };
  },
});

export default define.page<typeof handler>(function PagePost(props) {
  const { post } = props?.data || {};

  if (!post) return <div>No post found</div>;

  return (
    <div class="mx-auto max-w-2xl">
      <header class="mb-6 border-b border-black/10 pb-8 dark:border-white/10">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
          Sobre mí
        </p>
        <h1 class="mt-1 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          {post.title}
        </h1>
        {post.excerpt && !post.excerpt.startsWith("This is my") && (
          <p class="mt-2 text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
            {post.excerpt}
          </p>
        )}
      </header>
      <Markdown body={post.body} />
      <aside class="glass mt-10 rounded-2xl p-6">
        <h2 class="text-lg font-bold tracking-tight">Contacto</h2>
        <p class="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          Si hay algo puntual en lo que pueda aportar, puedes escribirme por
          LinkedIn o revisar mi código en GitHub.
        </p>
        <div class="mt-4">
          <Social />
        </div>
      </aside>
    </div>
  );
});
