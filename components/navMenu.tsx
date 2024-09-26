import FrontendMentorIcon from "./icons/frontendMentorIcon";
import GitHubIcon from "./icons/gitHubIcon";
import LinkedInIcon from "./icons/linkedInIcon";
import TwitterIcon from "./icons/twitterIcon";

export default function NavMenu() {
  return (
    <nav className="hidden md:block xl:pr-6 ">
      <ul className="flex space-x-8 items-center">
        <li>
          <button id="nav-btn">
            <GitHubIcon />
          </button>
        </li>
        <li>
          <button id="nav-btn">
            <FrontendMentorIcon />
          </button>
        </li>
        <li>
          <button id="nav-btn">
            <LinkedInIcon />
          </button>
        </li>
        <li>
          <button id="nav-btn">
            <TwitterIcon />
          </button>
        </li>
      </ul>
    </nav>
  )
}