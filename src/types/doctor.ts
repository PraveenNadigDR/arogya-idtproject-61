
export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  address?: string;
}

export interface Doctor {
  id: number;
  name: string;
  specialty: string;
  hospital: string;
  location: string;
  distance: number;
  rating: number;
  reviews: number;
  fee: number;
  status: "available" | "busy" | "offline";
  phone: string;
  languages: string;
  experience: string;
  category: string;
}

export interface DoctorFinderProps {
  language: string;
}
