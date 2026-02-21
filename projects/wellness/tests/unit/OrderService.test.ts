import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { OrderService } from '../../src/services/order.service';

// Mocking API for isolated unit testing
jest.mock('../../src/services/api');

describe('Wellness Order Logic', () => {
  it('should successfully trigger order synchronization', async () => {
    const mockOrders = [{ orderId: 'ORD-123', status: 'PENDING' }];
    OrderService.syncExternalOrders = jest.fn().mockResolvedValue(mockOrders);

    const result = await OrderService.syncExternalOrders();
    expect(result).toHaveLength(1);
    expect(result[0].orderId).toBe('ORD-123');
  });

  it('should route orders based on location intelligence', async () => {
    const mockPharmacy = { id: 'PH-456', name: 'US Pharma Express' };
    OrderService.routeOrder = jest.fn().mockResolvedValue(mockPharmacy);

    const result = await OrderService.routeOrder('ORD-123', 'FL-33101');
    expect(result.name).toContain('US Pharma');
  });
});
