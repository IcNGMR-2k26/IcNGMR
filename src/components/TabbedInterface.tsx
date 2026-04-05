import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  Brain,
  Cpu,
  Cog,
  Building2,
  Smartphone,
  HeartPulse,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Eye,
  Bot
} from "lucide-react";

type StatusType = "urgent" | "upcoming" | "main";

export default function TabbedInterface() {
  const [activeTab, setActiveTab] = useState("tracks");
  const location = useLocation();

  useEffect(() => {
    if (window.location.hash === '#important-dates' || location.hash === '#important-dates') {
      setActiveTab('dates');
    }
    const showDates = () => setActiveTab('dates');
    window.addEventListener('show-important-dates', showDates);
    return () => window.removeEventListener('show-important-dates', showDates);
  }, [location]);

  const technicalTracks = [
    {
      id: 'nlp',
      title: 'Natural Language Processing (NLP) and Multilingual Intelligence',
      icon: Cpu,
      color: 'bg-blue-700'
    },
    {
      id: 'genai',
      title: 'Generative AI and Machine Learning Algorithms',
      icon: Brain,
      color: 'bg-purple-700'
    },
    {
      id: 'reconfigurable',
      title: 'Reconfigurable Intelligence and Adaptive AI Systems',
      icon: Cog,
      color: 'bg-green-700'
    },
    {
      id: 'communication',
      title: 'Communication and Robotics',
      icon: Bot,
      color: 'bg-green-700'
    },
  ];

  const importantDates: {
    event: string;
    date: string;
    status: StatusType;
    icon: any;
  }[] = [
      {
        event: "Paper Submission Open",
        date: "15th April 2026",
        status: "upcoming",
        icon: Eye
      },
      {
        event: "Submission Closes",
        date: "31st July 2026",
        status: "urgent",
        icon: AlertCircle
      },
      {
        event: "Acceptance Notification",
        date: "10th August 2026",
        status: "upcoming",
        icon: Clock
      },
      {
        event: "Final Camera Ready Paper",
        date: "15th August 2026",
        status: "upcoming",
        icon: CheckCircle
      },
      {
        event: "Registration Deadline",
        date: "20th August 2026",
        status: "upcoming",
        icon: Calendar
      },
      {
        event: "Conference Dates",
        date: "28th and 29th August 2026",
        status: "main",
        icon: CheckCircle
      }
    ];

  const colors: Record<StatusType, string> = {
    urgent: "from-red-500 to-orange-500",
    upcoming: "from-blue-500 to-indigo-500",
    main: "from-green-500 to-emerald-500"
  };
  const bgColors: Record<StatusType, string> = {
    urgent: "from-red-50 to-orange-50",
    upcoming: "from-blue-50 to-indigo-50",
    main: "from-green-50 to-emerald-50"
  };

  return (
    <div className=" bg-gradient-to-br from-slate-50 to-blue-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Brochure Button at Top */}
        <div className="flex justify-center mb-20">
          <a
            href="/brochure.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl font-bold text-base sm:text-lg bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 text-white shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 flex items-center"
            style={{ textDecoration: "none" }}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M6 2v6a2 2 0 002 2h6a2 2 0 002-2V2M6 2a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8a2 2 0 00-2-2h-6"></path></svg>
            Download Brochure
          </a>
        </div>
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            Conference Information
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-6">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-1 flex border border-white/20">
            <button
              onClick={() => setActiveTab("tracks")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === "tracks"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
            >
              Technical Tracks
            </button>
            <button
              onClick={() => setActiveTab("dates")}
              className={`px-4 sm:px-6 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${activeTab === "dates"
                ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg transform scale-105"
                : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                }`}
            >
              Important Dates
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="transition-all duration-500 ease-in-out">
          {activeTab === "tracks" && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 animate-fadeIn">
              {technicalTracks.map((track, index) => {
                const IconComponent = track.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl p-5 sm:p-6 transition-all duration-300 hover:transform hover:-translate-y-2 border border-white/20"
                    style={{
                      animationDelay: `${index * 100}ms`
                    }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-100 to-blue-200 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 leading-tight">
                          {track.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {activeTab === "dates" && (
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 animate-fadeIn">
                {importantDates.map((item, index) => {
                  const IconComponent = item.icon;

                  return (
                    <div
                      key={index}
                      className={`bg-gradient-to-br ${bgColors[item.status]} rounded-2xl shadow-lg hover:shadow-2xl p-5 sm:p-6 transition-all duration-300 hover:transform hover:-translate-y-1 border border-white/30`}
                      style={{
                        animationDelay: `${index * 150}ms`
                      }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`bg-gradient-to-br ${colors[item.status]} p-3 rounded-xl shadow-md`}>
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1">
                            {item.event}
                          </h3>
                          <p className="text-sm sm:text-lg font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                            {item.date}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
          opacity: 0;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .group:nth-child(1) { animation-delay: 0ms; }
        .group:nth-child(2) { animation-delay: 100ms; }
        .group:nth-child(3) { animation-delay: 200ms; }
        .group:nth-child(4) { animation-delay: 300ms; }
        .group:nth-child(5) { animation-delay: 400ms; }
        .group:nth-child(6) { animation-delay: 500ms; }
      `}</style>
    </div>
  );
}