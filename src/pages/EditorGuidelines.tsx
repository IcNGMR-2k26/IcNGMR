import React from 'react';
import { Scale, Edit3, Shield } from 'lucide-react';

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
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 animate-in slide-in-from-bottom-6 duration-1000">

          {/* Editorial Responsibilities */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-sky-500 rounded-xl shadow-md transform transition-transform hover:rotate-6">
                <Edit3 className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Editors' Responsibilities</h2>
            </div>

            <div className="space-y-6 mb-10">
              
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Publication Decisions
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-5">
                  The editor is responsible for deciding which articles to publish in the conference proceedings. This decision should be guided by the validity and relevance of the work for the scientific community.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Fair Play
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-5">
                  Manuscripts must be evaluated solely based on their intellectual content, without regard to the authors’ race, gender, sexual orientation, religious belief, ethnicity, citizenship, or political affiliation.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Confidentiality
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-5">
                  The editor and editorial staff must not disclose information about a manuscript to anyone other than the corresponding author, reviewers, potential reviewers, or relevant editorial advisors.
                </p>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  <span className="w-2 h-2 bg-sky-500 rounded-full mr-3"></span>
                  Disclosure and Conflicts of Interest
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed ml-5">
                  Unpublished material disclosed in a submitted manuscript must not be used in the editor’s research without the author’s written consent. Privileged information obtained through peer review must be kept confidential.
                </p>
              </div>

            </div>

            <div className="bg-sky-50 rounded-xl p-6 border border-sky-100 flex items-start space-x-4">
                <Shield className="w-6 h-6 text-sky-600 flex-shrink-0 mt-1"/>
                <p className="text-slate-700 font-bold leading-relaxed">
                  By adhering to these ethical guidelines, ICNGMR 2026 seeks to uphold the integrity and quality of its conference proceedings, fostering a culture of trust, respect, and academic excellence.
                </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorGuidelines;