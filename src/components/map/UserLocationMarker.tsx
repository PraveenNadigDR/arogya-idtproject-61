
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { userIcon } from '@/utils/mapUtils';
import type { LatLngExpression } from 'leaflet';

interface UserLocationMarkerProps {
  userLocation: { lat: number; lng: number };
  language: string;
}

const UserLocationMarker = ({ userLocation, language }: UserLocationMarkerProps) => {
  const text = {
    en: { yourLocation: "Your Location" },
    kn: { yourLocation: "ನಿಮ್ಮ ಸ್ಥಳ" }
  };

  const currentText = text[language as keyof typeof text];
  const position: LatLngExpression = [userLocation.lat, userLocation.lng];

  return (
    <Marker position={position} icon={userIcon}>
      <Popup>
        <div className="text-center">
          <h3 className="font-semibold text-blue-600">{currentText.yourLocation}</h3>
          <p className="text-xs text-gray-600">
            {userLocation.lat.toFixed(4)}, {userLocation.lng.toFixed(4)}
          </p>
        </div>
      </Popup>
    </Marker>
  );
};

export default UserLocationMarker;
