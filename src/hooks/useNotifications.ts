
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'medicine' | 'appointment';
  scheduledTime: Date;
}

export const useNotifications = (language: string) => {
  const { toast } = useToast();

  const text = {
    en: {
      medicineReminder: "💊 Medicine Reminder",
      timeToTake: "Time to take your medicine:",
      appointmentReminder: "📅 Appointment Reminder",
      appointmentSoon: "Your appointment is coming up:",
      in30Minutes: "in 30 minutes",
      now: "now"
    },
    kn: {
      medicineReminder: "💊 ಔಷಧ ಜ್ಞಾಪನೆ",
      timeToTake: "ನಿಮ್ಮ ಔಷಧ ತೆಗೆದುಕೊಳ್ಳುವ ಸಮಯ:",
      appointmentReminder: "📅 ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಜ್ಞಾಪನೆ",
      appointmentSoon: "ನಿಮ್ಮ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಸಮೀಪಿಸುತ್ತಿದೆ:",
      in30Minutes: "30 ನಿಮಿಷಗಳಲ್ಲಿ",
      now: "ಈಗ"
    }
  };

  const currentText = text[language as keyof typeof text] || text.en;

  const requestNotificationPermission = async () => {
    if ('Notification' in window) {
      if (Notification.permission === 'default') {
        await Notification.requestPermission();
      }
    }
  };

  const showBrowserNotification = (title: string, message: string) => {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body: message,
        icon: '/favicon.ico',
        badge: '/favicon.ico'
      });
    }
  };

  const checkMedicineReminders = () => {
    const medicines = JSON.parse(localStorage.getItem('medicines') || '[]');
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + now.getMinutes().toString().padStart(2, '0');

    medicines.forEach((medicine: any) => {
      if (medicine.time === currentTime && !medicine.taken) {
        const title = currentText.medicineReminder;
        const message = `${currentText.timeToTake} ${medicine.name} (${medicine.dosage})`;
        
        toast({
          title,
          description: message,
          duration: 10000
        });
        
        showBrowserNotification(title, message);
      }
    });
  };

  const checkAppointmentReminders = () => {
    const appointments = JSON.parse(localStorage.getItem('bookedAppointments') || '[]');
    const now = new Date();

    appointments.forEach((appointment: any) => {
      const appointmentDateTime = new Date(`${appointment.date} ${appointment.time}`);
      const timeDiff = appointmentDateTime.getTime() - now.getTime();
      const minutesDiff = Math.floor(timeDiff / (1000 * 60));

      // Notify 30 minutes before and at the time of appointment
      if (minutesDiff === 30 || minutesDiff === 0) {
        const title = currentText.appointmentReminder;
        const timeText = minutesDiff === 30 ? currentText.in30Minutes : currentText.now;
        const message = `${currentText.appointmentSoon} Dr. ${appointment.doctorName} ${timeText}`;
        
        toast({
          title,
          description: message,
          duration: 15000
        });
        
        showBrowserNotification(title, message);
      }
    });
  };

  useEffect(() => {
    requestNotificationPermission();

    // Check for notifications every minute
    const interval = setInterval(() => {
      checkMedicineReminders();
      checkAppointmentReminders();
    }, 60000); // Check every minute

    // Initial check
    checkMedicineReminders();
    checkAppointmentReminders();

    return () => clearInterval(interval);
  }, [language]);

  return {
    requestNotificationPermission,
    checkMedicineReminders,
    checkAppointmentReminders
  };
};
