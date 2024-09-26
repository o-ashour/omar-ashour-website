import FrontendMentorSmallIcon from "./icons/frontendMentorSmallIcon";
import GitHubSmallIcon from "./icons/githubSmallIcon";
import LinkedInSmallIcon from "./icons/linkedInSmallIcon";
import TwitterSmallIcon from "./icons/twitterSmallIcon";

export default function NavMenuSmall() {
  return (
    <nav className="md:hidden">
      <ul className="flex space-x-7">
        <li>
          <button id='nav-btn'>
            <GitHubSmallIcon />
          </button>
        </li>
        <li>
          <button id='nav-btn'>
            <FrontendMentorSmallIcon />
          </button>
        </li>
        <li>
          <button id='nav-btn'>
            <LinkedInSmallIcon />
          </button>
        </li>
        <li>
          <button id='nav-btn'>
            <TwitterSmallIcon />
          </button>
        </li>
      </ul>
    </nav>
  )
}