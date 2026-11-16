import { Link } from "react-router-dom";

export function SectionHeading({
  eyebrow,
  title,
  link,
  linkText = "View all"
}: {
  eyebrow: string;
  title: string;
  link?: string;
  linkText?: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      {link && <Link className="text-link" to={link}>{linkText} <span>↗</span></Link>}
    </div>
  );
}