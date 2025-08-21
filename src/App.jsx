// src/App.jsx
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Games from './components/Games';
import Promotions from './components/Promotions';
import Vip from './components/Vip';
import AgentSection from './components/AgentSection';
import Footer from './components/Footer';
import Modal from './components/Modal';

function App() {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);

  return (
    <>
      <Header
        onLoginClick={() => setLoginModalOpen(true)}
        onSignupClick={() => setSignupModalOpen(true)}
      />
      <main>
        <Hero />
        <Games />
        <Promotions />
        <Vip />
        <AgentSection />
      </main>
      <Footer />

      <Modal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)}>
        <h2 className="text-2xl font-bold text-center text-white mb-6">Login</h2>
        <form>
          <div className="space-y-4">
            <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="password" placeholder="Password" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="w-full mt-6 px-5 py-3 rounded-full btn-primary text-white font-semibold">Login</button>
        </form>
      </Modal>

      <Modal isOpen={isSignupModalOpen} onClose={() => setSignupModalOpen(false)}>
        <h2 className="text-2xl font-bold text-center text-white mb-6">Create Account</h2>
        <form>
          <div className="space-y-4">
            <input type="text" placeholder="Username" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="email" placeholder="Email" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="password" placeholder="Password" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
            <input type="text" placeholder="Referral Code (Optional)" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
          </div>
          <button type="submit" className="w-full mt-6 px-5 py-3 rounded-full btn-primary text-white font-semibold">Sign Up</button>
        </form>
      </Modal>
    </>
  );
}

export default App;
