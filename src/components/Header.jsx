import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-10 shadow-md">
      {/* Logo */}
      <a href="/" className="flex items-center">
        <img src="/images/logo.jpg" alt="Logo" className="h-16 w-48 mx-12 cursor-pointer" />
      </a>

      {/* Navigation Desktop */}
      <nav className="hidden md:flex space-x-10">
        <Link to="/" className="text-lg hover:text-[#d95c4a]">Portfolio</Link>
        <Link to="/cv" className="text-lg hover:text-[#d95c4a]">CV</Link>
        <Link to="/contact" className="text-lg hover:text-[#d95c4a]">Contact</Link>
      </nav>
    </header>
  );
}
