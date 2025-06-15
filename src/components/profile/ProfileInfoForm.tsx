
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Save } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProfileInfoFormProps {
  language: string;
  profile: any;
  setProfile: (profile: any) => void;
  onSave: () => void;
  onSkip: () => void;
  text: any;
}

const ProfileInfoForm = ({ 
  language, 
  profile, 
  setProfile, 
  onSave, 
  onSkip, 
  text 
}: ProfileInfoFormProps) => {
  return (
    <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
      <CardHeader>
        <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
          <User className="h-5 w-5" />
          {text.setupProfile}
        </CardTitle>
        <p className="text-sm text-blue-600">
          {text.setupMessage}
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <label className="text-sm font-medium block mb-1">{text.ageLabel}</label>
          <Input
            type="number"
            value={profile.age || ''}
            onChange={(e) => setProfile({...profile, age: parseInt(e.target.value) || 0})}
            placeholder={language === "en" ? "Enter your age" : "ನಿಮ್ಮ ವಯಸ್ಸನ್ನು ನಮೂದಿಸಿ"}
          />
        </div>
        <div>
          <label className="text-sm font-medium block mb-1">{text.phoneLabel}</label>
          <Input
            type="tel"
            value={profile.phone}
            onChange={(e) => setProfile({...profile, phone: e.target.value})}
            placeholder={language === "en" ? "Enter your phone number" : "ನಿಮ್ಮ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ"}
          />
        </div>
        <div className="flex gap-2">
          <Button
            onClick={onSave}
            className="flex-1 bg-green-600 hover:bg-green-700"
            disabled={!profile.age || !profile.phone}
          >
            <Save className="h-4 w-4 mr-1" />
            {text.saveInfo}
          </Button>
          <Button
            onClick={onSkip}
            variant="outline"
            className="flex-1"
          >
            {text.skipSetup}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileInfoForm;
