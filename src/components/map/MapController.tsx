
import { useEffect } from 'react';
import { useMap } from 'react-leaflet';

interface MapControllerProps {
  center: [number, number] | null;
}

const MapController = ({ center }: MapControllerProps) => {
  const map = useMap();
  
  useEffect(() => {
    if (center && map) {
      console.log('Setting map view to:', center);
      map.setView(center, 14);
    }
  }, [center, map]);
  
  return null;
};

export default MapController;
