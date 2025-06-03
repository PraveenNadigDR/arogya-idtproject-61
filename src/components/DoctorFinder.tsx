
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Phone, Star, Clock, Users, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface DoctorFinderProps {
  language: string;
}

const DoctorFinder = ({ language }: DoctorFinderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const { toast } = useToast();

  const text = {
    en: {
      title: "Find Doctor",
      subtitle: "Near Hassan & Holenarasipura",
      searchPlaceholder: "Search doctors, specialties...",
      bookAppointment: "Book Appointment",
      callNow: "Call Now",
      reviews: "Reviews",
      available: "Available",
      busy: "Busy",
      offline: "Offline",
      distance: "km away",
      fee: "Consultation Fee"
    },
    kn: {
      title: "ವೈದ್ಯರನ್ನು ಹುಡುಕಿ",
      subtitle: "ಹಾಸನ್ ಮತ್ತು ಹೊಳೆನರಸೀಪುರ ಸಮೀಪದಲ್ಲಿ",
      searchPlaceholder: "ವೈದ್ಯರು, ವಿಶೇಷತೆಗಳನ್ನು ಹುಡುಕಿ...",
      bookAppointment: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      callNow: "ಈಗ ಕರೆ ಮಾಡಿ",
      reviews: "ವಿಮರ್ಶೆಗಳು",
      available: "ಲಭ್ಯ",
      busy: "ಬ್ಯುಸಿ",
      offline: "ಆಫ್‌ಲೈನ್",
      distance: "ಕಿ.ಮೀ ದೂರದಲ್ಲಿ",
      fee: "ಸಮಾಲೋಚನೆ ಶುಲ್ಕ"
    }
  };

  const currentText = text[language];

  const specialties = [
    { id: "all", name: language === "en" ? "All" : "ಎಲ್ಲಾ" },
    { id: "general", name: language === "en" ? "General" : "ಸಾಮಾನ್ಯ" },
    { id: "pediatric", name: language === "en" ? "Child Care" : "ಮಕ್ಕಳ ಆರೈಕೆ" },
    { id: "diabetes", name: language === "en" ? "Diabetes" : "ಮಧುಮೇಹ" },
    { id: "heart", name: language === "en" ? "Heart" : "ಹೃದಯ" },
    { id: "orthopedic", name: language === "en" ? "Bone & Joint" : "ಮೂಳೆ ಮತ್ತು ಕೀಲು" },
    { id: "gynecology", name: language === "en" ? "Women's Health" : "ಮಹಿಳೆಯರ ಆರೋಗ್ಯ" },
    { id: "dermatology", name: language === "en" ? "Skin" : "ಚರ್ಮ" },
    { id: "ent", name: language === "en" ? "ENT" : "ಇಎನ್‌ಟಿ" }
  ];

  const doctors = [
    {
      id: 1,
      name: language === "en" ? "Dr. Ramesh Kumar" : "ಡಾ. ರಮೇಶ್ ಕುಮಾರ್",
      specialty: language === "en" ? "General Medicine" : "ಸಾಮಾನ್ಯ ವೈದ್ಯಕೀಯ",
      hospital: language === "en" ? "Hassan Primary Health Centre" : "ಹಾಸನ್ ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರ",
      location: language === "en" ? "Hassan Main Road" : "ಹಾಸನ್ ಮುಖ್ಯ ರಸ್ತೆ",
      distance: 2.5,
      rating: 4.8,
      reviews: 156,
      fee: 50,
      status: "available",
      phone: "+91 9876543210",
      languages: language === "en" ? "Kannada, Hindi, English" : "ಕನ್ನಡ, ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್",
      experience: language === "en" ? "15 years experience" : "15 ವರ್ಷಗಳ ಅನುಭವ",
      category: "general"
    },
    {
      id: 2,
      name: language === "en" ? "Dr. Priya Sharma" : "ಡಾ. ಪ್ರಿಯಾ ಶರ್ಮಾ",
      specialty: language === "en" ? "Pediatrician" : "ಮಕ್ಕಳ ವೈದ್ಯ",
      hospital: language === "en" ? "Holenarasipura Community Health Centre" : "ಹೊಳೆನರಸೀಪುರ ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರ",
      location: language === "en" ? "Holenarasipura Market" : "ಹೊಳೆನರಸೀಪುರ ಮಾರುಕಟ್ಟೆ",
      distance: 1.2,
      rating: 4.9,
      reviews: 89,
      fee: 75,
      status: "busy",
      phone: "+91 9876543211",
      languages: language === "en" ? "Kannada, English" : "ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್",
      experience: language === "en" ? "8 years experience" : "8 ವರ್ಷಗಳ ಅನುಭವ",
      category: "pediatric"
    },
    {
      id: 3,
      name: language === "en" ? "Dr. Suresh Patil" : "ಡಾ. ಸುರೇಶ್ ಪಾಟೀಲ್",
      specialty: language === "en" ? "Diabetes Specialist" : "ಮಧುಮೇಹ ತಜ್ಞ",
      hospital: language === "en" ? "Hassan District Hospital" : "ಹಾಸನ್ ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆ",
      location: language === "en" ? "Hospital Road, Hassan" : "ಆಸ್ಪತ್ರೆ ರಸ್ತೆ, ಹಾಸನ್",
      distance: 3.8,
      rating: 4.7,
      reviews: 203,
      fee: 100,
      status: "available",
      phone: "+91 9876543212",
      languages: language === "en" ? "Kannada, Hindi" : "ಕನ್ನಡ, ಹಿಂದಿ",
      experience: language === "en" ? "20 years experience" : "20 ವರ್ಷಗಳ ಅನುಭವ",
      category: "diabetes"
    },
    {
      id: 4,
      name: language === "en" ? "Dr. Anitha Reddy" : "ಡಾ. ಅನಿತಾ ರೆಡ್ಡಿ",
      specialty: language === "en" ? "Cardiologist" : "ಹೃದಯ ತಜ್ಞ",
      hospital: language === "en" ? "Sagar Heart Centre" : "ಸಾಗರ್ ಹಾರ್ಟ್ ಸೆಂಟರ್",
      location: language === "en" ? "BM Road, Hassan" : "ಬಿಎಂ ರಸ್ತೆ, ಹಾಸನ್",
      distance: 4.2,
      rating: 4.9,
      reviews: 245,
      fee: 200,
      status: "available",
      phone: "+91 9876543213",
      languages: language === "en" ? "Kannada, English, Telugu" : "ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್, ತೆಲುಗು",
      experience: language === "en" ? "12 years experience" : "12 ವರ್ಷಗಳ ಅನುಭವ",
      category: "heart"
    },
    {
      id: 5,
      name: language === "en" ? "Dr. Mahesh Gowda" : "ಡಾ. ಮಹೇಶ್ ಗೌಡ",
      specialty: language === "en" ? "Orthopedic Surgeon" : "ಮೂಳೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸಕ",
      hospital: language === "en" ? "Hassan Bone & Joint Clinic" : "ಹಾಸನ್ ಬೋನ್ ಆ್ಯಂಡ್ ಜಾಯಿಂಟ್ ಕ್ಲಿನಿಕ್",
      location: language === "en" ? "Vidyaranyapuram, Hassan" : "ವಿದ್ಯಾರಣ್ಯಪುರಂ, ಹಾಸನ್",
      distance: 5.1,
      rating: 4.6,
      reviews: 134,
      fee: 150,
      status: "busy",
      phone: "+91 9876543214",
      languages: language === "en" ? "Kannada, Hindi" : "ಕನ್ನಡ, ಹಿಂದಿ",
      experience: language === "en" ? "18 years experience" : "18 ವರ್ಷಗಳ ಅನುಭವ",
      category: "orthopedic"
    },
    {
      id: 6,
      name: language === "en" ? "Dr. Lakshmi Devi" : "ಡಾ. ಲಕ್ಷ್ಮೀ ದೇವಿ",
      specialty: language === "en" ? "Gynecologist" : "ಸ್ತ್ರೀರೋಗ ತಜ್ಞೆ",
      hospital: language === "en" ? "Women's Care Hospital" : "ವುಮೆನ್ಸ್ ಕೇರ್ ಹಾಸ್ಪಿಟಲ್",
      location: language === "en" ? "Alur Road, Hassan" : "ಅಲೂರ್ ರಸ್ತೆ, ಹಾಸನ್",
      distance: 6.3,
      rating: 4.8,
      reviews: 178,
      fee: 120,
      status: "available",
      phone: "+91 9876543215",
      languages: language === "en" ? "Kannada, English" : "ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್",
      experience: language === "en" ? "14 years experience" : "14 ವರ್ಷಗಳ ಅನುಭವ",
      category: "gynecology"
    },
    {
      id: 7,
      name: language === "en" ? "Dr. Ravi Shankar" : "ಡಾ. ರವಿ ಶಂಕರ್",
      specialty: language === "en" ? "Dermatologist" : "ಚರ್ಮ ತಜ್ಞ",
      hospital: language === "en" ? "Skin Care Clinic" : "ಸ್ಕಿನ್ ಕೇರ್ ಕ್ಲಿನಿಕ್",
      location: language === "en" ? "Sakleshpura Road, Hassan" : "ಸಕಲೇಶಪುರ ರಸ್ತೆ, ಹಾಸನ್",
      distance: 3.7,
      rating: 4.5,
      reviews: 92,
      fee: 80,
      status: "available",
      phone: "+91 9876543216",
      languages: language === "en" ? "Kannada, Hindi, English" : "ಕನ್ನಡ, ಹಿಂದಿ, ಇಂಗ್ಲಿಷ್",
      experience: language === "en" ? "10 years experience" : "10 ವರ್ಷಗಳ ಅನುಭವ",
      category: "dermatology"
    },
    {
      id: 8,
      name: language === "en" ? "Dr. Nagaraj B.S" : "ಡಾ. ನಾಗರಾಜ್ ಬಿ.ಎಸ್",
      specialty: language === "en" ? "ENT Specialist" : "ಇಎನ್‌ಟಿ ತಜ್ಞ",
      hospital: language === "en" ? "Hassan ENT Centre" : "ಹಾಸನ್ ಇಎನ್‌ಟಿ ಸೆಂಟರ್",
      location: language === "en" ? "Race Course Road, Hassan" : "ರೇಸ್ ಕೋರ್ಸ್ ರಸ್ತೆ, ಹಾಸನ್",
      distance: 4.8,
      rating: 4.7,
      reviews: 167,
      fee: 90,
      status: "offline",
      phone: "+91 9876543217",
      languages: language === "en" ? "Kannada, English" : "ಕನ್ನಡ, ಇಂಗ್ಲಿಷ್",
      experience: language === "en" ? "16 years experience" : "16 ವರ್ಷಗಳ ಅನುಭವ",
      category: "ent"
    }
  ];

  const handleBookAppointment = (doctor: any) => {
    toast({
      title: language === "en" ? "📅 Booking Appointment..." : "📅 ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡುತ್ತಿದೆ...",
      description: language === "en" 
        ? `Connecting you with ${doctor.name}` 
        : `${doctor.name} ಅವರೊಂದಿಗೆ ಸಂಪರ್ಕಿಸುತ್ತಿದೆ`
    });
  };

  const handleCall = (doctor: any) => {
    toast({
      title: language === "en" ? "📞 Calling..." : "📞 ಕರೆ ಮಾಡುತ್ತಿದೆ...",
      description: language === "en" 
        ? `Calling ${doctor.name}` 
        : `${doctor.name} ಅವರಿಗೆ ಕರೆ ಮಾಡುತ್ತಿದೆ`
    });
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case "available": return "bg-green-100 text-green-800";
      case "busy": return "bg-yellow-100 text-yellow-800";
      case "offline": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: string) => {
    switch(status) {
      case "available": return currentText.available;
      case "busy": return currentText.busy;
      case "offline": return currentText.offline;
      default: return status;
    }
  };

  const filteredDoctors = doctors.filter(doctor => {
    const matchesSearch = searchQuery === "" || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.hospital.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesSpecialty = selectedSpecialty === "all" || doctor.category === selectedSpecialty;
    
    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
            <Search className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-blue-600">{currentText.subtitle}</p>
          <p className="text-xs text-blue-500">
            {language === "en" ? `${filteredDoctors.length} doctors found` : `${filteredDoctors.length} ವೈದ್ಯರು ಸಿಕ್ಕಿದ್ದಾರೆ`}
          </p>
        </CardHeader>
      </Card>

      {/* Search */}
      <div className="space-y-3">
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <Input
            placeholder={currentText.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Specialty Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {specialties.map((specialty) => (
            <Button
              key={specialty.id}
              variant={selectedSpecialty === specialty.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedSpecialty(specialty.id)}
              className={`whitespace-nowrap ${
                selectedSpecialty === specialty.id 
                  ? "bg-green-600 hover:bg-green-700" 
                  : "border-green-300 text-green-700 hover:bg-green-50"
              }`}
            >
              {specialty.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Doctors List */}
      <div className="space-y-3">
        {filteredDoctors.map((doctor) => (
          <Card key={doctor.id} className="hover:shadow-md transition-shadow">
            <CardContent className="p-4">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800">{doctor.name}</h3>
                  <p className="text-sm text-blue-600">{doctor.specialty}</p>
                  <p className="text-xs text-gray-500">{doctor.experience}</p>
                </div>
                <Badge className={getStatusColor(doctor.status)}>
                  {getStatusText(doctor.status)}
                </Badge>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="h-3 w-3" />
                  <span>{doctor.hospital}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <MapPin className="h-3 w-3" />
                  <span>{doctor.location} • {doctor.distance} {currentText.distance}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span>{doctor.rating} ({doctor.reviews} {currentText.reviews})</span>
                  </div>
                  <span className="text-sm font-medium text-green-600">
                    ₹{doctor.fee}
                  </span>
                </div>
                <p className="text-xs text-gray-500">{doctor.languages}</p>
              </div>

              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  className="flex-1 bg-green-600 hover:bg-green-700"
                  onClick={() => handleBookAppointment(doctor)}
                  disabled={doctor.status === "offline"}
                >
                  <Calendar className="h-4 w-4 mr-1" />
                  {currentText.bookAppointment}
                </Button>
                <Button 
                  size="sm" 
                  variant="outline" 
                  onClick={() => handleCall(doctor)}
                  className="border-green-300 text-green-700 hover:bg-green-50"
                >
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No results message */}
      {filteredDoctors.length === 0 && (
        <Card className="text-center p-6">
          <p className="text-gray-500">
            {language === "en" ? "No doctors found. Try adjusting your search." : "ವೈದ್ಯರು ಸಿಗಲಿಲ್ಲ. ನಿಮ್ಮ ಹುಡುಕಾಟ ಬದಲಾಯಿಸಿ ಪ್ರಯತ್ನಿಸಿ."}
          </p>
        </Card>
      )}

      {/* Doctor on Wheels Alert */}
      <Card className="bg-gradient-to-r from-purple-50 to-pink-50 border-purple-200">
        <CardContent className="p-4">
          <div className="flex items-center gap-3">
            <div className="bg-purple-100 p-2 rounded-full">
              <Users className="h-5 w-5 text-purple-600" />
            </div>
            <div className="flex-1">
              <h4 className="font-medium text-purple-800">
                {language === "en" ? "🚐 Doctor on Wheels" : "🚐 ಡಾಕ್ಟರ್ ಆನ್ ವೀಲ್ಸ್"}
              </h4>
              <p className="text-sm text-purple-600">
                {language === "en" 
                  ? "Mobile clinic arriving tomorrow at 10 AM near Holenarasipura Market" 
                  : "ಮೊಬೈಲ್ ಕ್ಲಿನಿಕ್ ನಾಳೆ ಬೆಳಿಗ್ಗೆ 10 ಗಂಟೆಗೆ ಹೊಳೆನರಸೀಪುರ ಮಾರುಕಟ್ಟೆ ಬಳಿ ಬರುತ್ತಿದೆ"
                }
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DoctorFinder;
