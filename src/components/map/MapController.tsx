
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import type { LatLngExpression } from 'leaflet';

interface MapControllerProps {
  center: [number, number] | null;
}

const MapController = ({ center }: MapControllerProps) => {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      const position: LatLngExpression = center;
      map.setView(position, 14);
    }
  }, [center, map]);
  
  return null;
};

export default MapController;
