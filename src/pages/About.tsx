import React from 'react';
import { ShieldCheck, Target, Globe, Award, CheckCircle } from 'lucide-react';

const About: React.FC = () => {
  const leadership = [
    {
      name: "Dr. N. Goutham Rao",
      title: "Chairman, VBIT",
      image: "/Dr-N.-Goutham-Rao.jpg",
      objectPosition: "object-center"
    },
    {
      name: "Dr. G. Manohar Reddy",
      title: "Secretary, VBIT",
      image: "/Dr-G.-Manohar-Reddy.jpg",
      objectPosition: "object-right"
    },
    {
      name: "Dr. P. V. S. Srinivas",
      title: "Principal, VBIT",
      image: "/pvs.jpg",
      objectPosition: "object-center"
    },
    {
      name: "Y.V.S.S.S.V. Prasada Rao",
      title: "Director, VBIT",
      image: "/prasad.jpg",
      objectPosition: "object-center"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-slate-900 py-8 lg:py-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/10 skew-x-12 translate-x-32" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="z-10">
              <span className="inline-block px-4 py-1.5 rounded-full bg-sky-500/20 text-sky-400 text-xs font-bold tracking-widest uppercase mb-6 border border-sky-500/30">
                Conference Overview
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 leading-[1.1]">
                Advancing <span className="text-sky-400">Reconfigurable</span> Intelligence
              </h1>
              <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed font-medium">
                IcNGMR 2026 is a premier global forum dedicated to exploring groundbreaking innovations across NLP, Generative AI, and adaptive computing architectures.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Intelligent System Optimization",
                  "Scalable AI Architectures",
                  "Socio-Environmental Impact",
                  "Energy Efficient Computing"
                ].map((item, i) => (
                  <div key={i} className="flex items-center text-slate-400 font-medium">
                    <CheckCircle className="h-5 w-5 text-sky-500 mr-3" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-4 bg-sky-500/20 rounded-[2rem] blur-2xl" />
              <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg?auto=compress&cs=tinysrgb&w=1260"
                  alt="Tech Conference"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Restored Alignment & Original Colors */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">Our Leadership</h2>
            <div className="w-45 h-1.5 bg-sky-500 rounded-full"></div>
          </div>

          {/* Changed to lg:grid-cols-4 to keep all 4 in a single lane */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {leadership.map((leader, index) => (
              <div key={index} className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                <div className="relative mb-8 mx-auto w-40 h-40"> {/* Adjusted size slightly to fit 4 better */}
                  {/* Circle background effect */}
                  <div className="absolute inset-0 bg-sky-50 rounded-full scale-110" />
                  <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${leader.objectPosition}`}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight">{leader.name}</h3>
                  <p className="text-sky-600 font-bold text-xs tracking-wide uppercase">{leader.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed About Section */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <img
                src="/hod.jpg"
                alt="Conference Discussion"
                className="relative rounded-[2.5rem] shadow-2xl z-10 border border-slate-100"
              />
            </div>

            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-sky-50 rounded-xl border border-sky-100">
                <Target className="h-5 w-5 text-sky-600 mr-3" />
                <span className="text-sky-700 font-bold text-sm uppercase">About IcNGMR</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                Fostering Excellence & <br />
                <span className="text-sky-500">Cross-Disciplinary</span> Impact
              </h2>
              <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
                <p>
                  IcNGMR 2026 addresses both foundational advances and real-world applications. We recognize the rising demand for intelligent, scalable solutions that drive innovation from language technologies to personalized systems.
                </p>
                <p>
                  Our focus remains on promoting research that has a tangible impact on sustainable development goals and fostering a community where academicians and industry experts converge.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;