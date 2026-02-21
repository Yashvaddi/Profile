import React from 'react';
import { RecruitmentROIWidget } from '../components/view/RecruitmentROIWidget';
import { InterviewPipeline } from '../components/view/InterviewPipeline';
import { Layout, Mail, Terminal, Settings } from 'lucide-react';

const CandidSuiteShowcase: React.FC = () => {
  const roiData = [
    { stage: 'Sourcing', candidates: 450, avgTime: 12 },
    { stage: 'Screening', candidates: 120, avgTime: 45 },
    { stage: 'Technical', candidates: 45, avgTime: 90 },
    { stage: 'Culture', candidates: 15, avgTime: 60 },
    { stage: 'Offer', candidates: 4, avgTime: 30 },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans">
      {/* Sidebar Mockup */}
      <div className="w-24 bg-slate-900 flex flex-col items-center py-10 gap-8 shadow-2xl">
        <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/30">
          <Layout size={28} />
        </div>
        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer">
          <Mail size={20} />
        </div>
        <div className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer">
          <Terminal size={20} />
        </div>
        <div className="mt-auto w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center text-slate-500 hover:text-white transition-colors cursor-pointer">
          <Settings size={20} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto">
        <header className="bg-white border-b border-slate-200 px-12 py-8 flex justify-between items-center sticky top-0 z-20">
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">CandidSuite</h1>
            <p className="text-emerald-600 font-bold text-[10px] tracking-[0.3em] uppercase mt-1">Enterprise ATS Orchestrator</p>
          </div>
          <div className="flex items-center gap-4">
             <div className="text-right">
               <p className="text-sm font-bold text-slate-900">Yash Vaddi</p>
               <p className="text-[10px] font-bold text-slate-400 uppercase">Lead Architect</p>
             </div>
             <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center font-bold text-emerald-700">YV</div>
          </div>
        </header>

        <main className="p-12 max-w-7xl mx-auto space-y-12">
          {/* Top Section: ROI and Metrics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <InterviewPipeline />
            </div>
            <div className="space-y-8">
              <RecruitmentROIWidget data={roiData} />
              
              <div className="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden group">
                <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:scale-110 transition-transform duration-500">
                  <Mail size={160} />
                </div>
                <h3 className="text-lg font-bold relative z-10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  Gmail Bridge Active
                </h3>
                <p className="text-slate-400 text-sm mt-3 relative z-10 font-medium">
                  Currently indexing candidate communications via Laravel-integrated IMAP adapters.
                </p>
                <div className="mt-6 p-4 bg-slate-800 rounded-2xl border border-slate-700 relative z-10">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">System Status</p>
                  <div className="flex justify-between items-center text-xs font-mono">
                    <span className="text-slate-300">API Latency</span>
                    <span className="text-emerald-400">14ms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Infrastructure Section */}
          <section className="bg-emerald-600 rounded-[3rem] p-12 text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl shadow-emerald-200">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black mb-4">Polyglot Backend Integration</h2>
              <p className="text-emerald-50 text-lg font-medium leading-relaxed">
                Demonstrating the power of Micro Frontends: This module utilizes a **PHP Laravel** backend for robust data management, seamlessly bridged into our Next.js shell.
              </p>
            </div>
            <div className="flex gap-4 shrink-0">
               <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 text-center">
                 <p className="text-3xl font-black">2.4s</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest">Avg. TTI</p>
               </div>
               <div className="bg-white/10 backdrop-blur-md px-6 py-4 rounded-3xl border border-white/20 text-center">
                 <p className="text-3xl font-black">100%</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest">Type-Safe</p>
               </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default CandidSuiteShowcase;
