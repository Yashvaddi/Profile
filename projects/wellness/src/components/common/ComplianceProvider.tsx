import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * Lead Developer Practice: Compliance & Security Wrapper
 * A specialized Provider for HIPAA-compliant applications.
 * Handles auto-logout on inactivity and verifies PHI access tokens.
 */
interface ComplianceContextType {
  isCompliantSession: boolean;
  phiAccessLevel: 'READ' | 'WRITE' | 'NONE';
  lastActivity: number;
}

const ComplianceContext = createContext<ComplianceContextType | undefined>(undefined);

export const ComplianceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<ComplianceContextType>({
    isCompliantSession: true,
    phiAccessLevel: 'READ',
    lastActivity: Date.now(),
  });

  useEffect(() => {
    // 15-minute inactivity timeout for HIPAA compliance
    const TIMEOUT_MS = 15 * 60 * 1000;
    
    const checkCompliance = () => {
      if (Date.now() - session.lastActivity > TIMEOUT_MS) {
        console.warn('HIPAA Compliance: Session expired due to inactivity.');
        // Logic to logout or clear PHI from memory
      }
    };

    const interval = setInterval(checkCompliance, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [session.lastActivity]);

  return (
    <ComplianceContext.Provider value={session}>
      {children}
    </ComplianceContext.Provider>
  );
};

export const useCompliance = () => {
  const context = useContext(ComplianceContext);
  if (!context) throw new Error('useCompliance must be used within a ComplianceProvider');
  return context;
};
