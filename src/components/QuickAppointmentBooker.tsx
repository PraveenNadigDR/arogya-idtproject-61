
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, MapPin, User, Heart, Stethoscope } from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";
import { appointmentService } from "@/services/appointmentService";
import { useToast } from "@/hooks/use-toast";

interface QuickAppointmentBookerProps {
  language: string;
  onAppointmentBooked?: () => void;
}

const QuickAppointmentBooker = ({ language, onAppointmentBooked }: QuickAppointmentBookerProps) => {
  const { user } = useAuth();
  const { toast } = useToast();
  const [isBooking, setIsBooking] = useState(false);
  const [formData, setFormData] = useState({
    doctorName: "Dr. Priya Sharma",
    specialty: "General Medicine",
    date: "",
    time: "",
    location: "Arogya Medical Center, Bangalore",
    patientName: "",
    phone: "",
    consultationFee: 500,
    duration: "30 min"
  });

  const text = {
    en: {
      title: "Book Quick Appointment",
      doctorName: "Doctor Name",
      specialty: "Specialty",
      date: "Date",
      time: "Time",
      location: "Location",
      patientName: "Patient Name",
      phone: "Phone Number",
      consultationFee: "Consultation Fee",
      duration: "Duration",
      bookNow: "Book Appointment",
      booking: "Booking...",
      success: "Appointment Booked!",
      successMessage: "Your appointment has been successfully booked",
      fillAllFields: "Please fill all required fields"
    },
    kn: {
      title: "ತ್ವರಿತ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      doctorName: "ವೈದ್ಯರ ಹೆಸರು",
      specialty: "ವಿಶೇಷತೆ",
      date: "ದಿನಾಂಕ",
      time: "ಸಮಯ",
      location: "ಸ್ಥಳ",
      patientName: "ರೋಗಿಯ ಹೆಸರು",
      phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
      consultationFee: "ಸಮಾಲೋಚನೆ ಶುಲ್ಕ",
      duration: "ಅವಧಿ",
      bookNow: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      booking: "ಬುಕಿಂಗ್...",
      success: "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಆಗಿದೆ!",
      successMessage: "ನಿಮ್ಮ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಯಶಸ್ವಿಯಾಗಿ ಬುಕ್ ಆಗಿದೆ",
      fillAllFields: "ದಯವಿಟ್ಟು ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ"
    }
  };

  const currentText = text[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !formData.date || !formData.time || !formData.patientName || !formData.phone) {
      toast({
        title: "Error",
        description: currentText.fillAllFields,
        variant: "destructive"
      });
      return;
    }

    setIsBooking(true);

    try {
      appointmentService.bookAppointment(user.id, {
        doctorName: formData.doctorName,
        specialty: formData.specialty,
        date: formData.date,
        time: formData.time,
        location: formData.location,
        patientName: formData.patientName,
        phone: formData.phone,
        consultationFee: formData.consultationFee,
        duration: formData.duration
      });

      toast({
        title: currentText.success,
        description: currentText.successMessage
      });

      // Reset form
      setFormData(prev => ({
        ...prev,
        date: "",
        time: "",
        patientName: "",
        phone: ""
      }));

      if (onAppointmentBooked) {
        onAppointmentBooked();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to book appointment",
        variant: "destructive"
      });
    } finally {
      setIsBooking(false);
    }
  };

  return (
    <Card className="nature-glass border-0 nature-shadow-glow nature-hover-lift organic-border-alt leaf-texture">
      <CardHeader className="pb-5">
        <CardTitle className="text-2xl text-green-800 dark:text-green-200 flex items-center gap-3">
          <div className="w-11 h-11 nature-gradient-primary organic-border flex items-center justify-center nature-shadow">
            <Calendar className="h-5 w-5 text-white drop-shadow-sm gentle-sway" />
          </div>
          {currentText.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="doctorName" className="text-green-700 dark:text-green-300 font-semibold flex items-center gap-2">
                <Stethoscope className="h-3 w-3" />
                {currentText.doctorName}
              </Label>
              <Input
                id="doctorName"
                value={formData.doctorName}
                onChange={(e) => setFormData(prev => ({ ...prev, doctorName: e.target.value }))}
                className="organic-border border-green-200 dark:border-green-700 focus:border-green-400 dark:focus:border-green-500 nature-glass"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty" className="text-green-700 dark:text-green-300 font-semibold flex items-center gap-2">
                <Heart className="h-3 w-3" />
                {currentText.specialty}
              </Label>
              <Input
                id="specialty"
                value={formData.specialty}
                onChange={(e) => setFormData(prev => ({ ...prev, specialty: e.target.value }))}
                className="organic-border border-green-200 dark:border-green-700 focus:border-green-400 dark:focus:border-green-500 nature-glass"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="date" className="text-green-700 dark:text-green-300 font-semibold flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                {currentText.date}
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                className="organic-border border-green-200 dark:border-green-700 focus:border-green-400 dark:focus:border-green-500 nature-glass"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="text-green-700 dark:text-green-300 font-semibold flex items-center gap-2">
                <Clock className="h-3 w-3" />
                {currentText.time}
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData(prev => ({ ...prev, time: e.target.value }))}
                className="organic-border border-green-200 dark:border-green-700 focus:border-green-400 dark:focus:border-green-500 nature-glass"
                required
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label htmlFor="location" className="text-green-700 dark:text-green-300 font-semibold flex items-center gap-2">
                <MapPin className="h-3 w-3" />
                {currentText.location}
              </Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                className="organic-border border-green-200 dark:border-green-700 focus:border-green-400 dark:focus:border-green-500 nature-glass"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="patientName" className="text-green-700 dark:text-green-300 font-semibold flex items-center gap-2">
                <User className="h-3 w-3" />
                {currentText.patientName}
              </Label>
              <Input
                id="patientName"
                value={formData.patientName}
                onChange={(e) => setFormData(prev => ({ ...prev, patientName: e.target.value }))}
                className="organic-border border-green-200 dark:border-green-700 focus:border-green-400 dark:focus:border-green-500 nature-glass"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-green-700 dark:text-green-300 font-semibold">{currentText.phone}</Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="organic-border border-green-200 dark:border-green-700 focus:border-green-400 dark:focus:border-green-500 nature-glass"
                required
              />
            </div>
          </div>

          <Button
            type="submit"
            disabled={isBooking}
            className="w-full nature-gradient-primary hover:nature-gradient-forest text-white font-semibold py-3 organic-border-alt nature-shadow hover:shadow-xl transition-all duration-500 hover:scale-105"
          >
            {isBooking ? currentText.booking : currentText.bookNow}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuickAppointmentBooker;
