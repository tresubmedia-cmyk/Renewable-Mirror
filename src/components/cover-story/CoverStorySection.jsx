
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
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function CoverStorySection() {
  return (
    <section
      id="cover-stories"
      className="bg-white px-6 py-20 sm:px-10 sm:py-24 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-9 bg-[#B69A55]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#A58B4D]">
              Featured Perspectives
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#10291D] sm:text-4xl lg:text-5xl">
            Stories Worth Exploring
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-[#788278] sm:text-base">
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
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {stories.map((story) => (
            <motion.article
              key={story.id}
              variants={cardVariants}
              whileHover={{ y: -7 }}
              className="group overflow-hidden rounded-xl border border-[#E7E8DF] bg-white transition-all duration-500 hover:border-[#D9BC70] hover:shadow-[0_18px_40px_rgba(9,37,26,0.10)]"
            >
              {/* IMAGE */}
              <div className="relative aspect-[16/10] overflow-hidden bg-[#E5EAE2]">
                <img
                  src={story.image}
                  alt={story.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#09251A]/45 to-transparent opacity-70" />

                <span className="absolute bottom-4 left-4 rounded-sm bg-[#09251A]/90 px-3 py-2 text-[9px] font-bold tracking-[0.16em] text-[#D9BC70] backdrop-blur-sm">
                  {story.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6 sm:p-7">

                <h3 className="text-xl font-bold leading-snug tracking-tight text-[#10291D] transition-colors duration-300 group-hover:text-[#A58B4D]">
                  {story.title}
                </h3>

                <p className="mt-3 text-xs leading-7 text-[#788278] sm:text-sm">
                  {story.description}
                </p>

                {/* FOOTER */}
                <div className="mt-6 flex items-center justify-between border-t border-[#E8EBE5] pt-5">
                  <span className="flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.15em] text-[#879187]">
                    <BookOpen size={14} className="text-[#A58B4D]" />
                    Featured Story
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D9BC70]/50 text-[#A58B4D] transition-all duration-300 group-hover:rotate-45 group-hover:border-[#D9BC70] group-hover:bg-[#D9BC70] group-hover:text-[#09251A]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>

              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* FOOTER NOTE */}
        <p className="mt-7 text-[11px] leading-6 text-[#929B91]">
          Featured story examples are placeholders. Replace these with published articles.
        </p>

      </div>
    </section>
  );
}
