import React from 'react';
import { Mail, Phone, MapPin, Instagram, Linkedin, Twitter, ExternalLink } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = 2026;
  const mapUrl = "https://maps.app.goo.gl/HycRYeAUyQ4kZLA36";

  return (
    <footer className="bg-slate-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12 border-b border-white/10 pb-12">

          {/* Column 1: Branding */}
          <div className="space-y-4">
            <h2 className="text-2xl font-black tracking-tight">
              Ic<span className="text-sky-400">NGMR</span> 2026
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              International Conference on Natural Language Processing, Generative AI and Machine Learning for Reconfigurable Intelligence
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-sky-500 transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-sky-500 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-lg hover:bg-sky-500 transition-all">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center text-slate-400 text-sm hover:text-sky-400 transition-colors">
                <Mail size={16} className="mr-3 text-sky-500" />
                <a href="mailto:icngmr2026@vbithyd.ac.in">icngmr2026@vbithyd.ac.in</a>
              </li>
              <li className="flex items-center text-slate-400 text-sm hover:text-sky-400 transition-colors">
                <Phone size={16} className="mr-3 text-sky-500" />
                <a href="tel:+919246411464">+91 9246411464</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Location - Now Clickable */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Venue</h3>
            <a
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start group text-slate-400 text-sm leading-relaxed hover:text-sky-400 transition-all duration-300"
            >
              <div className="relative mr-3 mt-1 shrink-0">
                <MapPin size={20} className="text-sky-500 group-hover:scale-110 transition-transform" />
                <div className="absolute -inset-1 bg-sky-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p>
                <span className="font-bold text-white group-hover:text-sky-400 block mb-1">
                  Vignana Bharathi Institute of Technology (Autonomous)
                </span>
                Aushapur (V), Ghatkesar (M),<br />
                Telangana - 501301
                <span className="flex items-center mt-2 text-[10px] font-black uppercase tracking-widest text-sky-500/60 group-hover:text-sky-400">
                  Open in Maps <ExternalLink size={10} className="ml-1" />
                </span>
              </p>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs font-medium text-center md:text-left">
            Copyright © {currentYear} Vignana Bharathi Institute of Technology. All rights reserved.
          </p>
          <p className="text-slate-500 text-xs font-medium flex items-center">
            Managed by <span className="text-sky-500 font-bold ml-1.5">VBIT CSE Department</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;