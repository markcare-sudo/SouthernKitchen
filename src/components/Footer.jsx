// Footer.jsx
import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import { EXTERNAL_CONTACT_NUMBER, INTERNAL_CONTACT_NUMBER } from "@/utils/data";

export default function Footer({
  cities = ["Bangalore"],
}) {
  return (
    <footer className="bg-gray-800 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* ================= BRAND ================= */}
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold text-lg">
              SK
            </div>
            <div className="leading-tight">
              <div className="font-extrabold text-white text-lg">
                Southern Kitchen
              </div>
              <div className="text-xs text-slate-400 mt-1">
                Authentic Hyderabadi Biryani
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-slate-400">
            A premium cloud kitchen serving authentic Hyderabadi Dum Biryani,
            cooked fresh and delivered hot to your doorstep.
          </p>
        </div>

        {/* ================= QUICK LINKS ================= */}
        <div>
          <div className="font-semibold text-white">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#menu" className="hover:text-white">
                Menu
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* ================= DELIVERY AREAS ================= */}
        <div>
          <div className="font-semibold text-white flex items-center gap-2">
            <MapPin size={16} />
            Delivery Areas
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {cities.map((c) => (
              <span
                key={c}
                className="px-2 py-1 rounded-full bg-white/10 text-xs"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* ================= CONTACT ================= */}
        <div>
          <div className="font-semibold text-white">Contact & Orders</div>

          <div className="mt-4 space-y-3 text-sm">
            <div className="flex items-center gap-2">
              <Phone size={16} />
              <a
                href={`tel:+${INTERNAL_CONTACT_NUMBER}`}
                className="hover:text-white"
              >
                +91 {EXTERNAL_CONTACT_NUMBER}
              </a>
            </div>

            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>11:30 AM – 11:30 PM</span>
            </div>

            <a
              href={`https://wa.me/${INTERNAL_CONTACT_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-3 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-xl font-semibold text-center"
            >
              Order on WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-white/10 text-center text-xs text-slate-400 py-4">
        © {new Date().getFullYear()} Southern Kitchen • Cloud Kitchen • All rights reserved
      </div>
    </footer>
  );
}
