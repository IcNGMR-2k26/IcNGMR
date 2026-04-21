import React from 'react';
import { Eye, ShieldCheck, CheckCircle } from 'lucide-react';

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
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 animate-in slide-in-from-bottom-6 duration-1000">

          {/* Reviewer Responsibilities */}
          <div className="mb-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-sky-500 rounded-xl shadow-md transform transition-transform hover:rotate-6">
                <ShieldCheck className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Reviewers' Responsibilities</h2>
            </div>

            <div className="space-y-6">
              
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden flex items-start space-x-4">
                 <div className="bg-sky-100 text-sky-600 rounded-lg p-2 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                 <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">Confidentiality</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Reviewers must treat manuscripts as confidential and not share or discuss them with others unless authorized by the editor.</p>
                 </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden flex items-start space-x-4">
                 <div className="bg-sky-100 text-sky-600 rounded-lg p-2 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                 <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">Acknowledgment of Sources</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Reviewers should identify relevant published work that the authors have not cited and should alert the authors if similar work has been reported elsewhere.</p>
                 </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden flex items-start space-x-4">
                 <div className="bg-sky-100 text-sky-600 rounded-lg p-2 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                 <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">Standards of Objectivity</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Reviews should be objective and devoid of personal criticism. Reviewers should present their opinions clearly, with supporting evidence.</p>
                 </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden flex items-start space-x-4">
                 <div className="bg-sky-100 text-sky-600 rounded-lg p-2 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                 <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">Promptness</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Reviewers who feel unqualified to review a manuscript or unable to do so promptly should notify the editor and excuse themselves from the process.</p>
                 </div>
              </div>

              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden flex items-start space-x-4">
                 <div className="bg-sky-100 text-sky-600 rounded-lg p-2 mt-0.5"><CheckCircle className="w-5 h-5"/></div>
                 <div>
                    <h3 className="text-lg font-black text-slate-900 mb-1">Disclosure and Conflict of Interest</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">Unpublished materials from submitted manuscripts must not be used in a reviewer’s own research without the author’s explicit consent. Confidential information gained through peer review must not be used for personal benefit.</p>
                 </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewerGuidelines;