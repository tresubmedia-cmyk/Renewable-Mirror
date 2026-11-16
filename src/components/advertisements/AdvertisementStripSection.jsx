
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import advertisementStrips from "../../data/advertisementStrips";

function AdvertisementBanner({ ad, index }) {
  if (!ad) return null;

  const isExternal = /^https?:\/\//i.test(ad.link || "");

  const image = (
    <img
      src={ad.image}
      alt={ad.alt || ad.brand}
      loading="lazy"
      className="block h-auto w-full max-w-full object-contain"
    />
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="w-full min-w-0"
    >
      {isExternal ? (
        <a
          href={ad.link}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${ad.brand} website`}
          className="block w-full"
        >
          {image}
        </a>
      ) : (
        <Link to={ad.link || "/contact"} className="block w-full">
          {image}
        </Link>
      )}
    </motion.div>
  );
}

export default function AdvertisementStripSection() {
  if (!advertisementStrips || advertisementStrips.length === 0) {
    return null;
  }

  return (
    <section className="bg-white px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-6 sm:grid-cols-2">
        {advertisementStrips.slice(0, 2).map((ad, index) => (
          <AdvertisementBanner
            key={ad.id}
            ad={ad}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
