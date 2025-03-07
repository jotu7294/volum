import React, { useEffect, useState } from 'react';
import volumLogo from './assets/volum_chrome.png';
import './index.css';

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black bg-opacity-70">
        <div className="w-24">
          <img src={volumLogo} className="h-8 w-auto" alt="volüm logo" />
        </div>
        <div className="hidden md:flex space-x-16">
          <a href="#about" className="uppercase text-sm tracking-wider text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200">About</a>
          <a href="#mission" className="uppercase text-sm tracking-wider text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200">Mission</a>
          <a href="#vision" className="uppercase text-sm tracking-wider text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200">Vision</a>
          <a href="#contact" className="uppercase text-sm tracking-wider text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-200">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <div className="text-center z-10 px-4">
          <img 
            src={volumLogo}
            className="w-64 h-auto mx-auto mb-8 transition-all duration-500"
            alt="volüm logo"
            style={{ 
              transform: `scale(${1 + scrollPosition * 0.0005})`,
              opacity: Math.max(0.3, 1 - scrollPosition * 0.002)
            }} 
          />
          <h1 
            className="text-5xl md:text-6xl font-light tracking-tight leading-tight transition-transform duration-500"
            style={{ transform: `translateY(${scrollPosition * 0.2}px)` }}
          >
            Radio Reimagined.
          </h1>
        </div>
        
        {/* Sound Wave Animation */}
        <div className="absolute bottom-0 left-0 w-full h-2/5 z-0">
          {Array(40).fill().map((_, i) => (
            <div 
              key={i} 
              className="absolute bottom-0 w-px bg-gradient-to-t from-white to-transparent opacity-80"
              style={{ 
                left: `${i * 2.5}%`,
                height: `${20 + Math.sin(Date.now() / 1000 + i * 0.2) * 30}%`,
                animation: 'wave 2s infinite ease-in-out',
                animationDelay: `${i * 0.05}s`
              }}
            ></div>
          ))}
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-64 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center">
            <div className="max-w-3xl text-center">
              <p className="text-xl leading-relaxed text-opacity-90">
                volüm is a next-generation audio streaming platform designed for
                independent DJs, radio stations, and music enthusiasts. It provides
                a dynamic, community-driven space where users can discover,
                collaborate, and engage with live performances like never before.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-64 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light tracking-widest mb-16 text-center">MISSION</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-opacity-90">
              volüm is an all-in-one live audio streaming platform designed to empower 
              independent DJs, radio stations, and music enthusiasts by fostering a 
              dynamic, community-driven space for discovery, collaboration, and engagement. 
              Rooted in a passion for music and a commitment to accessibility, volüm bridges 
              the gap between artists and audiences, offering a platform where live performances 
              thrive, independent voices are amplified, and music discovery is reimagined.
            </p>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section id="vision" className="py-64 bg-zinc-950">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light tracking-widest mb-16 text-center">VISION</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg leading-relaxed text-opacity-90">
              volüm seeks to help build a future where independent artists and creators 
              don't need to rely on record labels, streaming services, and expensive concert 
              venues to share their creations with the world. We aim to redefine the music 
              industry by making live performances and independent music discovery more 
              accessible than ever before.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-64 bg-black">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-light tracking-widest mb-16 text-center">JOIN THE MOVEMENT</h2>
          <div className="max-w-md mx-auto">
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-6 py-4 rounded-full bg-white bg-opacity-10 border-none text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-25"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 text-white hover:from-gray-500 hover:to-gray-700 transform transition-transform duration-200 hover:scale-105 focus:outline-none"
              >
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-zinc-950 text-center">
        <div className="max-w-6xl mx-auto px-4">
          <img src={volumLogo} className="h-8 mx-auto mb-8" alt="volüm logo" />
          <div className="flex justify-center gap-8 mb-6">
            <a href="#privacy" className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200">Privacy Policy</a>
            <a href="#terms" className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200">Terms of Service</a>
          </div>
          <p className="text-sm text-opacity-60">© {new Date().getFullYear()} volüm. All rights reserved.</p>
        </div>
      </footer>

      {/* Add animation keyframes via style tag */}
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            height: 20%;
          }
          50% {
            height: 80%;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
