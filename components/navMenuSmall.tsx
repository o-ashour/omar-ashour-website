import { NavItems } from "@/app/config";
import Link from "next/link";

export default function NavMenuSmall() {
  return (
    <nav className="md:hidden">
      <ul className="flex space-x-7">
        {NavItems.map(navItem => {
          return (
            <li key={navItem.idx}>
              <Link href={navItem.url} target='_blank'>
                <button id="nav-btn">
                  {navItem.icons.small}
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}