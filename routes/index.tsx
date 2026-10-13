import { Logo } from "../components/Icons/Logo.tsx";
import Social from "../components/socials.tsx";
import SectionHeading from "../components/section-heading.tsx";
import { define } from "../utils.ts";
import { listPosts } from "../lib/posts.ts";
import { listProjects } from "../lib/projects.ts";
import ListArticle from "../components/list-articles.tsx";
import ListWorks from "../components/list-works.tsx";
import Skills from "../components/list-skills.tsx";

export const handler = define.handlers({
  async GET(_ctx) {
    const [posts, projects] = await Promise.all([
      listPosts(),
      listProjects(),
    ]);
    return { data: { posts, projects } };
  },
});

export default define.page<typeof handler>(function Home(props) {
  const { posts, projects } = props.data;

  return (
    <div class="relative flex flex-col gap-16 sm:gap-20">
      {/* Fondo ambiental: dos orbes con blur, sin JS, se ocultan con reduced-motion */}
      <div
        aria-hidden="true"
        class="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div class="orb left-[-120px] top-[-80px] size-[320px] bg-amber-200/50 dark:bg-amber-500/10" />
        <div class="orb right-[-120px] top-[240px] size-[300px] bg-sky-200/40 [animation-delay:-7s] dark:bg-sky-500/10" />
      </div>

      {/* QUIÉN SOY */}
      <section class="flex flex-col gap-8 pt-4 sm:pt-8 lg:flex-row lg:items-center lg:gap-12">
        <div class="flex-1">
          <h1 class="animate-rise-1 mt-4 max-w-xl text-4xl font-bold leading-[1.08] tracking-tight text-balance sm:text-5xl">
            Roberto Toalongo
          </h1>
          <p class="animate-rise-1 mt-2 text-lg font-medium text-gray-700 dark:text-gray-300">
            Desarrollador de software
          </p>
          <p class="animate-rise-2 mt-3 max-w-xl text-[15px] leading-relaxed text-gray-600 sm:text-base dark:text-gray-400">
            Construyo software desde Azogues. Trabajo sobre todo en sistemas
            backend y aplicaciones web, y me interesa el recorrido completo:
            entender el problema, modelar el dominio, diseñar la arquitectura y
            llevarlo a producción. Aquí reúno proyectos, diseño y notas sobre
            cómo pienso el desarrollo de software.
          </p>
          <div class="animate-rise-2 mt-6 flex flex-wrap items-center gap-2.5">
            <a
              href="/p/sobre-mi"
              class="inline-flex items-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition hover:border-black/40 hover:bg-black/[0.03] dark:border-white/20 dark:hover:border-white/50 dark:hover:bg-white/5"
            >
              Sobre mí
            </a>
            <a
              href="/proyectos"
              class="inline-flex items-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition hover:border-black/40 hover:bg-black/[0.03] dark:border-white/20 dark:hover:border-white/50 dark:hover:bg-white/5"
            >
              Proyectos
            </a>
            <a
              href="/blog"
              class="inline-flex items-center rounded-full border border-black/15 px-5 py-2.5 text-sm font-medium transition hover:border-black/40 hover:bg-black/[0.03] dark:border-white/20 dark:hover:border-white/50 dark:hover:bg-white/5"
            >
              Notas
            </a>
          </div>
          <div class="animate-rise-3 mt-6">
            <Social />
          </div>
        </div>
        <div class="animate-rise-2 mx-auto w-full max-w-[280px] shrink-0 lg:mx-0">
          <div class="glass glass-card rounded-3xl p-8">
            <Logo />
            <p class="mt-4 text-center text-sm font-bold tracking-tight">
              Roberto Toalongo
            </p>
            <p class="text-center text-xs text-gray-500 dark:text-gray-400">
              software · diseño · notas
            </p>
          </div>
        </div>
      </section>

      {/* TECNOLOGÍAS */}
      <section aria-label="Tecnologías">
        <SectionHeading
          eyebrow="Stack"
          title="Tecnologías que uso"
          description="Lo que utilizo en mi día a día, sin orden particular."
        />
        <Skills />
      </section>

      {/* PROYECTOS */}
      <section aria-label="Proyectos">
        <SectionHeading
          eyebrow="Archivo"
          title="Proyectos"
          description="Cosas en las que he trabajado o experimentado."
          linkHref="/proyectos"
          linkText="Ver todos"
        />
        <ListWorks rows={projects} max={4} />
      </section>

      {/* NOTAS */}
      <section aria-label="Notas recientes">
        <SectionHeading
          eyebrow="Blog"
          title="Notas recientes"
          description="Apuntes para no olvidar lo que aprendo."
          linkHref="/blog"
          linkText="Ver todas"
        />
        <ListArticle rows={posts} max={5} />
      </section>

      {/* CONTACTO SOBRIO */}
      <section
        aria-label="Contacto"
        class="glass rounded-3xl px-6 py-8 sm:px-10"
      >
        <h2 class="text-xl font-bold tracking-tight">Contacto</h2>
        <p class="mt-2 max-w-lg text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
          Si hay algo puntual en lo que crees que puedo aportar, puedes
          escribirme por LinkedIn o revisar mi código en GitHub. Respondo cuando
          tengo disponibilidad.
        </p>
        <div class="mt-4">
          <Social />
        </div>
      </section>
    </div>
  );
});
