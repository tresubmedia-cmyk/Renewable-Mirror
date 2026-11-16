import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Linkedin } from "lucide-react";

const EASE = [0.22, 1, 0.36, 1];

const teamMembers = [
  {
    name: "Team Member One",
    role: "Editorial Team",
    image: "/images/about/team-member-1.jpg",
    linkedin: "",
  },
  {
    name: "Team Member Two",
    role: "Media & Communications",
    image: "/images/about/team-member-2.jpg",
    linkedin: "",
  },
  {
    name: "Team Member Three",
    role: "Industry Relations",
    image: "/images/about/team-member-3.jpg",
    linkedin: "",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

function Member({ member, index, reduce }) {
  const [failed, setFailed] = useState(false);

  return (
    <motion.article
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: index * 0.12, ease: EASE }}
      className="group"
    >
      {/* Leaf-shaped portrait: the corners swap on hover */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-[5rem_0.75rem_5rem_0.75rem] bg-[#E9EFE6] transition-[border-radius] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:rounded-[0.75rem_5rem_0.75rem_5rem] motion-reduce:transition-none">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="font-serif text-7xl italic text-[#A58B4D]/60">
            {initials(member.name)}
          </span>
        </div>

        {!failed && (
          <img
            src={member.image}
            alt={member.name}
            loading="lazy"
            onError={() => setFailed(true)}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
          />
        )}
      </div>

      {/* Name, role, link */}
      <div className="mt-6 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-serif text-2xl font-medium tracking-tight text-[#17291F]">
            {member.name}
          </h3>
          <p className="mt-1 text-sm text-[#A58B4D]">{member.role}</p>
        </div>

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#DCE3D9] text-[#344739] transition-colors hover:border-[#17291F] hover:bg-[#17291F] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A58B4D]"
          >
            <Linkedin size={16} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function OurTeam() {
  const reduce = useReducedMotion();

  return (
    <section className="bg-white px-6 py-24 sm:px-10 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <h2 className="text-5xl font-bold leading-[1.05] tracking-tight text-[#17291F] sm:text-6xl">
            Meet Our
            <span className="block font-serif font-medium  text-[#A58B4D]">
              Team.
            </span>
          </h2>

          <p className="max-w-sm text-base leading-8 text-[#5F6E63]">
            The people, perspectives and ideas that help bring Renewable
            Mirror to life.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {teamMembers.map((member, i) => (
            <Member key={member.name} member={member} index={i} reduce={reduce} />
          ))}
        </div>
      </div>
    </section>
  );
}