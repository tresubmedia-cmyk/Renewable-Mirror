
import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const scrollToTop = () => {
    // Stop any previous scroll animation
    cancelAnimationFrame(animationRef.current);

    const startPosition = window.scrollY;
    const startTime = performance.now();

    // Smooth animation duration
    const duration = Math.min(
      2400,
      Math.max(1200, startPosition * 0.8)
    );

    const easeInOutCubic = (t) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const easedProgress = easeInOutCubic(progress);

      window.scrollTo(
        0,
        startPosition * (1 - easedProgress)
      );

      if (progress < 1) {
        animationRef.current =
          requestAnimationFrame(animateScroll);
      } else {
        window.scrollTo(0, 0);
      }
    };

    animationRef.current =
      requestAnimationFrame(animateScroll);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, x: -15, scale: 0.85 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: -15, scale: 0.85 }}
          whileHover={{
            y: -4,
            scale: 1.06,
          }}
          whileTap={{ scale: 0.92 }}
          onClick={scrollToTop}
          aria-label="Back to top"
          title="Back to top"
          className="
            fixed bottom-6 left-5 z-[9999]
            flex h-11 w-11 items-center justify-center
            rounded-full
            border border-[#315E46]
            bg-[#172D21] text-white
            shadow-sm
            transition-colors duration-300
            hover:bg-[#315E46]
            sm:bottom-8 sm:left-8
          "
        >
          <ArrowUp
            size={21}
            strokeWidth={2.3}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
 