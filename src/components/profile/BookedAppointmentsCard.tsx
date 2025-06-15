
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, MapPin, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface BookedAppointmentsCardProps {
  language: string;
}

interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  patientName: string;
  phone: string;
}

const BookedAppointmentsCard = ({ language }: BookedAppointmentsCardProps) => {
  // Mock data - in a real app, this would come from the database
  const appointments: Appointment[] = [
    {
      id: "1",
      doctorName: "Dr. Rajesh Kumar",
      specialty: "Cardiologist",
      date: "2025-06-20",
      time: "10:00",
      location: "Apollo Hospital, Bangalore",
      status: "upcoming",
      patientName: "John Doe",
      phone: "+91 9876543210"
    },
    {
      id: "2",
      doctorName: "Dr. Priya Sharma",
      specialty: "Dermatologist", 
      date: "2025-06-15",
      time: "14:30",
      location: "Manipal Hospital, Hassan",
      status: "completed",
      patientName: "John Doe",
      phone: "+91 9876543210"
    }
  ];

  const text = {
    en: {
      title: "Booked Appointments",
      noAppointments: "No appointments booked",
      upcoming: "Upcoming",
      completed: "Completed",
      cancelled: "Cancelled",
      consultationFee: "Consultation Fee",
      duration: "Duration"
    },
    kn: {
      title: "ಬುಕ್ ಮಾಡಿದ ಅಪಾಯಿಂಟ್ಮೆಂಟ್‌ಗಳು",
      noAppointments: "ಯಾವುದೇ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಆಗಿಲ್ಲ",
      upcoming: "ಮುಂಬರುವ",
      completed: "ಪೂರ್ಣಗೊಂಡ",
      cancelled: "ರದ್ದುಮಾಡಲಾಗಿದೆ",
      consultationFee: "ಸಮಾಲೋಚನೆ ಶುಲ್ಕ",
      duration: "ಅವಧಿ"
    }
  };

  const currentText = text[language];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'completed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'cancelled':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'kn' ? 'kn-IN' : 'en-IN', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50 border-0 shadow-xl ring-1 ring-purple-200/30 hover:shadow-2xl transition-all duration-300">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl text-purple-800 flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
            <Calendar className="h-5 w-5 text-white" />
          </div>
          {currentText.title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {appointments.length === 0 ? (
          <div className="text-center py-8 text-purple-600">
            <Calendar className="h-12 w-12 mx-auto mb-3 text-purple-400" />
            <p className="text-lg font-medium">{currentText.noAppointments}</p>
          </div>
        ) : (
          <div className="space-y-4">
            {appointments.map((appointment) => (
              <div
                key={appointment.id}
                className="bg-white rounded-2xl p-5 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                {/* Header with Doctor Info and Status */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl flex items-center justify-center">
                      <User className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 text-lg">{appointment.doctorName}</h3>
                      <p className="text-purple-600 text-sm font-medium">{appointment.specialty}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(appointment.status)} font-medium px-3 py-1`}>
                    {currentText[appointment.status]}
                  </Badge>
                </div>

                {/* Appointment Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Date & Time */}
                  <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-purple-700 mb-2">
                      <Calendar className="h-4 w-4" />
                      <span className="font-medium text-sm">Date & Time</span>
                    </div>
                    <p className="text-gray-800 font-semibold">{formatDate(appointment.date)}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <Clock className="h-3 w-3 text-purple-600" />
                      <span className="text-purple-600 text-sm">{appointment.time}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-blue-700 mb-2">
                      <MapPin className="h-4 w-4" />
                      <span className="font-medium text-sm">Location</span>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed">{appointment.location}</p>
                  </div>

                  {/* Patient Info */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-green-700 mb-2">
                      <User className="h-4 w-4" />
                      <span className="font-medium text-sm">Patient</span>
                    </div>
                    <p className="text-gray-800 font-medium">{appointment.patientName}</p>
                  </div>

                  {/* Contact */}
                  <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-3">
                    <div className="flex items-center gap-2 text-orange-700 mb-2">
                      <Phone className="h-4 w-4" />
                      <span className="font-medium text-sm">Contact</span>
                    </div>
                    <p className="text-gray-800 font-mono text-sm">{appointment.phone}</p>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="flex items-center justify-between mt-4 pt-3 border-t border-purple-100">
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-lg font-medium">
                      {currentText.consultationFee}: ₹200
                    </span>
                    <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg font-medium">
                      {currentText.duration}: 30 min
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BookedAppointmentsCard;
