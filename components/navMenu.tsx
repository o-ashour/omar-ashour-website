import { NavItems } from "@/app/config";
import Link from "next/link";

export default function NavMenu() {
  return (
    <nav className="hidden md:block xl:pr-6 ">
      <ul className="flex space-x-8 items-center">
        {NavItems.map(navItem => {
          return (
            <li key={navItem.idx}>
              <Link href={navItem.url} target='_blank'>
                <button id="nav-btn">
                  {navItem.icons.large}
                </button>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}