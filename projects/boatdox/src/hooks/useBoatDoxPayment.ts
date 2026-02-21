import { useCallback } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Swal from 'sweetalert2';

// Initialize Stripe with a placeholder key
const stripePromise = loadStripe('pk_test_sample');

/**
 * Lead Developer Practice: Multi-Gateway Payment System
 * Supporting international (Stripe) and high-value US (Authorize.net) transactions.
 */
export const useBoatDoxPayment = () => {

  const handleStripePayment = useCallback(async (amount: number, vesselName: string) => {
    const stripe = await stripePromise;
    if (!stripe) return;

    // Simulate backend checkout session creation
    Swal.fire({
      title: 'Stripe Secure Checkout',
      text: `Redirecting to secure stripe session for $${amount.toLocaleString()}...`,
      icon: 'info',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      Swal.fire('Success', `Stripe payment for ${vesselName} completed!`, 'success');
    });
  }, []);

  const handleAuthorizeNetPayment = useCallback(async (amount: number, vesselName: string) => {
    // Lead Practice: Mocking Accept.js Secure IFrame Logic
    const { value: formValues } = await Swal.fire({
      title: 'Authorize.net Payment',
      html:
        '<input id="swal-input1" class="swal2-input" placeholder="Card Number">' +
        '<input id="swal-input2" class="swal2-input" placeholder="CVV">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          (document.getElementById('swal-input1') as HTMLInputElement).value,
          (document.getElementById('swal-input2') as HTMLInputElement).value
        ]
      }
    });

    if (formValues) {
      Swal.fire({
        title: 'Authorizing...',
        text: 'Syncing with Authorize.net high-speed gateway',
        didOpen: () => Swal.showLoading()
      });

      setTimeout(() => {
        Swal.fire('Secured', `Escrow payment of $${amount.toLocaleString()} managed via Authorize.net`, 'success');
      }, 2000);
    }
  }, []);

  return { handleStripePayment, handleAuthorizeNetPayment };
};
