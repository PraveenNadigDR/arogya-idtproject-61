
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Video } from "lucide-react";

interface VideoCallDialogProps {
  showVideoCall: boolean;
  onOpenChange: (open: boolean) => void;
  language: string;
}

const VideoCallDialog = ({ showVideoCall, onOpenChange, language }: VideoCallDialogProps) => {
  return (
    <Dialog open={showVideoCall} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>
            {language === "en" ? "Video Call with Doctor" : "ವೈದ್ಯರೊಂದಿಗೆ ವೀಡಿಯೊ ಕಾಲ್"}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="bg-gray-900 rounded-lg h-48 flex items-center justify-center">
            <div className="text-center text-white">
              <Video className="h-12 w-12 mx-auto mb-2" />
              <p className="text-sm">
                {language === "en" ? "Call in Progress..." : "ಕಾಲ್ ಪ್ರಗತಿಯಲ್ಲಿದೆ..."}
              </p>
              <p className="text-xs opacity-75 mt-1">
                {language === "en" ? "Dr. Ramesh - Hassan PHC" : "ಡಾ. ರಮೇಶ್ - ಹಾಸನ್ PHC"}
              </p>
            </div>
          </div>
          <div className="flex gap-2 justify-center">
            <Button variant="destructive" onClick={() => onOpenChange(false)}>
              {language === "en" ? "End Call" : "ಕಾಲ್ ಕೊನೆಗೊಳಿಸಿ"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VideoCallDialog;
