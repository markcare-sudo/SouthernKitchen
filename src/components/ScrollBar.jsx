import { motion } from "framer-motion";
import { INTERNAL_CONTACT_NUMBER } from "@/utils/data";

const CLIENT_SEGMENTS = [
  "Corporate Offices",
  "IT Companies",
  "PGs & Hostels",
  "Factories",
  "Colleges",
  "Weddings",
  "Family Functions",
  "Events & Parties",
];

// Duplicate content for seamless infinite scroll
const SCROLL_ITEMS = [...CLIENT_SEGMENTS, ...CLIENT_SEGMENTS];

const ScrollBar = () => {
  const whatsappNumber = INTERNAL_CONTACT_NUMBER;

  const getWhatsAppLink = (text) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      `I am interested in bulk food services for ${text}`
    )}`;

  return (
    <div className="bg-black border-b border-yellow-400 overflow-hidden">
      <motion.div
        className="flex items-center whitespace-nowrap py-2 text-sm font-medium text-gray-200"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 22,
          ease: "linear",
        }}
      >
        {SCROLL_ITEMS.map((text, index) => (
          <a
            key={index}
            href={getWhatsAppLink(text)}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-6 flex items-center gap-6 cursor-pointer hover:text-yellow-400 transition"
          >
            <span className="font-semibold">{text}</span>
            <span className="text-yellow-400">•</span>
          </a>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollBar;
