import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ROWS = [
  { Icon: MapPin, value: "South Yorkshire, England" },
  { Icon: Phone, value: "+44 7393 132386", href: "tel:+447393132386" },
  {
    Icon: Mail,
    value: "dusky327@gmail.com",
    href: "mailto:dusky327@gmail.com",
  },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-stone-800 px-6 py-12 sm:px-12 lg:px-24">
      <div className="flex flex-col items-center gap-4 font-['Geist_Mono',monospace] text-sm sm:flex-row sm:justify-center sm:gap-10">
        {ROWS.map(({ Icon, value, href }, idx) => (
          <div key={idx} className="flex items-center gap-2.5">
            <Icon className="h-4 w-4 flex-shrink-0 text-[#0E5A6B]" />
            {href ? (
              <a
                href={href}
                className="text-stone-200 transition-colors hover:text-[#0E5A6B]"
              >
                {value}
              </a>
            ) : (
              <span className="text-stone-200">{value}</span>
            )}
          </div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs text-stone-500">
        Copyright © 2026 All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
