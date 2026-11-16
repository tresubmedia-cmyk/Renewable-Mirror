
import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowUpRight,
    BookOpen,
    MoveUpRight,
    Sparkles,
} from "lucide-react";

export default function CoverStoryHero() {
    return (
        <section className="relative isolate flex min-h-[850px] items-center overflow-hidden bg-[#09251A] px-5 py-24 sm:px-8 lg:min-h-[960px] lg:py-28">

            {/* BACKGROUND DESIGN */}
            <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute -right-32 top-10 h-[700px] w-[700px] rounded-full border border-[#D9BC70]/10" />
                <div className="absolute -right-12 top-28 h-[500px] w-[500px] rounded-full border border-white/[0.06]" />

                <div className="absolute bottom-0 left-0 h-px w-full bg-white/10" />

                <div className="absolute -bottom-20 -left-10 select-none font-serif text-[260px] font-bold leading-none text-white/[0.018]">
                    RM
                </div>

                <div className="absolute left-[48%] top-0 h-full w-px bg-white/[0.025]" />
            </div>

            <div className="mx-auto w-full max-w-[1400px]">

                <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">

                    {/* LEFT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 35 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.85 }}
                        className="relative z-10"
                    >


                        <p className="max-w-[780px] font-serif text-[56px] font-bold leading-[1.04] tracking-[-0.045em] text-[#F4F1E8] sm:text-7xl lg:text-[68px] xl:text-[70px]">
                            The people.
                            <br />
                            The ideas.
                            <br />
                            <span className="text-[#D9BC70]">
                                The future.
                            </span>
                        </p>
                        <div className="mt-9 h-[2px] w-20 bg-[#D9BC70]" />

                        <p className="mt-9 max-w-[510px] text-sm leading-8 text-[#D4DDD4]/75 sm:text-base sm:leading-9">
                            In-depth stories, exclusive conversations and
                            powerful perspectives from the people and
                            innovations driving the global renewable
                            energy transformation.
                        </p>

                        {/* ACTIONS */}
                        <div className="mt-12 flex flex-wrap items-center gap-7">

                            <a
                                href="#cover-stories"
                                className="group inline-flex items-center gap-5 rounded-full bg-[#D9BC70] py-2 pl-7 pr-2 text-xs font-bold text-[#09251A] transition-all duration-300 hover:bg-[#F4F1E8]"
                            >
                                Explore Cover Stories

                                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#09251A] text-[#D9BC70] transition-transform duration-300 group-hover:rotate-[-45deg]">
                                    <ArrowDown size={19} />
                                </span>
                            </a>

                            <div className="flex items-center gap-3">
                                <BookOpen size={18} className="text-[#D9BC70]" />
                                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/55">
                                    Exclusive Editorials
                                </span>
                            </div>
                        </div>

                     
                    </motion.div>

                    {/* RIGHT EDITORIAL VISUAL */}
                    <motion.div
                        initial={{ opacity: 0, x: 45 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="relative mx-auto w-full max-w-[570px] py-12"
                    >

                        {/* OUTER FRAME */}
                        <div className="absolute -right-3 top-5 h-[560px] w-[90%] border border-[#D9BC70]/25 sm:right-0" />

                        {/* MAIN MAGAZINE PANEL */}
                        <div className="relative z-10 mx-auto w-[88%] max-w-[465px] bg-[#F1EEE4] p-3 shadow-2xl shadow-black/40 sm:p-4">

                            {/* MAGAZINE HEADER */}
                            <div className="relative z-20 flex items-center justify-between border-b border-[#D6D0C1] px-4 pb-4 pt-3">

                                <div>
                                    <h2 className="font-serif text-[27px] font-bold leading-none tracking-tight text-[#173326] sm:text-[32px]">
                                        RENEWABLE
                                        <br />
                                        <span className="text-[#A58B4D]">
                                            MIRROR.
                                        </span>
                                    </h2>

                                    <p className="mt-2 text-[7px] font-bold tracking-[0.23em] text-[#7E887A]">
                                        THE ENERGY PERSPECTIVE
                                    </p>
                                </div>

                                <div className="text-right">
                                    <p className="font-serif text-2xl font-bold text-[#A58B4D]">
                                        RM
                                    </p>
                                    <p className="mt-1 text-[7px] font-bold tracking-widest text-[#7E887A]">
                                        SPECIAL EDITION
                                    </p>
                                </div>
                            </div>

                            {/* COVER IMAGE */}
                            <div className="relative mt-3 h-[350px] overflow-hidden bg-[#193B2B] sm:h-[405px]">

                                <img
                                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1100&q=90"
                                    alt="Wind turbines generating renewable energy"
                                    className="absolute inset-0 h-full w-full object-cover"
                                />

                                {/* IMAGE OVERLAY */}
                                <div className="absolute inset-0 bg-[#09251A]/35" />

                                <div className="absolute inset-x-0 bottom-0 h-[70%] bg-gradient-to-t from-[#09251A]/95 via-[#09251A]/35 to-transparent" />

                                {/* IMAGE CONTENT */}
                                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">

                                    <div className="mb-5 flex items-center gap-3">
                                        <span className="h-px w-8 bg-[#D9BC70]" />
                                        <span className="text-[8px] font-bold uppercase tracking-[0.25em] text-[#D9BC70]">
                                            The Cover Story
                                        </span>
                                    </div>

                                    <h3 className="font-serif text-[43px] font-bold leading-[1.03] tracking-tight text-white sm:text-[54px]">
                                        POWERING
                                        <br />
                                        A NEW
                                        <br />
                                        <span className="text-[#D9BC70]">
                                            GENERATION.
                                        </span>
                                    </h3>

                                    <p className="mt-5 max-w-[290px] text-[10px] leading-6 text-white/75">
                                        The visionaries, technologies and
                                        ideas transforming the global energy landscape.
                                    </p>

                                    <div className="mt-6 flex items-center justify-between border-t border-white/25 pt-4">
                                        <span className="text-[8px] font-bold tracking-[0.18em] text-white/75">
                                            RENEWABLE ENERGY / LEADERSHIP
                                        </span>

                                        <ArrowUpRight size={18} className="text-[#D9BC70]" />
                                    </div>
                                </div>
                            </div>

                            {/* COVER FOOTER */}
                            <div className="flex items-center justify-between px-3 py-4">
                                <span className="text-[8px] font-bold tracking-[0.19em] text-[#A58B4D]">
                                    IDEAS THAT SHAPE TOMORROW
                                </span>

                                <span className="font-serif text-sm font-bold text-[#173326]">
                                    2026
                                </span>
                            </div>
                        </div>

                        {/* FLOATING ISSUE CARD */}
                        <motion.div
                            animate={{ y: [0, -8, 0] }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -left-1 top-24 z-20 border border-[#D9BC70]/30 bg-[#102F23] px-5 py-4 shadow-xl sm:-left-6"
                        >
                            <div className="flex items-center gap-3">
                                <Sparkles size={19} className="text-[#D9BC70]" />

                                <div>
                                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#D9BC70]">
                                        Special Edition
                                    </p>

                                    <p className="mt-1 font-serif text-base text-white">
                                        Featured Stories
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* FLOATING BOTTOM CARD */}
                        <motion.div
                            animate={{ y: [0, 7, 0] }}
                            transition={{
                                duration: 5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            className="absolute -bottom-1 -right-1 z-20 flex items-center gap-4 border border-white/10 bg-[#173A2B] px-5 py-4 shadow-xl sm:-right-5"
                        >
                            <div>
                                <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/45">
                                    Beyond Headlines
                                </p>

                                <p className="mt-1 font-serif text-lg text-[#D9BC70]">
                                    Stories that matter.
                                </p>
                            </div>

                            <MoveUpRight size={19} className="text-[#D9BC70]" />
                        </motion.div>

                    </motion.div>
                </div>

            

            </div>
        </section>
    );
}
