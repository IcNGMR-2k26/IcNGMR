import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Brain,
  Cpu,
  Cog,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Bot,
  FileUp,
  MailCheck,
  Zap,
  History
} from "lucide-react";

export default function TabbedInterface() {
  const [activeTab, setActiveTab] = useState("tracks");
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === '#important-dates' || location.hash === '#important-dates') {
      setActiveTab('dates');
    }
  }, [location]);

  const technicalTracks = [
    { id: 'nlp', title: 'Natural Language Processing (NLP) and Multilingual Intelligence', icon: Cpu },
    { id: 'genai', title: 'Generative AI and Machine Learning Algorithms', icon: Brain },
    { id: 'reconfigurable', title: 'Reconfigurable Intelligence and Adaptive AI Systems', icon: Cog },
    { id: 'communication', title: 'Communication and Robotics', icon: Bot },
  ];

  // Updated with dynamic colors and specific icons
  const importantDates = [
    {
      event: "Paper Submission Open",
      date: "15th April 2026",
      icon: FileUp,
      color: "text-sky-600",
      bg: "bg-sky-100",
      glow: "shadow-sky-200"
    },
    {
      event: "Submission Closes",
      date: "31st July 2026",
      icon: AlertCircle,
      color: "text-rose-600",
      bg: "bg-rose-100",
      glow: "shadow-rose-200"
    },
    {
      event: "Acceptance Notification",
      date: "10th August 2026",
      icon: MailCheck,
      color: "text-amber-600",
      bg: "bg-amber-100",
      glow: "shadow-amber-200"
    },
    {
      event: "Final Camera Ready Paper",
      date: "15th August 2026",
      icon: Zap,
      color: "text-indigo-600",
      bg: "bg-indigo-100",
      glow: "shadow-indigo-200"
    },
    {
      event: "Registration Deadline",
      date: "20th August 2026",
      icon: History,
      color: "text-purple-600",
      bg: "bg-purple-100",
      glow: "shadow-purple-200"
    },
    {
      event: "Conference Dates",
      date: "28th and 29th August 2026",
      icon: CheckCircle,
      color: "text-emerald-600",
      bg: "bg-emerald-100",
      glow: "shadow-emerald-200"
    }
  ];

  return (
    <div className="bg-slate-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">

        {/* Brochure Button */}
        <div className="flex justify-center mb-12">
          <a
            href="/brochure.pdf"
            target="_blank"
            className="group px-8 py-3 rounded-2xl font-black text-sm uppercase tracking-widest bg-slate-900 text-white shadow-2xl hover:bg-sky-600 hover:-translate-y-1 transition-all duration-300 flex items-center"
          >
            <FileUp className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Download Brochure
          </a>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-2xl shadow-xl p-1.5 flex border border-slate-100">
            {['tracks', 'dates'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-xl font-bold transition-all duration-300 text-sm uppercase tracking-tighter ${activeTab === tab
                  ? "bg-sky-500 text-white shadow-lg scale-105"
                  : "text-slate-400 hover:text-sky-500"
                  }`}
              >
                {tab === 'tracks' ? 'Technical Tracks' : 'Important Dates'}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          {activeTab === "tracks" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {technicalTracks.map((track, index) => (
                <div key={index} className="group bg-white p-6 rounded-[2rem] border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-2 transition-all duration-300">
                  <div className="flex items-center space-x-5">
                    <div className="bg-sky-50 p-4 rounded-2xl group-hover:bg-sky-500 group-hover:text-white transition-colors duration-500">
                      <track.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-black text-slate-800 leading-tight">{track.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "dates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              {importantDates.map((item, index) => (
                <div
                  key={index}
                  className={`group bg-white p-6 rounded-[2rem] border border-slate-50 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5`}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className={`mb-4 p-4 rounded-2xl ${item.bg} ${item.color} ${item.glow} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg`}>
                      <item.icon className="h-7 w-7" />
                    </div>
                    <h3 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{item.event}</h3>
                    <p className="text-xl font-black text-slate-800 tracking-tight">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}