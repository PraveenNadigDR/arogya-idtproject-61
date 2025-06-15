
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Edit, LogOut } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/contexts/AuthContext";

interface ProfileHeaderProps {
  language: string;
  isEditing: boolean;
  onEditToggle: () => void;
  text: any;
}

const ProfileHeader = ({ language, isEditing, onEditToggle, text }: ProfileHeaderProps) => {
  const { signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: language === "en" ? "Signed out successfully" : "ಯಶಸ್ವಿಯಾಗಿ ಸೈನ್ ಔಟ್ ಆಗಿದೆ",
        description: language === "en" ? "You have been logged out of your account." : "ನಿಮ್ಮ ಖಾತೆಯಿಂದ ಲಾಗ್ ಔಟ್ ಆಗಿದ್ದೀರಿ.",
      });
    } catch (error) {
      toast({
        title: language === "en" ? "Error signing out" : "ಸೈನ್ ಔಟ್ ಮಾಡುವಲ್ಲಿ ದೋಷ",
        description: language === "en" ? "Please try again." : "ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-lg text-blue-800 flex items-center gap-2">
              <User className="h-5 w-5" />
              {text.title}
            </CardTitle>
            <p className="text-sm text-blue-600">
              {language === "en" ? "Manage your health profile" : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಿಸಿ"}
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onEditToggle}
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <Edit className="h-4 w-4 mr-1" />
              {text.edit}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="border-red-300 text-red-700 hover:bg-red-50"
            >
              <LogOut className="h-4 w-4 mr-1" />
              {text.signOut}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileHeader;
