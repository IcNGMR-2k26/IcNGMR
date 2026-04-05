import React from 'react';
import { Eye, CheckCircle, XCircle, AlertTriangle, BookOpen, Target, PenTool, Zap, ShieldCheck } from 'lucide-react';

const ReviewerGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-12 animate-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-sky-200">
            <Eye className="h-3 w-3" />
            <span>Peer Review Standards</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight">
            Reviewer <span className="text-sky-500">Guidelines</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Essential framework for providing thorough, fair, and constructive evaluations for ICNGMR 2026.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 animate-in slide-in-from-bottom-6 duration-1000">

          {/* Reviewer Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-sky-500 rounded-xl shadow-md transform transition-transform hover:rotate-6">
                <ShieldCheck className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Core Responsibilities</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Provide thorough and constructive technical feedback",
                "Maintain absolute confidentiality of the review process",
                "Declare any potential conflicts of interest immediately",
                "Deliver objective, unbiased, and evidence-based evaluations",
                "Uphold and respect intellectual property rights"
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-sky-50/50 rounded-xl border border-slate-100 group hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="bg-sky-500 rounded-full p-1 mr-3 group-hover:scale-125 transition-transform">
                    <CheckCircle className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm leading-tight">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Criteria */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-indigo-500 rounded-xl shadow-md transform transition-transform hover:-rotate-6">
                <Target className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Review Criteria</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { t: "Technical Quality", d: "Sound methodology and statistical rigor.", icon: "01" },
                { t: "Originality", d: "Novelty and advancement of existing knowledge.", icon: "02" },
                { t: "Presentation", d: "Clarity of writing and figure/table quality.", icon: "03" },
                { t: "Relevance", d: "Alignment with conference scope.", icon: "04" }
              ].map((item, i) => (
                <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-sky-300 transition-all">
                  <span className="absolute -right-2 -top-2 text-5xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">{item.icon}</span>
                  <h3 className="text-base font-black text-slate-900 mb-1 relative z-10">{item.t}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed relative z-10">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Review Workflow */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-purple-500 rounded-xl shadow-md">
                <BookOpen className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Review Workflow</h2>
            </div>

            <div className="space-y-3">
              {[
                { t: "Initial Assessment", d: "Quick check for expertise and scope alignment." },
                { t: "Detailed Evaluation", d: "Deep dive into technical claims and supporting data." },
                { t: "Feedback Compilation", d: "Draft actionable comments for authors." },
                { t: "Final Recommendation", d: "Submit decision: Accept, Revise, or Reject." }
              ].map((step, i) => (
                <div key={i} className="flex items-center p-4 border-l-4 border-sky-500 bg-sky-50/30 rounded-r-xl group hover:bg-sky-50 transition-colors">
                  <div className="font-black text-sky-500 text-xl mr-5 opacity-40">{i + 1}</div>
                  <div>
                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-0.5">{step.t}</h4>
                    <p className="text-slate-600 text-xs font-medium">{step.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Decisions */}
          <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white border border-green-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-3" />
              <h3 className="text-sm font-black text-slate-900 uppercase">Accept</h3>
              <p className="text-slate-500 text-[10px] mt-2">Ready for publication with minor changes.</p>
            </div>
            <div className="bg-white border border-amber-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <AlertTriangle className="h-8 w-8 text-amber-500 mx-auto mb-3" />
              <h3 className="text-sm font-black text-slate-900 uppercase">Revise</h3>
              <p className="text-slate-500 text-[10px] mt-2">Requires significant technical improvements.</p>
            </div>
            <div className="bg-white border border-rose-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all text-center">
              <XCircle className="h-8 w-8 text-rose-500 mx-auto mb-3" />
              <h3 className="text-sm font-black text-slate-900 uppercase">Reject</h3>
              <p className="text-slate-500 text-[10px] mt-2">Fails quality or scope requirements.</p>
            </div>
          </div>

          {/* Best Practices Box */}
          <div className="mb-12">
            <div className="bg-slate-900 rounded-[1.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all">
                <PenTool size={100} />
              </div>
              <div className="relative z-10">
                <h2 className="text-2xl font-black mb-4">Review Best Practices</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-slate-400 font-bold text-xs">
                  <li className="flex items-center"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> Be constructive and specific</li>
                  <li className="flex items-center"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> Focus on work, not authors</li>
                  <li className="flex items-center"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> Justify all recommendations</li>
                  <li className="flex items-center"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> Maintain professional tone</li>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="pt-8 border-t border-slate-100 text-center">
            <h2 className="text-xl font-black text-slate-900 mb-8 flex items-center justify-center">
              <Zap className="h-4 w-4 text-sky-500 mr-2" /> Review Timeline
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { v: '03', l: 'Accept Invitation', s: 'Days' },
                { v: '21', l: 'Complete Review', s: 'Days' },
                { v: '07', l: 'Final Follow-up', s: 'Days' }
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

export default ReviewerGuidelines;