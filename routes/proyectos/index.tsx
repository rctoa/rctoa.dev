import { listProjects } from "../../lib/projects.ts";
import ListWorks from "../../components/list-works.tsx";
import { define } from "../../utils.ts";

export const handler = define.handlers({
  async GET(_ctx) {
    const projects = await listProjects();
    return { data: { projects } };
  },
});

export default define.page<typeof handler>(function Project(props) {
  return (
    <div class="flex flex-col gap-2">
      <header class="mb-4">
        <p class="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
          Portafolio
        </p>
        <h1 class="mt-1 text-3xl font-bold tracking-tight text-balance sm:text-4xl">
          Proyectos
        </h1>
        <p class="mt-2 max-w-xl text-[15px] leading-relaxed text-gray-600 dark:text-gray-400">
          Selección de proyectos donde aporté diseño, desarrollo y puesta en
          producción.
        </p>
      </header>
      <ListWorks rows={props.data.projects} max={100} />
    </div>
  );
});
