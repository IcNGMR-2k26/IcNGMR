import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import {
  ChevronDown,
  Menu,
  X,
  Home,
  Info,
  Mic,
  Users,
  BookOpen,
  Scale,
  UserPlus,
  Heart,
  Phone,
  Mail,
  Instagram,
  Linkedin,
  Twitter,
  Calendar
} from 'lucide-react';

const Navbar: React.FC = () => {
  const [isEthicsOpen, setIsEthicsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleImportantDatesClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const el = document.getElementById('important-dates');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/#important-dates');
    }
  };

  const NavLink = ({ to, icon: Icon, children, onClick }: any) => {
    const isActive = location.pathname === to;
    return (
      <Link
        to={to}
        onClick={onClick}
        className={`flex items-center whitespace-nowrap text-xs lg:text-[13px] font-black tracking-wide px-4 py-2.5 rounded-xl transition-all duration-300 ease-out transform
          ${isActive
            ? 'bg-gradient-to-br from-white to-sky-50 text-slate-900 shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] scale-105 border-b-2 border-sky-300'
            : 'text-white hover:bg-white/20 hover:backdrop-blur-md hover:scale-105 active:scale-95'}`}
      >
        <Icon className={`h-4 w-4 mr-2 ${isActive ? 'text-sky-500' : 'text-white'}`} />
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* Top Bar */}
      <div className={`bg-sky-600 text-white/90 text-xs border-b border-white/10 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2.5 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
          <div className="flex items-center space-x-6">
            <a href="tel:+919246411464" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 mr-2 text-sky-200" />
              <span>+91 9246411464</span>
            </a>
            <a href="mailto:icngmr@vbithyd.ac.in" className="hidden sm:flex items-center hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 mr-2 text-sky-200" />
              <span>icngmr2026@vbithyd.ac.in</span>
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3 border-l border-white/20 pl-4">
              <a href="#" className="hover:text-sky-200 transition-transform hover:-translate-y-1"><Instagram className="w-4 h-4" /></a>
              <a href="#" className="hover:text-sky-200 transition-transform hover:-translate-y-1"><Linkedin className="w-4 h-4" /></a>
              <a href="#" className="hover:text-sky-200 transition-transform hover:-translate-y-1"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Branding Header */}
      <div className={`bg-white transition-all duration-500 ${isScrolled ? 'py-2 border-b border-slate-100' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-5">
            <img src="/vbit.jpg" alt="VBIT Logo" className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-12' : 'h-20'}`} />
            <div className="border-l-2 border-sky-100 pl-5">
              <h1 className="text-sm md:text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">
                Vignana Bharathi Institute of Technology (Autonomous)
              </h1>
              <div className="mt-1">
                <p className="text-sky-600 font-extrabold text-[10px] md:text-xs uppercase tracking-widest">International Conference on</p>
                <p className="text-slate-600 font-bold text-[10px] md:text-[13px] italic leading-tight">
                  “Natural Language Processing, Generative AI and Machine Learning for Reconfigurable Intelligence”
                </p>
              </div>
            </div>
          </div>

          <div className={`flex items-center space-x-4 md:space-x-8 transition-all duration-500 ${isScrolled ? 'scale-75 origin-right' : 'scale-100'}`}>
            <img src="/NBA.png" alt="NBA" className="h-16 w-auto" />
            <img src="/NAAC.jpeg" alt="NAAC" className="h-14 w-auto" />
          </div>
        </div>
      </div>

      {/* Sticky Bottom Nav */}
      <nav className={`sticky top-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-sky-500/95 backdrop-blur-md shadow-2xl py-2' : 'bg-sky-500 py-3'
        }`}>
        <div className="max-w-[98%] mx-auto px-4">
          <div className="flex justify-center items-center">
            <div className="hidden xl:flex items-center justify-center gap-x-1.5">
              <NavLink to="/" icon={Home}>Home</NavLink>
              <NavLink to="/about" icon={Info}>About</NavLink>
              <NavLink to="/keynote-speakers" icon={Mic}>Speakers</NavLink>
              <NavLink to="/committee" icon={Users}>Committee</NavLink>
              <NavLink to="/technical-tracks" icon={BookOpen}>Tracks</NavLink>

              <a
                href="/#important-dates"
                onClick={handleImportantDatesClick}
                className={`flex items-center whitespace-nowrap text-xs lg:text-[13px] font-black text-white px-4 py-2.5 rounded-xl transition-all duration-300 transform hover:bg-white/20 hover:scale-105 active:scale-95`}
              >
                <Calendar className="h-4 w-4 mr-2" /> Important Dates
              </a>

              {/* Fixed Ethics Dropdown */}
              <div
                className="relative group h-full"
                onMouseEnter={() => setIsEthicsOpen(true)}
                onMouseLeave={() => setIsEthicsOpen(false)}
              >
                <button className={`flex items-center whitespace-nowrap text-xs lg:text-[13px] font-black px-4 py-2.5 rounded-xl transition-all duration-300 transform hover:scale-105 
                  ${location.pathname.includes('guidelines')
                    ? 'bg-gradient-to-br from-white to-sky-50 text-slate-900 shadow-lg border-b-2 border-sky-300'
                    : 'text-white hover:bg-white/20'}`}>
                  <Scale className={`h-4 w-4 mr-2 ${location.pathname.includes('guidelines') ? 'text-sky-500' : 'text-white'}`} />
                  Ethics
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-500 ${isEthicsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Invisible hover bridge to prevent menu from closing */}
                <div className="absolute h-4 w-full top-full"></div>

                <div className={`absolute top-[calc(100%+8px)] left-0 w-56 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] py-3 border border-slate-100 transition-all duration-300 origin-top transform
                  ${isEthicsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                  {['Author', 'Editor', 'Reviewer'].map((type) => (
                    <Link
                      key={type}
                      to={`/${type.toLowerCase()}-guidelines`}
                      className="flex items-center px-5 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold transition-all border-b border-slate-50 last:border-0"
                      onClick={() => setIsEthicsOpen(false)}
                    >
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {type} Guidelines
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/registration" icon={UserPlus}>Registration</NavLink>
              <NavLink to="/contact" icon={Phone}>Contact</NavLink>
              <NavLink to="/acknowledgment" icon={Heart}>Acknowledgment</NavLink>
            </div>

            {/* Mobile View */}
            <div className="xl:hidden flex justify-between w-full items-center">
              <span className="text-white font-black text-lg tracking-tighter">ICNGMR 2026</span>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2 bg-white/10 rounded-xl active:scale-90"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`xl:hidden overflow-hidden transition-all duration-500 bg-sky-600/95 backdrop-blur-lg ${isMobileMenuOpen ? 'max-h-screen border-t border-white/10' : 'max-h-0'}`}>
          <div className="p-6 space-y-4">
            <Link to="/" className="block text-white text-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
            <Link to="/registration" className="block bg-white text-sky-600 text-center py-4 rounded-2xl font-black shadow-xl" onClick={() => setIsMobileMenuOpen(false)}>Register Now</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;