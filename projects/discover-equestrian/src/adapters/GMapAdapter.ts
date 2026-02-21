import { useRef } from 'react';

/**
 * Lead Developer Practice: GMaps Adapter Pattern
 * Bridging Google Maps with a Go (Golang) Gin-based API.
 * Handles high-performance property markers and geolocation.
 */
export const useGMapAdapter = (apiKey: string) => {
  const mapRef = useRef<any>(null);

  const initMap = (container: HTMLElement, center: { lat: number, lng: number }) => {
    mapRef.current = new (window as any).google.maps.Map(container, {
      center,
      zoom: 12,
      styles: [/* Custom Equestrian Map Styles */],
    });
  };

  /**
   * Fetches equestrian listings from the Golang Microservice
   */
  const loadListingsFromGo = async (bounds: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_GO_API_URL}/listings/search?bbox=${bounds.toUrlValue()}`);
    const locations = await response.json();
    
    locations.forEach((loc: any) => {
      new (window as any).google.maps.Marker({
        position: { lat: loc.lat, lng: loc.lng },
        map: mapRef.current!,
        title: loc.title,
        icon: '/icons/horse-marker.png'
      });
    });
  };

  return { initMap, loadListingsFromGo };
};
