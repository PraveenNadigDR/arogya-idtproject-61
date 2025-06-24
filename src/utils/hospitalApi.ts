
import { HospitalData } from '@/types/hospital';

export const fetchNearbyHospitals = async (lat: number, lng: number): Promise<HospitalData[]> => {
  try {
    // Using Overpass API to fetch real hospital data from OpenStreetMap
    const radius = 5000; // 5km radius
    const overpassQuery = `
      [out:json][timeout:25];
      (
        node["amenity"="hospital"](around:${radius},${lat},${lng});
        node["amenity"="clinic"](around:${radius},${lat},${lng});
        node["healthcare"="hospital"](around:${radius},${lat},${lng});
        node["healthcare"="clinic"](around:${radius},${lat},${lng});
      );
      out body;
    `;

    const response = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      body: `data=${encodeURIComponent(overpassQuery)}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    if (response.ok) {
      const data = await response.json();
      const hospitalData: HospitalData[] = data.elements
        .filter((element: any) => element.tags && element.tags.name)
        .map((element: any) => ({
          id: element.id.toString(),
          name: element.tags.name || 'Unknown Hospital',
          lat: element.lat,
          lng: element.lon,
          type: element.tags.amenity || element.tags.healthcare || 'hospital',
          address: element.tags['addr:full'] || element.tags['addr:street'],
          phone: element.tags.phone
        }))
        .slice(0, 20); // Limit to 20 hospitals

      return hospitalData;
    } else {
      // Fallback to sample data if API fails
      return getFallbackHospitals(lat, lng);
    }
  } catch (error) {
    console.error('Error fetching hospitals:', error);
    return getFallbackHospitals(lat, lng);
  }
};

const getFallbackHospitals = (lat: number, lng: number): HospitalData[] => [
  { id: '1', name: "City General Hospital", lat: lat + 0.01, lng: lng + 0.01, type: "hospital" },
  { id: '2', name: "Community Health Center", lat: lat - 0.01, lng: lng - 0.01, type: "clinic" },
  { id: '3', name: "Medical Center", lat: lat + 0.005, lng: lng - 0.005, type: "hospital" }
];
