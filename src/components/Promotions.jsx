// src/components/Promotions.jsx
import React from 'react';
import { LuckySpinWheel } from '../assets/Icons';

const PromotionCard = ({ emoji, title, description, buttonText, isPrimary }) => (
  <div className="glass-effect rounded-2xl p-8 flex flex-col items-center text-center card-hover-effect overflow-hidden">
    <div className="text-5xl mb-4">{emoji}</div>
    <h3 className="text-2xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-400 flex-grow">{description}</p>
    <button className={`mt-6 px-6 py-2 rounded-full font-semibold text-white ${isPrimary ? 'btn-primary' : 'bg-gray-700 hover:bg-gray-600'}`}>
      {buttonText}
    </button>
  </div>
);

const Promotions = () => (
  <section id="promotions" className="py-20 lg:py-28 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold section-title">Rewards & Promotions</h2>
        <p className="mt-4 text-lg text-gray-400">We love to reward our players. Check out our latest offers.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <PromotionCard emoji="🎉" title="Welcome Bonus" description="Get a massive 100% bonus on your first deposit! Double your fun, double your chances." buttonText="Claim Now" isPrimary />
        <PromotionCard emoji="📅" title="Daily Check-in" description="Log in every day to claim exclusive rewards, free spins, and bonus cash." buttonText="Check In" />
        <div className="glass-effect rounded-2xl p-8 flex flex-col items-center text-center card-hover-effect overflow-hidden">
          <div className="w-24 h-24 mb-4">
            <LuckySpinWheel className="w-full h-full animate-spin" style={{ animationDuration: '10s' }} />
          </div>
          <h3 className="text-2xl font-bold text-white">Lucky Spin</h3>
          <p className="mt-2 text-gray-400 flex-grow">Try your luck on our turntable! Spin the wheel to win amazing prizes daily.</p>
          <button className="mt-6 px-6 py-2 rounded-full btn-primary text-white font-semibold">Spin Now</button>
        </div>
      </div>
    </div>
  </section>
);

export default Promotions;