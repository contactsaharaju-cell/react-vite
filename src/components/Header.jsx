// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Logo } from '../assets/Icons';

const NavLink = ({ href, children }) => (
  <a href={href} className="text-gray-300 hover:text-white transition">{children}</a>
);

const Header = ({ onLoginClick, onSignupClick }) => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`glass-effect fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'h-16' : 'h-20'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          <a href="#" className="flex-shrink-0">
            <Logo className="h-8 w-auto" />
          </a>
          <nav className="hidden md:flex md:space-x-8">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#games">Games</NavLink>
            <NavLink href="#promotions">Promotions</NavLink>
            <NavLink href="#vip">VIP</NavLink>
            <NavLink href="#agent">Agent</NavLink>
          </nav>
          <div className="hidden md:flex items-center space-x-4">
            <button onClick={onLoginClick} className="text-gray-300 hover:text-white transition">Login</button>
            <button onClick={onSignupClick} className="px-5 py-2 rounded-full btn-primary text-white font-semibold">Sign Up</button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-[#111111]/90">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Home</a>
            <a href="#games" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Games</a>
            <a href="#promotions" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Promotions</a>
            <a href="#vip" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">VIP</a>
            <a href="#agent" className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700">Agent</a>
            <div className="border-t border-gray-700 mt-4 pt-4">
              <div className="flex items-center justify-center space-x-4">
                <button onClick={onLoginClick} className="w-full text-center py-2 text-gray-300 hover:text-white transition">Login</button>
                <button onClick={onSignupClick} className="w-full px-5 py-2 rounded-full btn-primary text-white font-semibold">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;