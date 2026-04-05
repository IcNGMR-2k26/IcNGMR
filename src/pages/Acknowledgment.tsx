import React from 'react';
import { Heart, Star, Users, Home, ShieldCheck } from 'lucide-react';

const Acknowledgment: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header Section - Tightened spacing */}
        <div className="text-center mb-12 animate-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-sky-200">
            <Heart className="h-3 w-3 text-rose-500" />
            <span>Expressing Gratitude</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight">
            Acknowledgment
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-3xl mx-auto font-medium">
            Heartfelt gratitude to the visionaries and partners who make ICNGMR 2026 a reality.
          </p>
        </div>

        {/* Main Gratitude Card */}
        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 mb-10 relative overflow-hidden text-center animate-in slide-in-from-bottom-6 duration-1000">
          <div className="absolute top-0 right-0 p-8 opacity-5">
            <Heart size={150} fill="currentColor" className="text-rose-500" />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-inner transform transition-transform hover:scale-110">
              <Heart className="h-8 w-8 text-rose-500" />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">Heartfelt Appreciation</h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              ICNGMR 2026 is made possible through the generous support of our sponsors, partners,
              and the dedicated efforts of our organizing committee. We are deeply grateful for
              the commitment shown toward advancing research in Generative AI.
            </p>
          </div>
        </div>

        {/* Special Thanks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-10 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-700">
              <Users size={100} />
            </div>
            <div className="relative z-10">
              <div className="p-2.5 bg-sky-500 rounded-xl w-fit mb-4 shadow-lg shadow-sky-500/20">
                <Users className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-black mb-3">Organizing Committee</h3>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Our tireless team has worked around the clock. Their expertise and attention to detail have been instrumental in creating this world-class environment.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-100 shadow-xl shadow-slate-200/50 group hover:-translate-y-1 transition-all">
            <div className="p-2.5 bg-indigo-500 rounded-xl w-fit mb-4 shadow-lg shadow-indigo-500/20">
              <ShieldCheck className="h-5 w-5 text-white" />
            </div>
            <h3 className="text-xl font-black text-slate-900 mb-3">Reviewers & Volunteers</h3>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              We appreciate the rigorous efforts of our reviewers and student volunteers who managed the operational and technical excellence of the event.
            </p>
          </div>
        </div>

        {/* Host Institute Section */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl shadow-slate-200/60 p-6 md:p-12 border border-slate-50 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-sky-400/20 rounded-[2rem] blur-2xl group-hover:bg-sky-400/30 transition-all"></div>
              <img
                src="/main.JPG"
                alt="Host Institute"
                className="relative rounded-2xl shadow-lg w-full aspect-video object-cover transform group-hover:scale-[1.01] transition-transform duration-700"
              />
            </div>

            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 text-sky-600 font-black text-[10px] uppercase tracking-widest">
                <Star className="h-3 w-3" />
                <span>Our Foundation</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                Vignana Bharathi Institute of Technology
              </h2>
              <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                We acknowledge the support of VBIT. Their world-class infrastructure and commitment to academic excellence provide the perfect backdrop for this dialogue.
              </p>
              <div className="pt-2 flex items-center space-x-6">
                <img src="/NBA.png" alt="NBA" className="h-10 w-auto" />
                <img src="/NAAC.jpeg" alt="NAAC" className="h-8 w-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Closing Phrase */}
        <div className="mt-16 text-center">
          <div className="w-16 h-1 bg-slate-200 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg font-bold text-slate-300 italic">
            "Advancing Intelligence, Together."
          </p>
        </div>
      </div>
    </div>
  );
};

export default Acknowledgment;