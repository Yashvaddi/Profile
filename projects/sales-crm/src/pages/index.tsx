import { LeadPipeline } from '../components/view/LeadPipeline';
import { AnalyticsDashboard } from '../components/view/AnalyticsDashboard';

const CRMShowcase: React.FC = () => {
  const dummyLeads = [
    { id: '1', name: 'Acme Corp', value: 12000, status: 'NEW' as const },
    { id: '2', name: 'Globex', value: 8500, status: 'CONTACTED' as const },
    { id: '3', name: 'Initech', value: 4200, status: 'NEGOTIATION' as const },
    { id: '4', name: 'Soylent Corp', value: 15000, status: 'CLOSED' as const },
  ];

  return (
    <div className="min-h-screen bg-slate-100">
      <AnalyticsDashboard />
      
      <div className="p-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-800 mb-6">Interactive Pipeline</h2>
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <LeadPipeline initialLeads={dummyLeads} />
          </div>
        </div>

        <div className="p-8 bg-emerald-900 text-white rounded-2xl shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold mb-2">WhatsApp Business API Gateway</h2>
            <p className="opacity-80">
              Seamlessly connect with your customers. This module bridges React frontends with Python FastAPI backends for high-throughput messaging.
            </p>
          </div>
          <button className="bg-emerald-500 hover:bg-emerald-400 text-white px-8 py-3 rounded-full font-bold transition-colors whitespace-nowrap">
            Launch Message Composer
          </button>
        </div>
      </div>
    </div>
  );
};

export default CRMShowcase;
