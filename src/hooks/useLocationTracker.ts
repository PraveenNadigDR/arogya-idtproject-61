
import { useState, useEffect } from "react";
import { LocationData } from "@/types/doctor";
import { getCurrentLocationData, getAddressFromCoordinates } from "@/utils/locationUtils";
import { useToast } from "@/hooks/use-toast";

export const useLocationTracker = (language: string) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState<string | null>(null);
  const { toast } = useToast();

  const getCurrentLocation = async () => {
    setIsLoadingLocation(true);
    setLocationError(null);

    try {
      const locationData = await getCurrentLocationData();
      const address = await getAddressFromCoordinates(locationData.latitude, locationData.longitude, language);
      
      const updatedLocationData = { ...locationData, address };
      setLocation(updatedLocationData);
      
      toast({
        title: "Location Updated",
        description: `Found your location: ${address}`
      });
    } catch (error) {
      setLocationError("Location access denied");
      toast({
        title: language === "en" ? "Location unavailable" : "ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ",
        description: "Please enable location access",
        variant: "destructive"
      });
    } finally {
      setIsLoadingLocation(false);
    }
  };

  useEffect(() => {
    // Automatically try to get location on component mount
    getCurrentLocation();
  }, []);

  return {
    location,
    isLoadingLocation,
    locationError,
    getCurrentLocation
  };
};
