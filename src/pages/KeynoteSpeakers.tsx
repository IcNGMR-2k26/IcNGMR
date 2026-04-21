import React from 'react';
import { Globe, Award, Mic2 } from 'lucide-react';

const KeynoteSpeakers: React.FC = () => {
  const internationalSpeakers = [
    {
      name: "Asadi Srinivasulu",
      title: "Visiting Professor (crcCARE)\nUniversity of Newcastle, Australia",
      image: "/Asadi_Srinivasulu.jpg"
    },
    {
      name: "Dr. Bhavani Prasad Yalagala",
      title: "James Watt School of Engineering\n(Electronic & Nanoscale Engineering)\nResearch Manager\nUniversity of Glasgow, Scotland, U.K",
      image: "/bhavani.jpg"
    },
  ];

  const nationalSpeakers = [
    {
      name: "Dr. A Govardhan",
      title: "Senior Professor and Vice-Chancellor I/c.,\nIIIT, RGUKT Basara, Telangana, India",
      image: "/Govardhan.jpg"
    },
    {
      name: "Dr. Mallikarjun Rao",
      title: "Scientist, Research Centre Imarat (RCI)\nDr. APJ Abdul Kalam Missile Complex\nDRDO, Hyderabad, India",
      image: "/mallikarjun.png"
    }
  ];

  const SpeakerCard = ({ speaker, type }: { speaker: any, type: 'intl' | 'nat' }) => (
    <div className="group bg-white rounded-[2rem] p-6 border border-slate-100 shadow-lg shadow-slate-200/50 hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center w-full max-w-[340px] animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <div className="relative mb-5 w-40 h-40">
        <div className={`absolute inset-0 rounded-full scale-110 opacity-10 transition-opacity group-hover:opacity-20 ${type === 'intl' ? 'bg-sky-500' : 'bg-indigo-500'}`} />

        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        <div className="absolute bottom-1 right-1 bg-white p-2 rounded-full shadow-lg border border-slate-50">
          {type === 'intl' ? <Globe className="h-4 w-4 text-sky-500" /> : <Award className="h-4 w-4 text-indigo-500" />}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-lg font-black text-slate-900 mb-2 tracking-tight leading-tight">{speaker.name}</h3>
        <p className="text-slate-500 text-[11px] leading-relaxed whitespace-pre-line font-bold uppercase tracking-tight">{speaker.title}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12 animate-in fade-in duration-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* International Keynote Speakers */}
        <div className="mb-12">
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-sky-200">
              <Mic2 className="h-3 w-3 mr-2" />
              <span>Global Expertise</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-2">International Keynote Speakers</h2>
            <div className="w-16 h-1 bg-sky-500 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {internationalSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} type="intl" />
            ))}
          </div>
        </div>

        {/* National Keynote Speakers */}
        <div>
          <div className="flex flex-col items-center text-center mb-10">
            <div className="inline-flex items-center px-3 py-1 bg-indigo-100 rounded-full text-indigo-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-indigo-200">
              <Award className="h-3 w-3 mr-2" />
              <span>National Excellence</span>
            </div>
            <h2 className="text-2xl md:text-4xl font-black text-slate-900 mb-2">National Keynote Speakers</h2>
            <div className="w-16 h-1 bg-indigo-500 rounded-full"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {nationalSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} type="nat" />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default KeynoteSpeakers;