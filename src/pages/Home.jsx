import React from "react";
import { EXTERNAL_CONTACT_NUMBER, INTERNAL_CONTACT_NUMBER } from "@/utils/data";

export default function SouthernKitchenLanding() {
  const whatsappNumber = INTERNAL_CONTACT_NUMBER; // 🔁 Replace with real WhatsApp number
  const message = encodeURIComponent(
    "Hello Southern Kitchen! I would like to order Hyderabadi Biryani."
  );

  const orderNowLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">
      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1543353071-087092ec393a"
          alt="Hyderabadi Biryani"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Authentic <span className="text-yellow-400">Hyderabadi</span>
              <br /> Dum Biryani
            </h1>
            <p className="mt-6 text-gray-300 text-base sm:text-lg max-w-xl">
              Slow-cooked, aromatic, royal Hyderabadi biryani prepared in
              traditional dum style. Crafted fresh in our cloud kitchen and
              delivered hot to your doorstep.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a
                href={orderNowLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition text-center"
              >
                Order on WhatsApp
              </a>

              <span className="text-sm text-gray-400 self-center">
                Delivery Only • Cloud Kitchen
              </span>
            </div>
          </div>

          {/* HERO IMAGE */}
          <div className="hidden lg:block">
            <img
              src="https://images.unsplash.com/photo-1550547660-d9450f859349o"
              alt="Biryani Bowl"
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* ================= WHY SOUTHERN KITCHEN ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Southern Kitchen?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Authentic Recipe", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
            { title: "Premium Ingredients", img: "https://images.unsplash.com/photo-1543353071-087092ec393a" },
            { title: "Hygienic Cloud Kitchen", img: "https://images.unsplash.com/photo-1550547660-d9450f859349" },
            { title: "Fast Delivery", img: "https://images.unsplash.com/photo-1543353071-087092ec393a" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-[#181818] rounded-xl p-6 text-center hover:scale-105 transition"
            >
              <img
                src={item.img}
                alt={item.title}
                className="h-40 w-full object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-lg">{item.title}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* ================= MENU SECTION ================= */}
      <section className="bg-[#141414] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Signature Biryanis
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[{
              name: "Chicken Dum Biryani",
              img: "https://images.unsplash.com/photo-1543353071-087092ec393a",
            }, {
              name: "Mutton Dum Biryani",
              img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398",
            }, {
              name: "Veg Dum Biryani",
              img: "https://images.unsplash.com/photo-1543353071-087092ec393a",
            }].map((item, i) => (
              <div
                key={i}
                className="bg-[#1c1c1c] rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{item.name}</h3>
                  <a
                    href={orderNowLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-yellow-400 text-black px-6 py-2 rounded-full font-medium hover:bg-yellow-300"
                  >
                    Order Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
