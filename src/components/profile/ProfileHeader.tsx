
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User, Edit, LogOut, Crown } from "lucide-react";
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
    <Card className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-0 shadow-xl ring-1 ring-blue-200/30 hover:shadow-2xl transition-all duration-300">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <User className="h-6 w-6 text-white" />
              </div>
              <Crown className="h-4 w-4 text-yellow-500 absolute -top-1 -right-1" />
            </div>
            <div>
              <CardTitle className="text-xl text-blue-800 flex items-center gap-2">
                {text.title}
              </CardTitle>
              <p className="text-sm text-blue-600 mt-1">
                {language === "en" ? "Manage your health profile" : "ನಿಮ್ಮ ಆರೋಗ್ಯ ಪ್ರೊಫೈಲ್ ನಿರ್ವಹಿಸಿ"}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={onEditToggle}
              className="border-blue-300 text-blue-700 hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <Edit className="h-4 w-4 mr-2" />
              {text.edit}
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={handleSignOut}
              className="border-red-300 text-red-700 hover:bg-red-50 transition-all duration-300 hover:scale-105 hover:shadow-md"
            >
              <LogOut className="h-4 w-4 mr-2" />
              {text.signOut}
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};

export default ProfileHeader;
