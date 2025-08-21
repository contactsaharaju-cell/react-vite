// src/components/Games.jsx
import React from 'react';
import { IconSlots, IconCards, IconLive, IconSports } from '../assets/Icons';

const GameCategoryCard = ({ icon, title, description, colorClass }) => (
  <div className="glass-effect rounded-2xl p-6 text-center card-hover-effect">
    <div className={`flex items-center justify-center h-20 w-20 mx-auto rounded-full ${colorClass.bg}`}>
      {icon}
    </div>
    <h3 className="mt-6 text-xl font-bold text-white">{title}</h3>
    <p className="mt-2 text-gray-400">{description}</p>
  </div>
);

const Games = () => (
  <section id="games" className="py-20 lg:py-28 bg-[#111111]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold section-title">Explore Our Games</h2>
        <p className="mt-4 text-lg text-gray-400">A universe of games awaits. Pick your favorite and start winning.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <GameCategoryCard
          icon={<IconSlots className="h-12 w-12 text-indigo-400" />}
          title="Slots"
          description="Spin the reels on hundreds of classic and video slots."
          colorClass={{ bg: 'bg-indigo-500/20' }}
        />
        <GameCategoryCard
          icon={<IconCards className="h-12 w-12 text-purple-400" />}
          title="Table Games"
          description="Master the classics like Blackjack, Roulette, and Poker."
          colorClass={{ bg: 'bg-purple-500/20' }}
        />
        <GameCategoryCard
          icon={<IconLive className="h-12 w-12 text-pink-400" />}
          title="Live Casino"
          description="Experience real-time action with our live dealers."
          colorClass={{ bg: 'bg-pink-500/20' }}
        />
        <GameCategoryCard
          icon={<IconSports className="h-12 w-12 text-emerald-400" />}
          title="Sports Betting"
          description="Bet on your favorite teams and sporting events."
          colorClass={{ bg: 'bg-emerald-500/20' }}
        />
      </div>
    </div>
  </section>
);

export default Games;