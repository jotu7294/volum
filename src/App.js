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
    <div id="top" className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed w-full z-50 px-8 py-6 flex justify-between items-center backdrop-blur-md bg-black bg-opacity-70">
        <div>
          <a href="#top">
            <img src={volumLogo} className="h-8 object-contain" alt="volüm logo" />
          </a>
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

      {/* About Section with Gradient Effect */}
      <section id="about" className="py-64 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-zinc-950 opacity-80"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="flex justify-center">
            <div className="backdrop-blur-sm bg-black bg-opacity-20 rounded-2xl p-12 border border-zinc-800">
              <p className="text-2xl font-thin leading-relaxed text-opacity-90 font-helvetica tracking-wide">
                volüm is a next-generation audio streaming platform designed for
                independent DJs, radio stations, and music enthusiasts. It provides
                a dynamic, community-driven space where users can discover,
                collaborate, and engage with live performances like never before.
              </p>
            </div>
          </div>
        </div>
        {/* Subtle gradient orb */}
        <div className="absolute top-1/3 right-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 blur-3xl opacity-20"></div>
      </section>

      {/* Mission Section with Frosted Glass Effect */}
      <section id="mission" className="py-64 bg-black relative">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-thin tracking-widest mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">MISSION</h2>
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-md bg-zinc-900 bg-opacity-30 rounded-2xl p-12 border border-zinc-800">
              <p className="text-xl font-thin leading-relaxed text-opacity-90 font-helvetica tracking-wide">
                volüm is an all-in-one live audio streaming platform designed to empower 
                independent DJs, radio stations, and music enthusiasts by fostering a 
                dynamic, community-driven space for discovery, collaboration, and engagement. 
                Rooted in a passion for music and a commitment to accessibility, volüm bridges 
                the gap between artists and audiences, offering a platform where live performances 
                thrive, independent voices are amplified, and music discovery is reimagined.
              </p>
            </div>
          </div>
        </div>
        {/* Abstract sound wave graphic */}
        <div className="absolute bottom-0 left-0 w-full h-24 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path 
              fill="white" 
              d="M0,64 C288,88 576,0 864,64 C1152,128 1440,88 1440,64 L1440,120 L0,120 Z" 
            />
          </svg>
        </div>
      </section>

      {/* Vision Section with Subtle Animation */}
      <section id="vision" className="py-64 bg-zinc-950 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black opacity-50"></div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-thin tracking-widest mb-16 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">VISION</h2>
          <div className="max-w-3xl mx-auto">
            <div className="backdrop-blur-md bg-zinc-900 bg-opacity-30 rounded-2xl p-12 border border-zinc-800 transform transition-transform duration-1000 hover:translate-y-2">
              <p className="text-xl font-thin leading-relaxed text-opacity-90 font-helvetica tracking-wide">
                volüm seeks to help build a future where independent artists and creators 
                don't need to rely on record labels, streaming services, and expensive concert 
                venues to share their creations with the world. We aim to redefine the music 
                industry by making live performances and independent music discovery more 
                accessible than ever before.
              </p>
            </div>
          </div>
        </div>
        {/* Animated gradient circle */}
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full bg-gradient-to-br from-zinc-700 to-black blur-3xl opacity-30 animate-pulse"></div>
      </section>

      {/* Contact Section with Subtle Glass Effect */}
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

      {/* Footer with Gradient Text */}
      <footer className="py-12 bg-zinc-950 text-center relative">
        <div className="max-w-6xl mx-auto px-4">
          <img src={volumLogo} className="h-8 mx-auto mb-8 object-contain" alt="volüm logo" />
          <div className="flex justify-center gap-8 mb-6">
            <a href="#privacy" className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200">Privacy Policy</a>
            <a href="#terms" className="text-sm text-white text-opacity-60 hover:text-opacity-100 transition-opacity duration-200">Terms of Service</a>
          </div>
          <p className="text-sm text-opacity-60 bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-white">© {new Date().getFullYear()} volüm. All rights reserved.</p>
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
        
        @keyframes floating {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .font-helvetica {
          font-family: Helvetica, Arial, sans-serif;
        }
        
        .animate-pulse {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.1;
          }
        }
      `}</style>
    </div>
  );
}

export default App;