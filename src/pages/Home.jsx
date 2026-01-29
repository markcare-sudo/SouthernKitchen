import React from "react";
import { INTERNAL_CONTACT_NUMBER } from "@/utils/data";
import { ITEMS } from "@/constants/branding";
import { motion } from "framer-motion";
import ScrollBar from "@/components/ScrollBar";
import Banner from "@/components/Banner";



export default function SouthernKitchenLanding() {
  const whatsappNumber = INTERNAL_CONTACT_NUMBER; // 🔁 Replace with real WhatsApp number
  const message = encodeURIComponent(
    "Hello Southern Kitchen! I would like to order Hyderabadi Biryani."
  );

  const orderNowLink = `https://wa.me/${whatsappNumber}?text=${message}`;


  return (
    <div className="bg-[#0f0f0f] text-white min-h-screen font-sans">

      {/* TOP AUTO SCROLL BAR */}
      {/* TOP AUTO SCROLLING BULK COMBOS BAR */}
      <ScrollBar />

      {/* ================= HERO SECTION ================= */}
      <Banner />


      {/* ================= BULK ORDER MENU ================= */}
      <section className="bg-[#141414] py-24">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-4">
            Bulk Biryani Menu
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
            {[
              "Corporate Offices",
              "IT Companies",
              "PGs & Hostels",
              "Colleges",
              "Factories",
              "Weddings",
              "Family Functions",
              "Events & Parties",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#2a2a2a] rounded-xl py-4 text-center font-medium text-gray-200"
              >
                {item}
              </div>
            ))}
          </div>

          {/* MENU GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Chicken Biryani", type: "Normal", img: ITEMS.Chicken_Biryani_Normal },
              // { name: "Chicken Dum Biryani", type: "Dum", img: ITEMS.Chicken_Biryani_Dum },

              { name: "Mutton Biryani", type: "Normal", img: ITEMS.Mutton_Biryani_Normal },
              // { name: "Mutton Dum Biryani", type: "Dum", img: ITEMS.Mutton_Biryani_Dum },

              { name: "Veg Biryani", type: "Normal", img: ITEMS.Veg_Biryani_Normal },
              // { name: "Veg Dum Biryani", type: "Dum", img: ITEMS.Veg_Biryani_Dum },

              { name: "Egg Biryani", type: "Normal", img: ITEMS.Egg_Biryani_Normal },
              // { name: "Egg Dum Biryani", type: "Dum", img: ITEMS.Egg_Biryani_Dum },

              { name: "Kebab Biryani", type: "Dum", img: ITEMS.Kebab_Biryani_Dum },

              { name: "Shadi Ki Chicken Biryani", type: "Normal", img: ITEMS.Shadi_Chicken_Biryani },
              { name: "Shadi Ki Mutton Biryani", type: "Normal", img: ITEMS.Shadi_Mutton_Biryani },

              { name: "Chicken Tahari", type: "Normal", img: ITEMS.Chicken_Tahari },
              { name: "Mutton Tahari", type: "Normal", img: ITEMS.Mutton_Tahari },

              { name: "Chicken Pulav", type: "Normal", img: ITEMS.Chicken_Pulav },
              { name: "Mutton Pulav", type: "Normal", img: ITEMS.Mutton_Pulav },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-[#1c1c1c] rounded-xl overflow-hidden hover:scale-105 transition shadow-lg"
              >
                {/* IMAGE */}
                <img
                  src={item.img}
                  alt={`${item.name} ${item.type}`}
                  className="h-80 w-full object-cover"
                />

                {/* CONTENT */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>

                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-gray-400">
                      Type: <span className="text-white">{item.type}</span>
                    </span>
                    <span className="text-sm text-gray-400">
                      Includes: <span className="text-white">Raita, Curry</span>
                    </span>
                  </div>

                  <a
                    href={orderNowLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center bg-yellow-400 text-black py-2 rounded-full font-medium hover:bg-yellow-300"
                  >
                    Enquire on WhatsApp
                  </a>
                </div>
              </div>
            ))}
          </div>


          {/* FOOTER CTA */}
          <div className="mt-20 text-center">
            <h3 className="text-2xl font-bold mb-4">
              Need Bulk Orders for Your Team or Event?
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              We handle small to large bulk orders with consistent taste,
              hygienic preparation, and on-time delivery.
            </p>
            <a
              href={orderNowLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300"
            >
              Get Bulk Order Quote
            </a>
          </div>
        </div>
      </section>


    </div>
  );
}
