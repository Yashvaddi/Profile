/**
 * Lead Developer Practice: Enterprise ERP Connectivity
 * Bridge for React and .NET Core (Entity Framework) backend.
 * Handles complex material calculators and insurance pass-through logic.
 */
export const DotNetBridge = {
  /**
   * Pushes site measurements to .NET Enterprise DB
   */
  async submitProject(projectData: any) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOTNET_API}/projects/create`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'X-API-Environment': 'Production-US' 
      },
      body: JSON.stringify(projectData),
    });
    return response.json();
  },

  /**
   * Fetches insurance claim status via .NET's integration with Insurance APIs
   */
  async getClaimStatus(claimId: string) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_DOTNET_API}/claims/${claimId}/status`);
    return response.json();
  }
};
