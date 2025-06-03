
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, MapPin, Clock, Star, Pill } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface TelepharmacyProps {
  language: string;
}

const Telepharmacy = ({ language }: TelepharmacyProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const { toast } = useToast();

  const text = {
    en: {
      title: "Nearby Pharmacies",
      subtitle: "Find medicines and pharmacy services",
      searchPlaceholder: "Search medicines...",
      callPharmacy: "Call",
      orderOnline: "Order Online",
      available: "Open",
      closed: "Closed",
      distance: "km away",
      orderPlaced: "📦 Order Inquiry Sent!",
      pharmacyContacted: "Pharmacy will contact you shortly"
    },
    kn: {
      title: "ಹತ್ತಿರದ ಔಷಧಾಲಯಗಳು",
      subtitle: "ಔಷಧಗಳು ಮತ್ತು ಔಷಧಾಲಯ ಸೇವೆಗಳನ್ನು ಹುಡುಕಿ",
      searchPlaceholder: "ಔಷಧಗಳನ್ನು ಹುಡುಕಿ...",
      callPharmacy: "ಕರೆ ಮಾಡಿ",
      orderOnline: "ಆನ್‌ಲೈನ್ ಆರ್ಡರ್",
      available: "ತೆರೆದಿದೆ",
      closed: "ಮುಚ್ಚಿದೆ",
      distance: "ಕಿ.ಮೀ ದೂರದಲ್ಲಿ",
      orderPlaced: "📦 ಆರ್ಡರ್ ವಿಚಾರಣೆ ಕಳುಹಿಸಲಾಗಿದೆ!",
      pharmacyContacted: "ಔಷಧಾಲಯ ಶೀಘ್ರದಲ್ಲೇ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ"
    }
  };

  const currentText = text[language];

  const pharmacies = [
    {
      id: 1,
      name: language === "en" ? "MedPlus Pharmacy" : "ಮೆಡ್‌ಪ್ಲಸ್ ಔಷಧಾಲಯ",
      location: language === "en" ? "Hassan Main Road" : "ಹಾಸನ್ ಮುಖ್ಯ ರಸ್ತೆ",
      distance: 2.1,
      phone: "+91 9876543220",
      rating: 4.5,
      status: "open",
      hours: "8:00 AM - 10:00 PM",
      services: [
        language === "en" ? "Home Delivery" : "ಮನೆ ವಿತರಣೆ",
        language === "en" ? "Online Ordering" : "ಆನ್‌ಲೈನ್ ಆರ್ಡರಿಂಗ್"
      ]
    },
    {
      id: 2,
      name: language === "en" ? "Apollo Pharmacy" : "ಅಪೊಲೊ ಔಷಧಾಲಯ",
      location: language === "en" ? "BM Road, Hassan" : "ಬಿಎಂ ರಸ್ತೆ, ಹಾಸನ್",
      distance: 3.5,
      phone: "+91 9876543221",
      rating: 4.7,
      status: "open",
      hours: "24/7",
      services: [
        language === "en" ? "24/7 Service" : "೨೪/೭ ಸೇವೆ",
        language === "en" ? "Emergency Medicines" : "ತುರ್ತು ಔಷಧಗಳು"
      ]
    },
    {
      id: 3,
      name: language === "en" ? "Local Medical Store" : "ಸ್ಥಳೀಯ ವೈದ್ಯಕೀಯ ಅಂಗಡಿ",
      location: language === "en" ? "Holenarasipura Market" : "ಹೊಳೆನರಸೀಪುರ ಮಾರುಕಟ್ಟೆ",
      distance: 0.8,
      phone: "+91 9876543222",
      rating: 4.2,
      status: "open",
      hours: "9:00 AM - 9:00 PM",
      services: [
        language === "en" ? "Local Delivery" : "ಸ್ಥಳೀಯ ವಿತರಣೆ",
        language === "en" ? "Ayurvedic Medicines" : "ಆಯುರ್ವೇದಿಕ ಔಷಧಗಳು"
      ]
    }
  ];

  const commonMedicines = [
    {
      name: language === "en" ? "Paracetamol" : "ಪ್ಯಾರಾಸಿಟಮಾಲ್",
      use: language === "en" ? "Fever, Pain" : "ಜ್ವರ, ನೋವು",
      available: true
    },
    {
      name: language === "en" ? "Metformin" : "ಮೆಟ್ಫಾರ್ಮಿನ್",
      use: language === "en" ? "Diabetes" : "ಮಧುಮೇಹ",
      available: true
    },
    {
      name: language === "en" ? "ORS Packets" : "ORS ಪ್ಯಾಕೆಟ್‌ಗಳು",
      use: language === "en" ? "Dehydration" : "ನೀರಿನ ಕೊರತೆ",
      available: true
    }
  ];

  const handleCallPharmacy = (pharmacy: any) => {
    toast({
      title: language === "en" ? "📞 Calling..." : "📞 ಕರೆ ಮಾಡುತ್ತಿದೆ...",
      description: `${pharmacy.name}`
    });
  };

  const handleOrderOnline = (pharmacy: any) => {
    toast({
      title: currentText.orderPlaced,
      description: currentText.pharmacyContacted
    });
  };

  const getStatusColor = (status: string) => {
    return status === "open" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800";
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-green-800 flex items-center gap-2">
            <Pill className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-green-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
        <Input
          placeholder={currentText.searchPlaceholder}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Common Medicines */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md">
            {language === "en" ? "Common Medicines" : "ಸಾಮಾನ್ಯ ಔಷಧಗಳು"}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {commonMedicines.map((medicine, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <div>
                <p className="font-medium text-sm">{medicine.name}</p>
                <p className="text-xs text-gray-500">{medicine.use}</p>
              </div>
              <Badge className="bg-green-100 text-green-800">
                {language === "en" ? "Available" : "ಲಭ್ಯ"}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Pharmacies List */}
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-800">
          {language === "en" ? "Nearby Pharmacies" : "ಹತ್ತಿರದ ಔಷಧಾಲಯಗಳು"}
        </h3>
        
        {pharmacies.map((pharmacy) => (
          <Card key={pharmacy.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-800">{pharmacy.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                    <MapPin className="h-3 w-3" />
                    <span>{pharmacy.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <span>{pharmacy.distance} {currentText.distance}</span>
                    <Clock className="h-3 w-3 ml-2" />
                    <span>{pharmacy.hours}</span>
                  </div>
                </div>
                <Badge className={getStatusColor(pharmacy.status)}>
                  {pharmacy.status === "open" ? currentText.available : currentText.closed}
                </Badge>
              </div>

              <div className="flex items-center gap-1 mb-3">
                <Star className="h-3 w-3 text-yellow-500 fill-current" />
                <span className="text-xs text-gray-500">{pharmacy.rating}</span>
              </div>

              <div className="flex flex-wrap gap-1 mb-3">
                {pharmacy.services.map((service, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {service}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2">
                <Button
                  size="sm"
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() => handleCallPharmacy(pharmacy)}
                >
                  <Phone className="h-4 w-4 mr-1" />
                  {currentText.callPharmacy}
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 border-green-300 text-green-700 hover:bg-green-50"
                  onClick={() => handleOrderOnline(pharmacy)}
                >
                  <Pill className="h-4 w-4 mr-1" />
                  {currentText.orderOnline}
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Emergency Medicine Info */}
      <Card className="bg-orange-50 border-orange-200">
        <CardContent className="p-4">
          <h4 className="font-medium text-orange-800 mb-2">
            {language === "en" ? "⚡ Emergency Medicine Info" : "⚡ ತುರ್ತು ಔಷಧ ಮಾಹಿತಿ"}
          </h4>
          <p className="text-sm text-orange-700">
            {language === "en" 
              ? "For emergency medicines outside business hours, contact Apollo Pharmacy (24/7) or call the nearest government hospital."
              : "ವ್ಯಾಪಾರದ ಸಮಯದ ಹೊರಗೆ ತುರ್ತು ಔಷಧಗಳಿಗಾಗಿ, ಅಪೊಲೊ ಔಷಧಾಲಯವನ್ನು (೨೪/೭) ಸಂಪರ್ಕಿಸಿ ಅಥವಾ ಹತ್ತಿರದ ಸರ್ಕಾರಿ ಆಸ್ಪತ್ರೆಗೆ ಕರೆ ಮಾಡಿ."
            }
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Telepharmacy;
