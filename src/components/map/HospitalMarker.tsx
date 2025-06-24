
import React from 'react';
import { Marker, Popup } from 'react-leaflet';
import { HospitalData } from '@/types/hospital';
import { hospitalIcon, openDirections } from '@/utils/mapUtils';

interface HospitalMarkerProps {
  hospital: HospitalData;
  language: string;
}

const HospitalMarker = ({ hospital, language }: HospitalMarkerProps) => {
  const text = {
    en: {
      hospital: "Hospital",
      clinic: "Clinic",
      clickForDirections: "Click for directions"
    },
    kn: {
      hospital: "ಆಸ್ಪತ್ರೆ",
      clinic: "ಚಿಕಿತ್ಸಾಲಯ",
      clickForDirections: "ದಿಕ್ಕುಗಳಿಗಾಗಿ ಕ್ಲಿಕ್ ಮಾಡಿ"
    }
  };

  const currentText = text[language as keyof typeof text];

  return (
    <Marker
      position={[hospital.lat, hospital.lng]}
      icon={hospitalIcon}
    >
      <Popup>
        <div className="p-2 max-w-xs">
          <h3 className="font-semibold text-sm text-red-600 mb-1">{hospital.name}</h3>
          <p className="text-xs text-gray-600 mb-1">
            {hospital.type === 'hospital' ? currentText.hospital : currentText.clinic}
          </p>
          {hospital.address && (
            <p className="text-xs text-gray-500 mb-2">{hospital.address}</p>
          )}
          {hospital.phone && (
            <p className="text-xs text-blue-600 mb-2">{hospital.phone}</p>
          )}
          <button
            onClick={() => openDirections(hospital.lat, hospital.lng, hospital.name)}
            className="text-xs bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 transition-colors"
          >
            {currentText.clickForDirections}
          </button>
        </div>
      </Popup>
    </Marker>
  );
};

export default HospitalMarker;
