
interface Appointment {
  id: string;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  location: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  patientName: string;
  phone: string;
  rating?: number;
  consultationFee: number;
  duration: string;
  bookedAt: string;
}

class AppointmentService {
  private storageKey = 'user_appointments';

  // Get all appointments for current user
  getAppointments(userId?: string): Appointment[] {
    try {
      const stored = localStorage.getItem(`${this.storageKey}_${userId}`);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      console.error('Error loading appointments:', error);
      return [];
    }
  }

  // Book a new appointment
  bookAppointment(userId: string, appointmentData: Omit<Appointment, 'id' | 'bookedAt' | 'status'>): Appointment {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: Date.now().toString(),
      status: 'upcoming',
      bookedAt: new Date().toISOString()
    };

    const appointments = this.getAppointments(userId);
    appointments.push(newAppointment);
    
    localStorage.setItem(`${this.storageKey}_${userId}`, JSON.stringify(appointments));
    return newAppointment;
  }

  // Cancel an appointment
  cancelAppointment(userId: string, appointmentId: string): boolean {
    const appointments = this.getAppointments(userId);
    const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
    
    if (appointmentIndex !== -1) {
      appointments[appointmentIndex].status = 'cancelled';
      localStorage.setItem(`${this.storageKey}_${userId}`, JSON.stringify(appointments));
      return true;
    }
    return false;
  }

  // Complete an appointment
  completeAppointment(userId: string, appointmentId: string, rating?: number): boolean {
    const appointments = this.getAppointments(userId);
    const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
    
    if (appointmentIndex !== -1) {
      appointments[appointmentIndex].status = 'completed';
      if (rating) {
        appointments[appointmentIndex].rating = rating;
      }
      localStorage.setItem(`${this.storageKey}_${userId}`, JSON.stringify(appointments));
      return true;
    }
    return false;
  }
}

export const appointmentService = new AppointmentService();
export type { Appointment };
