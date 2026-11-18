
import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen } from "lucide-react";

const stories = [
  {
    id: 1,
    category: "SOLAR ENERGY",
    title: "The Next Chapter of Solar Innovation",
    description:
      "Explore the technologies and ideas shaping the future of solar energy.",
    image: "/images/cover-story/cover-story-1.jpg",
  },
  {
    id: 2,
    category: "ENERGY STORAGE",
    title: "Powering the Future Through Energy Storage",
    description:
      "A closer look at energy storage solutions and their growing industry impact.",
    image: "/images/cover-story/cover-story-2.jpg",
  },
  {
    id: 3,
    category: "INDUSTRY LEADERS",
    title: "The People Driving Energy Transformation",
    description:
      "Perspectives and experiences from people contributing to the energy transition.",
    image: "/images/cover-story/cover-story-3.jpg",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CoverStorySection() {
  return (
    <section
      id="cover-stories"
      className="bg-white px-5 py-16 sm:px-8 sm:py-20 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-9"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-8 bg-[#F5A000]" />
            <span className="text-[9px] font-bold uppercase tracking-[0.24em] text-[#B8860B]">
              Featured Perspectives
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-[#111827] sm:text-3xl lg:text-4xl">
            Stories Worth Exploring
          </h2>

          <p className="mt-3 max-w-xl text-[12px] leading-6 text-[#6B7280] sm:text-[13px] sm:leading-7">
            In-depth features, exclusive perspectives and important
            stories from across the renewable energy industry.
          </p>
        </motion.div>

        {/* STORY CARDS */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {stories.map((story) => (
            <motion.article
              key={story.id}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className="group overflow-hidden rounded-lg border border-[#263244] bg-[#111827] transition-all duration-500 hover:border-[#F5A000]/60 hover:shadow-[0_16px_35px_rgba(17,24,39,0.14)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#263244]">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/70 via-transparent to-transparent opacity-90" />

                <span className="absolute bottom-3 left-3 rounded-sm border border-[#F5A000]/30 bg-[#111827]/90 px-3 py-1.5 text-[8px] font-bold tracking-[0.15em] text-[#F5A000] backdrop-blur-sm">
                  {story.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <h3 className="text-[16px] font-bold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-[#F5A000] sm:text-[17px]">
                  {story.title}
                </h3>

                <p className="mt-2.5 text-[11px] leading-6 text-[#D1D5DB]/75 sm:text-xs">
                  {story.description}
                </p>

                {/* FOOTER */}
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="flex items-center gap-2 text-[8px] font-bold uppercase tracking-[0.15em] text-[#9CA3AF]">
                    <BookOpen size={13} className="text-[#F5A000]" />
                    Featured Story
                  </span>

                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F5A000]/40 text-[#F5A000] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#F5A000] group-hover:bg-[#F5A000] group-hover:text-[#111827]">
                    <ArrowUpRight size={15} />
                  </span>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* FOOTER NOTE */}
        <p className="mt-6 text-[10px] leading-5 text-[#9CA3AF]">
          Featured story examples are placeholders. Replace these with published articles.
        </p>

      </div>
    </section>
  );
}
