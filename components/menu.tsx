import { FunctionComponent } from "preact";
import DropdownMenu from "./drop-down-menu.tsx";

export interface DropdownMenuItemProps {
  href: string;
  label: string;
}

export interface DropdownMenuProps {
  menuItems: DropdownMenuItemProps[];
}

const linkClass =
  "rounded-full px-3.5 py-2 text-sm font-medium text-gray-600 transition hover:bg-black/5 hover:text-black dark:text-gray-300 dark:hover:bg-white/10 dark:hover:text-white";

const Menu: FunctionComponent<DropdownMenuProps> = ({ menuItems }) => {
  return (
    <>
      <nav className="hidden sm:block" aria-label="Navegación principal">
        <ul className="flex items-center gap-0.5">
          {menuItems.map(({ href, label }) => (
            <li class="list-none" key={href}>
              <a href={href} class={linkClass}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <DropdownMenu menuItems={menuItems} />
    </>
  );
};

export default Menu;
