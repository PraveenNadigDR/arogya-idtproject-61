
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Phone } from "lucide-react";

interface EmergencyContactCardProps {
  language: string;
  profile: any;
  setProfile: (profile: any) => void;
  isEditing: boolean;
  text: any;
}

const EmergencyContactCard = ({ language, profile, setProfile, isEditing, text }: EmergencyContactCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md flex items-center gap-2">
          <Phone className="h-4 w-4" />
          {text.emergencyContact}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div>
          <label className="text-sm font-medium">{text.phone}</label>
          {isEditing ? (
            <Input
              value={profile.emergencyContact}
              onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})}
              placeholder={language === "en" ? "Enter emergency contact number" : "ತುರ್ತು ಸಂಪರ್ಕ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ"}
            />
          ) : (
            <p className="text-sm text-gray-700 mt-1">{profile.emergencyContact || (language === "en" ? "No emergency contact set" : "ತುರ್ತು ಸಂಪರ್ಕ ಸೆಟ್ ಆಗಿಲ್ಲ")}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EmergencyContactCard;
