
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Navigation, Hospital } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HospitalMapProps {
  language: string;
}

const HospitalMap = ({ language }: HospitalMapProps) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const { toast } = useToast();

  const text = {
    en: {
      title: "Nearby Hospitals Map",
      subtitle: "Find hospitals and medical centers near you",
      enterToken: "Enter Mapbox Token",
      tokenPlaceholder: "pk.eyJ1IjoieW91ci11c2VybmFtZSI...",
      loadMap: "Load Map",
      getLocation: "Get My Location",
      yourLocation: "Your Location",
      hospital: "Hospital",
      medicalCenter: "Medical Center",
      gettingLocation: "Getting your location...",
      locationError: "Unable to get location",
      mapLoaded: "Map loaded successfully",
      hospitalsFound: "hospitals found nearby"
    },
    kn: {
      title: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳ ನಕ್ಷೆ",
      subtitle: "ನಿಮ್ಮ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು ಮತ್ತು ವೈದ್ಯಕೀಯ ಕೇಂದ್ರಗಳನ್ನು ಹುಡುಕಿ",
      enterToken: "Mapbox ಟೋಕನ್ ನಮೂದಿಸಿ",
      tokenPlaceholder: "pk.eyJ1IjoieW91ci11c2VybmFtZSI...",
      loadMap: "ನಕ್ಷೆ ಲೋಡ್ ಮಾಡಿ",
      getLocation: "ನನ್ನ ಸ್ಥಳ ಪಡೆಯಿರಿ",
      yourLocation: "ನಿಮ್ಮ ಸ್ಥಳ",
      hospital: "ಆಸ್ಪತ್ರೆ",
      medicalCenter: "ವೈದ್ಯಕೀಯ ಕೇಂದ್ರ",
      gettingLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪಡೆಯುತ್ತಿದೆ...",
      locationError: "ಸ್ಥಳವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ",
      mapLoaded: "ನಕ್ಷೆ ಯಶಸ್ವಿಯಾಗಿ ಲೋಡ್ ಆಗಿದೆ",
      hospitalsFound: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು ಸಿಕ್ಕಿವೆ"
    }
  };

  const currentText = text[language as keyof typeof text];

  // Sample hospital data (in real app, this would come from an API)
  const nearbyHospitals = [
    { name: "City General Hospital", lat: 12.9716, lng: 77.5946, type: "hospital" },
    { name: "Apollo Hospital", lat: 12.9698, lng: 77.7500, type: "hospital" },
    { name: "Manipal Hospital", lat: 12.9279, lng: 77.6271, type: "hospital" },
    { name: "Fortis Hospital", lat: 12.9698, lng: 77.6413, type: "hospital" },
    { name: "Community Health Center", lat: 12.9352, lng: 77.6245, type: "clinic" }
  ];

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      toast({
        title: currentText.locationError,
        description: "Geolocation is not supported",
        variant: "destructive"
      });
      return;
    }

    setIsLoadingLocation(true);
    toast({
      title: currentText.gettingLocation,
      description: "Please allow location access"
    });

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(location);
        setIsLoadingLocation(false);
        
        if (map.current) {
          map.current.flyTo({
            center: [location.lng, location.lat],
            zoom: 14,
            duration: 2000
          });
          
          // Add user location marker
          new mapboxgl.Marker({ color: 'blue' })
            .setLngLat([location.lng, location.lat])
            .setPopup(new mapboxgl.Popup().setHTML(`<h3>${currentText.yourLocation}</h3>`))
            .addTo(map.current);
        }

        toast({
          title: "Location Found",
          description: `${currentText.yourLocation}: ${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
        });
      },
      (error) => {
        setIsLoadingLocation(false);
        toast({
          title: currentText.locationError,
          description: error.message,
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

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [77.5946, 12.9716], // Bangalore coordinates
      zoom: 12
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    map.current.on('load', () => {
      toast({
        title: currentText.mapLoaded,
        description: `Found ${nearbyHospitals.length} ${currentText.hospitalsFound}`
      });

      // Add hospital markers
      nearbyHospitals.forEach((hospital, index) => {
        const el = document.createElement('div');
        el.className = 'hospital-marker';
        el.style.backgroundImage = 'url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTMuMDkgOC4yNkwyMCA5TDEzLjA5IDE1Ljc0TDEyIDIyTDEwLjkxIDE1Ljc0TDQgOUwxMC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjZGMyNjI2Ii8+CjxwYXRoIGQ9Ik0xMiA2VjE4TTE2IDEySDgiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+Cjwvc3ZnPgo=)';
        el.style.width = '30px';
        el.style.height = '30px';
        el.style.backgroundSize = 'contain';
        el.style.cursor = 'pointer';

        new mapboxgl.Marker(el)
          .setLngLat([hospital.lng, hospital.lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div class="p-2">
                <h3 class="font-semibold text-sm">${hospital.name}</h3>
                <p class="text-xs text-gray-600">${hospital.type === 'hospital' ? currentText.hospital : currentText.medicalCenter}</p>
                <p class="text-xs text-blue-600 mt-1">Click for directions</p>
              </div>`
            )
          )
          .addTo(map.current!);
      });
    });

    setShowTokenInput(false);
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <Card className="w-full">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MapPin className="h-5 w-5 text-red-500" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-gray-600">{currentText.subtitle}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-800 mb-2">
              To use the map feature, you need a Mapbox public token.
            </p>
            <p className="text-xs text-blue-600">
              Get your free token at: <a href="https://mapbox.com" target="_blank" rel="noopener noreferrer" className="underline">mapbox.com</a>
            </p>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium">{currentText.enterToken}:</label>
            <Input
              type="text"
              placeholder={currentText.tokenPlaceholder}
              value={mapboxToken}
              onChange={(e) => setMapboxToken(e.target.value)}
              className="font-mono text-xs"
            />
          </div>
          <Button 
            onClick={initializeMap}
            disabled={!mapboxToken.trim()}
            className="w-full"
          >
            <MapPin className="h-4 w-4 mr-2" />
            {currentText.loadMap}
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Hospital className="h-5 w-5 text-red-500" />
            <CardTitle className="text-lg">{currentText.title}</CardTitle>
          </div>
          <Button
            onClick={getCurrentLocation}
            disabled={isLoadingLocation}
            size="sm"
            variant="outline"
          >
            <Navigation className="h-4 w-4 mr-1" />
            {currentText.getLocation}
          </Button>
        </div>
        <p className="text-sm text-gray-600">{currentText.subtitle}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div 
          ref={mapContainer} 
          className="w-full h-[400px] rounded-b-lg"
          style={{ minHeight: '400px' }}
        />
      </CardContent>
    </Card>
  );
};

export default HospitalMap;
