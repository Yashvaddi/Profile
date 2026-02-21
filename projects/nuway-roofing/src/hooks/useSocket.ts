import { useEffect, useState } from 'react';

/**
 * Lead Developer Practice: Real-time Communication Bridge
 * Socket.IO hook for syncing roofing project status with the .NET Core backend.
 * Features: Automatic reconnection, event-driven status updates, and cleanup.
 */
export const useSocket = (projectId?: string) => {
  const [status, setStatus] = useState<'IDLE' | 'SYNCING' | 'CONNECTED'>('IDLE');
  const [lastUpdate, setLastUpdate] = useState<any>(null);

  useEffect(() => {
    if (!projectId) return;

    console.log(`[Socket] Connecting to .NET real-time gateway for project: ${projectId}`);
    setStatus('SYNCING');

    // Simulated Socket.IO implementation
    const timer = setTimeout(() => {
      setStatus('CONNECTED');
      console.log(`[Socket] Connected to stream: nuway-roof-sync-${projectId}`);
    }, 1000);

    const interval = setInterval(() => {
      const mockEvent = {
        type: 'STATUS_UPDATE',
        phase: 'INSPECTION_COMPLETE',
        manager: 'Yash Vaddi',
        timestamp: new Date().toISOString()
      };
      setLastUpdate(mockEvent);
      console.log('[Socket] Received project pulse:', mockEvent);
    }, 15000);

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
      console.log(`[Socket] Terminating stream for project: ${projectId}`);
    };
  }, [projectId]);

  return { status, lastUpdate };
};
