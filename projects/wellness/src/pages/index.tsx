import React from 'react';
import { ComplianceProvider } from '../components/common/ComplianceProvider';
import { PatientRecords } from '../components/view/PatientRecords';
import { Shield, Lock, ExternalLink } from 'lucide-react';

const WellnessShowcase: React.FC = () => {
  return (
    <ComplianceProvider>
      <div className="min-h-screen bg-slate-50 font-sans">
        {/* Enterprise Header */}
        <header className="bg-white px-10 py-8 border-b border-slate-200 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 p-3 rounded-2xl text-white">
              <Shield size={32} />
            </div>
            <div>
              <h1 className="text-3xl font-black text-slate-900 tracking-tight">Wellness Portal</h1>
              <p className="text-blue-500 font-bold uppercase text-[10px] tracking-widest mt-1">
                Micro Frontend • HIPAA Interceptors • Node.js/NestJS
              </p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="hidden lg:flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-xl border border-emerald-100 font-bold text-sm">
              <Lock size={16} />
              <span>TLS 1.3 Active</span>
            </div>
            <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors font-bold text-sm">
              <span>Visit Documentation</span>
              <ExternalLink size={16} />
            </button>
          </div>
        </header>

        <main className="p-10 max-w-7xl mx-auto space-y-12">
          {/* Compliance Brief */}
          <section className="bg-blue-600 rounded-3xl p-10 text-white relative overflow-hidden shadow-2xl shadow-blue-200">
             <div className="relative z-10 max-w-2xl">
               <h2 className="text-4xl font-extrabold mb-4 leading-tight">Secure Healthcare Orchestration</h2>
               <p className="text-blue-100 text-lg leading-relaxed font-medium">
                 Connecting patients, physicians, and pharmacies through high-performance Micro Frontends. 
                 This module demonstrates secure PHI management using a decoupled architecture with polyglot backend support.
               </p>
             </div>
             <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-white/5 skew-x-[-12deg] translate-x-20" />
          </section>

          {/* Main Content Area */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <PatientRecords />
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Technical Stack</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Frontend', val: 'Next.js 14' },
                    { label: 'Backend', val: 'NestJS' },
                    { label: 'Database', val: 'PostgreSQL' },
                    { label: 'Auth', val: 'Auth0/OIDC' },
                  ].map((tech) => (
                    <div key={tech.label} className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <p className="text-[10px] uppercase font-bold text-slate-400 mb-1">{tech.label}</p>
                      <p className="text-sm font-bold text-slate-800">{tech.val}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-900 p-8 rounded-3xl text-white shadow-xl">
                 <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                   <Lock className="text-blue-400" size={20} />
                   <span>Security Layer</span>
                 </h4>
                 <ul className="space-y-4 text-slate-400 text-sm">
                   <li className="flex gap-3">
                     <span className="text-blue-500 font-bold">01</span>
                     <span>AES-256-GCM Encryption for Patient Identifiers.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-blue-500 font-bold">02</span>
                     <span>Dynamic PHI data masking based on RBAC roles.</span>
                   </li>
                   <li className="flex gap-3">
                     <span className="text-blue-500 font-bold">03</span>
                     <span>Audit logging for every patient data access event.</span>
                   </li>
                 </ul>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ComplianceProvider>
  );
};

export default WellnessShowcase;
