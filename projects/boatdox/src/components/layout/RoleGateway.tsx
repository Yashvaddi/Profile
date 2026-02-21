import React, { createContext, useContext, ReactNode } from 'react';

type Role = 'BUYER' | 'SELLER' | 'LISTING_BROKER' | 'EMPLOYING_BROKER';

interface RoleContextType {
  role: Role;
  permissions: string[];
}

const RoleContext = createContext<RoleContextType | undefined>(undefined);

/**
 * Lead Developer Practice: Role-Based Access Control (RBAC)
 * A higher-order component pattern for multi-tenant maritime dashboards.
 * Ensures strict data isolation between brokers and clients.
 */
export const RoleGateway: React.FC<{ children: ReactNode; requiredRole?: Role }> = ({ 
  children, 
  requiredRole 
}) => {
  // In a real app, this would be fetched from a secure session/JWT
  const user = {
    role: 'LISTING_BROKER' as Role,
    permissions: ['VIEW_DEALS', 'EDIT_VESSEL_SPECS', 'INITIATE_ESIGN']
  };

  if (requiredRole && user.role !== requiredRole) {
    return (
      <div className="p-8 bg-red-50 border border-red-200 rounded-lg text-red-700">
        <h3 className="font-bold">Access Denied</h3>
        <p>You do not have the required permissions to view this transaction layer.</p>
      </div>
    );
  }

  return (
    <RoleContext.Provider value={user}>
      {children}
    </RoleContext.Provider>
  );
};

export const useRole = () => {
  const context = useContext(RoleContext);
  if (!context) throw new Error('useRole must be used within a RoleGateway');
  return context;
};
