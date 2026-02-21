import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, MessageSquare, DollarSign } from 'lucide-react';

const stats = [
  { label: 'Total Revenue', value: '$84,230', icon: DollarSign, color: 'bg-emerald-500', trend: '+12.5%' },
  { label: 'Active Leads', value: '1,284', icon: Users, color: 'bg-blue-500', trend: '+5.2%' },
  { label: 'Conversion Rate', value: '18.4%', icon: TrendingUp, color: 'bg-purple-500', trend: '+2.1%' },
  { label: 'Messages Sent', value: '42,903', icon: MessageSquare, color: 'bg-orange-500', trend: '+14.7%' },
];

export const AnalyticsDashboard: React.FC = () => {
  return (
    <div className="p-8 bg-slate-50/50 min-h-screen">
      <header className="mb-12">
        <h1 className="text-3xl font-bold text-slate-900">CRM Analytics</h1>
        <p className="text-slate-500 mt-2">Real-time performance metrics across all channels</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div className={`${stat.color} p-3 rounded-xl text-white`}>
                <stat.icon size={24} />
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
                {stat.trend}
              </span>
            </div>
            <h3 className="text-slate-500 text-sm font-medium">{stat.label}</h3>
            <p className="text-2xl font-bold text-slate-900 mt-1">{stat.value}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-lg font-bold text-slate-800">Pipeline Velocity</h2>
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-500"></span>
              <span className="text-xs text-slate-400">Current Month</span>
            </div>
          </div>
          <div className="h-64 flex items-end gap-3">
            {[40, 70, 45, 90, 65, 80, 50, 85, 60, 75, 55, 95].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                animate={{ height: `${h}%` }}
                transition={{ duration: 1, delay: i * 0.05 }}
                className="flex-1 bg-blue-500/10 hover:bg-blue-500 rounded-t-sm transition-colors relative group"
              >
                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ${(h * 1000).toLocaleString()}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-slate-400 font-medium">
            <span>JAN</span>
            <span>MAR</span>
            <span>MAY</span>
            <span>JUL</span>
            <span>SEP</span>
            <span>NOV</span>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
          <h2 className="text-lg font-bold text-slate-800 mb-8">Channel Distribution</h2>
          <div className="space-y-6">
            {[
              { label: 'WhatsApp', value: 45, color: 'bg-emerald-500' },
              { label: 'Email', value: 30, color: 'bg-blue-500' },
              { label: 'VoIP Calls', value: 15, color: 'bg-orange-500' },
              { label: 'API / Other', value: 10, color: 'bg-slate-300' },
            ].map((channel) => (
              <div key={channel.label}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-slate-600 font-medium">{channel.label}</span>
                  <span className="text-slate-900 font-bold">{channel.value}%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${channel.value}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`h-full ${channel.color}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
