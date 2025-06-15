
import { LocationData } from "@/types/doctor";

export const getAddressFromCoordinates = async (lat: number, lng: number, language: string): Promise<string> => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=${language === 'kn' ? 'kn' : 'en'}`
    );
    
    if (response.ok) {
      const data = await response.json();
      const address = data.display_name || `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
      return address.split(',').slice(0, 3).join(', '); // Get first 3 parts for brevity
    }
  } catch (error) {
    console.log('Geocoding error:', error);
  }
  
  return `${lat.toFixed(4)}, ${lng.toFixed(4)}`;
};

export const getCurrentLocationData = (): Promise<LocationData> => {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject(new Error("Geolocation not supported"));
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy
        });
      },
      (error) => {
        reject(error);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  });
};
