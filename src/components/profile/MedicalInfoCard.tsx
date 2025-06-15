
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Heart } from "lucide-react";

interface MedicalInfoCardProps {
  language: string;
  profile: any;
  setProfile: (profile: any) => void;
  isEditing: boolean;
  text: any;
}

const MedicalInfoCard = ({ language, profile, setProfile, isEditing, text }: MedicalInfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md flex items-center gap-2">
          <Heart className="h-4 w-4" />
          {text.medicalInfo}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div>
          <label className="text-sm font-medium">{text.bloodGroup}</label>
          {isEditing ? (
            <Input
              value={profile.bloodGroup}
              onChange={(e) => setProfile({...profile, bloodGroup: e.target.value})}
            />
          ) : (
            <Badge variant="secondary" className="bg-red-100 text-red-700 mt-1">
              {profile.bloodGroup}
            </Badge>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">{text.allergies}</label>
          {isEditing ? (
            <Input
              value={profile.allergies}
              onChange={(e) => setProfile({...profile, allergies: e.target.value})}
              placeholder={language === "en" ? "e.g., Penicillin, Peanuts" : "ಉದಾ., ಪೆನಿಸಿಲಿನ್, ಕಡಲೆಕಾಯಿ"}
            />
          ) : (
            <p className="text-sm text-gray-700 mt-1">{profile.allergies}</p>
          )}
        </div>

        <div>
          <label className="text-sm font-medium">{text.chronicConditions}</label>
          {isEditing ? (
            <Input
              value={profile.chronicConditions}
              onChange={(e) => setProfile({...profile, chronicConditions: e.target.value})}
              placeholder={language === "en" ? "e.g., Diabetes, Hypertension" : "ಉದಾ., ಮಧುಮೇಹ, ಅಧಿಕ ರಕ್ತದೊತ್ತಡ"}
            />
          ) : (
            <p className="text-sm text-gray-700 mt-1">{profile.chronicConditions}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalInfoCard;
