
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Calendar } from "lucide-react";
import { Doctor } from "@/types/doctor";

interface DoctorCardProps {
  doctor: Doctor;
  texts: any;
  onBookAppointment: (doctor: Doctor) => void;
  onCall: (doctor: Doctor) => void;
}

const DoctorCard = ({ doctor, texts, onBookAppointment, onCall }: DoctorCardProps) => {
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
      case "available": return texts.available;
      case "busy": return texts.busy;
      case "offline": return texts.offline;
      default: return status;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
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
            <span>{doctor.location} • {doctor.distance} {texts.distance}</span>
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Star className="h-3 w-3 text-yellow-500 fill-current" />
              <span>{doctor.rating} ({doctor.reviews} {texts.reviews})</span>
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
            onClick={() => onBookAppointment(doctor)}
            disabled={doctor.status === "offline"}
          >
            <Calendar className="h-4 w-4 mr-1" />
            {texts.bookAppointment}
          </Button>
          <Button 
            size="sm" 
            variant="outline" 
            onClick={() => onCall(doctor)}
            className="border-green-300 text-green-700 hover:bg-green-50"
          >
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
