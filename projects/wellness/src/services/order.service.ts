import { HealthcareOrder, Pharmacy } from '../types';
import api from './api';

/**
 * Lead Developer Practice: Service Layer Pattern
 * Abstracting business logic from components to service layer.
 */
export const OrderService = {
  /**
   * Syncs orders from external e-commerce (WooCommerce/Shopify)
   */
  async syncExternalOrders(): Promise<HealthcareOrder[]> {
    const { data } = await api.get('/orders/sync');
    return data;
  },

  /**
   * Intelligent routing logic that maps orders to pharmacies
   */
  async routeOrder(orderId: string, location: string): Promise<Pharmacy> {
    const { data } = await api.post(`/orders/${orderId}/route`, { location });
    return data;
  },

  /**
   * Fetches encrypted patient PHI for treatment plan verification
   */
  async getSecurePatientData(patientId: string): Promise<any> {
    const { data } = await api.get(`/patients/${patientId}/phi`);
    return data;
  }
};
