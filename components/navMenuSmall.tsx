import FrontendMentorSmallIcon from "./icons/frontendMentorSmallIcon";
import GitHubSmallIcon from "./icons/githubSmallIcon";
import LinkedInSmallIcon from "./icons/linkedInSmallIcon";
import TwitterSmallIcon from "./icons/twitterSmallIcon";

export default function NavMenuSmall() {
  return (
    <nav className="md:hidden">
      <ul className="flex space-x-7">
        <li>
          <GitHubSmallIcon />
        </li>
        <li>
          <FrontendMentorSmallIcon />
        </li>
        <li>
          <LinkedInSmallIcon />
        </li>
        <li>
          <TwitterSmallIcon />
        </li>
      </ul>
    </nav>
  )
}