
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation, Hospital, Loader2, MapPin, Phone } from "lucide-react";
import { useUserLocation } from '@/hooks/useUserLocation';
import { useHospitals } from '@/hooks/useHospitals';

interface HospitalMapProps {
  language: string;
}

const HospitalMap = ({ language }: HospitalMapProps) => {
  const { userLocation, isLoadingLocation, getCurrentLocation } = useUserLocation(language);
  const { hospitals, isLoadingHospitals, loadHospitals, loadingText } = useHospitals(language);

  const text = {
    en: {
      title: "Nearby Hospitals",
      subtitle: "Find hospitals and medical centers near you",
      getLocation: "Get My Location",
      hospital: "Hospital",
      clinic: "Clinic",
      getDirections: "Get Directions",
      call: "Call"
    },
    kn: {
      title: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು",
      subtitle: "ನಿಮ್ಮ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಕೇಂದ್ರಗಳನ್ನು ಹುಡುಕಿ",
      getLocation: "ನನ್ನ ಸ್ಥಳ ಪಡೆಯಿರಿ",
      hospital: "ಆಸ್ಪತ್ರೆ",
      clinic: "ಚಿಕಿತ್ಸಾಲಯ",
      getDirections: "ದಿಕ್ಕುಗಳನ್ನು ಪಡೆಯಿರಿ",
      call: "ಕರೆ ಮಾಡಿ"
    }
  };

  const currentText = text[language as keyof typeof text];

  const handleGetLocation = async () => {
    try {
      console.log('Getting location...');
      const location = await getCurrentLocation();
      console.log('Location obtained:', location);
      await loadHospitals(location.lat, location.lng);
    } catch (error) {
      console.error('Failed to get location:', error);
    }
  };

  const openDirections = (lat: number, lng: number, name: string) => {
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&destination_place_id=${name}`;
    window.open(url, '_blank');
  };

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hospital className="h-5 w-5 text-red-500" />
            <CardTitle className="text-lg">{currentText.title}</CardTitle>
          </div>
          <Button
            onClick={handleGetLocation}
            disabled={isLoadingLocation}
            size="sm"
            variant="outline"
          >
            {isLoadingLocation ? (
              <Loader2 className="h-4 w-4 mr-1 animate-spin" />
            ) : (
              <Navigation className="h-4 w-4 mr-1" />
            )}
            {currentText.getLocation}
          </Button>
        </div>
        <p className="text-sm text-gray-600">{currentText.subtitle}</p>
        {isLoadingHospitals && (
          <div className="flex items-center gap-2 text-sm text-blue-600">
            <Loader2 className="h-4 w-4 animate-spin" />
            {loadingText}
          </div>
        )}
        {userLocation && (
          <div className="text-xs text-gray-500">
            Your location: {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
          </div>
        )}
      </CardHeader>
      <CardContent>
        {hospitals.length > 0 ? (
          <div className="space-y-3">
            {hospitals.map((hospital) => (
              <Card key={hospital.id} className="p-4">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <h3 className="font-semibold text-red-600">{hospital.name}</h3>
                    <p className="text-sm text-gray-600">
                      {hospital.type === 'hospital' ? currentText.hospital : currentText.clinic}
                    </p>
                    {hospital.address && (
                      <p className="text-xs text-gray-500 mt-1">{hospital.address}</p>
                    )}
                    <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                      <MapPin className="h-3 w-3" />
                      <span>{hospital.lat.toFixed(4)}, {hospital.lng.toFixed(4)}</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button
                      size="sm"
                      onClick={() => openDirections(hospital.lat, hospital.lng, hospital.name)}
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      {currentText.getDirections}
                    </Button>
                    {hospital.phone && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`tel:${hospital.phone}`, '_blank')}
                      >
                        <Phone className="h-4 w-4 mr-1" />
                        {currentText.call}
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        ) : (
          !isLoadingHospitals && (
            <div className="text-center py-8 text-gray-500">
              <Hospital className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>{language === "en" ? "Click 'Get My Location' to find nearby hospitals" : "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕಲು 'ನನ್ನ ಸ್ಥಳ ಪಡೆಯಿರಿ' ಕ್ಲಿಕ್ ಮಾಡಿ"}</p>
            </div>
          )
        )}
      </CardContent>
    </Card>
  );
};

export default HospitalMap;
