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
      title: "Research Manager\nUniversity of Glasgow, U.K",
      image: "/bhavani.jpg"
    },
  ];

  const nationalSpeakers = [
    {
      name: "Dr. A Govardhan",
      title: "Senior Professor and Vice-Chancellor I/c.,\nRGUKT Basar",
      image: "/Govardhan.jpg"
    },
    {
      name: "Dr. Mallikarjun Rao",
      title: "Scientist, DRDO (RCI), Hyderabad",
      image: "/mallikarjun.png"
    }
  ];

  const SpeakerCard = ({ speaker, type }: { speaker: any, type: 'intl' | 'nat' }) => (
    <div className="group bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300 flex flex-col items-center w-full max-w-[350px]">
      <div className="relative mb-6 w-48 h-48">
        <div className={`absolute inset-0 rounded-full scale-110 opacity-10 transition-opacity group-hover:opacity-20 ${type === 'intl' ? 'bg-sky-500' : 'bg-indigo-500'}`} />

        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white shadow-md">
          <img
            src={speaker.image}
            alt={speaker.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow-lg border border-slate-100">
          {type === 'intl' ? <Globe className="h-4 w-4 text-sky-500" /> : <Award className="h-4 w-4 text-indigo-500" />}
        </div>
      </div>

      <div className="text-center">
        <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{speaker.name}</h3>
        <p className="text-slate-500 text-sm leading-relaxed whitespace-pre-line font-medium">{speaker.title}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-50 py-4 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* International Keynote Speakers */}
        <div className="mb-16">
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-sky-50 rounded-xl border border-sky-100 mb-4">
              <Mic2 className="h-4 w-4 text-sky-600 mr-2" />
              <span className="text-sky-700 font-bold text-xs uppercase tracking-widest">Global Expertise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">International Keynote Speakers</h2>
            <div className="w-24 h-1.5 bg-sky-500 rounded-full"></div>
          </div>

          {/* Centered Flex Container */}
          <div className="flex flex-wrap justify-center gap-10">
            {internationalSpeakers.map((speaker, index) => (
              <SpeakerCard key={index} speaker={speaker} type="intl" />
            ))}
          </div>
        </div>

        {/* National Keynote Speakers */}
        <div>
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-50 rounded-xl border border-indigo-100 mb-4">
              <Award className="h-4 w-4 text-indigo-600 mr-2" />
              <span className="text-indigo-700 font-bold text-xs uppercase tracking-widest">National Excellence</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">National Keynote Speakers</h2>
            <div className="w-24 h-1.5 bg-indigo-500 rounded-full"></div>
          </div>

          {/* Centered Flex Container */}
          <div className="flex flex-wrap justify-center gap-10">
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