import React from 'react';
import { Edit3, Shield, Clock, Users, CheckCircle, Scale, AlertCircle, Zap } from 'lucide-react';

const EditorGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-12 animate-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-sky-200">
            <Scale className="h-3 w-3" />
            <span>Editorial Standards</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight">
            Editor <span className="text-sky-500">Guidelines</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Framework for editors to uphold research integrity and technical quality throughout the review cycle.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 animate-in slide-in-from-bottom-6 duration-1000">

          {/* Editorial Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-sky-500 rounded-xl shadow-md transform transition-transform hover:rotate-6">
                <Edit3 className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Editorial Responsibilities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Ensure a fair and unbiased double-blind peer review",
                "Maintain strict confidentiality of manuscripts",
                "Execute rigorous plagiarism and integrity checks",
                "Facilitate coordination between reviewers/authors",
                "Final authority on manuscript acceptance"
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-sky-50/50 rounded-xl border border-slate-100 group hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="bg-sky-500 rounded-full p-1 mr-3 group-hover:scale-125 transition-transform">
                    <Shield className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process Management */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-indigo-500 rounded-xl shadow-md transform transition-transform hover:-rotate-6">
                <Clock className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Process Management</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center">
                  <div className="w-1.5 h-5 bg-indigo-500 rounded-full mr-3" /> Initial Assessment
                </h3>
                <ul className="space-y-2 text-slate-600 font-medium text-sm">
                  <li>• Verify format and scope alignment</li>
                  <li>• Assess technical novelty and clarity</li>
                  <li>• Cross-check for immediate major issues</li>
                  <li>• Execute desk-rejection if required</li>
                </ul>
              </div>
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center">
                  <div className="w-1.5 h-5 bg-sky-500 rounded-full mr-3" /> Reviewer Selection
                </h3>
                <ul className="space-y-2 text-slate-600 font-medium text-sm">
                  <li>• Assign 2-3 qualified domain experts</li>
                  <li>• Monitor and resolve conflicts of interest</li>
                  <li>• Manage deadlines and follow-ups</li>
                  <li>• Evaluate reviewer feedback consistency</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Decision Pathways */}
          <div className="mb-12">
            <div className="p-8 bg-slate-900 rounded-[1.5rem] relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                <CheckCircle size={100} className="text-white" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                {[
                  { l: 'A', t: 'Accept', d: 'Ready for publication', c: 'text-green-400 bg-green-400/10' },
                  { l: 'M', t: 'Modify', d: 'Revisions required', c: 'text-amber-400 bg-amber-400/10' },
                  { l: 'R', t: 'Reject', d: 'Fails technical criteria', c: 'text-rose-400 bg-rose-400/10' }
                ].map((path, i) => (
                  <div key={i} className="text-center p-4 border border-white/5 rounded-2xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                    <div className={`w-10 h-10 rounded-full mx-auto mb-3 flex items-center justify-center font-black text-sm ${path.c}`}>
                      {path.l}
                    </div>
                    <h4 className="text-white font-bold text-sm mb-1">{path.t}</h4>
                    <p className="text-slate-400 text-[10px] leading-relaxed">{path.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Ethics Protocol */}
          <div className="mb-12">
            <div className="p-6 bg-rose-50 rounded-[1.5rem] border border-rose-100 animate-in zoom-in-95 duration-700">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="text-rose-600 h-5 w-5" />
                <h2 className="text-xl font-black text-slate-900 uppercase tracking-tighter">Ethics Protocol</h2>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-slate-700 font-bold text-xs">
                <li className="flex items-center"><div className="w-1 h-1 bg-rose-500 rounded-full mr-2" /> Mandatory disclosure of COI</li>
                <li className="flex items-center"><div className="w-1 h-1 bg-rose-500 rounded-full mr-2" /> No reviews for close collaborators</li>
                <li className="flex items-center"><div className="w-1 h-1 bg-rose-500 rounded-full mr-2" /> Zero tolerance for manipulation</li>
                <li className="flex items-center"><div className="w-1 h-1 bg-rose-500 rounded-full mr-2" /> Report fabrication immediately</li>
              </ul>
            </div>
          </div>

          {/* Timeline */}
          <div className="pt-8 border-t border-slate-100 text-center">
            <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center justify-center">
              <Zap className="h-4 w-4 text-sky-500 mr-2" /> Editorial Timeline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { v: '03', l: 'Initial Assessment', s: 'Days' },
                { v: '21', l: 'Peer Review Cycle', s: 'Days' },
                { v: '07', l: 'Final Decision', s: 'Days' }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-white border border-slate-100 rounded-2xl shadow-lg shadow-slate-200/50 group hover:border-sky-400 transition-all hover:-translate-y-1">
                  <div className="text-3xl font-black text-sky-600 mb-0.5 group-hover:scale-110 transition-transform">{item.v}</div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.s}</div>
                  <div className="mt-2 text-[11px] font-bold text-slate-700">{item.l}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EditorGuidelines;