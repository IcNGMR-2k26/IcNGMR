import React from 'react';
import { FileText, Check, AlertCircle, Download, Layers, MousePointer2, ListChecks } from 'lucide-react';

const AuthorGuidelines: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-12 animate-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-sky-200">
            <FileText className="h-3 w-3" />
            <span>Manuscript Preparation</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-2 tracking-tight">
            Author <span className="text-sky-500">Guidelines</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto font-medium">
            Please follow these standards carefully to ensure your research meets the publication requirements.
          </p>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 animate-in slide-in-from-bottom-6 duration-1000">

          {/* Paper Format */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-sky-500 rounded-xl shadow-md transform transition-transform hover:rotate-6">
                <Layers className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Paper Format</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Written in English (6-8 pages recommended)",
                "IEEE format template (Word or LaTeX)",
                "Font: Times New Roman, 10pt",
                "Margins: 1 inch on all sides",
                "Submission format: PDF only",
                "High-resolution figures (300 DPI)"
              ].map((item, i) => (
                <div key={i} className="flex items-center p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-sky-300 hover:bg-white hover:shadow-md transition-all duration-300">
                  <div className="bg-sky-500 rounded-full p-1 mr-3 group-hover:scale-125 transition-transform duration-300">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <span className="text-slate-700 font-bold text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Submission Process */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-indigo-500 rounded-xl shadow-md transform transition-transform hover:-rotate-6">
                <MousePointer2 className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Submission Process</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", title: "Prepare", desc: "Adopt the IEEE template and check formatting." },
                { step: "02", title: "Submit", desc: "Upload via Microsoft CMT portal with metadata." },
                { step: "03", title: "Review", desc: "Double-blind peer review by domain experts." },
                { step: "04", title: "Notify", desc: "Receive acceptance status and comments." }
              ].map((item, i) => (
                <div key={i} className="relative p-6 bg-white border border-slate-100 rounded-2xl shadow-md hover:-translate-y-2 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 group">
                  <span className="absolute top-2 right-4 text-3xl font-black text-slate-50 group-hover:text-indigo-50 transition-colors">{item.step}</span>
                  <h3 className="text-base font-black text-slate-900 mb-2 relative z-10">{item.title}</h3>
                  <p className="text-slate-500 text-xs font-medium leading-relaxed relative z-10">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Plagiarism Section */}
          <div className="mb-12">
            <div className="bg-slate-900 rounded-[1.5rem] p-8 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 group-hover:scale-110 transition-all duration-700">
                <AlertCircle size={100} />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center px-2 py-0.5 bg-amber-500/20 text-amber-400 rounded-md text-[10px] font-black uppercase tracking-widest mb-3 border border-amber-500/30">
                  Strict Requirement
                </div>
                <h2 className="text-2xl font-black mb-3">Ethics & Plagiarism</h2>
                <p className="text-slate-400 text-sm font-medium mb-5">All submissions must be original work with Turnitin verification.</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-bold">
                  <li className="flex items-center hover:text-sky-400 transition-colors cursor-default"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> Max 15% Similarity</li>
                  <li className="flex items-center hover:text-sky-400 transition-colors cursor-default"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> Mandatory Citations</li>
                  <li className="flex items-center hover:text-sky-400 transition-colors cursor-default"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> No Self-Plagiarism</li>
                  <li className="flex items-center hover:text-sky-400 transition-colors cursor-default"><div className="w-1 h-1 bg-sky-400 rounded-full mr-2" /> Turnitin Verified</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Paper Structure */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-purple-500 rounded-xl shadow-md">
                <ListChecks className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Paper Structure</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
              {[
                { t: "Title", d: "Concise and descriptive (max 15 words)" },
                { t: "Abstract", d: "150-200 words summarizing key findings" },
                { t: "Keywords", d: "3-5 relevant terms for indexing" },
                { t: "Methodology", d: "Clear explanation of research design" },
                { t: "Results", d: "Evidence-based discussion with figures" },
                { t: "References", d: "IEEE Format (minimum 15 references)" }
              ].map((item, i) => (
                <div key={i} className="flex flex-col group">
                  <h4 className="text-sky-600 font-black text-[10px] uppercase tracking-widest mb-1 group-hover:translate-x-1 transition-transform duration-300">{item.t}</h4>
                  <p className="text-slate-700 font-bold text-sm">{item.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Download Buttons */}
          <div className="pt-8 border-t border-slate-100 flex flex-col items-center">
            <h2 className="text-xl font-black text-slate-900 mb-6">Download Templates</h2>
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
              <button className="flex-1 max-w-[240px] flex items-center justify-center px-6 py-4 bg-sky-500 text-white rounded-xl font-black text-sm shadow-lg shadow-sky-100 hover:bg-sky-600 hover:-translate-y-1 active:scale-95 transition-all duration-300">
                <Download className="h-4 w-4 mr-2" /> Word Template
              </button>
              <button className="flex-1 max-w-[240px] flex items-center justify-center px-6 py-4 bg-slate-900 text-white rounded-xl font-black text-sm shadow-lg hover:bg-slate-800 hover:-translate-y-1 active:scale-95 transition-all duration-300">
                <Download className="h-4 w-4 mr-2" /> LaTeX Template
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthorGuidelines;