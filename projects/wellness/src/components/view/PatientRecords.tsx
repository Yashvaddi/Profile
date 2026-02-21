import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Lock, FileText, Activity, Calendar, Search } from 'lucide-react';

interface HealthRecord {
  id: string;
  type: 'Prescription' | 'Lab Result' | 'Clinical Note';
  title: string;
  provider: string;
  date: string;
  status: 'Encrypted' | 'HIPAA Verified';
  severity: 'Routine' | 'Urgent' | 'Follow-up';
}

const records: HealthRecord[] = [
  {
    id: '1',
    type: 'Prescription',
    title: 'Amoxicillin 500mg (Post-Op)',
    provider: 'Dr. Sarah Jenkins',
    date: 'Feb 18, 2026',
    status: 'Encrypted',
    severity: 'Routine'
  },
  {
    id: '2',
    type: 'Lab Result',
    title: 'Comprehensive Metabolic Panel',
    provider: 'Quest Diagnostics',
    date: 'Feb 15, 2026',
    status: 'HIPAA Verified',
    severity: 'Urgent'
  },
  {
    id: '3',
    type: 'Clinical Note',
    title: 'Orthopedic Consultation Summary',
    provider: 'Central General Hospital',
    date: 'Jan 28, 2026',
    status: 'Encrypted',
    severity: 'Follow-up'
  }
];

export const PatientRecords: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
      <div className="p-8 border-b border-slate-100 bg-slate-50/50">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
              <Shield className="text-blue-600" size={24} />
              <span>Patient Health Portal</span>
            </h2>
            <p className="text-slate-500 text-sm mt-1">End-to-end encrypted PHI management system</p>
          </div>
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text"
              placeholder="Search records..."
              className="w-full pl-10 pr-4 py-2 bg-white border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-blue-500 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <Activity className="text-blue-600 mb-2" size={24} />
            <p className="text-xs font-bold text-blue-400 uppercase">Health Score</p>
            <p className="text-2xl font-black text-blue-900">92/100</p>
          </div>
          <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
            <Calendar className="text-emerald-600 mb-2" size={24} />
            <p className="text-xs font-bold text-emerald-400 uppercase">Next Appointment</p>
            <p className="text-2xl font-black text-emerald-900">Mar 12</p>
          </div>
          <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
            <Lock className="text-amber-600 mb-2" size={24} />
            <p className="text-xs font-bold text-amber-400 uppercase">Privacy Guard</p>
            <p className="text-2xl font-black text-amber-900 text-sm uppercase">AES-256 Enabled</p>
          </div>
        </div>

        <div className="space-y-4">
          <AnimatePresence>
            {records.map((record, index) => (
              <motion.div
                key={record.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-5 bg-white border border-slate-100 rounded-2xl hover:border-blue-200 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-5">
                  <div className={`p-4 rounded-xl ${
                    record.type === 'Prescription' ? 'bg-blue-50 text-blue-600' : 
                    record.type === 'Lab Result' ? 'bg-purple-50 text-purple-600' : 'bg-slate-50 text-slate-600'
                  }`}>
                    <FileText size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{record.title}</h3>
                    <div className="flex gap-4 mt-1 text-xs text-slate-500">
                      <span className="font-medium">{record.provider}</span>
                      <span>•</span>
                      <span>{record.date}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase ${
                    record.severity === 'Urgent' ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-500'
                  }`}>
                    {record.severity}
                  </span>
                  <button className="p-2 bg-slate-50 text-slate-400 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <Lock size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
