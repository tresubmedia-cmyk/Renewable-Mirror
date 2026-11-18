import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight, CalendarDays, Play } from "lucide-react";
import { Link } from "react-router-dom";

// DUMMY DATA: real videos ke liye <VideoInterviews interviews={data} /> pass karo.
// Har item: { id, name, designation, company, category, date, title, poster, videoUrl, slug }
// videoUrl khali ho to sirf poster dikhega (autoplay nahi hoga).
// Neeche ka videoUrl sirf demo ke liye ek free sample clip hai.
const DEMO_VIDEO =
  "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";

const defaultInterviews = [
  {
    id: 1,
    name: "Mr. Visat Patel",
    designation: "Co-founder & CEO",
    company: "Ubidge Technology Pvt. Ltd.",
    category: "Leadership Interview",
    date: "November 13, 2026",
    title: "Building the Next Generation of Technology Solutions",
    poster:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=1400&q=85",
    videoUrl: DEMO_VIDEO,
    slug: "/video-interviews/visat-patel",
  },
  {
    id: 2,
    name: "Mr. Vineet Mittal",
    designation: "Founder & Director",
    company: "Navitas Solar",
    category: "Solar Energy",
    date: "November 12, 2026",
    title: "The Future of Solar Manufacturing in India",
    poster:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=1400&q=85",
    videoUrl: DEMO_VIDEO,
    slug: "/video-interviews/vineet-mittal",
  },
  {
    id: 3,
    name: "Mr. Kamlesh Kumar D. Patel",
    designation: "Promoter and MD",
    company: "GRE Renew Enertech",
    category: "Industry Insights",
    date: "November 11, 2026",
    title: "Making Renewable Energy Projects Commercially Viable",
    poster:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=85",
    videoUrl: DEMO_VIDEO,
    slug: "/video-interviews/kamlesh-patel",
  },
  {
    id: 4,
    name: "Mr. Shivam Sisodiya",
    designation: "Co-Founder and CEO",
    company: "Bijliride",
    category: "EV Industry",
    date: "November 10, 2026",
    title: "What Is Driving the Next Wave of Electric Mobility?",
    poster:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=1400&q=85",
    videoUrl: DEMO_VIDEO,
    slug: "/video-interviews/shivam-sisodiya",
  },
];

const EASE = [0.22, 1, 0.36, 1];

/* Ek video card: screen par aate hi (50% dikhne par) autoplay,
   bahar jaate hi pause. Muted rehta hai taaki browser autoplay allow kare. */
function VideoCard({ interview, reduce }) {
  const mediaRef = useRef(null);
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const inView = useInView(mediaRef, { amount: 0.5 });
  const hasVideo = Boolean(interview.videoUrl);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || reduce) return;

    video.muted = true; // React ke muted attribute ka known quirk

    if (inView) {
      const attempt = video.play();
      if (attempt && typeof attempt.catch === "function") {
        attempt.catch(() => setPlaying(false)); // autoplay block hua to poster hi rahega
      }
    } else {
      video.pause();
    }
  }, [inView, reduce]);

  return (
    <Link
      to={interview.slug || "/video-interviews"}
      className="flex h-full flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B99A4B]"
    >
      {/* VIDEO */}
      <div
        ref={mediaRef}
        className="relative aspect-video overflow-hidden rounded-2xl bg-[#10251B]"
      >
        {hasVideo ? (
          <video
            ref={videoRef}
            src={interview.videoUrl}
            poster={interview.poster}
            muted
            loop
            playsInline
            preload="metadata"
            onPlaying={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            aria-label={interview.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
          />
        ) : (
          <img
            src={interview.poster}
            alt={interview.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-[#07140E]/85 via-[#07140E]/15 to-transparent" />

        {/* Play icon: jab tak video chal nahi raha tab tak dikhta hai */}
        <span
          className={`absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/50 bg-white/15 text-white backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:border-[#D8BD76] group-hover:bg-[#D8BD76] group-hover:text-[#0A1A12] ${
            playing ? "scale-75 opacity-0" : "opacity-100"
          }`}
        >
          <Play size={24} fill="currentColor" className="ml-1" />
        </span>

        {/* Name & role on the video */}
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
          <div className="min-w-0">
            <p className="font-display text-[17px] font-bold leading-snug tracking-[-0.02em] text-white sm:text-[19px]">
              {interview.name}
            </p>
            <p className="mt-1 text-[12.5px] leading-5 text-white/75">
              {interview.designation}, {interview.company}
            </p>
          </div>

          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#172D21] transition-all duration-500 group-hover:rotate-45 group-hover:bg-[#D8BD76]">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>

      {/* TEXT */}
      <div className="flex flex-1 flex-col pt-5">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] font-medium text-[#7D887D]">
          <span className="text-[#9A7E34]">{interview.category}</span>
          <span className="flex items-center gap-1.5">
            <CalendarDays size={13} />
            {interview.date}
          </span>
        </div>

        <h3 className="mt-3 line-clamp-2 font-display text-[19px] font-bold leading-[1.45] tracking-[-0.02em] text-[#17291F] transition-colors duration-300 group-hover:text-[#2F5A3E] sm:text-[21px]">
          {interview.title}
        </h3>

        <div className="mt-auto flex items-center gap-2 pt-4 text-[13px] font-semibold text-[#526D55] transition-colors duration-300 group-hover:text-[#17291F]">
          Watch interview
          <ArrowUpRight
            size={16}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-1"
          />
        </div>
      </div>
    </Link>
  );
}

export default function VideoInterviews({ interviews = defaultInterviews }) {
  const reduce = useReducedMotion();
  if (!interviews || interviews.length === 0) return null;
  const items = interviews.slice(0, 4);

  const headerMotion = reduce
    ? {}
    : {
        initial: { opacity: 0, y: 28 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
        transition: { duration: 0.8, ease: EASE },
      };

  const listVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.14, delayChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 44 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: EASE },
    },
  };

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          {...headerMotion}
          className="mb-10 flex flex-col justify-between gap-6 border-b border-[#e9ede6] pb-8 md:mb-12 md:flex-row md:items-end"
        >
          <div className="max-w-2xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-[#B99A4B]" />
              <span className="text-[12px] font-semibold tracking-[0.04em] text-[#667C65]">
                Watch and discover
              </span>
            </div>

          
<p className="font-display text-[30px] font-bold leading-[1.1] tracking-[-0.045em] text-[#17291F] sm:text-[28px] lg:text-[32px]">
  VIDEO <span className="text-[#1e4e6d]">INTERVIEWS</span>
</p>

            <p className="mt-4 max-w-xl text-[14px] leading-7 text-[#6F7B6F]">
              Watch exclusive conversations with industry leaders, innovators
              and the people transforming renewable energy.
            </p>
          </div>
<Link
  to="/video-interviews"
  className="group inline-flex w-fit items-center gap-2 rounded-full bg-[#111827] py-2 pl-4 pr-2 transition-all duration-300 hover:bg-[#1F2937] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#F5A000]"
>
  <span className="text-[12px] font-semibold text-white">
    Explore all videos
  </span>

  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F5A000] text-[#111827] transition-all duration-300 group-hover:bg-[#E6B94A]">
    <ArrowUpRight
      size={15}
      className="transition-transform duration-300 group-hover:rotate-45"
    />
  </span>
</Link>
        </motion.div>

        {/* VIDEO CARDS */}
        <motion.div
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:gap-x-8"
        >
          {items.map((interview) => (
            <motion.article
              key={interview.id}
              variants={cardVariants}
              className="group min-w-0"
            >
              <VideoCard interview={interview} reduce={reduce} />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}