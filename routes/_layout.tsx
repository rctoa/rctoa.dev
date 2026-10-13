import { PageProps } from "fresh";
import { Logo } from "../components/Icons/Logo.tsx";
import Menu from "../components/menu.tsx";
import Social from "../components/socials.tsx";
import { footerLinks, navbarLinks } from "../constanst/navigation.ts";
import ToggleButton from "../islands/toggle-button.tsx";

export default function Layout({ Component }: PageProps) {
  return (
    <div class="relative flex min-h-screen flex-col">
      <Navbar />
      <main class="mx-auto w-full max-w-4xl flex-1 px-4 pt-24 pb-16 sm:px-6">
        <Component />
      </main>
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <header class="fixed inset-x-0 top-0 z-20 px-3 pt-3 sm:px-4">
      <div class="glass mx-auto flex h-14 max-w-4xl items-center gap-3 rounded-2xl px-3 sm:px-4">
        <a
          href="/"
          class="flex items-center gap-2.5"
          aria-label="Roberto Toalongo — inicio"
        >
          <span class="block w-8 shrink-0" aria-hidden="true">
            <Logo />
          </span>
          <span class="text-[16px] font-bold tracking-tight">
            Roberto Toalongo
          </span>
        </a>
        <div class="flex-1" />
        <div class="flex items-center gap-1.5">
          <ToggleButton />
          <Menu menuItems={navbarLinks} />
        </div>
      </div>
    </header>
  );
}

function Footer() {
  return (
    <footer class="border-t border-black/5 dark:border-white/10">
      <div class="mx-auto grid max-w-4xl gap-8 px-4 py-10 sm:grid-cols-[1.4fr_1fr_1fr] sm:px-6">
        <div>
          <a href="/" class="flex items-center gap-2">
            <span class="block w-7" aria-hidden="true">
              <Logo />
            </span>
            <span class="text-base font-bold">Roberto Toalongo</span>
          </a>
          <p class="mt-3 max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            Desarrollador de software. Notas, proyectos y formas de contacto.
          </p>
          <div class="mt-4">
            <Social />
          </div>
        </div>
        <nav aria-label="Secciones">
          <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Secciones
          </h2>
          <ul class="mt-3 space-y-2">
            {footerLinks.map(({ label, to }) => (
              <li class="list-none" key={label}>
                <a
                  class="text-sm text-gray-700 hover:underline hover:underline-offset-4 dark:text-gray-300"
                  href={to}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 class="text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Enlaces
          </h2>
          <ul class="mt-3 space-y-2 text-sm">
            <li>
              <a
                class="text-gray-700 hover:underline hover:underline-offset-4 dark:text-gray-300"
                href="https://github.com/rctoa"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                class="text-gray-700 hover:underline hover:underline-offset-4 dark:text-gray-300"
                href="https://www.linkedin.com/in/roberto-toalongo-galabay-1836471b5"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
          <a
            href="/p/sobre-mi"
            class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 transition hover:text-black dark:text-gray-300 dark:hover:text-white"
          >
            Más sobre mí <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <div class="border-t border-black/5 dark:border-white/10">
        <p class="mx-auto flex max-w-4xl flex-col items-center justify-between gap-1 px-4 py-4 text-xs text-gray-500 sm:flex-row sm:px-6 dark:text-gray-400">
          <span>© 2026 Roberto Toalongo</span>
          <span>Hecho con Deno Fresh · Sin trackers</span>
        </p>
      </div>
    </footer>
  );
}
