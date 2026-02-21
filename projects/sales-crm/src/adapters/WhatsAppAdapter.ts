/**
 * Lead Developer Practice: Multi-Channel Messaging Adapter
 * Connectivity between React/Next.js and a Python/FastAPI backend.
 * Integrates WhatsApp Business API and Socket.IO for real-time lead interaction.
 */
export const WhatsAppAdapter = {
  /**
   * Triggers a WhatsApp message templates via the Python service
   */
  async sendTemplate(leadPhone: string, templateName: string, params: string[]) {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_PY_API_URL}/whatsapp/send`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          phone: leadPhone,
          template: templateName,
          variables: params,
        }),
      });
      return await response.json();
    } catch (error) {
      console.error('FastAPI Sync Error:', error);
      throw error;
    }
  },

  /**
   * Real-time listener for incoming customer messages (FastAPI -> Socket.io -> Client)
   */
  subscribeToIncomingMessages(socket: any, callback: (msg: any) => void) {
    socket.on('whatsapp_incoming', (data: any) => {
      console.log('Incoming Message from Python Sync:', data);
      callback(data);
    });
  }
};
