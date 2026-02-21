import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, Mail, Calendar, CheckCircle, ChevronRight, Layout } from 'lucide-react';

interface Candidate {
  id: string;
  name: string;
  role: string;
  status: 'Initial' | 'Technical' | 'Culture' | 'Offer';
  lastEmail: string;
  score: number;
}

const candidates: Candidate[] = [
  { id: '1', name: 'Alex Rivera', role: 'Fullstack Engineer', status: 'Technical', lastEmail: 'Confirmed for 3 PM', score: 88 },
  { id: '2', name: 'Samantha Wu', role: 'Product Designer', status: 'Offer', lastEmail: 'Offer Letter Sent', score: 94 },
  { id: '3', name: 'Jordan Hayes', role: 'DevOps Lead', status: 'Culture', lastEmail: 'Scheduling Link Sent', score: 82 },
];

export const InterviewPipeline: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="p-8 border-b border-slate-100 flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
            <Layout className="text-emerald-600" size={24} />
            <span>Interview Pipeline</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">Live synchronization with Laravel backend</p>
        </div>
        <div className="flex gap-2">
          {['Initial', 'Technical', 'Culture', 'Offer'].map(s => (
            <div key={s} className="px-3 py-1 bg-slate-50 border border-slate-100 rounded-full text-[10px] font-bold text-slate-400">
              {s}
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 space-y-4">
        {candidates.map((candidate, index) => (
          <motion.div
            key={candidate.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group flex flex-col md:flex-row items-start md:items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-2xl hover:bg-white hover:border-emerald-200 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-emerald-600 shadow-sm">
                <User size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{candidate.name}</h3>
                <p className="text-xs text-slate-500 font-medium">{candidate.role}</p>
              </div>
            </div>

            <div className="mt-4 md:mt-0 flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-2 text-slate-400">
                <Mail size={16} />
                <span className="text-xs font-medium">{candidate.lastEmail}</span>
              </div>
              <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${
                candidate.status === 'Offer' ? 'bg-emerald-100 text-emerald-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {candidate.status}
              </div>
              <div className="text-right min-w-[60px]">
                <p className="text-xs font-bold text-slate-400">Score</p>
                <p className={`text-lg font-black ${candidate.score > 90 ? 'text-emerald-600' : 'text-slate-800'}`}>
                  {candidate.score}%
                </p>
              </div>
              <button className="p-2 bg-white border border-slate-200 rounded-xl text-slate-400 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all">
                <ChevronRight size={20} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="p-6 bg-emerald-900 text-white flex justify-between items-center">
        <div className="flex items-center gap-3">
          <CheckCircle size={20} className="text-emerald-400" />
          <span className="text-sm font-bold uppercase tracking-widest">Automation Active</span>
        </div>
        <button className="text-xs font-bold underline decoration-emerald-400 underline-offset-4 decoration-2">
          View Gmail Bridge Logs
        </button>
      </div>
    </div>
  );
};
