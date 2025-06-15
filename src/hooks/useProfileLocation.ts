
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface LocationData {
  latitude: number;
  longitude: number;
  address?: string;
}

export const useProfileLocation = (language: string) => {
  const [currentLocation, setCurrentLocation] = useState<LocationData | null>(null);
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const { toast } = useToast();

  const getAddressFromCoordinates = async (lat: number, lng: number): Promise<string> => {
    try {
      const nominatimResponse = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=${language === 'kn' ? 'kn' : 'en'}`
      );
      
      if (nominatimResponse.ok) {
        const data = await nominatimResponse.json();
        return data.display_name || "Address not found";
      }
      
      throw new Error('Geocoding failed');
    } catch (error) {
      console.log('Geocoding error:', error);
      return "Address not found";
    }
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: "Error",
        description: "Geolocation is not supported by this browser",
        variant: "destructive"
      });
      return;
    }

    setIsGettingLocation(true);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        };
        
        const address = await getAddressFromCoordinates(locationData.latitude, locationData.longitude);
        locationData.address = address;
        
        setCurrentLocation(locationData);
        setIsGettingLocation(false);
        
        toast({
          title: "Location Updated",
          description: "Your location has been updated from GPS"
        });

        return address;
      },
      (error) => {
        setIsGettingLocation(false);
        toast({
          title: "Location Error",
          description: "Unable to get your location",
          variant: "destructive"
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  return {
    currentLocation,
    isGettingLocation,
    getCurrentLocation
  };
};
