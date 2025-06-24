
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

export const useUserLocation = (language: string) => {
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const { toast } = useToast();

  const text = {
    en: {
      gettingLocation: "Getting your location...",
      locationError: "Unable to get location",
      yourLocation: "Your Location"
    },
    kn: {
      gettingLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪಡೆಯುತ್ತಿದೆ...",
      locationError: "ಸ್ಥಳವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ",
      yourLocation: "ನಿಮ್ಮ ಸ್ಥಳ"
    }
  };

  const currentText = text[language as keyof typeof text];

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: currentText.locationError,
        description: "Geolocation is not supported",
        variant: "destructive"
      });
      return Promise.reject(new Error("Geolocation not supported"));
    }

    setIsLoadingLocation(true);
    toast({
      title: currentText.gettingLocation,
      description: "Please allow location access"
    });

    return new Promise<{lat: number, lng: number}>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };
          setUserLocation(location);
          setIsLoadingLocation(false);
          
          toast({
            title: "Location Found",
            description: `${currentText.yourLocation}: ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
          });

          resolve(location);
        },
        (error) => {
          setIsLoadingLocation(false);
          toast({
            title: currentText.locationError,
            description: error.message,
            variant: "destructive"
          });
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

  return {
    userLocation,
    isLoadingLocation,
    getCurrentLocation
  };
};
