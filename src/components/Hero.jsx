// src/components/Hero.jsx
import React from 'react';

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
    <div className="absolute inset-0 bg-black/50"></div>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter">
        <span className="section-title">Experience Premier Gaming</span><br />Like Never Before.
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
        Join thousands of players in a world of endless entertainment, massive rewards, and non-stop excitement. Your winning journey starts now. (Designed by Raju Saha)
      </p>
      <div className="mt-10">
        <button className="px-10 py-4 rounded-full btn-primary text-white font-bold text-lg">
          Join Now & Claim Your Bonus
        </button>
      </div>
    </div>
  </section>
);

export default Hero;