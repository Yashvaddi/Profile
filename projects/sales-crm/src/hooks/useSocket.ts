import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

/**
 * Lead Developer Practice: Real-time Communication Hook
 * Demonstrating Socket.IO integration for Lead Tracking.
 */
export const useSocket = (room: string) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const socketInstance = io(process.env.NEXT_PUBLIC_WS_URL || 'http://localhost:4000', {
      transports: ['websocket'],
      query: { room },
    });

    socketInstance.on('connect', () => setIsConnected(true));
    socketInstance.on('disconnect', () => setIsConnected(false));
    
    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect();
    };
  }, [room]);

  const emitEvent = (event: string, data: any) => {
    if (socket) socket.emit(event, data);
  };

  return { isConnected, emitEvent, socket };
};
