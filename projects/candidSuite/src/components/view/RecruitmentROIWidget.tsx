import React, { useMemo } from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

interface AnalyticsProps {
  data: Array<{
    stage: string;
    candidates: number;
    avgTime: number; // minutes
  }>;
}

/**
 * Lead Developer Practice: Data Visualization Component
 * Multi-metric analytical widget for ATS performance tracking.
 * Features: Memoized calculations, Responsive Recharts, and Accessibility.
 */
export const RecruitmentROIWidget: React.FC<AnalyticsProps> = ({ data }) => {
  // Memoizing complex ROI calculation (Cost per hire simulation)
  const totalROI = useMemo(() => {
    const costPerMinute = 2.5; // Example recruiter cost
    return data.reduce((acc, curr) => acc + (curr.candidates * curr.avgTime * costPerMinute), 0);
  }, [data]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-slate-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-semibold text-slate-800">Recruitment Velocity Analytics</h3>
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold">
          Est. ROI: ${totalROI.toLocaleString()}
        </span>
      </div>

      <div className="h-64 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis 
              dataKey="stage" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748b', fontSize: 12 }} 
            />
            <Tooltip 
              cursor={{ fill: '#f8fafc' }}
              contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
            />
            <Bar 
              dataKey="candidates" 
              fill="#3b82f6" 
              radius={[4, 4, 0, 0]} 
              barSize={32}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-4 border-t border-slate-100 pt-4">
        {data.slice(0, 3).map((item) => (
          <div key={item.stage} className="text-center">
            <p className="text-xs text-slate-500 uppercase tracking-wider">{item.stage}</p>
            <p className="text-lg font-bold text-slate-900">{item.candidates}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
