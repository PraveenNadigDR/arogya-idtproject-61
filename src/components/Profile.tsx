
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { User, Phone, MapPin, Calendar, Heart, Edit, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileProps {
  language: string;
}

const Profile = ({ language }: ProfileProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "Shreyas",
    age: 35,
    phone: "+91 9876543210",
    location: "Holenarasipura, Hassan",
    bloodGroup: "B+",
    emergencyContact: "+91 9876543211",
    allergies: "None",
    chronicConditions: "Diabetes"
  });
  const { toast } = useToast();

  const text = {
    en: {
      title: "My Profile",
      edit: "Edit Profile",
      save: "Save Changes",
      cancel: "Cancel",
      personalInfo: "Personal Information",
      medicalInfo: "Medical Information",
      emergencyContact: "Emergency Contact",
      name: "Name",
      age: "Age",
      phone: "Phone Number",
      location: "Location",
      bloodGroup: "Blood Group",
      allergies: "Allergies",
      chronicConditions: "Chronic Conditions",
      profileUpdated: "✅ Profile Updated!",
      changesSaved: "Your changes have been saved"
    },
    kn: {
      title: "ನನ್ನ ಪ್ರೊಫೈಲ್",
      edit: "ಪ್ರೊಫೈಲ್ ಎಡಿಟ್ ಮಾಡಿ",
      save: "ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಿ",
      cancel: "ರದ್ದುಮಾಡಿ",
      personalInfo: "ವೈಯಕ್ತಿಕ ಮಾಹಿತಿ",
      medicalInfo: "ವೈದ್ಯಕೀಯ ಮಾಹಿತಿ",
      emergencyContact: "ತುರ್ತು ಸಂಪರ್ಕ",
      name: "ಹೆಸರು",
      age: "ವಯಸ್ಸು",
      phone: "ಫೋನ್ ಸಂಖ್ಯೆ",
      location: "ಸ್ಥಳ",
      bloodGroup: "ರಕ್ತದ ಗುಂಪು",
      allergies: "ಅಲರ್ಜಿಗಳು",
      chronicConditions: "ದೀರ್ಘಕಾಲಿಕ ಸ್ಥಿತಿಗಳು",
      profileUpdated: "✅ ಪ್ರೊಫೈಲ್ ಅಪ್‌ಡೇಟ್ ಆಗಿದೆ!",
      changesSaved: "ನಿಮ್ಮ ಬದಲಾವಣೆಗಳನ್ನು ಉಳಿಸಲಾಗಿದೆ"
    }
  };

  const currentText = text[language];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: currentText.profileUpdated,
      description: currentText.changesSaved
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
                <User className="h-5 w-5" />
                {currentText.title}
              </CardTitle>
              <p className="text-sm text-blue-600">
                {language === "en" ? "Manage your health profile" : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಿಸಿ"}
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsEditing(!isEditing)}
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Edit className="h-4 w-4 mr-1" />
              {currentText.edit}
            </Button>
          </div>
        </CardHeader>
      </Card>

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md flex items-center gap-2">
            <User className="h-4 w-4" />
            {currentText.personalInfo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium">{currentText.name}</label>
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
              <label className="text-sm font-medium">{currentText.age}</label>
              {isEditing ? (
                <Input
                  type="number"
                  value={profile.age}
                  onChange={(e) => setProfile({...profile, age: parseInt(e.target.value)})}
                />
              ) : (
                <p className="text-sm text-gray-700 mt-1">{profile.age} {language === "en" ? "years" : "ವರ್ಷಗಳು"}</p>
              )}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">{currentText.phone}</label>
            {isEditing ? (
              <Input
                value={profile.phone}
                onChange={(e) => setProfile({...profile, phone: e.target.value})}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">{profile.phone}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-medium">{currentText.location}</label>
            {isEditing ? (
              <Input
                value={profile.location}
                onChange={(e) => setProfile({...profile, location: e.target.value})}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1 flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                {profile.location}
              </p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Medical Information */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md flex items-center gap-2">
            <Heart className="h-4 w-4" />
            {currentText.medicalInfo}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div>
            <label className="text-sm font-medium">{currentText.bloodGroup}</label>
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
            <label className="text-sm font-medium">{currentText.allergies}</label>
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
            <label className="text-sm font-medium">{currentText.chronicConditions}</label>
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

      {/* Emergency Contact */}
      <Card>
        <CardHeader>
          <CardTitle className="text-md flex items-center gap-2">
            <Phone className="h-4 w-4" />
            {currentText.emergencyContact}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <label className="text-sm font-medium">{currentText.phone}</label>
            {isEditing ? (
              <Input
                value={profile.emergencyContact}
                onChange={(e) => setProfile({...profile, emergencyContact: e.target.value})}
              />
            ) : (
              <p className="text-sm text-gray-700 mt-1">{profile.emergencyContact}</p>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Save/Cancel Buttons */}
      {isEditing && (
        <div className="flex gap-2">
          <Button
            onClick={handleCancel}
            variant="outline"
            className="flex-1"
          >
            {currentText.cancel}
          </Button>
          <Button
            onClick={handleSave}
            className="flex-1 bg-green-600 hover:bg-green-700"
          >
            <Save className="h-4 w-4 mr-1" />
            {currentText.save}
          </Button>
        </div>
      )}

      {/* Health ID Card */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardContent className="p-4">
          <div className="text-center">
            <h4 className="font-medium text-green-800 mb-2">
              {language === "en" ? "🆔 Health ID Card" : "🆔 ಆರೋಗ್ಯ ಐಡಿ ಕಾರ್ಡ್"}
            </h4>
            <div className="bg-white p-3 rounded border-2 border-dashed border-green-300">
              <p className="text-lg font-bold">{profile.name}</p>
              <p className="text-sm text-gray-600">{profile.bloodGroup} • {profile.age} {language === "en" ? "years" : "ವರ್ಷಗಳು"}</p>
              <p className="text-xs text-gray-500 mt-1">{profile.location}</p>
            </div>
            <p className="text-xs text-green-600 mt-2">
              {language === "en" ? "Show this to medical professionals" : "ಇದನ್ನು ವೈದ್ಯಕೀಯ ವೃತ್ತಿಪರರಿಗೆ ತೋರಿಸಿ"}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Profile;
