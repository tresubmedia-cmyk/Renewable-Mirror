
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function AdvertisementBanner({ ad, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="group w-full"
    >
      <Link
        to={ad.link || "/contact"}
        aria-label={`Advertisement by ${ad.brand}`}
        className="block w-full overflow-hidden"
      >
        <img
          src={ad.image}
          alt={ad.alt || ad.brand}
          loading="lazy"
          className="
            block h-auto w-full
            object-contain
            transition-transform duration-500
            group-hover:scale-[1.01]
          "
        />
      </Link>
    </motion.div>
  );
}
