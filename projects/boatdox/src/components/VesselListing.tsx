import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, Shield, FileText, DollarSign, MapPin, CreditCard } from 'lucide-react';
import { useBoatDoxPayment } from '../hooks/useBoatDoxPayment';

interface Vessel {
  id: string;
  name: string;
  price: number;
  year: number;
  length: string;
  location: string;
  status: 'AVAILABLE' | 'UNDER_CONTRACT' | 'SOLD';
  image: string;
}

const vessels: Vessel[] = [
  {
    id: '1',
    name: 'Azimut 72 Fly',
    price: 3250000,
    year: 2023,
    length: '72ft',
    location: 'Miami, FL',
    status: 'AVAILABLE',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Sunseeker Predator 65',
    price: 1850000,
    year: 2022,
    length: '65ft',
    location: 'Fort Lauderdale, FL',
    status: 'UNDER_CONTRACT',
    image: 'https://images.unsplash.com/photo-1621275471769-e6aa344546d5?auto=format&fit=crop&q=80&w=800'
  }
];

export const VesselListing: React.FC = () => {
  const { handleStripePayment, handleAuthorizeNetPayment } = useBoatDoxPayment();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {vessels.map((vessel, index) => (
        <motion.div
          key={vessel.id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.1 }}
          className="group relative bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
        >
          <div className="relative h-64 overflow-hidden">
            <img 
              src={vessel.image} 
              alt={vessel.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 right-4 flex gap-2">
              <span className={`px-4 py-1.5 rounded-full text-xs font-bold backdrop-blur-md ${
                vessel.status === 'AVAILABLE' ? 'bg-emerald-500/80 text-white' : 'bg-amber-500/80 text-white'
              }`}>
                {vessel.status.replace('_', ' ')}
              </span>
            </div>
          </div>

          <div className="p-8">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                  {vessel.name}
                </h3>
                <div className="flex items-center gap-2 text-slate-500 mt-1">
                  <MapPin size={14} />
                  <span className="text-xs font-medium">{vessel.location}</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-black text-slate-900">${vessel.price.toLocaleString()}</p>
                <p className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Listing Price</p>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-slate-100">
              <div className="text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Year</p>
                <p className="font-bold text-slate-700">{vessel.year}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Length</p>
                <p className="font-bold text-slate-700">{vessel.length}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">Beam</p>
                <p className="font-bold text-slate-700">18.5ft</p>
              </div>
            </div>

            <div className="mt-8 space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <button 
                  onClick={() => handleStripePayment(vessel.price * 0.1, vessel.name)}
                  className="flex items-center justify-center gap-2 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200"
                >
                  <CreditCard size={18} />
                  <span>Stripe Pay</span>
                </button>
                <button 
                   onClick={() => handleAuthorizeNetPayment(vessel.price * 0.1, vessel.name)}
                   className="flex items-center justify-center gap-2 py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-bold hover:border-blue-600 hover:text-blue-600 transition-all active:scale-95"
                >
                  <Shield size={18} />
                  <span>Authorize.net</span>
                </button>
              </div>
              <button className="w-full flex items-center justify-center gap-2 py-4 bg-blue-50 text-blue-600 rounded-2xl font-extrabold hover:bg-blue-100 transition-all">
                <FileText size={18} />
                <span>Download Purchase Agreement</span>
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
