
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ambulance, Phone, MapPin, Clock, Navigation, AlertTriangle } from "lucide-react";
import GovernmentHealthSchemes from "@/components/GovernmentHealthSchemes";
import { useToast } from "@/hooks/use-toast";

interface EmergencyServicesProps {
  language: string;
}

const EmergencyServices = ({ language }: EmergencyServicesProps) => {
  const [emergencyActive, setEmergencyActive] = useState(false);
  const [locationShared, setLocationShared] = useState(false);
  const [ambulanceTracking, setAmbulanceTracking] = useState(false);
  const [userLocation, setUserLocation] = useState<{lat: number, lng: number} | null>(null);
  const [locationError, setLocationError] = useState<string | null>(null);
  const [ambulanceLocation, setAmbulanceLocation] = useState({ lat: 13.0037, lng: 76.1024 });
  const [estimatedArrival, setEstimatedArrival] = useState("12-15");
  const { toast } = useToast();

  const text = {
    en: {
      title: "Emergency Services",
      subtitle: "Immediate Help & Ambulance Services",
      callAmbulance: "Call Ambulance (108)",
      shareLocation: "Share My Location",
      trackAmbulance: "Track Ambulance",
      emergencyContacts: "Emergency Contacts",
      locationShared: "Location Shared Successfully",
      locationSharedDesc: "Your exact location has been shared with emergency services",
      ambulanceCalled: "🚨 Ambulance Called!",
      ambulanceCalledDesc: "Emergency services notified. Help is on the way!",
      trackingStarted: "📍 Tracking Started",
      trackingStartedDesc: "You can now see ambulance location in real-time",
      estimatedArrival: "Estimated Arrival",
      distance: "Distance",
      status: "Status",
      onRoute: "On Route",
      dispatched: "Dispatched",
      arrived: "Arrived",
      yourLocation: "Your Location",
      ambulanceLocation: "Ambulance Location",
      emergencyTips: "Emergency Tips",
      tip1: "Stay calm and speak clearly",
      tip2: "Provide exact location details",
      tip3: "Don't hang up until told to do so",
      tip4: "Keep the patient comfortable",
      police: "Police: 100",
      fire: "Fire: 101",
      helpline: "Women Helpline: 1091",
      gettingLocation: "Getting your location...",
      locationError: "Unable to get location",
      allowLocation: "Please allow location access",
      locationAccuracy: "Location Accuracy"
    },
    kn: {
      title: "ತುರ್ತು ಸೇವೆಗಳು",
      subtitle: "ತಕ್ಷಣದ ಸಹಾಯ ಮತ್ತು ಆಂಬುಲೆನ್ಸ್ ಸೇವೆಗಳು",
      callAmbulance: "ಆಂಬುಲೆನ್ಸ್ ಕರೆ ಮಾಡಿ (108)",
      shareLocation: "ನನ್ನ ಸ್ಥಳ ಹಂಚಿಕೊಳ್ಳಿ",
      trackAmbulance: "ಆಂಬುಲೆನ್ಸ್ ಟ್ರ್ಯಾಕ್ ಮಾಡಿ",
      emergencyContacts: "ತುರ್ತು ಸಂಪರ್ಕಗಳು",
      locationShared: "ಸ್ಥಳ ಯಶಸ್ವಿಯಾಗಿ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ",
      locationSharedDesc: "ನಿಮ್ಮ ನಿಖರ ಸ್ಥಳವನ್ನು ತುರ್ತು ಸೇವೆಗಳೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ",
      ambulanceCalled: "🚨 ಆಂಬುಲೆನ್ಸ್ ಕರೆ ಮಾಡಲಾಗಿದೆ!",
      ambulanceCalledDesc: "ತುರ್ತು ಸೇವೆಗಳಿಗೆ ತಿಳಿಸಲಾಗಿದೆ. ಸಹಾಯ ಬರುತ್ತಿದೆ!",
      trackingStarted: "📍 ಟ್ರ್ಯಾಕಿಂಗ್ ಪ್ರಾರಂಭವಾಗಿದೆ",
      trackingStartedDesc: "ನೀವು ಈಗ ರಿಯಲ್-ಟೈಮ್‌ನಲ್ಲಿ ಆಂಬುಲೆನ್ಸ್ ಸ್ಥಳವನ್ನು ನೋಡಬಹುದು",
      estimatedArrival: "ಅಂದಾಜು ಆಗಮನ",
      distance: "ದೂರ",
      status: "ಸ್ಥಿತಿ",
      onRoute: "ಮಾರ್ಗದಲ್ಲಿ",
      dispatched: "ಕಳುಹಿಸಲಾಗಿದೆ",
      arrived: "ಆಗಮಿಸಿದೆ",
      yourLocation: "ನಿಮ್ಮ ಸ್ಥಳ",
      ambulanceLocation: "ಆಂಬುಲೆನ್ಸ್ ಸ್ಥಳ",
      emergencyTips: "ತುರ್ತು ಸಲಹೆಗಳು",
      tip1: "ಶಾಂತವಾಗಿರಿ ಮತ್ತು ಸ್ಪಷ್ಟವಾಗಿ ಮಾತನಾಡಿ",
      tip2: "ನಿಖರವಾದ ಸ್ಥಳದ ವಿವರಗಳನ್ನು ನೀಡಿ",
      tip3: "ಹೇಳುವವರೆಗೆ ಫೋನ್ ಕತ್ತರಿಸಬೇಡಿ",
      tip4: "ರೋಗಿಯನ್ನು ಆರಾಮದಾಯಕವಾಗಿ ಇರಿಸಿ",
      police: "ಪೊಲೀಸ್: 100",
      fire: "ಅಗ್ನಿಶಾಮಕ: 101",
      helpline: "ಮಹಿಳಾ ಸಹಾಯವಾಣಿ: 1091",
      gettingLocation: "ನಿಮ್ಮ ಸ್ಥಳವನ್ನು ಪಡೆಯುತ್ತಿದೆ...",
      locationError: "ಸ್ಥಳವನ್ನು ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ",
      allowLocation: "ದಯವಿಟ್ಟು ಸ್ಥಳದ ಪ್ರವೇಶವನ್ನು ಅನುಮತಿಸಿ",
      locationAccuracy: "ಸ್ಥಳದ ನಿಖರತೆ"
    }
  };

  const currentText = text[language];

  // Get user's current location
  const getCurrentLocation = () => {
    if (!navigator.geolocation) {
      setLocationError("Geolocation is not supported by this browser");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setUserLocation(location);
        setLocationError(null);
        console.log("User location obtained:", location);
      },
      (error) => {
        console.error("Location error:", error);
        setLocationError(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 60000
      }
    );
  };

  // Simulate ambulance movement
  useEffect(() => {
    if (ambulanceTracking) {
      const interval = setInterval(() => {
        setAmbulanceLocation(prev => ({
          lat: prev.lat + (Math.random() - 0.5) * 0.001,
          lng: prev.lng + (Math.random() - 0.5) * 0.001
        }));
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [ambulanceTracking]);

  const handleCallAmbulance = () => {
    setEmergencyActive(true);
    setAmbulanceTracking(true);
    toast({
      title: currentText.ambulanceCalled,
      description: currentText.ambulanceCalledDesc
    });

    // Simulate emergency response
    setTimeout(() => {
      setEmergencyActive(false);
    }, 3000);
  };

  const handleShareLocation = () => {
    if (!userLocation) {
      getCurrentLocation();
      toast({
        title: currentText.gettingLocation,
        description: currentText.allowLocation
      });
      return;
    }

    setLocationShared(true);
    toast({
      title: currentText.locationShared,
      description: `${currentText.locationSharedDesc}\nLat: ${userLocation.lat.toFixed(6)}, Lng: ${userLocation.lng.toFixed(6)}`
    });

    // Simulate sharing location with emergency services
    console.log("Location shared with emergency services:", userLocation);
  };

  const handleTrackAmbulance = () => {
    setAmbulanceTracking(true);
    toast({
      title: currentText.trackingStarted,
      description: currentText.trackingStartedDesc
    });
  };

  const calculateDistance = () => {
    if (!userLocation) return "Unknown";
    
    const distance = Math.sqrt(
      Math.pow(ambulanceLocation.lat - userLocation.lat, 2) + 
      Math.pow(ambulanceLocation.lng - userLocation.lng, 2)
    ) * 100; // Rough conversion
    return distance.toFixed(1);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-red-800 flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-red-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Emergency Action Buttons */}
      <div className="grid grid-cols-1 gap-3">
        {/* Call Ambulance */}
        <Card className={`border-2 ${emergencyActive ? 'border-red-500 bg-red-50' : 'border-red-300 bg-red-50'} transition-all duration-300`}>
          <CardContent className="p-4">
            <Button
              onClick={handleCallAmbulance}
              disabled={emergencyActive}
              className={`w-full h-14 text-lg font-bold ${
                emergencyActive 
                  ? 'bg-red-700 hover:bg-red-800 animate-pulse' 
                  : 'bg-red-600 hover:bg-red-700'
              }`}
            >
              <Phone className="h-6 w-6 mr-2" />
              {emergencyActive 
                ? (language === "en" ? "🚨 CALLING 108..." : "🚨 108 ಗೆ ಕರೆ ಮಾಡುತ್ತಿದೆ...")
                : currentText.callAmbulance
              }
            </Button>
          </CardContent>
        </Card>

        {/* Share Location */}
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <Button
              onClick={handleShareLocation}
              className="w-full h-12 bg-blue-600 hover:bg-blue-700"
              variant={locationShared ? "secondary" : "default"}
            >
              <MapPin className="h-5 w-5 mr-2" />
              {locationShared 
                ? (language === "en" ? "✅ Location Shared" : "✅ ಸ್ಥಳ ಹಂಚಿಕೊಳ್ಳಲಾಗಿದೆ")
                : currentText.shareLocation
              }
            </Button>
            
            {/* Location Details */}
            {userLocation && (
              <div className="mt-3 p-3 bg-white/80 rounded-lg">
                <div className="text-xs text-blue-700 space-y-1">
                  <div className="flex justify-between">
                    <span className="font-medium">📍 {currentText.yourLocation}:</span>
                  </div>
                  <div className="font-mono text-xs">
                    Lat: {userLocation.lat.toFixed(6)}
                  </div>
                  <div className="font-mono text-xs">
                    Lng: {userLocation.lng.toFixed(6)}
                  </div>
                  <div className="flex items-center gap-1 text-green-600">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>{currentText.locationAccuracy}: High</span>
                  </div>
                </div>
              </div>
            )}
            
            {locationError && (
              <div className="mt-2 text-xs text-red-600 text-center">
                ⚠️ {currentText.locationError}: {locationError}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Track Ambulance */}
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <Button
              onClick={handleTrackAmbulance}
              className="w-full h-12 bg-green-600 hover:bg-green-700"
              variant={ambulanceTracking ? "secondary" : "default"}
            >
              <Navigation className="h-5 w-5 mr-2" />
              {ambulanceTracking 
                ? (language === "en" ? "🚑 Tracking Active" : "🚑 ಟ್ರ್ಯಾಕಿಂಗ್ ಸಕ್ರಿಯ")
                : currentText.trackAmbulance
              }
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Ambulance Tracking Info */}
      {ambulanceTracking && (
        <Card className="border-green-200 bg-green-50">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-green-800 flex items-center gap-2">
              <Ambulance className="h-5 w-5" />
              {language === "en" ? "Live Ambulance Tracking" : "ಲೈವ್ ಆಂಬುಲೆನ್ಸ್ ಟ್ರ್ಯಾಕಿಂಗ್"}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <Badge className="bg-green-100 text-green-700 mb-2">
                  {currentText.status}
                </Badge>
                <p className="text-sm font-semibold text-green-800">{currentText.onRoute}</p>
              </div>
              <div className="text-center">
                <Badge className="bg-blue-100 text-blue-700 mb-2">
                  {currentText.distance}
                </Badge>
                <p className="text-sm font-semibold text-blue-800">{calculateDistance()} km</p>
              </div>
            </div>

            <div className="bg-white/80 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{currentText.estimatedArrival}:</span>
                <span className="text-sm font-bold text-green-700">{estimatedArrival} min</span>
              </div>
              
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span>
                    {currentText.yourLocation}: 
                    {userLocation 
                      ? ` ${userLocation.lat.toFixed(4)}, ${userLocation.lng.toFixed(4)}`
                      : " Location not available"
                    }
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <span>
                    {currentText.ambulanceLocation}: 
                    {` ${ambulanceLocation.lat.toFixed(4)}, ${ambulanceLocation.lng.toFixed(4)}`}
                  </span>
                </div>
              </div>

              <div className="mt-3 bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full animate-pulse" style={{width: '60%'}}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Government Health Schemes */}
      <GovernmentHealthSchemes language={language} />
    </div>
  );
};

export default EmergencyServices;
