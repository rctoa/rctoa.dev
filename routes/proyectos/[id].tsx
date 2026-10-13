import { loadProject } from "../../lib/projects.ts";
import Markdown from "../../components/Markdown/Markdown.tsx";
import { define } from "../../utils.ts";

export const handler = define.handlers({
  async GET(ctx) {
    const { id } = ctx.params;
    const post = await loadProject(id);
    if (!post) return new Response("No encontrado", { status: 404 });
    return { data: { post } };
  },
});

export default define.page(function PageProject(props) {
  const post =
    (props?.data as { post?: { title: string; body: string; image: string } })
      ?.post;
  if (!post) return <div>Proyecto no encontrado</div>;
  const { title, body, image } = post;
  return (
    <article class="mx-auto max-w-2xl">
      <a
        href="/proyectos"
        class="inline-flex items-center gap-1.5 text-sm font-medium text-gray-500 transition hover:text-black dark:text-gray-400 dark:hover:text-white"
      >
        ← Todos los proyectos
      </a>
      <header class="mt-4 mb-6 flex flex-col gap-4">
        <div class="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10">
          <picture>
            <source srcset={`/projects/${image}.avif`} type="image/avif" />
            <img
              src={`/projects/${image}.webp`}
              class="aspect-[2/1] w-full object-cover"
              alt={`Captura del proyecto ${title}`}
              width="1280"
              height="640"
              decoding="async"
            />
          </picture>
        </div>
        <h1 class="text-3xl font-bold leading-tight tracking-tight text-balance sm:text-4xl">
          {title}
        </h1>
      </header>
      <Markdown body={body} />
    </article>
  );
});
