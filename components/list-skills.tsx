const path = "/skills";
const skills = [
  { skill: "TypeScript", source: `${path}/typescript.svg` },
  { skill: "React", source: `${path}/react-svgrepo-com.svg` },
  { skill: "Deno", source: `${path}/deno.svg` },
  { skill: "Go", source: `${path}/go.svg` },
  { skill: "Python", source: `${path}/python-svgrepo-com.svg` },
  { skill: "Java", source: `${path}/java-svgrepo-com.svg` },
  { skill: "Kotlin", source: `${path}/kotlin.svg` },
  { skill: "HTML", source: `${path}/html-svgrepo-com.svg` },
  { skill: "CSS", source: `${path}/css.svg` },
  { skill: "GitHub", source: `${path}/github.svg` },
];

interface Props {
  source: string;
  skill: string;
}

function Skills() {
  return (
    <ul class="flex list-none flex-wrap gap-2.5 p-0">
      {skills.map((skill) => <Skill key={skill.skill} {...skill} />)}
    </ul>
  );
}

function Skill({ source, skill }: Props) {
  return (
    <li class="flex items-center gap-2 rounded-full border border-black/10 bg-white/60 py-1.5 pl-2 pr-4 transition hover:border-black/25 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/25">
      <img
        width={20}
        height={20}
        src={source}
        alt=""
        loading="lazy"
        decoding="async"
        class="size-5"
      />
      <span class="text-[13px] font-medium">{skill}</span>
    </li>
  );
}

export default Skills;
