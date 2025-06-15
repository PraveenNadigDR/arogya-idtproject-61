
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, MapPin, Phone, Star, TrendingUp } from "lucide-react";
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
  rating?: number;
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
      phone: "+91 9876543210",
      rating: 4.8
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
      phone: "+91 9876543210",
      rating: 4.9
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
      duration: "Duration",
      rating: "Rating"
    },
    kn: {
      title: "ಬುಕ್ ಮಾಡಿದ ಅಪಾಯಿಂಟ್ಮೆಂಟ್‌ಗಳು",
      noAppointments: "ಯಾವುದೇ ಅಪಾಯಿಂಟ್ಮೆಂಟ್ ಬುಕ್ ಆಗಿಲ್ಲ",
      upcoming: "ಮುಂಬರುವ",
      completed: "ಪೂರ್ಣಗೊಂಡ",
      cancelled: "ರದ್ದುಮಾಡಲಾಗಿದೆ",
      consultationFee: "ಸಮಾಲೋಚನೆ ಶುಲ್ಕ",
      duration: "ಅವಧಿ",
      rating: "ರೇಟಿಂಗ್"
    }
  };

  const currentText = text[language];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'upcoming':
        return 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200 shadow-lg shadow-green-500/10';
      case 'completed':
        return 'bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200 shadow-lg shadow-blue-500/10';
      case 'cancelled':
        return 'bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200 shadow-lg shadow-red-500/10';
      default:
        return 'bg-gradient-to-r from-gray-100 to-slate-100 text-gray-800 border-gray-200 shadow-lg shadow-gray-500/10';
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
    <Card className="bg-gradient-to-br from-purple-50/90 via-indigo-50/90 to-blue-50/90 border-0 shadow-2xl ring-1 ring-purple-200/40 hover:shadow-3xl hover:ring-purple-200/60 transition-all duration-700 backdrop-blur-sm group hover:scale-[1.01]">
      <CardHeader className="pb-6 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-110 transition-transform duration-700"></div>
        
        <CardTitle className="text-2xl text-purple-800 flex items-center gap-4 relative z-10">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-xl shadow-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/40 transition-all duration-500 group-hover:scale-110">
              <Calendar className="h-6 w-6 text-white drop-shadow-sm" />
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full animate-pulse shadow-lg shadow-yellow-400/50"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold tracking-tight">{currentText.title}</span>
            <span className="text-sm font-normal text-purple-600 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" />
              {appointments.length} {language === "en" ? "appointments" : "ಅಪಾಯಿಂಟ್ಮೆಂಟ್ಗಳು"}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-6">
        {appointments.length === 0 ? (
          <div className="text-center py-12 text-purple-600">
            <Calendar className="h-16 w-16 mx-auto mb-4 text-purple-400" />
            <p className="text-xl font-semibold">{currentText.noAppointments}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {appointments.map((appointment, index) => (
              <div
                key={appointment.id}
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-purple-100/50 hover:shadow-2xl hover:border-purple-200/60 transition-all duration-500 hover:scale-[1.02] group/card relative overflow-hidden animate-fade-in-up"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Card background decoration */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-xl transform translate-x-4 -translate-y-4 group-hover/card:scale-125 transition-transform duration-700"></div>
                
                {/* Header with Doctor Info and Status */}
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover/card:shadow-xl group-hover/card:shadow-purple-500/30 transition-all duration-500 group-hover/card:scale-110">
                        <User className="h-7 w-7 text-white drop-shadow-sm" />
                      </div>
                      {appointment.rating && (
                        <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full p-1 shadow-lg shadow-yellow-400/30">
                          <Star className="h-3 w-3 text-white fill-current" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 text-xl tracking-tight">{appointment.doctorName}</h3>
                      <p className="text-purple-600 text-sm font-semibold">{appointment.specialty}</p>
                      {appointment.rating && (
                        <div className="flex items-center gap-1 mt-1">
                          <span className="text-xs text-yellow-600 font-medium">{currentText.rating}: {appointment.rating}</span>
                          <div className="flex">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-3 w-3 ${i < Math.floor(appointment.rating!) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(appointment.status)} font-semibold px-4 py-2 text-sm rounded-xl border-2 hover:scale-105 transition-transform duration-300`}>
                    {currentText[appointment.status]}
                  </Badge>
                </div>

                {/* Appointment Details Grid with enhanced styling */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Date & Time */}
                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-4 border border-purple-100/50 hover:border-purple-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                    <div className="flex items-center gap-3 text-purple-700 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/20">
                        <Calendar className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-semibold text-sm">Date & Time</span>
                    </div>
                    <p className="text-gray-800 font-bold text-lg">{formatDate(appointment.date)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Clock className="h-4 w-4 text-purple-600" />
                      <span className="text-purple-600 font-medium">{appointment.time}</span>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-4 border border-blue-100/50 hover:border-blue-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                    <div className="flex items-center gap-3 text-blue-700 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                        <MapPin className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-semibold text-sm">Location</span>
                    </div>
                    <p className="text-gray-800 text-sm leading-relaxed font-medium">{appointment.location}</p>
                  </div>

                  {/* Patient Info */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-4 border border-green-100/50 hover:border-green-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                    <div className="flex items-center gap-3 text-green-700 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20">
                        <User className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-semibold text-sm">Patient</span>
                    </div>
                    <p className="text-gray-800 font-bold">{appointment.patientName}</p>
                  </div>

                  {/* Contact */}
                  <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-4 border border-orange-100/50 hover:border-orange-200/60 transition-all duration-300 hover:scale-[1.02] group/detail">
                    <div className="flex items-center gap-3 text-orange-700 mb-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20">
                        <Phone className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-semibold text-sm">Contact</span>
                    </div>
                    <p className="text-gray-800 font-mono text-sm font-medium">{appointment.phone}</p>
                  </div>
                </div>

                {/* Enhanced Additional Info */}
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-purple-200/50">
                  <div className="flex items-center gap-6 text-sm">
                    <span className="bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-700 px-4 py-2 rounded-xl font-semibold border border-purple-200/50 shadow-lg shadow-purple-500/10 hover:scale-105 transition-transform duration-300">
                      {currentText.consultationFee}: ₹200
                    </span>
                    <span className="bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-700 px-4 py-2 rounded-xl font-semibold border border-indigo-200/50 shadow-lg shadow-indigo-500/10 hover:scale-105 transition-transform duration-300">
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
