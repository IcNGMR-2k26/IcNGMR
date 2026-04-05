import { useState, useEffect } from 'react';
import { Calendar, FileText, Bell, UserPlus, Users } from 'lucide-react';

const ConferenceTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [animatedItems, setAnimatedItems] = useState(new Set());

  const timelineData = [
    {
      title: "Paper Submission Open",
      date: "April 15, 2026",
      icon: FileText,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      status: "upcoming",
      description: "Paper submission portal opens"
    },
    {
      title: "Submission Closes",
      date: "July 31, 2026",
      icon: FileText,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      status: "upcoming",
      description: "Final deadline for paper submissions"
    },
    {
      title: "Acceptance Notification",
      date: "August 10, 2026",
      icon: Bell,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      status: "upcoming",
      description: "Authors will be notified of paper acceptance"
    },
    {
      title: "Final Camera Ready Paper",
      date: "August 15, 2026",
      icon: FileText,
      color: "from-teal-500 to-teal-600",
      bgColor: "bg-teal-50",
      status: "upcoming",
      description: "Deadline for final camera ready paper submission"
    },
    {
      title: "Registration Deadline",
      date: "August 20, 2026",
      icon: UserPlus,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      status: "upcoming",
      description: "Last day for conference registration"
    },
    {
      title: "Conference Dates",
      date: "August 28 - 29, 2026",
      icon: Users,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      status: "main-event",
      description: "Two-day conference event"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimatedItems(prev => {
        const newSet = new Set(prev);
        if (newSet.size < timelineData.length) {
          newSet.add(newSet.size);
        }
        return newSet;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative">
      {/* Main timeline line */}
      <div
        className="absolute left-6 sm:left-8 top-0 w-1 bg-gradient-to-b from-blue-200 via-green-200 via-orange-200 to-purple-200 rounded-full shadow-lg"
        style={{ height: '80%' }}
      ></div>

      {timelineData.map((item, index) => {
        const IconComponent = item.icon;
        const isAnimated = animatedItems.has(index);
        const isActive = activeIndex === index;
        const isMainEvent = item.status === 'main-event';

        return (
          <div
            key={index}
            className={`relative flex items-start mb-12 transition-all duration-500 ${isAnimated ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(-1)}
          >
            {/* Timeline dot */}
            <div className={`relative z-10 flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r ${item.color} shadow-lg transform transition-all duration-300 ${isActive ? 'scale-110 shadow-xl' : 'scale-100'
              }`}>
              <IconComponent className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              {isActive && (
                <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-white/20 to-white/10 animate-pulse"></div>
              )}
            </div>

            {/* Content card */}
            <div className={`ml-4 sm:ml-8 flex-1 transform transition-all duration-300 ${isActive ? 'translate-x-2 shadow-2xl' : 'translate-x-0 shadow-lg'
              }`}>
              <div className={`${item.bgColor} rounded-2xl p-6 border border-white/50 backdrop-blur-sm ${isMainEvent ? 'ring-2 ring-purple-300 ring-opacity-50' : ''
                }`}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className={`text-xl font-bold text-gray-800 ${isMainEvent ? 'text-2xl text-purple-800' : ''
                    }`}>
                    {item.title}
                  </h3>
                  {isMainEvent && (
                    <span className="bg-purple-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                      MAIN EVENT
                    </span>
                  )}
                </div>

                <div className="flex items-center text-gray-600 mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="font-medium">{item.date}</span>
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  {item.description}
                </p>

                {/* Progress indicator */}
                <div className="mt-4 flex items-center">
                  <div className="flex-1 h-2 bg-white/60 rounded-full overflow-hidden">
                    <div className={`h-full bg-gradient-to-r ${item.color} rounded-full transition-all duration-1000 ${isAnimated ? 'w-full' : 'w-0'
                      }`}></div>
                  </div>
                  <span className="ml-3 text-xs text-gray-500 font-medium">
                    {index + 1}/{timelineData.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Connecting line for every event */}
            <div className={`absolute left-12 sm:left-16 top-6 sm:top-8 w-4 sm:w-8 h-0.5 bg-gradient-to-r ${item.color} to-transparent`}></div>
          </div>
        );
      })}
    </div>
  );
};

export default ConferenceTimeline;