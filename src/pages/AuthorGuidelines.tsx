import React from 'react';
import { FileText, Check, AlertCircle, Download, Layers, MousePointer2, ListChecks, Info } from 'lucide-react';

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
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Author <span className="text-sky-500">Guidelines</span>
          </h1>
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-6 md:p-8 text-left">
            <p className="text-base md:text-lg text-slate-600 font-medium leading-relaxed">
              At the International Conference on Natural Language Processing, Generative AI, and Machine Learning for Reconfigurable Intelligence (ICNGMR 2026), we are committed to upholding the highest standards of integrity and ethical conduct in the publication of our conference proceedings. We expect all authors, reviewers, and editors involved in our publication process to follow the ethical guidelines below, ensuring the credibility, reliability, and academic integrity of the work presented.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 animate-in slide-in-from-bottom-6 duration-1000">

          {/* Authors' Responsibilities summary */}
          <div className="mb-12">
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-2.5 bg-sky-500 rounded-xl shadow-md transform transition-transform hover:rotate-6">
                <Info className="text-white h-5 w-5" />
              </div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Authors' Responsibilities</h2>
            </div>

            <div className="bg-sky-50/50 rounded-2xl p-6 border border-sky-100">
              <p className="text-slate-700 font-medium leading-relaxed">
                The full paper must be submitted through the platform <strong>Microsoft Conference Management Tool Kit (CMT)</strong> and Email submissions are accepted by exception only. By submitting his paper electronically/or by email. Each author confirms that he is aware of the Publication Ethic & Malpractice Statement and the Privacy Policy of the event. Authors are expected to have Scope, Novelty, Validity, data reported, analyzed, and interpreted correctly, Clarity, Compliance, and significant contribution in their articles and must meet the guidelines of format. <strong className="text-rose-600">The maximum number of pages is allowed only 5.</strong>
              </p>
            </div>
          </div>

          {/* Guidelines Grid */}
          <div className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Item */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  Originality and Plagiarism
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Authors must ensure their work is entirely original, with proper citation for any sources or influences. Plagiarism in any form is unethical and unacceptable. <strong className="text-rose-600">The maximum allowable AI plagiarism 0%.</strong>
                </p>
              </div>

              {/* Item */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  Acknowledgment of Sources
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Proper acknowledgment must be given for the work of others. Authors should cite all publications that have influenced the development of the reported study.
                </p>
              </div>

              {/* Item */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  Authorship of the Paper
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Authorship should be limited to those who have made significant contributions to the conception, design, execution, or interpretation of the study. All those who have contributed should be listed as co-authors. Those contributing in a more limited way should be acknowledged or listed as contributors.
                </p>
              </div>

              {/* Item */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  Disclosure and Conflicts of Interest
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Authors must disclose any financial or other substantive conflicts of interest that could influence the results or interpretation of their manuscript. All financial support sources for the project should be disclosed.
                </p>
              </div>

              {/* Item */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  Data Access and Retention
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Authors should be prepared to provide raw data for editorial review and, where feasible, make it publicly accessible. Data should be retained for a reasonable period post-publication.
                </p>
              </div>

              {/* Item */}
              <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  Reporting Standards
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Authors should provide an accurate account of their research and an objective discussion of its significance. The data should be presented accurately, and the paper should include enough detail and references to allow replication of the work.
                </p>
              </div>

              {/* Item */}
              <div className="col-span-1 md:col-span-2 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-sky-300 transition-colors">
                <h3 className="text-lg font-black text-slate-900 mb-2 flex items-center">
                  Multiple, Redundant, or Concurrent Publication
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Authors should not submit manuscripts describing essentially the same research to more than one journal or primary publication. Submitting the same manuscript to multiple outlets concurrently is unethical.
                </p>
              </div>

            </div>
          </div>

          {/* Download Buttons from existing design */}
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