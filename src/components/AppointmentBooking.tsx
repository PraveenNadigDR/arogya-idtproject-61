
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, Phone, Stethoscope, MapPin, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AppointmentBookingProps {
  doctor: any;
  language: string;
  onClose: () => void;
}

const AppointmentBooking = ({ doctor, language, onClose }: AppointmentBookingProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [patientName, setPatientName] = useState("");
  const [phone, setPhone] = useState("");
  const [symptoms, setSymptoms] = useState("");
  const { toast } = useToast();

  const text = {
    en: {
      title: "Book Appointment",
      selectDate: "Select Date",
      selectTime: "Select Time",
      patientName: "Patient Name",
      phoneNumber: "Phone Number",
      symptoms: "Symptoms/Reason for Visit",
      bookAppointment: "Confirm Booking",
      cancel: "Cancel",
      appointmentBooked: "Appointment Booked!",
      bookingConfirmed: "Your appointment has been confirmed",
      consultationFee: "Consultation Fee",
      estimatedTime: "Estimated Duration",
      missingInfo: "Missing Information",
      fillAllFields: "Please fill all required fields"
    },
    kn: {
      title: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      selectDate: "ದಿನಾಂಕ ಆಯ್ಕೆಮಾಡಿ",
      selectTime: "ಸಮಯ ಆಯ್ಕೆಮಾಡಿ",
      patientName: "ರೋಗಿಯ ಹೆಸರು",
      phoneNumber: "ಫೋನ್ ಸಂಖ್ಯೆ",
      symptoms: "ಲಕ್ಷಣಗಳು/ಭೇಟಿಯ ಕಾರಣ",
      bookAppointment: "ಬುಕಿಂಗ್ ದೃಢೀಕರಿಸಿ",
      cancel: "ರದ್ದುಮಾಡಿ",
      appointmentBooked: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಆಗಿದೆ!",
      bookingConfirmed: "ನಿಮ್ಮ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ದೃಢೀಕರಿಸಲಾಗಿದೆ",
      consultationFee: "ಸಮಾಲೋಚನೆ ಶುಲ್ಕ",
      estimatedTime: "ಅಂದಾಜು ಅವಧಿ",
      missingInfo: "ಮಾಹಿತಿ ಕೊರತೆ",
      fillAllFields: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ"
    }
  };

  const currentText = text[language];

  const availableTimes = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
  ];

  const handleBooking = () => {
    if (!selectedDate || !selectedTime || !patientName || !phone) {
      toast({
        title: currentText.missingInfo,
        description: currentText.fillAllFields,
        variant: "destructive"
      });
      return;
    }

    // Create appointment object
    const appointment = {
      id: Date.now().toString(), // Simple ID generation
      doctorName: doctor.name,
      specialty: doctor.specialty,
      date: selectedDate,
      time: selectedTime,
      location: doctor.hospital || doctor.location,
      type: 'in-person' as const,
      status: 'confirmed' as const,
      patientName,
      phone,
      symptoms
    };

    // Save to localStorage
    const existingAppointments = localStorage.getItem('bookedAppointments');
    let appointments = [];
    
    if (existingAppointments) {
      try {
        appointments = JSON.parse(existingAppointments);
      } catch (error) {
        console.error('Error parsing existing appointments:', error);
        appointments = [];
      }
    }

    appointments.push(appointment);
    localStorage.setItem('bookedAppointments', JSON.stringify(appointments));

    toast({
      title: currentText.appointmentBooked,
      description: `${currentText.bookingConfirmed} - ${selectedDate} ${selectedTime}`
    });
    
    onClose();
  };

  return (
    <Card className="w-full max-w-md mx-auto shadow-xl border-0">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-indigo-50 border-b border-blue-100">
        <CardTitle className="text-lg flex items-center gap-2 text-blue-800">
          <Calendar className="h-5 w-5" />
          {currentText.title}
        </CardTitle>
        
        {/* Enhanced Doctor Info */}
        <div className="bg-white rounded-lg p-4 mt-3 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-xl">
              <Stethoscope className="h-5 w-5 text-white" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-800">{doctor.name}</p>
              <p className="text-sm text-blue-600">{doctor.specialty}</p>
              <div className="flex items-center gap-1 mt-1">
                <MapPin className="h-3 w-3 text-gray-500" />
                <span className="text-xs text-gray-600">{doctor.location}</span>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-500" />
                <span className="text-sm font-medium">{doctor.rating || "4.8"}</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3 mt-3">
            <div className="text-center bg-green-50 rounded-lg p-2">
              <p className="text-xs text-green-600 font-medium">{currentText.consultationFee}</p>
              <p className="text-sm font-semibold text-green-700">₹{doctor.fee || "200"}</p>
            </div>
            <div className="text-center bg-blue-50 rounded-lg p-2">
              <p className="text-xs text-blue-600 font-medium">{currentText.estimatedTime}</p>
              <p className="text-sm font-semibold text-blue-700">30 min</p>
            </div>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-5 p-6">
        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">{currentText.selectDate}</label>
          <Input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            min={new Date().toISOString().split('T')[0]}
            className="border-2 border-gray-200 focus:border-blue-400 rounded-lg"
          />
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-3 block">{currentText.selectTime}</label>
          <div className="grid grid-cols-3 gap-2">
            {availableTimes.map((time) => (
              <Button
                key={time}
                variant={selectedTime === time ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTime(time)}
                className={`transition-all duration-200 ${
                  selectedTime === time 
                    ? "bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg scale-105" 
                    : "border-2 border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                }`}
              >
                <Clock className="h-3 w-3 mr-1" />
                {time}
              </Button>
            ))}
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">{currentText.patientName}</label>
          <div className="relative">
            <User className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
            <Input
              value={patientName}
              onChange={(e) => setPatientName(e.target.value)}
              placeholder={language === "en" ? "Enter patient name" : "ರೋಗಿಯ ಹೆಸರು ನಮೂದಿಸಿ"}
              className="pl-10 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">{currentText.phoneNumber}</label>
          <div className="relative">
            <Phone className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
            <Input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+91 9876543210"
              type="tel"
              className="pl-10 border-2 border-gray-200 focus:border-blue-400 rounded-lg"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-semibold text-gray-700 mb-2 block">{currentText.symptoms}</label>
          <Textarea
            value={symptoms}
            onChange={(e) => setSymptoms(e.target.value)}
            placeholder={language === "en" ? "Describe symptoms or reason for visit" : "ಲಕ್ಷಣಗಳು ಅಥವಾ ಭೇಟಿಯ ಕಾರಣವನ್ನು ವಿವರಿಸಿ"}
            rows={3}
            className="border-2 border-gray-200 focus:border-blue-400 rounded-lg resize-none"
          />
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            onClick={onClose}
            variant="outline"
            className="flex-1 border-2 border-gray-300 hover:bg-gray-50"
          >
            {currentText.cancel}
          </Button>
          <Button
            onClick={handleBooking}
            className="flex-1 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 shadow-lg"
          >
            <Calendar className="h-4 w-4 mr-2" />
            {currentText.bookAppointment}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentBooking;
