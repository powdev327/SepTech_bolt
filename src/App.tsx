import React from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './components/Dashboard';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white overflow-hidden">
      <Background />
      <Header />
      <main>
        <Hero />
        <Features />
        <Dashboard />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;