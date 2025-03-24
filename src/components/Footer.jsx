import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
      <footer id="contact" className="hidden md:shadow-top text-gray-400 py-4 mx-4 my-7">
        <p>© {new Date().getFullYear()} Oliva Druyer's Portfolio. Tous droits réservés.</p>
      </footer>
    );
  }
  