
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Ambulance, Phone, MapPin, Clock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AmbulanceServiceProps {
  language: string;
}

const AmbulanceService = ({ language }: AmbulanceServiceProps) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isEmergencyActive, setIsEmergencyActive] = useState(false);
  const { toast } = useToast();

  const text = {
    en: {
      title: "Ambulance Services",
      subtitle: "Emergency & Non-Emergency Transport",
      emergency: "Emergency (108)",
      nonEmergency: "Book Transport",
      callNow: "Call Now",
      bookService: "Book Service",
      available: "Available",
      busy: "Busy",
      distance: "km away",
      estimatedArrival: "Estimated Arrival",
      emergencyCall: "🚨 Emergency Call Placed!",
      helpOnWay: "Help is on the way",
      serviceBooked: "✅ Ambulance Booked!",
      bookingConfirmed: "Your booking has been confirmed"
    },
    kn: {
      title: "ಆಂಬುಲೆನ್ಸ್ ಸೇವೆಗಳು",
      subtitle: "ತುರ್ತು ಮತ್ತು ಸಾಮಾನ್ಯ ಸಾರಿಗೆ",
      emergency: "ತುರ್ತು (108)",
      nonEmergency: "ಸಾರಿಗೆ ಬುಕ್ ಮಾಡಿ",
      callNow: "ಈಗ ಕರೆ ಮಾಡಿ",
      bookService: "ಸೇವೆ ಬುಕ್ ಮಾಡಿ",
      available: "ಲಭ್ಯ",
      busy: "ಬ್ಯುಸಿ",
      distance: "ಕಿ.ಮೀ ದೂರದಲ್ಲಿ",
      estimatedArrival: "ಅಂದಾಜು ಆಗಮನ",
      emergencyCall: "🚨 ತುರ್ತು ಕರೆ ಇಡಲಾಗಿದೆ!",
      helpOnWay: "ಸಹಾಯ ಬರುತ್ತಿದೆ",
      serviceBooked: "✅ ಆಂಬುಲೆನ್ಸ್ ಬುಕ್ ಆಗಿದೆ!",
      bookingConfirmed: "ನಿಮ್ಮ ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ"
    }
  };

  const currentText = text[language];

  const ambulanceServices = [
    {
      id: 1,
      name: language === "en" ? "Government Ambulance (108)" : "ಸರ್ಕಾರಿ ಆಂಬುಲೆನ್ಸ್ (108)",
      type: "emergency",
      phone: "108",
      location: language === "en" ? "Hassan District Hospital" : "ಹಾಸನ್ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆ",
      distance: 2.5,
      status: "available",
      estimatedTime: "8-12 minutes",
      free: true
    },
    {
      id: 2,
      name: language === "en" ? "Private Ambulance - Sagar" : "ಖಾಸಗಿ ಆಂಬುಲೆನ್ಸ್ - ಸಾಗರ್",
      type: "private",
      phone: "+91 9876543210",
      location: language === "en" ? "Sagar Hospital, Hassan" : "ಸಾಗರ್ ಆಸ್ಪತ್ರೆ, ಹಾಸನ್",
      distance: 3.2,
      status: "available",
      estimatedTime: "10-15 minutes",
      cost: "₹500-800"
    },
    {
      id: 3,
      name: language === "en" ? "Holenarasipura PHC Ambulance" : "ಹೊಳೆನರಸೀಪುರ PHC ಆಂಬುಲೆನ್ಸ್",
      type: "government",
      phone: "+91 9876543211",
      location: language === "en" ? "Holenarasipura PHC" : "ಹೊಳೆನರಸೀಪುರ PHC",
      distance: 1.8,
      status: "busy",
      estimatedTime: "20-25 minutes",
      free: true
    }
  ];

  const handleEmergencyCall = () => {
    setIsEmergencyActive(true);
    toast({
      title: currentText.emergencyCall,
      description: currentText.helpOnWay
    });

    // Simulate emergency response
    setTimeout(() => {
      setIsEmergencyActive(false);
    }, 3000);
  };

  const handleBookService = (service: any) => {
    toast({
      title: currentText.serviceBooked,
      description: `${currentText.bookingConfirmed} - ${service.name}`
    });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "available": return "bg-green-100 text-green-800";
      case "busy": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-red-800 flex items-center gap-2">
            <Ambulance className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-red-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Emergency Button */}
      <Card className={`border-2 ${isEmergencyActive ? 'border-red-500 bg-red-50' : 'border-red-300 bg-red-50'} transition-all duration-300`}>
        <CardContent className="p-4">
          <Button
            onClick={handleEmergencyCall}
            disabled={isEmergencyActive}
            className={`w-full h-16 text-lg font-bold ${
              isEmergencyActive 
                ? 'bg-red-700 hover:bg-red-800 animate-pulse' 
                : 'bg-red-600 hover:bg-red-700'
            }`}
          >
            <Phone className="h-6 w-6 mr-2" />
            {isEmergencyActive 
              ? (language === "en" ? "🚨 CALLING 108..." : "🚨 108 ಗೆ ಕರೆ ಮಾಡುತ್ತಿದೆ...")
              : (language === "en" ? "🆘 EMERGENCY - CALL 108" : "🆘 ತುರ್ತು - 108 ಗೆ ಕರೆ ಮಾಡಿ")
            }
          </Button>
        </CardContent>
      </Card>

      {/* Ambulance Services List */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">
          {language === "en" ? "Available Services" : "ಲಭ್ಯ ಸೇವೆಗಳು"}
        </h3>
        
        {ambulanceServices.map((service) => (
          <Card key={service.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{service.name}</h4>
                  <p className="text-sm text-gray-600">{service.location}</p>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{service.distance} {currentText.distance}</span>
                    <Clock className="h-3 w-3 ml-2" />
                    <span>{service.estimatedTime}</span>
                  </div>
                </div>
                <Badge className={getStatusColor(service.status)}>
                  {service.status === "available" ? currentText.available : currentText.busy}
                </Badge>
              </div>

              <div className="flex items-center justify-between mb-3">
                <div className="text-sm">
                  {service.free ? (
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      {language === "en" ? "Free Service" : "ಉಚಿತ ಸೇವೆ"}
                    </Badge>
                  ) : (
                    <span className="text-orange-600 font-medium">{service.cost}</span>
                  )}
                </div>
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-red-600 hover:bg-red-700"
                  onClick={() => handleEmergencyCall()}
                >
                  <Phone className="h-4 w-4 mr-1" />
                  {currentText.callNow}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-red-300 text-red-700 hover:bg-red-50"
                  onClick={() => handleBookService(service)}
                  disabled={service.status === "busy"}
                >
                  <User className="h-4 w-4 mr-1" />
                  {currentText.bookService}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Important Numbers */}
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-4">
          <h4 className="font-medium text-blue-800 mb-2">
            {language === "en" ? "📞 Important Numbers" : "📞 ಮುಖ್ಯ ಸಂಖ್ಯೆಗಳು"}
          </h4>
          <div className="space-y-1 text-sm text-blue-700">
            <p>• {language === "en" ? "Emergency: 108" : "ತುರ್ತು: 108"}</p>
            <p>• {language === "en" ? "Police: 100" : "ಪೊಲೀಸ್: 100"}</p>
            <p>• {language === "en" ? "Fire: 101" : "ಅಗ್ನಿಶಾಮಕ: 101"}</p>
            <p>• {language === "en" ? "Hassan District Hospital: +91 8172-268041" : "ಹಾಸನ್ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆ: +91 8172-268041"}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AmbulanceService;
