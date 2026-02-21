import React, { useEffect } from 'react';
import { useGMapAdapter } from '../adapters/GMapAdapter';
import { useProperty3DViewer } from '../hooks/useProperty3DViewer';

const EquestrianShowcase: React.FC = () => {
  const { initMap } = useGMapAdapter('mock-key');
  const viewerRef = React.useRef<HTMLDivElement>(null);
  useProperty3DViewer(viewerRef);

  return (
    <div className="min-h-screen bg-stone-50">
      <div className="p-8 bg-stone-900 text-white shadow-xl">
        <h1 className="text-3xl font-serif">Discover Equestrian</h1>
        <p className="text-stone-400 mt-2 italic">Connecting Go (Golang) Microservices with Google Maps API</p>
      </div>

      <main className="p-8 max-w-6xl mx-auto">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold text-stone-800">Geospatial Intelligence</h2>
            <p className="mt-4 text-stone-600 leading-relaxed">
              Real-time property tracking and advanced marker clustering served via a high-performance **Golang** backend.
            </p>
            <div className="mt-8 h-48 bg-stone-100 rounded-lg flex items-center justify-center border-2 border-dashed border-stone-300">
              <span className="text-stone-400 font-medium">GMaps Interactive Layer Loaded</span>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-stone-200">
            <h2 className="text-xl font-bold text-stone-800">3D Estate Rendering</h2>
            <p className="mt-4 text-stone-600">
              Experimental **Three.js** hook for immersive property walkthroughs and site planning.
            </p>
            <div ref={viewerRef} className="mt-8 h-48 bg-stone-100 rounded-lg overflow-hidden border border-stone-200" />
            <div className="mt-4 flex items-center gap-4">
              <div className="px-4 py-2 bg-stone-900 text-white rounded-full text-xs font-bold uppercase tracking-widest">WASM Compressing Assets</div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EquestrianShowcase;
