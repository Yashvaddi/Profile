import React, { Suspense, lazy } from 'react';

// Architecture Practice: In a live production environment, these would be loaded via
// Module Federation from remote URLs. For this build-ready showcase, we use
// high-fidelity local stand-ins that mirror the expected remote interfaces.
const WellnessRemote = () => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 italic text-slate-400 text-center">
    Wellness Remote Runtime Active
  </div>
);
const CRMRemote = () => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-emerald-100 italic text-slate-400 text-center">
    Sales CRM Remote Runtime Active
  </div>
);
const RecruitmentRemote = () => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100 italic text-slate-400 text-center">
    CandidSuite Remote Runtime Active
  </div>
);

/**
 * Lead Developer Practice: Micro Frontend Shell (Host)
 * Orchestrates the lifecycle of multiple remote applications and their distinct backends.
 */
export const MFEShell: React.FC = () => {
  return (
    <div className="flex h-screen bg-slate-100">
      {/* Global Sidebar controlled by Shell */}
      <nav className="w-64 bg-slate-900 text-white p-6">
        <h1 className="text-xl font-bold mb-8">Enterprise OS</h1>
        <ul className="space-y-4">
          <li className="p-2 hover:bg-slate-800 rounded cursor-pointer">Healthcare (Node.js)</li>
          <li className="p-2 hover:bg-slate-800 rounded cursor-pointer">CRM (Python/FastAPI)</li>
          <li className="p-2 hover:bg-slate-800 rounded cursor-pointer">Hiring (Laravel)</li>
        </ul>
      </nav>

      {/* Dynamic Content Area where Remotes are injected */}
      <main className="flex-1 overflow-auto">
        <Suspense fallback={<div className="p-10 animate-pulse">Loading Remote Runtime...</div>}>
          <div className="p-8">
            {/* Logic to render based on Route */}
            <h2 className="text-3xl font-bold text-slate-800 mb-6">Unified Dashboard</h2>
            <div className="grid grid-cols-2 gap-8">
              <WellnessRemote /> 
              <CRMRemote />
            </div>
          </div>
        </Suspense>
      </main>
    </div>
  );
};
