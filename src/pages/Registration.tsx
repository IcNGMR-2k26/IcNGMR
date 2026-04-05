import React from 'react';
import { QrCode, FileText, Link as LinkIcon, CheckCircle, Info } from 'lucide-react';

const Registration: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-8 lg:py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Registration</h1>
          <div className="w-24 h-1.5 bg-sky-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-slate-500 font-medium">Please follow the guidelines carefully for successful submission.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/60 p-8 md:p-12 border border-slate-100">

          {/* Submission Guidelines */}
          <div className="mb-16">
            <div className="flex items-center space-x-3 mb-8">
              <div className="p-2 bg-sky-100 rounded-lg">
                <Info className="text-sky-600 h-6 w-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-800">Submission Guidelines</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-sky-400">
                  <strong className="text-slate-900 block mb-2">Review Process & Indexing:</strong>
                  The full paper must be submitted through <strong>Microsoft CMT</strong>. Email submissions are accepted by exception only. All papers undergo a strict blind peer review process.
                </p>
              </div>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p className="bg-slate-50 p-6 rounded-2xl border-l-4 border-sky-400">
                  <strong className="text-slate-900 block mb-2">Plagiarism & Limits:</strong>
                  The maximum allowed pages are 5 (extra pages at ₹1000/page). Plagiarism must be <strong>less than 10%</strong>. Accepted papers will be submitted for Scopus indexing.
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
            {[
              { label: 'Paper Format', icon: FileText, color: 'text-blue-600' },
              { label: 'CMT Link', icon: LinkIcon, color: 'text-purple-600' },
              { label: 'Registration Link', icon: CheckCircle, color: 'text-green-600' },
            ].map((item) => (
              <a key={item.label} href="#" className="flex items-center justify-center p-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all group">
                <item.icon className={`h-5 w-5 mr-3 ${item.color}`} />
                <span className="font-bold text-slate-700 group-hover:text-sky-600">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Tables Section */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 mb-16">
            {/* Important Dates */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-2 h-6 bg-sky-500 rounded-full mr-3"></div> Important Dates
              </h3>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <table className="w-full text-left text-sm">
                  <tbody>
                    {[
                      { event: 'Paper Submission Open', date: '15th April 2026', highlight: true },
                      { event: 'Submission Closes', date: '31st July 2026', highlight: true },
                      { event: 'Acceptance Notification', date: '10th August 2026', highlight: true },
                      { event: 'Registration Deadline', date: '20th August 2026', highlight: true },
                      { event: 'Conference Dates', date: '28th-29th Aug 2026', highlight: true },
                    ].map((row, idx) => (
                      <tr key={idx} className={idx % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'}>
                        <td className="px-6 py-4 font-semibold text-slate-700">{row.event}</td>
                        <td className={`px-6 py-4 font-bold ${row.highlight ? 'text-sky-600' : 'text-slate-500'}`}>{row.date}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Registration Fees */}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                <div className="w-2 h-6 bg-purple-500 rounded-full mr-3"></div> Registration Fees
              </h3>
              <div className="overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
                <table className="w-full text-left text-sm">
                  <thead className="bg-slate-900 text-white">
                    <tr>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider text-[11px]">Category</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider text-[11px]">Indian</th>
                      <th className="px-6 py-4 font-bold uppercase tracking-wider text-[11px]">Foreign</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr className="hover:bg-sky-50 transition-colors">
                      <td className="px-6 py-5 font-medium text-slate-700">Industry</td>
                      <td className="px-6 py-5 font-black text-slate-900">₹13,000</td>
                      <td className="px-6 py-5 font-black text-slate-900">USD 150</td>
                    </tr>
                    <tr className="hover:bg-sky-50 transition-colors">
                      <td className="px-6 py-5 font-medium text-slate-700">Academicians</td>
                      <td className="px-6 py-5 font-black text-slate-900">₹12,000</td>
                      <td className="px-6 py-5 font-black text-slate-900">USD 150</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Payment Section - Modernized */}
          <div className="bg-slate-900 rounded-[2rem] p-10 text-white flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl font-black">Payment Details</h2>
              <div className="grid grid-cols-1 gap-4 text-slate-300">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Account Number</span>
                  <span className="text-sky-400 font-mono font-bold">1421350000009470</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>IFSC Code</span>
                  <span className="text-sky-400 font-mono font-bold">KVBL0001412</span>
                </div>
                <div className="flex justify-between">
                  <span>Account Name</span>
                  <span className="text-white font-bold">EISPL, KVB Bank</span>
                </div>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/5 inline-block w-full text-center">
                <p className="text-sky-300 font-bold">UPI: 9593468716@KCL</p>
              </div>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white p-5 rounded-3xl shadow-2xl transform transition-transform hover:rotate-3">
                <QrCode className="h-32 w-32 text-slate-900" />
              </div>
              <p className="mt-4 text-xs text-slate-400 uppercase tracking-widest font-bold">Secure Payment Terminal</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Registration;