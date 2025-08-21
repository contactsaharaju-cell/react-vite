// src/components/Vip.jsx
import React from 'react';

const vipData = [
  { level: 1, xp: '3,000', upgrade: '₹60', monthly: '₹30' },
  { level: 2, xp: '30,000', upgrade: '₹180', monthly: '₹90' },
  { level: 3, xp: '400,000', upgrade: '₹690', monthly: '₹290' },
  { level: 4, xp: '4,000,000', upgrade: '₹1,890', monthly: '₹890' },
  { level: 5, xp: '20,000,000', upgrade: '₹6,900', monthly: '₹1,890' },
];

const Vip = () => (
  <section id="vip" className="py-20 lg:py-28 bg-[#111111]">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-extrabold section-title">VIP Loyalty Program</h2>
        <p className="mt-4 text-lg text-gray-400">Your loyalty is our command. Climb the ranks for exclusive rewards.</p>
      </div>
      <div className="glass-effect rounded-2xl overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-white/5">
            <tr>
              <th className="p-4 md:p-6 text-sm font-semibold text-white uppercase tracking-wider">VIP Level</th>
              <th className="p-4 md:p-6 text-sm font-semibold text-white uppercase tracking-wider">XP Needed</th>
              <th className="p-4 md:p-6 text-sm font-semibold text-white uppercase tracking-wider">Upgrade Bonus</th>
              <th className="p-4 md:p-6 text-sm font-semibold text-white uppercase tracking-wider">Monthly Bonus</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {vipData.map((row) => (
              <tr key={row.level} className="hover:bg-white/5 transition">
                <td className="p-4 md:p-6 font-medium text-white">{row.level}</td>
                <td className="p-4 md:p-6 text-gray-300">{row.xp}</td>
                <td className="p-4 md:p-6 text-green-400 font-semibold">{row.upgrade}</td>
                <td className="p-4 md:p-6 text-yellow-400 font-semibold">{row.monthly}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Vip;