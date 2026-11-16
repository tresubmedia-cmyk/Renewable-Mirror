
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    FileText,
    Newspaper,
    Sparkles,
    Leaf,
} from "lucide-react";

const resources = [
    { icon: BookOpen, title: "Industry Reports", number: "01" },
    { icon: FileText, title: "Research & Guides", number: "02" },
    { icon: Newspaper, title: "Industry Insights", number: "03" },
];

export default function ResourcesHero() {
    return (
        <section className="relative isolate flex min-h-[850px] items-center overflow-hidden bg-[#09251A] px-5 py-24 sm:px-8 lg:min-h-[950px] lg:py-28">

            {/* BACKGROUND */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-40 top-0 h-[700px] w-[700px] rounded-full border border-[#D9BC70]/10" />
                <div className="absolute -right-16 top-24 h-[520px] w-[520px] rounded-full border border-white/[0.06]" />
                <div className="absolute -left-32 bottom-0 h-[450px] w-[450px] rounded-full bg-[#D9BC70]/[0.035] blur-[110px]" />

                <div className="absolute left-[48%] top-0 h-full w-px bg-white/[0.025]" />
                <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />

                <span className="absolute -bottom-20 -left-10 select-none font-serif text-[250px] font-bold leading-none text-white/[0.018]">
                    RM
                </span>
            </div>

            <div className="mx-auto w-full max-w-[1400px]">

                <div className="grid items-center gap-16 lg:grid-cols-[1.08fr_0.92fr]">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85 }}
                        className="relative z-10"
                    >


                        {/* MAIN HEADING */}
                        <p className="max-w-[780px]  text-[56px] font-bold leading-[1.04] tracking-[-0.045em] text-[#F4F1E8] sm:text-7xl lg:text-[68px] xl:text-[70px]">
                            Knowledge.
                            <br />
                            Research.
                            <br />
                            <span className="text-[#D9BC70]">
                                New possibilities.
                            </span>
                        </p>

                        <div className="mt-9 h-[2px] w-20 bg-[#D9BC70]" />

                        <p className="mt-9 max-w-[520px] text-sm leading-8 text-[#D4DDD4]/75 sm:text-base sm:leading-9">
                            Discover a world of industry knowledge, in-depth
                            research, expert perspectives and valuable
                            publications shaping the future of renewable energy.
                        </p>

                        {/* BUTTONS */}
                        <div className="mt-12 flex flex-wrap items-center gap-7">

                            <a
                                href="#resources-content"
                                className="group inline-flex items-center gap-5 rounded-full bg-[#D9BC70] py-2 pl-7 pr-2 text-xs font-bold text-[#09251A] transition-all duration-300 hover:bg-[#F4F1E8]"
                            >
                                Explore Resources

                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#09251A] text-[#D9BC70] transition-transform duration-300 group-hover:rotate-[-45deg]">
                                    <ArrowDown size={19} />
                                </span>
                            </a>

                            <div className="flex items-center gap-3">
                                <BookOpen size={18} className="text-[#D9BC70]" />

                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    Research & Knowledge
                                </span>
                            </div>
                        </div>


                    </motion.div>

                    {/* RIGHT VISUAL */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[570px] py-12"
                    >

                        {/* BACK LAYERS */}
                        <div className="absolute right-0 top-5 h-[570px] w-[88%] border border-[#D9BC70]/25" />

                        <div className="absolute right-5 top-10 h-[550px] w-[88%] border border-white/10" />

                        {/* MAIN CARD */}
                        <div className="relative z-10 mx-auto w-[86%] max-w-[440px] border border-[#D9BC70]/40 bg-[#F4F1E8] p-4 shadow-2xl shadow-black/40 sm:p-6">

                            {/* HEADER */}
                            <div className="flex items-center justify-between border-b border-[#D5D2C8] px-2 pb-5">
                                <div>
                                    <p className="font-serif text-[27px] font-bold leading-none text-[#173326]">
                                        RENEWABLE
                                        <br />
                                        <span className="text-[#A58B4D]">
                                            MIRROR.
                                        </span>
                                    </p>

                                    <p className="mt-2 text-[7px] font-bold tracking-[0.22em] text-[#7E887A]">
                                        KNOWLEDGE & RESEARCH
                                    </p>
                                </div>

                                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C5B77F]/60">
                                    <Leaf size={22} className="text-[#A58B4D]" />
                                </div>
                            </div>

                            {/* FEATURE IMAGE */}
                            <div className="relative mt-5 h-[220px] overflow-hidden bg-[#173326] sm:h-[250px]">
                                <img
                                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1000&q=85"
                                    alt="Renewable energy wind turbines"
                                    className="h-full w-full object-cover"
                                />

                                <div className="absolute inset-0 bg-[#09251A]/30" />

                                <div className="absolute bottom-0 left-0 right-0 bg-[#09251A]/85 p-5">
                                    <p className="text-[8px] font-bold uppercase tracking-[0.22em] text-[#D9BC70]">
                                        The Knowledge Collection
                                    </p>

                                    <h2 className="mt-2 font-serif text-[32px] font-bold leading-tight text-white sm:text-[39px]">
                                        EXPLORE
                                        <br />
                                        WHAT'S NEXT.
                                    </h2>
                                </div>
                            </div>

                            {/* RESOURCE LIST */}
                            <div className="mt-6">
                                {resources.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <div
                                            key={item.title}
                                            className="flex items-center justify-between border-b border-[#DAD8CF] py-5"
                                        >
                                            <div className="flex items-center gap-4">
                                                <Icon size={19} className="text-[#A58B4D]" />

                                                <span className="text-xs font-bold text-[#254334]">
                                                    {item.title}
                                                </span>
                                            </div>

                                            <span className="font-serif text-sm text-[#A58B4D]">
                                                {item.number}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* FOOTER */}
                            <div className="flex items-center justify-between px-1 pt-6">
                                <span className="text-[8px] font-bold tracking-[0.17em] text-[#A58B4D]">
                                    IDEAS POWERING TOMORROW
                                </span>

                                <Sparkles size={17} className="text-[#A58B4D]" />
                            </div>
                        </div>



                        {/* FLOATING BOTTOM LABEL */}
                        <motion.div
                            animate={{ y: [0, 7, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-1 -right-1 z-20 border border-white/10 bg-[#173A2B] px-5 py-4 shadow-xl sm:-right-5"
                        >
                            <div className="flex items-center gap-3">
                                <Sparkles size={18} className="text-[#D9BC70]" />

                                <div>
                                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
                                        Knowledge for
                                    </p>

                                    <p className="mt-1 font-serif text-base text-[#D9BC70]">
                                        A Better Future
                                    </p>
                                </div>

                                <ArrowUpRight size={17} className="text-[#D9BC70]" />
                            </div>
                        </motion.div>

                    </motion.div>
                </div>



            </div>
        </section>
    );
}
