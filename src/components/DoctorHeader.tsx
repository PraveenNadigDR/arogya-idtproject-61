
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Navigation, Loader2 } from "lucide-react";
import { LocationData } from "@/types/doctor";

interface DoctorHeaderProps {
  language: string;
  texts: any;
  location: LocationData | null;
  isLoadingLocation: boolean;
  locationError: string | null;
  filteredDoctorsCount: number;
  onGetLocation: () => void;
}

const DoctorHeader = ({
  language,
  texts,
  location,
  isLoadingLocation,
  locationError,
  filteredDoctorsCount,
  onGetLocation
}: DoctorHeaderProps) => {
  const getLocationDisplay = () => {
    if (isLoadingLocation) {
      return texts.locationLoading;
    }
    if (locationError) {
      return texts.locationError;
    }
    if (location?.address) {
      return location.address;
    }
    return texts.defaultSubtitle;
  };

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
          <Search className="h-5 w-5" />
          {texts.title}
        </CardTitle>
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-blue-600">
              {isLoadingLocation ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <MapPin className="h-4 w-4" />
              )}
              <span>{getLocationDisplay()}</span>
            </div>
            <p className="text-xs text-blue-500 mt-1">
              {language === "en" ? `${filteredDoctorsCount} doctors found` : `${filteredDoctorsCount} ವೈದ್ಯರು ಸಿಕ್ಕಿದ್ದಾರೆ`}
            </p>
          </div>
          <Button
            size="sm"
            variant="outline"
            onClick={onGetLocation}
            disabled={isLoadingLocation}
            className="border-blue-300 text-blue-700 hover:bg-blue-50"
          >
            {isLoadingLocation ? (
              <Loader2 className="h-4 w-4 animate-spin mr-1" />
            ) : (
              <Navigation className="h-4 w-4 mr-1" />
            )}
            {texts.getLocation}
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

export default DoctorHeader;
