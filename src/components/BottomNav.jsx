import React from "react";
import { Link } from "react-router-dom";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t md:hidden">
      <ul className="flex justify-around py-3">
        <li>
          <Link to="/" className="flex flex-col items-center text-gray-700 hover:text-[#3f788c]">
            <img src="/images/homenav.png" alt="portfolio" className="w-8 h-8" />
            <span className="text-sm">PORTFOLIO</span>
          </Link>
        </li>

        <li>
          <Link to="/cv" className="flex flex-col items-center text-gray-700 hover:text-[#3f788c]">
            <img src="/images/cvnav.png" alt="CV" className="w-8 h-8" />
            <span className="text-sm">CV</span>
          </Link>
        </li>

        <li>
          <Link to="/contact" className="flex flex-col items-center text-gray-700 hover:text-[#3f788c]">
            <img src="/images/contactmail.png" alt="contact" className="w-8 h-8" />
            <span className="text-sm">CONTACT</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
