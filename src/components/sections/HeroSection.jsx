
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="rm-hero">

      {/* Background Overlay */}
      <div className="rm-hero-overlay" />

      {/* Hero Content */}
      <div className="rm-hero-content">

        <motion.div
          className="rm-hero-copy"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >

          <span className="rm-hero-eyebrow">
            <span />
            RENEWABLE ENERGY · INDUSTRY · INNOVATION
          </span>

          <h1>
            Shaping Tomorrow's Energy
            <br />
            with <span>Smart Solutions.</span>
          </h1>

          <p className="rm-hero-description">
            Discover the latest developments, ideas and
            innovations transforming the renewable energy
            industry and building a sustainable future.
          </p>

          <div className="rm-hero-actions">

            <Link to="/news" className="rm-button-primary">
              Discover
              <ArrowUpRight size={17} />
            </Link>

            <Link to="/about" className="rm-button-outline">
              Our Story
            </Link>

          </div>
        </motion.div>

        {/* Bottom Information */}
        <motion.div
          className="rm-hero-bottom"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <span>POWERING A SUSTAINABLE TOMORROW</span>
          <span>01 — RENEWABLE ENERGY</span>
        </motion.div>

      </div>
    </section>
  );
}
