/**
 * Lead Developer Practice: Legacy/Enterprise Connectivity Bridge
 * Connecting CandidSuite (Next.js) with a Laravel-based Hiring Engine.
 * Implements a Gmail-style UI logic while syncing with PHP/Laravel APIs.
 */
export const GmailBridge = {
  /**
   * Syncs recruiter inbox from Laravel backend using OAuth2
   */
  async syncInbox(recruiterId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_LARAVEL_API}/inbox/sync`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'X-Recruiter-ID': recruiterId
      }
    });
    return response.json();
  },

  /**
   * Formats Laravel candidate responses into a Gmail-style thread UI
   */
  formatThread(laravelData: any[]) {
    return laravelData.map(item => ({
      id: item.id,
      from: item.candidate_email,
      subject: item.job_title,
      body: item.content,
      timestamp: new Date(item.created_at).toLocaleTimeString()
    }));
  }
};
