import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";

interface FooterProps {
  company: string;
  facebookLink: string;
  youtubeLink: string;
}
export default function Footer({ company, facebookLink, youtubeLink }: FooterProps) {
  return (
    <footer>
      <a
        href={facebookLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faFacebook} /> Facebook Group
      </a>
      <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faYoutube} /> YouTube Channel
      </a>
      <p>
        &copy; {new Date().getFullYear()} {company}. All rights reserved.
      </p>
    </footer>
  );
}
