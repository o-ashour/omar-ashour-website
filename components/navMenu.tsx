import FrontendMentorIcon from "./icons/frontendMentorIcon";
import GitHubIcon from "./icons/gitHubIcon";
import LinkedInIcon from "./icons/linkedInIcon";
import TwitterIcon from "./icons/twitterIcon";

export default function NavMenu() {
  return (
    <nav className="hidden md:block xl:pr-6 ">
      <ul className="flex space-x-8 items-center">
        <li>
          <GitHubIcon />
        </li>
        <li>
          <FrontendMentorIcon />
        </li>
        <li>
          <LinkedInIcon />
        </li>
        <li>
          <TwitterIcon />
        </li>
      </ul>
    </nav>
  )
}