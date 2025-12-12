import { useState } from "react";

interface HeaderProps {
  activeLink: string;
  setActiveLink: (link: string) => void;
}

export function Header({ activeLink, setActiveLink }: HeaderProps) {
  const navLinks = ["Home", "Browse", "About", "Contact"];

  return (
    <header className="bg-[#374151] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center">
          <h1 className="font-serif m-0">Focus: Political Repression in Southern Africa</h1>
        </div>
        <nav>
          <ul className="flex gap-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link}>
                <button
                  onClick={() => setActiveLink(link)}
                  className={`text-white hover:text-[#b45309] transition-colors duration-200 bg-transparent border-none cursor-pointer px-0 focus:outline-none focus:ring-2 focus:ring-[#b45309] focus:ring-offset-2 focus:ring-offset-[#374151] rounded ${
                    activeLink === link ? "border-b-2 border-[#b45309]" : ""
                  }`}
                >
                  {link}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}