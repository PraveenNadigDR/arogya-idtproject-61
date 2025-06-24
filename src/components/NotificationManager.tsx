
import { useEffect } from 'react';
import { useNotifications } from '@/hooks/useNotifications';
import { Button } from '@/components/ui/button';
import { Bell, BellRing } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface NotificationManagerProps {
  language: string;
}

const NotificationManager = ({ language }: NotificationManagerProps) => {
  const { requestNotificationPermission } = useNotifications(language);
  const { toast } = useToast();

  const text = {
    en: {
      enableNotifications: "Enable Notifications",
      notificationsEnabled: "Notifications Enabled",
      enableTooltip: "Get reminders for medicines and appointments",
      notificationPermission: "Notification Permission",
      permissionGranted: "You'll receive notifications for medicines and appointments",
      permissionDenied: "Please enable notifications in your browser settings"
    },
    kn: {
      enableNotifications: "ಅಧಿಸೂಚನೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ",
      notificationsEnabled: "ಅಧಿಸೂಚನೆಗಳು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆ",
      enableTooltip: "ಔಷಧಗಳು ಮತ್ತು ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳಿಗೆ ಜ್ಞಾಪನೆಗಳನ್ನು ಪಡೆಯಿರಿ",
      notificationPermission: "ಅಧಿಸೂಚನೆ ಅನುಮತಿ",
      permissionGranted: "ನೀವು ಔಷಧಗಳು ಮತ್ತು ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳಿಗೆ ಅಧಿಸೂಚನೆಗಳನ್ನು ಸ್ವೀಕರಿಸುತ್ತೀರಿ",
      permissionDenied: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ಬ್ರೌಸರ್ ಸೆಟ್ಟಿಂಗ್‌ಗಳಲ್ಲಿ ಅಧಿಸೂಚನೆಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಿ"
    }
  };

  const currentText = text[language as keyof typeof text] || text.en;

  const handleEnableNotifications = async () => {
    await requestNotificationPermission();
    
    if (Notification.permission === 'granted') {
      toast({
        title: currentText.notificationPermission,
        description: currentText.permissionGranted
      });
    } else {
      toast({
        title: currentText.notificationPermission,
        description: currentText.permissionDenied,
        variant: "destructive"
      });
    }
  };

  const isNotificationEnabled = () => {
    return 'Notification' in window && Notification.permission === 'granted';
  };

  return (
    <Button
      onClick={handleEnableNotifications}
      variant={isNotificationEnabled() ? "default" : "outline"}
      size="sm"
      className="flex items-center gap-2"
      title={currentText.enableTooltip}
    >
      {isNotificationEnabled() ? (
        <>
          <BellRing className="h-4 w-4" />
          {currentText.notificationsEnabled}
        </>
      ) : (
        <>
          <Bell className="h-4 w-4" />
          {currentText.enableNotifications}
        </>
      )}
    </Button>
  );
};

export default NotificationManager;
