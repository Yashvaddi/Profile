import axios, { AxiosInstance } from 'axios';

/**
 * Lead Developer Practice: Encapsulated API Service
 * Centralizing HIPAA-compliant headers and error handling.
 */
class ApiService {
  private static instance: AxiosInstance;

  public static getInstance(): AxiosInstance {
    if (!ApiService.instance) {
      ApiService.instance = axios.create({
        baseURL: process.env.NEXT_PUBLIC_API_URL,
        headers: {
          'Content-Type': 'application/json',
          'X-Compliance-Level': 'HIPAA-AES256',
        },
      });

      // Request interceptor for secure PHI transmission
      ApiService.instance.interceptors.request.use((config) => {
        const token = localStorage.getItem('auth_token');
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      });

      // Response interceptor for unified error management
      ApiService.instance.interceptors.response.use(
        (response) => response,
        (error) => {
          console.error('[API Error]:', error.response?.data?.message || 'Server Sync Failure');
          return Promise.reject(error);
        }
      );
    }
    return ApiService.instance;
  }
}

export default ApiService.getInstance();
