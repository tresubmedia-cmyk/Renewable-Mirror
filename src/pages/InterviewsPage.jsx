import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { interviews } from "../data/articles";
import { Reveal } from "../components/common/Reveal";

export function InterviewsPage() {
  return <div className="page-shell"><div className="container"><div className="page-intro"><span className="eyebrow">VOICES OF CHANGE</span><h1>People behind<br /><em>the progress.</em></h1><p>Conversations with leaders, innovators and changemakers across the energy transition.</p></div><div className="interview-grid">{interviews.map((person, index) => <Reveal key={person.slug} delay={index * .07}><Link to="/contact" className="interview-card"><div className="interview-photo"><img src={person.image} alt="" /><span><ArrowUpRight /></span></div><div className="interview-info"><span>{person.role}</span><h3>{person.name}</h3><p>{person.company}</p></div></Link></Reveal>)}</div></div></div>;
}