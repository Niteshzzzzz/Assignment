import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer({ dark }) {
  const links = ["Home", "About", "Services", "Contact"];
  return (
    <footer className={`${dark ? 'bg-gray-900 text-gray-300' : 'bg-gray-100 text-gray-800'} w-full py-16 px-6 md:px-12 transition-all` }>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-300 dark:border-gray-700 pt-12">
        {/* Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-3 tracking-wide">Quick Links</h3>
          {links.map((link, index) => (
            <a
              href={`#${link.toLowerCase()}`}
              key={index}
              className="block hover:text-blue-500 transition duration-300 transform hover:translate-x-1"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-3 tracking-wide">Contact</h3>
          <p className="hover:text-blue-500 transition duration-300">Email: niteshkr1661@gmail.com</p>
          <p className="hover:text-blue-500 transition duration-300">Phone: +91 7322841661</p>
          <p className="hover:text-blue-500 transition duration-300">Address: 23 Kukas, Jaipur, India</p>
        </div>

        {/* Social Icons */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold mb-3 tracking-wide">Follow Us</h3>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110"><Facebook /></a>
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110"><Twitter /></a>
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110"><Instagram /></a>
            <a href="#" className="hover:text-blue-500 transition transform hover:scale-110"><Linkedin /></a>
          </div>
        </div>
      </div>

      <div className="mt-12 text-center text-sm opacity-70 border-t border-gray-300 dark:border-gray-700 pt-6">
        © {new Date().getFullYear()} NovaCraft. All rights reserved.
      </div>
    </footer>
  );
}