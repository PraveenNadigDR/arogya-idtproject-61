
import { useState } from 'react';
import { HospitalData } from '@/types/hospital';
import { fetchNearbyHospitals } from '@/utils/hospitalApi';
import { useToast } from '@/hooks/use-toast';

export const useHospitals = (language: string) => {
  const [hospitals, setHospitals] = useState<HospitalData[]>([]);
  const [isLoadingHospitals, setIsLoadingHospitals] = useState(false);
  const { toast } = useToast();

  const text = {
    en: {
      hospitalsFound: "hospitals found nearby",
      noHospitals: "No hospitals found in this area",
      loadingHospitals: "Finding nearby hospitals..."
    },
    kn: {
      hospitalsFound: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳು ಸಿಕ್ಕಿವೆ",
      noHospitals: "ಈ ಪ್ರದೇಶದಲ್ಲಿ ಯಾವುದೇ ಆಸ್ಪತ್ರೆಗಳು ಸಿಗಲಿಲ್ಲ",
      loadingHospitals: "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗಳನ್ನು ಹುಡುಕುತ್ತಿದೆ..."
    }
  };

  const currentText = text[language as keyof typeof text];

  const loadHospitals = async (lat: number, lng: number) => {
    setIsLoadingHospitals(true);
    try {
      const hospitalData = await fetchNearbyHospitals(lat, lng);
      setHospitals(hospitalData);
      
      toast({
        title: `${hospitalData.length} ${currentText.hospitalsFound}`,
        description: hospitalData.length > 0 ? currentText.hospitalsFound : currentText.noHospitals
      });
    } catch (error) {
      console.error('Error loading hospitals:', error);
    } finally {
      setIsLoadingHospitals(false);
    }
  };

  return {
    hospitals,
    isLoadingHospitals,
    loadHospitals,
    loadingText: currentText.loadingHospitals
  };
};
