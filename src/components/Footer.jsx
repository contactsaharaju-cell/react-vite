// src/components/Footer.jsx
import React from 'react';
import { Logo, IconTwitter, IconInstagram } from '../assets/Icons';

const Footer = () => (
  <footer className="bg-black border-t border-white/10">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="col-span-1 md:col-span-2">
          <a href="#" className="flex-shrink-0">
            <Logo className="h-8 w-auto" />
          </a>
          <p className="mt-4 text-gray-400 max-w-md">
            99Winner.com is a premier online gaming destination dedicated to providing a secure, fair, and exhilarating experience for all our players.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">FAQ</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Terms & Conditions</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white transition">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold text-white">Follow Us</h4>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white transition"><IconTwitter className="h-6 w-6" /></a>
            <a href="#" className="text-gray-400 hover:text-white transition"><IconInstagram className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-white/10 pt-8 text-center text-gray-500">
        <p>&copy; 2025 99Winner.com. All Rights Reserved. Please play responsibly.</p>
      </div>
    </div>
  </footer>
);

export default Footer;