import React from 'react';
import dynamic from 'next/dynamic';
import { DotNetBridge } from '../adapters/DotNetBridge';

const RoofingCanvasBuilder = dynamic(
  () => import('../components/view/RoofingCanvasBuilder').then((mod) => mod.RoofingCanvasBuilder),
  { ssr: false }
);

const NuwayShowcase: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-5xl font-black text-white tracking-tighter">NUWAY ROOFING</h1>
            <p className="text-blue-400 mt-2 font-mono uppercase tracking-widest text-sm">.NET Core 8 & Entity Framework Connectivity</p>
          </div>
          <div className="text-right">
             <div className="text-xs text-slate-500 uppercase font-bold mb-1">System Environment</div>
             <div className="px-3 py-1 bg-blue-900/40 text-blue-300 border border-blue-700/50 rounded text-sm font-bold">PRODUCTION-US-CLOUD</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <RoofingCanvasBuilder />
          </div>
          
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-slate-900 p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold mb-4">Enterprise Bridge</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Pushing direct measurement vectors to **C#/.NET** microservices for instant insurance pricing calculation.
              </p>
              <div className="p-4 bg-slate-800/50 rounded-xl border border-blue-900/30">
                 <div className="text-xs text-blue-400 font-bold mb-2">DOTNET CORE HANDSHAKE</div>
                 <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                   <div className="w-full h-full bg-blue-500 animate-pulse" />
                 </div>
              </div>
            </div>

            <div className="bg-blue-600 p-6 rounded-2xl text-white shadow-lg shadow-blue-500/10">
              <h4 className="font-bold text-lg mb-2 text-white">Project Specs</h4>
              <ul className="text-blue-100 text-sm space-y-2">
                <li>• Konva.js Canvas Layer</li>
                <li>• .NET Cost Engine Sync</li>
                <li>• Real-time Insurance Quoting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NuwayShowcase;
