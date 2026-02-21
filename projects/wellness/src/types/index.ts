export interface Patient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  consentSigned: boolean;
  consentDate?: string;
  phiEncrypted: boolean;
}

export type OrderStatus = 'PENDING' | 'ROUTING' | 'PHARMACY_RECEIVED' | 'FULFILLED' | 'CANCELLED';

export interface HealthcareOrder {
  orderId: string;
  patientId: string;
  items: Array<{
    medicineId: string;
    dosage: string;
    quantity: number;
  }>;
  status: OrderStatus;
  pharmacyId?: string;
  totalAmount: number;
  createdAt: string;
}

export interface Pharmacy {
  id: string;
  name: string;
  location: string;
  isIComplianceVerified: boolean;
  activeErs: boolean;
}
