import { FunctionalComponent } from "preact";
import { Project } from "../types.d.ts";

interface Props {
  rows: Project[];
  max: number;
}

const ListWorks: FunctionalComponent<Props> = ({ rows, max }) => {
  const projects = rows.slice(0, max).map((project: Project) => (
    <Works key={project.id} {...project} />
  ));
  const featured = max <= 4;
  return featured
    ? <ul class="grid list-none gap-5 p-0 sm:grid-cols-2">{projects}</ul>
    : (
      <ul class="grid list-none gap-5 p-0 sm:grid-cols-2">
        {projects}
      </ul>
    );
};

const Works = ({ id, image, title, excerpt }: Project) => {
  return (
    <li class="list-none">
      <a
        href={`/proyectos/${id}`}
        class="glass glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition duration-200 hover:-translate-y-1 hover:shadow-lg"
      >
        <div class="overflow-hidden">
          <picture>
            <source srcset={`/projects/${image}.avif`} type="image/avif" />
            <img
              src={`/projects/${image}.webp`}
              class="aspect-[16/9] w-full object-cover transition duration-300 group-hover:scale-[1.03]"
              alt={`Captura del proyecto ${title}`}
              width="640"
              height="360"
              loading="lazy"
              decoding="async"
            />
          </picture>
        </div>
        <div class="flex flex-1 flex-col gap-1.5 p-4">
          <h3 class="text-[15px] font-semibold leading-snug tracking-tight">
            {title}
          </h3>
          {excerpt && excerpt !== "This is my first post" && (
            <p class="line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
              {excerpt}
            </p>
          )}
          <span class="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-gray-700 transition group-hover:gap-2 dark:text-gray-300">
            Ver caso <span aria-hidden="true">→</span>
          </span>
        </div>
      </a>
    </li>
  );
};

export default ListWorks;
