import React from 'react';
import { Layers, FileText, Search, UserCheck, Activity, Key, CheckCircle, RefreshCcw, BookOpen, ShieldCheck } from 'lucide-react';

const ReviewProcess: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12 animate-in fade-in duration-700">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-12 animate-in slide-in-from-top-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-sky-100 rounded-full text-sky-700 text-[10px] font-bold uppercase tracking-widest mb-4 border border-sky-200">
            <Layers className="h-3 w-3" />
            <span>Evaluation Framework</span>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Review <span className="text-sky-500">Process</span>
          </h1>
          <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-100 text-left">
            <p className="text-base md:text-lg text-slate-600 leading-relaxed font-medium">
              The peer review process is a fundamental component of academic and professional conferences, ensuring the quality, relevance, and integrity of the submissions. It involves several stages, where expert reviewers assess the work against a variety of criteria. Below is a comprehensive overview of the process, highlighting the key aspects reviewers focus on during their evaluations:
            </p>
          </div>
        </div>

        <div className="bg-white rounded-[2rem] shadow-xl shadow-slate-200/50 p-6 md:p-12 border border-slate-50 animate-in slide-in-from-bottom-6 duration-1000">

          {/* Process Steps */}
          <div className="space-y-12">
            
            {/* Step 1 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-sky-100 text-sky-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner border border-sky-200">
                01
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center">
                  <FileText className="h-6 w-6 text-sky-500 mr-3" />
                  Manuscript Submission
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">
                  Authors submit their research papers, abstracts, or proposals through an online CMT platform provided by the conference organizers. The submissions must adhere to strict formatting and ethical standards, ensuring originality and alignment with the conference themes. Authors may also be required to submit plagiarism reports or declarations of originality to prevent ethical violations.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner border border-indigo-200">
                02
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center">
                  <Search className="h-6 w-6 text-indigo-500 mr-3" />
                  Preliminary Screening
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">
                  The conference's editorial or organizing team performs an initial screening to verify that the submissions meet basic requirements. Submissions that pass this screening proceed to the review stage, while those that fail are rejected without further evaluation.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                  {[
                    "Plagiarism: 0% AI plagiarism must be considered",
                    "Relevance: Alignment with the conference's scope and themes",
                    "Formatting Compliance: Adherence to submission guidelines",
                    "Originality: No ethical issues, including plagiarism"
                  ].map((req, i) => (
                    <div key={i} className="flex items-start space-x-3 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-bold text-slate-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-purple-100 text-purple-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner border border-purple-200">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center">
                  <UserCheck className="h-6 w-6 text-purple-500 mr-3" />
                  Reviewer Assignment
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">
                  Accepted submissions are assigned to expert reviewers within the relevant domain. Typically, a double- review process is employed, ensuring anonymity for both the authors and reviewers.
                </p>
              </div>
            </div>

            {/* Step 4: Evaluation Criteria */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner border border-rose-200">
                04
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center">
                  <Activity className="h-6 w-6 text-rose-500 mr-3" />
                  Review Process: Evaluation Criteria
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-6">
                  Reviewers evaluate submissions based on the following detailed criteria:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { t: "Scope", d: "Does the submission align with the conference's focus, such as robotics, VLSI, electrical engineering, or emerging CSE, AI-ML technologies?" },
                    { t: "Novelty", d: "Does the submission offer new insights, innovative methodologies, or original contributions? Is it distinct from previously published work?" },
                    { t: "Validity", d: "Are the research methods scientifically sound and suitable for the study? Are conclusions logically supported by data and analysis?" },
                    { t: "Data and Results", d: "Are the data accurately presented and properly analyzed? Are results reproducible, and are limitations addressed?" },
                    { t: "Clarity", d: "Is the paper well-structured and coherent? Are language and technical terms precise?" },
                    { t: "Compliance", d: "Does the paper adhere to ethical standards, proper citation, absence of plagiarism, formatting and submission guidelines?" }
                  ].map((crit, i) => (
                    <div key={i} className="p-5 bg-rose-50/50 rounded-xl border border-rose-100 hover:border-rose-300 transition-colors">
                      <h4 className="font-black text-rose-700 mb-2">{crit.t}</h4>
                      <p className="text-sm font-medium text-slate-700">{crit.d}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-amber-100 text-amber-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner border border-amber-200">
                05
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center">
                  <Key className="h-6 w-6 text-amber-500 mr-3" />
                  Reviewer Feedback and Recommendations
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">
                  Reviewers provide constructive feedback, offering suggestions for improvements. Recommendations are typically categorized as:
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-green-100 text-green-700 font-bold rounded-lg border border-green-200">Accept</span>
                  <span className="px-4 py-2 bg-blue-100 text-blue-700 font-bold rounded-lg border border-blue-200">Accept with Minor revisions</span>
                  <span className="px-4 py-2 bg-amber-100 text-amber-700 font-bold rounded-lg border border-amber-200">Reject</span>
                  <span className="px-4 py-2 bg-red-100 text-red-700 font-bold rounded-lg border border-red-200">Desk Reject</span>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed mt-4">
                  This feedback helps authors refine their work and ensures that only high-quality research is presented at the conference.
                </p>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-teal-100 text-teal-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner border border-teal-200">
                06
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center">
                  <RefreshCcw className="h-6 w-6 text-teal-500 mr-3" />
                  Author Revisions and Resubmission
                </h3>
                <p className="text-slate-600 font-medium leading-relaxed mb-4">
                  For papers requiring revisions, authors receive feedback and are given a timeframe to address the issues raised.
                </p>
                <div className="bg-slate-900 text-white p-6 rounded-2xl mb-4">
                  <h4 className="font-black mb-3">Authors must:</h4>
                  <ul className="space-y-2 text-sm font-medium text-slate-300">
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 mr-3 flex-shrink-0" /> Revise their methodology, analysis, or arguments based on reviewer comments.</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 mr-3 flex-shrink-0" /> Clarify ambiguities or expand on specific points.</li>
                    <li className="flex items-start"><div className="w-1.5 h-1.5 rounded-full bg-teal-400 mt-1.5 mr-3 flex-shrink-0" /> Ensure compliance with ethical and formatting guidelines in the revised submission.</li>
                  </ul>
                </div>
                <p className="text-slate-600 font-medium text-sm">
                  Revised papers may undergo another round of review to ensure all concerns have been addressed.
                </p>
              </div>
            </div>

            {/* Final Step */}
            <div className="flex flex-col md:flex-row gap-6 md:gap-12 items-start">
              <div className="flex-shrink-0 w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center font-black text-2xl shadow-inner border border-blue-200">
                07
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-slate-900 mb-3 flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-500 mr-3" />
                  Final Decision & Transparency
                </h3>
                <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                  <p>
                    <strong className="text-slate-900 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1"><BookOpen className="w-4 h-4 text-blue-500"/> Final Decision by the Program Committee:</strong>
                    The program committee consolidates the reviewers' feedback and makes a final decision. Accepted papers are included in the conference proceedings and scheduled for presentation.
                  </p>
                  <p>
                    <strong className="text-slate-900 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-1"><ShieldCheck className="w-4 h-4 text-blue-500"/> Transparency and Ethical Oversight:</strong>
                    To ensure transparency, many conferences provide authors with a summary of the review process, including the rationale behind decisions. Ethical concerns, such as plagiarism or data fabrication, are flagged during the review, which may lead to rejection or further investigation.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Significance */}
          <div className="mt-16 pt-12 border-t border-slate-100">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Significance of the Review Process</h2>
            <div className="bg-sky-50 rounded-[2rem] p-8 border border-sky-100">
              <p className="text-slate-700 font-medium leading-relaxed mb-8">
                The review process is a cornerstone of academic integrity and quality assurance at IcNGMR2026. All submitted papers undergo a rigorous peer-review procedure conducted by experts from academia and industry to ensure technical accuracy, originality, relevance, and clarity. This process not only upholds the scholarly standard of the conference but also provides constructive feedback that helps authors refine and enhance their research contributions. By maintaining a transparent and merit-based evaluation system, IcNGMR2026 aims to recognize innovative work, encourage responsible research practices, and foster an environment of excellence and intellectual growth. The outcome is a high-quality program that reflects the latest and most impactful advancements in AI, machine learning, embedded systems, and intelligent technologies.
              </p>
              
              <h3 className="text-lg font-black text-sky-900 mb-4">The peer review process ensures:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { t: "Quality Assurance", d: "Only high-quality, impactful research is presented." },
                  { t: "Constructive Development", d: "Authors receive valuable feedback to improve their work." },
                  { t: "Integrity", d: "Ethical standards are upheld, protecting the credibility of the conference." },
                  { t: "Community Growth", d: "The process fosters collaboration and advances knowledge across disciplines." }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                    <span className="font-bold text-sky-600 block mb-1">{item.t}</span>
                    <span className="text-slate-600 text-sm font-medium">{item.d}</span>
                  </div>
                ))}
              </div>
              <p className="text-center font-bold text-slate-800 mt-8">
                This rigorous evaluation framework ensures that the conference serves as a premier platform for disseminating innovative, well-founded, and transformative research.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReviewProcess;
