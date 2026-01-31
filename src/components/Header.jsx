import React from "react";
import { Menu, X, Phone, MapPin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { EXTERNAL_CONTACT_NUMBER, INTERNAL_CONTACT_NUMBER } from "@/utils/data";

const Header = ({ open, setOpen }) => {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "#menu" },
    { name: "About", path: "#about" },
    { name: "Contact", path: "#contact" },
  ];

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <>
      {/* ================= TOP BAR ================= */}
      <div className="bg-orange-600 text-amber-100 text-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <a href={`tel:+${INTERNAL_CONTACT_NUMBER}`} className="hover:underline">
              +91 {EXTERNAL_CONTACT_NUMBER}
            </a>
          </div>

          <div className="hidden sm:flex items-center gap-2">
            <MapPin size={14} />
            <span>Now Delivering • Bangalore</span>
          </div>
        </div>
      </div>

      {/* ================= HEADER ================= */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
        <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo / Brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold">
              TSK
            </div>
            <div>
              <div className="text-lg font-extrabold text-slate-900">
                The Southern Kitchen
              </div>
              <div className="text-xs text-slate-500">
                {/* Authentic Hyderabadi Biryani */}
                Home Made Authentic Flavours
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className={`font-medium transition ${
                  isActive(item.path)
                    ? "text-amber-700"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:block">
            <a
              href={`https://wa.me/${INTERNAL_CONTACT_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl font-semibold"
            >
              Order on WhatsApp
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-slate-100"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* ================= MOBILE MENU ================= */}
        {open && (
          <div className="md:hidden border-t bg-white">
            <div className="px-4 py-3 flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className="py-2 text-slate-700 font-medium"
                >
                  {item.name}
                </a>
              ))}

              <a
                href={`https://wa.me/${INTERNAL_CONTACT_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 bg-green-600 text-white text-center py-3 rounded-xl font-semibold"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
