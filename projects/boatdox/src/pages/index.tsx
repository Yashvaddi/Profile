import React from 'react';
import { VesselListing } from '../components/VesselListing';
import { useBoatDoxPayment } from '../hooks/useBoatDoxPayment';
import { Anchor, Shield, Navigation, CreditCard, CheckCircle2, Globe } from 'lucide-react';
import Swal from 'sweetalert2';

const BoatDoxShowcase: React.FC = () => {
  const { handleStripePayment, handleAuthorizeNetPayment } = useBoatDoxPayment();

  const openDepositModal = () => {
    Swal.fire({
      title: 'Select Payment Gateway',
      text: 'Secure your vessel deposit using our verified partners',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Stripe (International)',
      denyButtonText: 'Authorize.net (Domestic)',
      confirmButtonColor: '#2563eb',
      denyButtonColor: '#0f172a',
    }).then((result) => {
      if (result.isConfirmed) {
        handleStripePayment(10000, 'Marketplace Vessel');
      } else if (result.isDenied) {
        handleAuthorizeNetPayment(10000, 'Marketplace Vessel');
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Premium Navigation */}
      <nav className="bg-slate-900 px-10 py-6 text-white flex justify-between items-center shadow-2xl">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-xl">
            <Anchor size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">BoatDox</h1>
            <p className="text-[10px] text-blue-400 font-bold tracking-[0.2em]">Enterprise Maritime Suite</p>
          </div>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
          <span className="text-white border-b-2 border-blue-600 pb-1">Inventory</span>
          <span className="hover:text-white cursor-pointer transition-colors">Brokerage</span>
          <span className="hover:text-white cursor-pointer transition-colors">Closing Room</span>
        </div>
        <button 
          onClick={openDepositModal}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-lg shadow-blue-900/40"
        >
          <CreditCard size={18} />
          <span>Secure Deposit</span>
        </button>
      </nav>

      <main className="p-10 max-w-7xl mx-auto">
        {/* Market Intelligence Header */}
        <section className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl font-black text-slate-900 leading-none">Vessel Marketplace</h2>
            <p className="text-slate-500 mt-4 max-w-md font-medium">
              Synchronizing Java Spring Boot backends with React frontends for sub-second vessel tracking and secure transaction management.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="bg-emerald-100 p-2 rounded-lg text-emerald-600">
                <Shield size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">S3 Encryption</p>
                <p className="text-sm font-bold text-slate-900">Active Sec. Layer</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <Navigation size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">GIS Tracking</p>
                <p className="text-sm font-bold text-slate-900">OpenStreetMaps</p>
              </div>
            </div>
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-sm flex items-center gap-4">
              <div className="bg-slate-100 p-2 rounded-lg text-slate-600">
                <Globe size={20} />
              </div>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Coverage</p>
                <p className="text-sm font-bold text-slate-900">Global Gateways</p>
              </div>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Listings */}
          <div className="lg:col-span-2">
            <VesselListing />
          </div>

          {/* Sidebar: Transaction Center */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <CheckCircle2 size={20} className="text-blue-600" />
                <span>Closing Progress</span>
              </h3>
              <div className="space-y-6 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-slate-100" />
                
                {[
                  { label: 'Purchase Agreement', status: 'COMPLETED', time: '2h ago' },
                  { label: 'Escrow Deposit', status: 'PENDING', time: 'Awaiting Action' },
                  { label: 'Insurance Waiver', status: 'LOCKED', time: 'Next Phase' },
                  { label: 'Final Delivery', status: 'LOCKED', time: 'Target: Oct 24' },
                ].map((step, i) => (
                  <div key={i} className="flex gap-6 relative z-10">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${
                      step.status === 'COMPLETED' ? 'bg-blue-600 text-white' : 
                      step.status === 'PENDING' ? 'bg-amber-400 text-white animate-pulse' : 'bg-slate-200 text-slate-400'
                    }`}>
                      <span className="text-[10px] font-bold">{i+1}</span>
                    </div>
                    <div>
                      <h4 className={`text-sm font-bold ${step.status === 'LOCKED' ? 'text-slate-400' : 'text-slate-900'}`}>{step.label}</h4>
                      <p className="text-[10px] font-medium text-slate-400 mt-0.5 uppercase tracking-tighter">{step.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-600 rounded-3xl p-8 text-white relative overflow-hidden group">
              <div className="absolute -right-4 -bottom-4 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Anchor size={160} />
              </div>
              <h3 className="text-xl font-bold relative z-10">Premium Broker Support</h3>
              <p className="text-blue-100 text-sm mt-2 relative z-10 font-medium">
                Our lead consultants are ready to assist with complex maritime legalities and international closings.
              </p>
              <button className="mt-6 w-full py-4 bg-white text-blue-600 rounded-2xl font-bold hover:bg-blue-50 transition-colors relative z-10">
                Contact Specialist
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default BoatDoxShowcase;
