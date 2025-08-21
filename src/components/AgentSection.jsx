// src/components/AgentSection.jsx
import React from 'react';

const AgentSection = () => (
  <section id="agent" className="py-20 lg:py-28 bg-black">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-5xl font-extrabold section-title">Become an Agent</h2>
          <p className="mt-6 text-lg text-gray-300">
            Join our multi-level agent system and turn your network into a revenue stream. Invite players and earn commissions from their wagers, creating a passive income that grows with your network.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span><strong className="text-white">Unique Referral Code:</strong> Get your own code to share instantly upon signup.</span>
            </li>
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span><strong className="text-white">Multi-Level Commissions:</strong> Earn from players referred by your referrals.</span>
            </li>
            <li className="flex items-start">
              <svg className="flex-shrink-0 h-6 w-6 text-indigo-400 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <span><strong className="text-white">Powerful Dashboard:</strong> Track your earnings, referrals, and performance in real-time.</span>
            </li>
          </ul>
          <div className="mt-10">
            <button className="px-10 py-4 rounded-full btn-primary text-white font-bold text-lg">
              Start Earning Today
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="glass-effect p-8 rounded-3xl">
            <img src="[https://placehold.co/600x400/0a0a0a/4F46E5?text=Agent+Dashboard+UI](https://placehold.co/600x400/0a0a0a/4F46E5?text=Agent+Dashboard+UI)" alt="Agent Dashboard Preview" className="rounded-2xl shadow-2xl" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AgentSection;