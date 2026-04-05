import React, { useState } from 'react';
import { Search, ChevronDown, ChevronUp, Cpu, Brain, Microscope, Bot, Star, Target } from 'lucide-react';

const TechnicalTracks: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedTrack, setExpandedTrack] = useState<string | null>(null);

  const tracks = [
    {
      id: 'nlp',
      title: 'Natural Language Processing (NLP) and Multilingual Intelligence',
      icon: <Brain className="h-7 w-7" />,
      color: 'from-sky-500 to-sky-400',
      accentColor: 'text-sky-600',
      bgColor: 'bg-sky-50',
      topics: [
        'Low-Resource and Multilingual NLP',
        'Language Modeling and Fine-Tuning LLMs',
        'Question Answering and Conversational Agents',
        'Text Summarization and Sentiment Analysis',
        'Information Retrieval and Knowledge Graphs',
        'Speech Recognition and Synthesis (STT, TTS)',
        'Cross-Lingual Transfer and Zero/Few-Shot NLP',
        'Legal, Biomedical, and Financial NLP Applications',
        'Multimodal and Dialogue-Based Language Systems',
        'Bias, Fairness, and Explainability in NLP',
      ]
    },
    {
      id: 'genai',
      title: 'Generative AI and Machine Learning Algorithms',
      icon: <Cpu className="h-7 w-7" />,
      color: 'from-indigo-500 to-indigo-400',
      accentColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      topics: [
        'Generative AI: Diffusion, Transformers, GANs',
        'Foundation Models (Text, Vision, Code, Multimodal)',
        'Supervised, Unsupervised, and Reinforcement Learning',
        'Meta-Learning and Continual Learning',
        'Neural Architecture Search and AutoML',
        'Explainable and Trustworthy Machine Learning',
        'Synthetic Data Generation and Augmentation',
        'Few-Shot, Zero-Shot, and Transfer Learning',
        'ML Model Compression and Optimization',
        'Federated and Distributed Learning Systems',
      ]
    },
    {
      id: 'reconfigurable',
      title: 'Reconfigurable Intelligence and Adaptive AI Systems',
      icon: <Microscope className="h-7 w-7" />,
      color: 'from-sky-600 to-indigo-500',
      accentColor: 'text-sky-700',
      bgColor: 'bg-slate-50',
      topics: [
        'Modular and Reconfigurable Neural Architectures',
        'Adaptive Learning in Dynamic and Real-Time Environments',
        'Neuromorphic and Brain-Inspired Computing',
        'Edge AI and Real-Time Inference Systems',
        'Hardware-Software Co-Design for Intelligent Systems',
        'Dynamic Model Switching and Reconfiguration',
        'Cross-Domain, Continual, and Lifelong Learning',
        'Robustness, Generalization, and Fault-Tolerant AI',
        'Internet of Things (IoT) and Cloud-Edge Integration',
        'Smart Health Monitoring and Emergency Response Systems',
        'Precision Agriculture and Autonomous Farming Technologies',
        'Smart City Simulation, Urban Modelling, and Traffic Operations',
      ]
    },
    {
      id: 'communication-robotics',
      title: 'Communication and Robotics',
      icon: <Bot className="h-7 w-7" />,
      color: 'from-slate-800 to-slate-700',
      accentColor: 'text-slate-800',
      bgColor: 'bg-slate-100',
      topics: [
        'Robotic Communication Systems (5G/6G, V2X)',
        'Swarm Robotics and Decentralized Communication',
        'IoT-Enabled Robots and Embedded Platforms',
        'Autonomous Construction and Smart Infrastructure',
        'Mechatronic Systems and Actuation Mechanisms',
        'AI-Driven Multi-Robot Systems for Industrial Automation',
        'Medical and Assistive Robotics for Healthcare',
        'Human-Robot Collaboration and Safety',
        'Digital Twins and Cyber-Physical Robotic Systems',
        'Edge AI for Real-Time Robotic Decision Making',
      ]
    },
  ];

  const filteredTracks = tracks.filter(track =>
    track.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    track.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const toggleTrack = (trackId: string) => {
    setExpandedTrack(expandedTrack === trackId ? null : trackId);
  };

  return (
    <div className="min-h-screen bg-white py-8 lg:py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-sky-50 rounded-full text-sky-700 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-100">
            <Target className="h-3.5 w-3.5" />
            <span>Research Domains</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 tracking-tight">
            Technical <span className="text-sky-500">Tracks</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto font-medium">
            Explore our specialized research tracks covering the future of NLP, Generative AI, and intelligent robotics.
          </p>
        </div>

        {/* Modern Search Bar */}
        <div className="mb-16 max-w-2xl mx-auto">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-indigo-400 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex items-center bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-200/50 overflow-hidden px-6">
              <Search className="h-5 w-5 text-slate-400 group-focus-within:text-sky-500 transition-colors" />
              <input
                type="text"
                placeholder="Search topics (e.g. 'Deep Learning', 'NLP')..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 py-5 border-none focus:ring-0 text-slate-700 font-medium placeholder-slate-300"
              />
            </div>
          </div>
        </div>

        {/* Broadened Track Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredTracks.map((track) => (
            <div
              key={track.id}
              className="group flex flex-col bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/40 border border-slate-50 overflow-hidden hover:-translate-y-2 transition-all duration-500"
            >
              {/* Header */}
              <div className={`p-10 bg-gradient-to-br ${track.color} text-white relative overflow-hidden`}>
                <div className="absolute -right-4 -bottom-4 opacity-10 transform group-hover:scale-110 transition-transform duration-700">
                  {React.cloneElement(track.icon as React.ReactElement, { size: 120 })}
                </div>
                <div className="relative z-10 flex items-start space-x-6">
                  <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl shadow-inner">
                    {track.icon}
                  </div>
                  <h2 className="text-2xl font-black leading-tight pt-1">{track.title}</h2>
                </div>
              </div>

              {/* Content */}
              <div className="p-10 flex-grow">
                {searchTerm ? (
                  <div className="space-y-3">
                    {track.topics
                      .filter(t => t.toLowerCase().includes(searchTerm.toLowerCase()))
                      .map((topic, i) => (
                        <div key={i} className="flex items-center p-4 bg-sky-50 rounded-xl border border-sky-100 animate-in fade-in slide-in-from-left-2">
                          <div className={`h-2 w-2 rounded-full bg-gradient-to-r ${track.color} mr-4`} />
                          <span className="text-slate-700 font-bold text-sm">{topic}</span>
                        </div>
                      ))}
                  </div>
                ) : (
                  <>
                    <div className="mb-8">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">Core Focus Areas</p>
                      <div className="flex flex-wrap gap-2">
                        {track.topics.slice(0, 4).map((t, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-50 text-slate-600 text-[11px] font-bold rounded-lg border border-slate-100 italic">
                            {t}
                          </span>
                        ))}
                        <span className="px-3 py-1 text-sky-500 text-[11px] font-black">+{track.topics.length - 4} More</span>
                      </div>
                    </div>

                    <button
                      onClick={() => toggleTrack(track.id)}
                      className={`w-full flex items-center justify-between px-6 py-4 rounded-xl font-black text-sm transition-all duration-300 transform active:scale-95 ${expandedTrack === track.id
                        ? 'bg-slate-900 text-white shadow-xl'
                        : `${track.bgColor} ${track.accentColor} hover:brightness-95`
                        }`}
                    >
                      <span>{expandedTrack === track.id ? 'Close Track Details' : 'Explore Sub-topics'}</span>
                      {expandedTrack === track.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    <div className={`mt-8 space-y-3 overflow-hidden transition-all duration-500 ${expandedTrack === track.id ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                      {track.topics.map((topic, i) => (
                        <div key={i} className="flex items-center p-4 bg-white border border-slate-50 rounded-xl hover:border-sky-200 hover:bg-sky-50/30 transition-all">
                          <Star className="h-3 w-3 text-sky-400 mr-4" />
                          <span className="text-slate-600 text-sm font-medium">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-32 text-center">
          <div className="w-20 h-1 bg-slate-200 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl font-medium text-slate-400 italic">
            ...and other related domains falling under the conference theme.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TechnicalTracks;