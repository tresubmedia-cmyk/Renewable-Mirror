import { Link } from "react-router-dom";

export function NotFoundPage() {
  return <div className="page-shell"><div className="container not-found"><span className="eyebrow">404 · PAGE NOT FOUND</span><h1>This page took<br /><em>a different path.</em></h1><p>The page you are looking for may have moved or no longer exists.</p><Link className="button button-dark" to="/">Back to homepage</Link></div></div>;
}