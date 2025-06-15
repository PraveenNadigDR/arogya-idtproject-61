
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, MapPin, Navigation } from "lucide-react";

interface PersonalInfoCardProps {
  language: string;
  profile: any;
  setProfile: (profile: any) => void;
  isEditing: boolean;
  text: any;
  onGetLocation: () => void;
  isGettingLocation: boolean;
}

const PersonalInfoCard = ({ 
  language, 
  profile, 
  setProfile, 
  isEditing, 
  text, 
  onGetLocation, 
  isGettingLocation 
}: PersonalInfoCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-md flex items-center gap-2">
          <User className="h-4 w-4" />
          {text.personalInfo}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="text-sm font-medium">{text.name}</label>
            {isEditing ? (
              <Input
                value={profile.name}
                onChange={(e) => setProfile({...profile, name: e.target.value})}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">{profile.name}</p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">{text.age}</label>
            {isEditing ? (
              <Input
                type="number"
                value={profile.age}
                onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">
                {profile.age ? `${profile.age} ${language === "en" ? "years" : "ವರ್ಷಗಳು"}` : (language === "en" ? "Not set" : "ಸೆಟ್ ಆಗಿಲ್ಲ")}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="text-sm font-medium">{text.phone}</label>
          {isEditing ? (
            <Input
              value={profile.phone}
              onChange={(e) => setProfile({...profile, phone: e.target.value})}
            />
          ) : (
            <p className="text-sm text-gray-700 mt-1">{profile.phone || (language === "en" ? "Not set" : "ಸೆಟ್ ಆಗಿಲ್ಲ")}</p>
          )}
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm font-medium">{text.location}</label>
            <Button
              size="sm"
              variant="outline"
              onClick={onGetLocation}
              disabled={isGettingLocation}
              className="text-xs"
            >
              <Navigation className="h-3 w-3 mr-1" />
              {isGettingLocation ? text.gettingLocation : text.updateLocation}
            </Button>
          </div>
          {isEditing ? (
            <Input
              value={profile.location}
              onChange={(e) => setProfile({...profile, location: e.target.value})}
              placeholder={language === "en" ? "Enter location or use GPS" : "ಸ್ಥಳವನ್ನು ನಮೂದಿಸಿ ಅಥವಾ GPS ಬಳಸಿ"}
            />
          ) : (
            <p className="text-sm text-gray-700 mt-1 flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              {profile.location || text.noLocation}
            </p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInfoCard;
