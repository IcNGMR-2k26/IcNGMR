import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, ArrowRight, Globe } from 'lucide-react';

import ConferenceTimeline from '../components/Timeline';
import TabbedInterface from '../components/TabbedInterface';
import StackedCards from '../components/StackedCard';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);

  const slides = [
    '/main.JPG',
    '/01.JPG',
    '/07.jpg',
    '/05.JPG'
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  useEffect(() => {
    const scrollToAnchor = () => {
      if (window.location.hash === '#important-dates') {
        const el = document.getElementById('important-dates');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    };
    scrollToAnchor();
    window.addEventListener('hashchange', scrollToAnchor);
    return () => window.removeEventListener('hashchange', scrollToAnchor);
  }, []);

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section - Padding reduced to py-8 to remove gap with Navbar */}
      <section className="relative bg-slate-50 overflow-hidden py-4 lg:py-8 border-b border-slate-200">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-sky-100/30 skew-x-12 translate-x-20" />

        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">

            {/* Text Content */}
            <div className="lg:col-span-2 z-10 text-center lg:text-left">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-sky-100 text-sky-700 text-xs font-black tracking-widest uppercase mb-4 border border-sky-200">
                <Globe className="w-3 h-3 mr-2" /> International Conference 2026
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-4 tracking-tighter">
                Ic<span className="text-sky-500">NGMR</span>
              </h1>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-slate-800 mb-4 leading-tight">
                NLP, Generative AI and Machine Learning for Reconfigurable Intelligence
              </h2>

              <p className="text-base md:text-lg text-slate-500 mb-8 max-w-xl leading-relaxed font-medium">
                Join global thought leaders at VBIT to explore the next frontier of adaptive AI architectures.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => navigate('/registration')}
                  className="group px-8 py-4 bg-sky-500 text-white rounded-xl font-black text-base shadow-xl shadow-sky-200 hover:bg-sky-600 hover:-translate-y-0.5 transition-all flex items-center justify-center cursor-pointer"
                >
                  Register Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Cinematic Slideshow Section - Container size optimized */}
            <div className="lg:col-span-3 relative z-10 flex justify-center">
              <div className="relative w-full max-w-[800px]">

                {/* Floating Glow Orbs */}
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-sky-400/20 rounded-full blur-[60px] animate-pulse" />

                {/* Hero Slideshow Container */}
                <div className="relative overflow-hidden shadow-2xl h-[350px] md:h-[500px] lg:h-[550px] transition-all duration-700"
                  style={{
                    borderRadius: '20px 80px 20px 80px',
                  }}
                >
                  {slides.map((img, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentImage ? 'opacity-100' : 'opacity-0'
                        }`}
                    >
                      <img
                        src={img}
                        alt={`Slide ${index}`}
                        className={`w-full h-full object-cover transition-transform duration-[6000ms] ease-linear ${index === currentImage ? 'scale-110' : 'scale-100'
                          }`}
                      />
                    </div>
                  ))}
                  <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/30 via-transparent to-white/10 pointer-events-none" />
                </div>

                {/* Progress Indicators */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 items-center">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentImage(i)}
                      className={`h-1 transition-all duration-500 rounded-full ${i === currentImage ? 'w-8 bg-sky-500' : 'w-2 bg-slate-300 hover:bg-slate-400'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section - Padding reduced to py-16 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
              About IcNGMR 2026
            </h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
              <p>
                The International Conference on Natural Language Processing, Generative AI and Machine Learning for Reconfigurable Intelligence (IcNGMR 2026) is a
                <span className="text-slate-900 font-bold"> premier global forum</span>.
              </p>
              <p>
                This platform connects researchers and practitioners to explore innovations across NLP and adaptive architectures.
              </p>
              <div className="p-6 bg-sky-50 rounded-2xl border border-sky-100 italic text-sky-700 font-semibold shadow-sm">
                "Fostering academic excellence and cross-disciplinary collaboration to drive the future of machine intelligence."
              </div>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl shadow-inner border border-slate-100">
              <ConferenceTimeline />
            </div>
          </div>
        </div>
      </section>

      {/* Host Institute - Tightened gaps */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">
              The Host Institute
            </h2>
            <p className="text-sky-600 font-bold uppercase tracking-widest text-xs">
              Vignana Bharathi Institute of Technology
            </p>
          </div>
          <div className="mb-10">
            <StackedCards />
          </div>
        </div>
      </section>

      {/* Info Cards - py-16 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-sky-100 transition-all border border-slate-50">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <MapPin size={24} />
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-2">Conference Venue</h3>
              <p className="text-slate-500 font-medium">VBIT, Telangana, India</p>
            </div>

            <div className="bg-sky-600 text-white p-10 rounded-[2rem] shadow-xl shadow-sky-300 transform hover:-translate-y-1 transition-all">
              <Calendar size={28} className="mb-6 opacity-90" />
              <h3 className="font-black text-2xl mb-2">Dates</h3>
              <p className="text-sky-100 font-bold">28 - 29 August 2026</p>
            </div>

            <div className="group bg-white p-10 rounded-[2rem] shadow-xl hover:shadow-sky-100 transition-all border border-slate-50">
              <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mb-6 text-sky-600 group-hover:bg-sky-500 group-hover:text-white transition-colors">
                <Users size={24} />
              </div>
              <h3 className="font-black text-xl text-slate-900 mb-2">Scope</h3>
              <p className="text-slate-500 font-medium">AI, ML, Data Science and GenAI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Dates */}
      <section id="important-dates" className="py-16 bg-slate-50">
        <TabbedInterface />
      </section>

    </div>
  );
};

export default Home;