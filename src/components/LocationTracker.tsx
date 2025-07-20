
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Navigation, Loader2, AlertCircle, Satellite } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface LocationTrackerProps {
  language: string;
}

interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number;
  altitude?: number;
  speed?: number;
  heading?: number;
  timestamp: number;
  address?: string;
}

const LocationTracker = ({ language }: LocationTrackerProps) => {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [isTracking, setIsTracking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingAddress, setIsLoadingAddress] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [watchId, setWatchId] = useState<number | null>(null);
  const { toast } = useToast();

  const text = {
    en: {
      title: "GPS Location Tracker",
      subtitle: "Live location monitoring",
      startTracking: "Start Location Tracking",
      stopTracking: "Stop Tracking",
      getCurrentLocation: "Get Current Location",
      latitude: "Latitude",
      longitude: "Longitude",
      accuracy: "Accuracy",
      altitude: "Altitude",
      speed: "Speed",
      heading: "Heading",
      address: "Address",
      lastUpdated: "Last Updated",
      locationEnabled: "Location Tracking Active",
      locationDisabled: "Location Tracking Disabled",
      gettingLocation: "Getting your location...",
      locationError: "Location Error",
      permissionDenied: "Location permission denied",
      unavailable: "Location unavailable",
      timeout: "Location request timed out",
      unknown: "Unknown error occurred",
      highAccuracy: "High Accuracy",
      mediumAccuracy: "Medium Accuracy",
      lowAccuracy: "Low Accuracy",
      meters: "meters",
      kmh: "km/h",
      degrees: "°",
      notAvailable: "N/A",
      loadingAddress: "Loading address...",
      addressNotFound: "Address not found"
    },
    kn: {
      title: "GPS ಸ್ಥಳ ಟ್ರ್ಯಾಕರ್",
      subtitle: "ಲೈವ್ ಸ್ಥಳ ಮಾನಿಟರಿಂಗ್",
      startTracking: "ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭಿಸಿ",
      stopTracking: "ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಲ್ಲಿಸಿ",
      getCurrentLocation: "ಪ್ರಸ್ತುತ ಸ್ಥಳ ಪಡೆಯಿರಿ",
      latitude: "ಅಕ್ಷಾಂಶ",
      longitude: "ರೇಖಾಂಶ",
      accuracy: "ನಿಖರತೆ",
      altitude: "ಎತ್ತರ",
      speed: "ವೇಗ",
      heading: "ದಿಕ್ಕು",
      address: "ವಿಳಾಸ",
      lastUpdated: "ಕೊನೆಯ ಬಾರಿ ನವೀಕರಿಸಲಾಗಿದೆ",
      locationEnabled: "ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಕ್ರಿಯ",
      locationDisabled: "ಸ್ಥಳ ಟ್ರ್ಯಾಕಿಂಗ್ ನಿಷ್ಕ್ರಿಯ",
      gettingLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪಡೆಯುತ್ತಿದೆ...",
      locationError: "ಸ್ಥಳ ದೋಷ",
      permissionDenied: "ಸ್ಥಳ ಅನುಮತಿ ನಿರಾಕರಿಸಲಾಗಿದೆ",
      unavailable: "ಸ್ಥಳ ಲಭ್ಯವಿಲ್ಲ",
      timeout: "ಸ್ಥಳ ವಿನಂತಿಯ ಸಮಯ ಮೀರಿದೆ",
      unknown: "ಅಜ್ಞಾತ ದೋಷ ಸಂಭವಿಸಿದೆ",
      highAccuracy: "ಹೆಚ್ಚಿನ ನಿಖರತೆ",
      mediumAccuracy: "ಮಧ್ಯಮ ನಿಖರತೆ",
      lowAccuracy: "ಕಡಿಮೆ ನಿಖರತೆ",
      meters: "ಮೀಟರ್",
      kmh: "ಕಿ.ಮೀ/ಗಂ",
      degrees: "°",
      notAvailable: "ಲಭ್ಯವಿಲ್ಲ",
      loadingAddress: "ವಿಳಾಸವನ್ನು ಲೋಡ್ ಮಾಡುತ್ತಿದೆ...",
      addressNotFound: "ವಿಳಾಸ ಸಿಗಲಿಲ್ಲ"
    }
  };

  const currentText = text[language];

  const getAccuracyLevel = (accuracy: number) => {
    if (accuracy <= 10) return { level: currentText.highAccuracy, color: "bg-green-100 text-green-700" };
    if (accuracy <= 50) return { level: currentText.mediumAccuracy, color: "bg-yellow-100 text-yellow-700" };
    return { level: currentText.lowAccuracy, color: "bg-red-100 text-red-700" };
  };

  const formatCoordinate = (coord: number, decimals: number = 6) => {
    return coord.toFixed(decimals);
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString();
  };

  const getErrorMessage = (error: GeolocationPositionError) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return currentText.permissionDenied;
      case error.POSITION_UNAVAILABLE:
        return currentText.unavailable;
      case error.TIMEOUT:
        return currentText.timeout;
      default:
        return currentText.unknown;
    }
  };

  const getAddressFromCoordinates = async (lat: number, lng: number): Promise<string> => {
    try {
      setIsLoadingAddress(true);
      // Use Nominatim directly as primary service (no API key required)
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=${language === 'kn' ? 'kn' : 'en'}`
      );
      
      if (response.ok) {
        const data = await response.json();
        return data.display_name || currentText.addressNotFound;
      } else {
        throw new Error('Geocoding failed');
      }
    } catch (error) {
      console.log('Geocoding error:', error);
      // Try Nominatim as fallback
      try {
        const nominatimResponse = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&accept-language=${language === 'kn' ? 'kn' : 'en'}`
        );
        
        if (nominatimResponse.ok) {
          const data = await nominatimResponse.json();
          return data.display_name || currentText.addressNotFound;
        }
      } catch (fallbackError) {
        console.log('Fallback geocoding error:', fallbackError);
      }
      
      return currentText.addressNotFound;
    } finally {
      setIsLoadingAddress(false);
    }
  };

  const updateLocationWithAddress = async (locationData: LocationData) => {
    const address = await getAddressFromCoordinates(locationData.latitude, locationData.longitude);
    const updatedLocation = { ...locationData, address };
    setLocation(updatedLocation);
    return updatedLocation;
  };

  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      return;
    }

    setIsLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude || undefined,
          speed: position.coords.speed || undefined,
          heading: position.coords.heading || undefined,
          timestamp: position.timestamp
        };
        
        setLocation(locationData);
        setIsLoading(false);
        
        // Get address in background
        updateLocationWithAddress(locationData);
        
        toast({
          title: "Location Updated",
          description: `Lat: ${formatCoordinate(locationData.latitude)}, Lng: ${formatCoordinate(locationData.longitude)}`
        });
      },
      (error) => {
        setError(getErrorMessage(error));
        setIsLoading(false);
        toast({
          title: currentText.locationError,
          description: getErrorMessage(error),
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

  const startTracking = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by this browser");
      return;
    }

    setError(null);
    setIsTracking(true);

    const id = navigator.geolocation.watchPosition(
      async (position) => {
        const locationData: LocationData = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          accuracy: position.coords.accuracy,
          altitude: position.coords.altitude || undefined,
          speed: position.coords.speed || undefined,
          heading: position.coords.heading || undefined,
          timestamp: position.timestamp
        };
        
        setLocation(locationData);
        console.log("Location updated:", locationData);
        
        // Get address in background
        updateLocationWithAddress(locationData);
      },
      (error) => {
        setError(getErrorMessage(error));
        setIsTracking(false);
        toast({
          title: currentText.locationError,
          description: getErrorMessage(error),
          variant: "destructive"
        });
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 5000
      }
    );

    setWatchId(id);
    toast({
      title: currentText.locationEnabled,
      description: "GPS tracking is now active"
    });
  };

  const stopTracking = () => {
    if (watchId !== null) {
      navigator.geolocation.clearWatch(watchId);
      setWatchId(null);
    }
    setIsTracking(false);
    toast({
      title: currentText.locationDisabled,
      description: "GPS tracking has been stopped"
    });
  };

  useEffect(() => {
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, [watchId]);

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
            <Satellite className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-blue-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Control Buttons */}
      <div className="grid grid-cols-1 gap-3">
        <Card className="bg-green-50 border-green-200">
          <CardContent className="p-4">
            <div className="flex gap-2">
              <Button
                onClick={getCurrentLocation}
                disabled={isLoading}
                className="flex-1 bg-green-600 hover:bg-green-700"
              >
                {isLoading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <MapPin className="h-4 w-4 mr-2" />
                )}
                {isLoading ? currentText.gettingLocation : currentText.getCurrentLocation}
              </Button>
              
              {!isTracking ? (
                <Button
                  onClick={startTracking}
                  className="flex-1 bg-blue-600 hover:bg-blue-700"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  {currentText.startTracking}
                </Button>
              ) : (
                <Button
                  onClick={stopTracking}
                  variant="destructive"
                  className="flex-1"
                >
                  <AlertCircle className="h-4 w-4 mr-2" />
                  {currentText.stopTracking}
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Status */}
      {isTracking && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-3">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">{currentText.locationEnabled}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Error Display */}
      {error && (
        <Card className="border-red-200 bg-red-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-4 w-4" />
              <span className="font-medium">{currentText.locationError}:</span>
              <span>{error}</span>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Location Display */}
      {location && (
        <Card className="bg-white border-gray-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-gray-800 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              Live Location Data
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Address */}
            {location.address && (
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-sm text-purple-600 font-medium mb-2">{currentText.address}</div>
                <div className="text-base text-purple-800 break-words">
                  {isLoadingAddress ? (
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {currentText.loadingAddress}
                    </div>
                  ) : (
                    location.address
                  )}
                </div>
              </div>
            )}

            {/* Coordinates */}
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-blue-50 rounded-lg p-3">
                <div className="text-sm text-blue-600 font-medium">{currentText.latitude}</div>
                <div className="text-lg font-mono text-blue-800">{formatCoordinate(location.latitude)}</div>
              </div>
              <div className="bg-green-50 rounded-lg p-3">
                <div className="text-sm text-green-600 font-medium">{currentText.longitude}</div>
                <div className="text-lg font-mono text-green-800">{formatCoordinate(location.longitude)}</div>
              </div>
            </div>

            {/* Accuracy */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-600">{currentText.accuracy}:</span>
              <div className="flex items-center gap-2">
                <Badge className={getAccuracyLevel(location.accuracy).color}>
                  {getAccuracyLevel(location.accuracy).level}
                </Badge>
                <span className="text-sm text-gray-700">
                  ±{location.accuracy.toFixed(1)} {currentText.meters}
                </span>
              </div>
            </div>

            {/* Additional Data */}
            <div className="grid grid-cols-2 gap-4 text-sm">
              {location.altitude && (
                <div>
                  <span className="text-gray-600">{currentText.altitude}:</span>
                  <span className="ml-2 font-medium">{location.altitude.toFixed(1)} m</span>
                </div>
              )}
              {location.speed && (
                <div>
                  <span className="text-gray-600">{currentText.speed}:</span>
                  <span className="ml-2 font-medium">
                    {(location.speed * 3.6).toFixed(1)} {currentText.kmh}
                  </span>
                </div>
              )}
              {location.heading && (
                <div>
                  <span className="text-gray-600">{currentText.heading}:</span>
                  <span className="ml-2 font-medium">{location.heading.toFixed(0)}{currentText.degrees}</span>
                </div>
              )}
            </div>

            {/* Timestamp */}
            <div className="border-t pt-3 text-xs text-gray-500 text-center">
              {currentText.lastUpdated}: {formatTime(location.timestamp)}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default LocationTracker;
