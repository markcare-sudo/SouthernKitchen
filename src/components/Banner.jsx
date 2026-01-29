import { motion } from "framer-motion";
import { INTERNAL_CONTACT_NUMBER } from "@/utils/data";
import { ITEMS } from "@/constants/branding";

/* ---------- Animation Variants ---------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const Banner = () => {
  const whatsappNumber = INTERNAL_CONTACT_NUMBER;

  const getWhatsAppLink = (text) =>
    `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <img
        src="/assets/Images/Banner Image.png"
        alt="Hyderabadi Home Made Food"
        className="absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold"
          >
            Hyderabadi <span className="text-yellow-400">Home-Made Food</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-4 text-gray-300 max-w-xl text-xl"
          >
            Bulk food & monthly meal services for offices, PGs, hostels,
            factories, weddings, and events.
          </motion.p>

          {/* CLICKABLE SERVICES */}
          <motion.div
            variants={containerVariants}
            className="mt-6 space-y-3 text-xl font-semibold text-gray-200"
          >
            {[
              {
                label: "Home-made Hyderabadi meals (not limited to biryani)",
                msg: "I am interested in home-made Hyderabadi food (not limited to biryani)",
              },
              {
                label: "Bulk orders & event catering",
                msg: "I am interested in bulk food orders or event catering",
              },
              {
                label: "Monthly contracts – up to 3 times daily",
                msg: "I am interested in monthly food service (up to 3 times daily)",
              },
            ].map((service, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={getWhatsAppLink(service.msg)}
                target="_blank"
                className="block cursor-pointer hover:text-yellow-400 transition"
                whileHover={{ x: 6 }}
              >
                • {service.label}
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex items-center gap-4 flex-wrap"
          >
            <motion.a
              href={getWhatsAppLink(
                "I would like to enquire about bulk or monthly food service"
              )}
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
            >
              Enquire on WhatsApp
            </motion.a>

            <span className="text-sm text-gray-400">
              Bulk Orders • Monthly Services
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          className="hidden lg:block"
        >
          <a
            href={getWhatsAppLink(
              "I am interested in your home-made food services"
            )}
            target="_blank"
          >
            <motion.img
              src={ITEMS.Hero}
              alt="Hyderabadi Food"
              className="rounded-2xl shadow-2xl cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
