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
  const [isMobileEthicsOpen, setIsMobileEthicsOpen] = useState(false);
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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileEthicsOpen(false);
  }, [location]);

  const handleImportantDatesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
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
        className={`flex items-center whitespace-nowrap text-[10px] lg:text-xs font-black tracking-wide px-2 lg:px-2.5 py-2 rounded-xl transition-all duration-300 ease-out transform
          ${isActive
            ? 'bg-gradient-to-br from-white to-sky-50 text-slate-900 shadow-lg scale-105 border-b-2 border-sky-300'
            : 'text-white hover:bg-white/20 hover:backdrop-blur-md hover:scale-105 active:scale-95'}`}
      >
        <Icon className={`h-4 w-4 mr-2 ${isActive ? 'text-sky-500' : 'text-white'}`} />
        {children}
      </Link>
    );
  };

  return (
    <>
      {/* 1. Top Bar - Hidden on small mobile for better space */}
      <div className={`bg-sky-600 text-white/90 text-[10px] sm:text-xs border-b border-white/10 transition-all duration-500 ${isScrolled ? 'h-0 opacity-0 overflow-hidden py-0' : 'py-2 opacity-100'}`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <a href="tel:+919246411464" className="flex items-center hover:text-white transition-colors">
              <Phone className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2 text-sky-200" />
              <span>+91 9246411464</span>
            </a>
            <a href="mailto:icngmr@vbithyd.ac.in" className="hidden xs:flex items-center hover:text-white transition-colors">
              <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 mr-1 sm:mr-2 text-sky-200" />
              <span className="truncate max-w-[150px] sm:max-w-none">icngmr2026@vbithyd.ac.in</span>
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 sm:space-x-3 border-l border-white/20 pl-3">
              <a href="#" className="hover:text-sky-200 transition-transform hover:-translate-y-1"><Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></a>
              <a href="#" className="hover:text-sky-200 transition-transform hover:-translate-y-1"><Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></a>
              <a href="#" className="hover:text-sky-200 transition-transform hover:-translate-y-1"><Twitter className="w-3.5 h-3.5 sm:w-4 sm:h-4" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Branding Header - Fluid scaling for Tablet/Mobile */}
      <div className={`bg-white transition-all duration-500 ${isScrolled ? 'py-2 border-b border-slate-100 shadow-sm' : 'py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-6">
          <div className="flex items-center space-x-3 sm:space-x-5 text-center lg:text-left">
            <img src="/vbit.jpg" alt="VBIT Logo" className={`w-auto object-contain transition-all duration-500 ${isScrolled ? 'h-10 sm:h-12' : 'h-14 sm:h-20'}`} />
            <div className="border-l-2 border-sky-100 pl-3 sm:pl-5">
              <h1 className="text-[11px] sm:text-sm md:text-lg font-black text-slate-900 leading-tight uppercase tracking-tight">
                Vignana Bharathi Institute of Technology (Autonomous)
              </h1>
              <div className="mt-0.5 sm:mt-1">
                <p className="text-sky-600 font-extrabold text-[8px] sm:text-[10px] md:text-xs uppercase tracking-widest leading-none">International Conference on</p>
                <p className="text-slate-600 font-bold text-[9px] sm:text-[11px] md:text-[13px] italic leading-tight mt-1">
                  “Natural Language Processing, Generative AI and Machine Learning for Reconfigurable Intelligence”
                </p>
              </div>
            </div>
          </div>

          {/* Accreditation Logos - Hidden on very small mobile, visible on tablet+ */}
          <div className={`hidden sm:flex items-center space-x-4 md:space-x-8 transition-all duration-500 ${isScrolled ? 'scale-75 origin-right' : 'scale-100'}`}>
            <img src="/NBA.png" alt="NBA" className="h-12 sm:h-16 w-auto" />
            <img src="/NAAC.jpeg" alt="NAAC" className="h-10 sm:h-14 w-auto" />
          </div>
        </div>
      </div>

      {/* 3. Sticky Bottom Nav */}
      <nav className={`sticky top-0 z-[100] transition-all duration-500 ${isScrolled ? 'bg-sky-500/95 backdrop-blur-md shadow-2xl py-2' : 'bg-sky-500 py-3'
        }`}>
        <div className="max-w-[98%] mx-auto px-4">
          <div className="flex justify-center items-center">

            {/* DESKTOP LINKS (xl and up) */}
            <div className="hidden xl:flex items-center justify-center gap-x-1.5">
              <NavLink to="/" icon={Home}>Home</NavLink>
              <NavLink to="/about" icon={Info}>About</NavLink>
              <NavLink to="/keynote-speakers" icon={Mic}>Keynote Speakers</NavLink>
              <NavLink to="/committee" icon={Users}>Committee</NavLink>
              <NavLink to="/technical-tracks" icon={BookOpen}>Tracks</NavLink>

              <a
                href="/#important-dates"
                onClick={handleImportantDatesClick}
                className={`flex items-center whitespace-nowrap text-[10px] lg:text-xs font-black text-white px-2 lg:px-2.5 py-2 rounded-xl transition-all duration-300 transform hover:bg-white/20 hover:scale-105 active:scale-95`}
              >
                <Calendar className="h-4 w-4 mr-2" /> Important Dates
              </a>

              {/* Ethics Dropdown */}
              <div
                className="relative group h-full"
                onMouseEnter={() => setIsEthicsOpen(true)}
                onMouseLeave={() => setIsEthicsOpen(false)}
              >
                <button className={`flex items-center whitespace-nowrap text-[10px] lg:text-xs font-black px-2 lg:px-2.5 py-2 rounded-xl transition-all duration-300 transform hover:scale-105 
                  ${location.pathname.includes('guidelines')
                    ? 'bg-gradient-to-br from-white to-sky-50 text-slate-900 shadow-lg border-b-2 border-sky-300'
                    : 'text-white hover:bg-white/20'}`}>
                  <Scale className={`h-4 w-4 mr-2 ${location.pathname.includes('guidelines') ? 'text-sky-500' : 'text-white'}`} />
                  Ethics & Malpractices
                  <ChevronDown className={`ml-1 h-3 w-3 transition-transform duration-500 ${isEthicsOpen ? 'rotate-180' : ''}`} />
                </button>
                <div className="absolute h-4 w-full top-full"></div>
                <div className={`absolute top-[calc(100%+8px)] left-0 w-52 bg-white rounded-2xl shadow-2xl py-3 border border-slate-100 transition-all duration-300 origin-top transform
                  ${isEthicsOpen ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 -translate-y-4 pointer-events-none'}`}>
                  {[
                    { name: 'Author Guidelines', path: '/author-guidelines' },
                    { name: 'Editor Guidelines', path: '/editor-guidelines' },
                    { name: 'Reviewer Guidelines', path: '/reviewer-guidelines' },
                    { name: 'Review Process', path: '/review-process' }
                  ].map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="flex items-center px-5 py-3 text-sm text-slate-700 hover:bg-sky-50 hover:text-sky-600 font-bold transition-all"
                      onClick={() => setIsEthicsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <NavLink to="/registration" icon={UserPlus}>Registration</NavLink>
              <NavLink to="/contact" icon={Phone}>Contact</NavLink>
              <NavLink to="/acknowledgment" icon={Heart}>Acknowledgment</NavLink>
            </div>

            {/* MOBILE/TABLET HEADER (everything below xl) */}
            <div className="xl:hidden flex justify-between w-full items-center">
              <div className="flex flex-col">
                <span className="text-white font-black text-base leading-none tracking-tight">ICNGMR 2026</span>
                <span className="text-sky-100 text-[10px] font-bold uppercase tracking-widest mt-1">International Conference</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white p-2.5 bg-white/10 rounded-xl active:scale-90 transition-transform shadow-inner"
              >
                {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAVIGATION DRAWER (Now includes ALL links) */}
        <div className={`xl:hidden overflow-y-auto transition-all duration-500 bg-sky-600 border-white/10 ${isMobileMenuOpen ? 'max-h-screen opacity-100 border-t' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="p-6 space-y-2">
            <Link to="/" className="flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10"><Home size={18} className="mr-3" /> Home</Link>
            <Link to="/about" className="flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10"><Info size={18} className="mr-3" /> About</Link>
            <Link to="/keynote-speakers" className="flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10"><Mic size={18} className="mr-3" /> Keynote Speakers</Link>
            <Link to="/committee" className="flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10"><Users size={18} className="mr-3" /> Committee</Link>
            <Link to="/technical-tracks" className="flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10"><BookOpen size={18} className="mr-3" /> Tracks</Link>

            <button onClick={handleImportantDatesClick} className="w-full flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10 text-left">
              <Calendar size={18} className="mr-3" /> Important Dates
            </button>

            {/* Mobile Ethics Sub-menu */}
            <div className="space-y-1">
              <button
                onClick={() => setIsMobileEthicsOpen(!isMobileEthicsOpen)}
                className="w-full flex items-center justify-between text-white p-3 font-bold rounded-xl hover:bg-white/10"
              >
                <div className="flex items-center"><Scale size={18} className="mr-3" /> Ethics & Malpractices</div>
                <ChevronDown size={16} className={`transition-transform ${isMobileEthicsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isMobileEthicsOpen && (
                <div className="ml-9 space-y-1 bg-white/5 rounded-xl p-2">
                  <Link to="/author-guidelines" className="block p-2 text-sky-100 text-sm font-medium">Author Guidelines</Link>
                  <Link to="/editor-guidelines" className="block p-2 text-sky-100 text-sm font-medium">Editor Guidelines</Link>
                  <Link to="/reviewer-guidelines" className="block p-2 text-sky-100 text-sm font-medium">Reviewer Guidelines</Link>
                  <Link to="/review-process" className="block p-2 text-sky-100 text-sm font-medium">Review Process</Link>
                </div>
              )}
            </div>

            <Link to="/contact" className="flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10"><Phone size={18} className="mr-3" /> Contact</Link>
            <Link to="/acknowledgment" className="flex items-center text-white p-3 font-bold rounded-xl hover:bg-white/10"><Heart size={18} className="mr-3" /> Acknowledgment</Link>

            <div className="pt-4">
              <Link to="/registration" className="block w-full bg-white text-sky-600 text-center py-4 rounded-2xl font-black shadow-xl transform active:scale-95 transition-transform">
                <UserPlus size={20} className="inline-block mr-2" /> Register Now
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;