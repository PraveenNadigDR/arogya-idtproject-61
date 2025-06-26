
import React, { useEffect } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navigation, Hospital, Loader2 } from "lucide-react";
import { initializeLeafletIcons } from '@/utils/mapUtils';
import { useUserLocation } from '@/hooks/useUserLocation';
import { useHospitals } from '@/hooks/useHospitals';
import MapController from './map/MapController';
import UserLocationMarker from './map/UserLocationMarker';
import HospitalMarker from './map/HospitalMarker';

interface HospitalMapProps {
  language: string;
}

const HospitalMap = ({ language }: HospitalMapProps) => {
  const { userLocation, isLoadingLocation, getCurrentLocation } = useUserLocation(language);
  const { hospitals, isLoadingHospitals, loadHospitals, loadingText } = useHospitals(language);

  // Initialize Leaflet icons on component mount
  useEffect(() => {
    try {
      initializeLeafletIcons();
    } catch (error) {
      console.error('Failed to initialize Leaflet icons:', error);
    }
  }, []);

  const text = {
    en: {
      title: "Nearby Hospitals Map",
      subtitle: "Find hospitals and medical centers near you",
      getLocation: "Get My Location"
    },
    kn: {
      title: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳ ನಕ್ಷೆ",
      subtitle: "ನಿಮ್ಮ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಕೇಂದ್ರಗಳನ್ನು ಹುಡುಕಿ",
      getLocation: "ನನ್ನ ಸ್ಥಳ ಪಡೆಯಿರಿ"
    }
  };

  const currentText = text[language as keyof typeof text];

  // Default location (Bangalore)
  const defaultCenter: [number, number] = [12.9716, 77.5946];
  const mapCenter: [number, number] = userLocation ? [userLocation.lat, userLocation.lng] : defaultCenter;

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
      </CardHeader>
      <CardContent className="p-0">
        <div className="w-full h-[400px] rounded-b-lg overflow-hidden">
          <MapContainer
            center={mapCenter}
            zoom={13}
            style={{ height: '100%', width: '100%' }}
            className="rounded-b-lg"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            
            <MapController center={userLocation ? [userLocation.lat, userLocation.lng] : null} />
            
            {userLocation && (
              <UserLocationMarker userLocation={userLocation} language={language} />
            )}
            
            {hospitals.map((hospital) => (
              <HospitalMarker key={hospital.id} hospital={hospital} language={language} />
            ))}
          </MapContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HospitalMap;
