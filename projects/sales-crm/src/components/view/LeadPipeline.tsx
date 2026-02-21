import React, { useState } from 'react';
import { useSocket } from '../../hooks/useSocket';

interface Lead {
  id: string;
  name: string;
  value: number;
  status: 'NEW' | 'CONTACTED' | 'NEGOTIATION' | 'CLOSED';
}

/**
 * Lead Developer Practice: Complex Interaction Design
 * Drag-and-drop Pipeline Component with Real-time Sync.
 * Showcases: State synchronization, local optimistic updates, and WebSocket events.
 */
export const LeadPipeline: React.FC<{ initialLeads: Lead[] }> = ({ initialLeads }) => {
  const [leads, setLeads] = useState<Lead[]>(initialLeads);
  const { emitEvent } = useSocket('sales-pipeline');

  const onDragOver = (e: React.DragEvent) => e.preventDefault();

  const onDrop = (e: React.DragEvent, newStatus: Lead['status']) => {
    const leadId = e.dataTransfer.getData('leadId');
    
    // 1. Optimistic UI Update
    const updatedLeads = leads.map(l => 
      l.id === leadId ? { ...l, status: newStatus } : l
    );
    setLeads(updatedLeads);

    // 2. Transmit change to backend/other clients
    emitEvent('pipeline_update', { leadId, newStatus });
  };

  const onDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('leadId', id);
  };

  const columns: Lead['status'][] = ['NEW', 'CONTACTED', 'NEGOTIATION', 'CLOSED'];

  return (
    <div className="grid grid-cols-4 gap-6 h-screen p-6 bg-slate-50">
      {columns.map((status) => (
        <div 
          key={status}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, status)}
          className="flex flex-col bg-slate-200/50 rounded-lg p-4 min-h-[500px]"
        >
          <div className="flex justify-between items-center mb-4">
            <h4 className="font-bold text-slate-700 text-sm uppercase">{status}</h4>
            <span className="bg-white px-2 py-0.5 rounded text-xs text-slate-500 font-mono">
              {leads.filter(l => l.status === status).length}
            </span>
          </div>

          <div className="flex-1 space-y-3">
            {leads.filter(l => l.status === status).map((lead) => (
              <div
                key={lead.id}
                draggable
                onDragStart={(e) => onDragStart(e, lead.id)}
                className="p-4 bg-white rounded-md shadow-sm border-l-4 border-blue-500 cursor-grab active:cursor-grabbing hover:shadow-md transition-shadow"
              >
                <p className="font-medium text-slate-800">{lead.name}</p>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-xs text-slate-500">${lead.value.toLocaleString()}</span>
                  <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                    <span className="text-[10px] font-bold text-slate-400">YV</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
